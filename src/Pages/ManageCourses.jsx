import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import ornament1 from "../assets/Lottie/ornament.json";
import { AuthContext } from "../Context/AuthContext";
import { easeIn, motion } from "motion/react";
import TableRow from "../Components/TableRow";
import Loading from "../Components/Loading";

const ManageCourses = () => {
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(courses);
  useEffect(() => {
    document.title = "AcademiaPro | Manage Courses";
    fetch(`https://course-management-system-server.vercel.app/courses?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, [user]);
  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen pt-32 py-20">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: easeIn }}
            className="shadow-2xl rounded-lg p-4 max-w-6xl mx-5 lg:mx-auto bg-base-100/20 backdrop-blur-md"
          >
            <h1 className="text-2xl text-center text-primary font-bold mb-10">
              Manage Courses
            </h1>

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Course Name</th>
                    <th>Description</th>
                    <th>Released Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, index) => (
                    <TableRow
                      key={index}
                      setCourses={setCourses}
                      courses={courses}
                      index={index}
                      course={course}
                    ></TableRow>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          <Lottie
            className="absolute top-5 left-5 -z-[1]"
            style={{ width: "200px" }}
            animationData={ornament1}
            loop={true}
          ></Lottie>
          <Lottie
            className="absolute bottom-5 right-5 -z-[1]"
            style={{ width: "200px" }}
            animationData={ornament1}
            loop={true}
          ></Lottie>
        </div>
      )}
    </div>
  );
};

export default ManageCourses;
