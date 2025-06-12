import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import LatestCourses from "../Components/LatestCourses";
import PopularCourses from "../Components/PopularCourses";
import Loading from "../Components/Loading";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [cards, setCards] = useState([]);
  useEffect(() => {
    document.title = "AcademiaPro | Home";
    fetch("http://localhost:3000/latestCourses")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setCourses(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20">
          <header>
            <Banner cards={cards}></Banner>
          </header>
          <main className="max-w-7xl mx-auto">
            <section>
              <LatestCourses courses={courses}></LatestCourses>
            </section>
            <section>
              <PopularCourses></PopularCourses>
            </section>
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;
