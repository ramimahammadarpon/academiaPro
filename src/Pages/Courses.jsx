import React, { useEffect, useState } from "react";
import Loading from "../Components/Loading";
import Card from "../Components/Card";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("dsc");

  console.log(sort);

  useEffect(() => {
    setLoading(true);
    document.title = "AcademiaPro | Courses";
    fetch(
      `https://course-management-system-server.vercel.app/courses?sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, [sort]);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-30 px-3">
          <h1 className="text-center font-semibold text-2xl text-primary mb-7">
            Courses
          </h1>
          <div className="max-w-7xl mx-auto">
            <select
            onChange={(e) => setSort(e.target.value)}
            className="select select-ghost max-w-7xl bg-transparent focus:bg-transparent mb-4"
          >
            <option value="dsc">latest to oldest</option>
            <option value="asc">oldest to latest</option>
          </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} course={course}></Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
