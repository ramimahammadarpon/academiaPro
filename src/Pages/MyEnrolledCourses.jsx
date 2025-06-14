import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Lottie from "lottie-react";
import ornament1 from "../assets/Lottie/ornament.json";
import { easeIn, motion } from "motion/react";
import TableRow from "../Components/TableRow";
import EnrollmentTable from "../Components/EnrollmentTable";
import Loading from "../Components/Loading";
import useApplicationApi from "../CustomHooks/useApplicationApi";

const MyEnrolledCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrollment, setEnrollment] = useState([]);
  const [loading, setLoading] = useState(true);
  const { applicationPromise } = useApplicationApi();
  console.log(enrollment);
  useEffect(() => {
    document.title = "AcademiaPro | My Enrolled Courses";
    if (user?.email && user?.accessToken) {
      applicationPromise(user?.email).then((data) => {
        setEnrollment(data);
        setLoading(false);
      });
    }
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
              My Enrolled Courses
            </h1>

            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {enrollment.map((enroll, index) => (
                    <EnrollmentTable
                      key={index}
                      enroll={enroll}
                      index={index}
                      enrollment={enrollment}
                      setEnrollment={setEnrollment}
                    ></EnrollmentTable>
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

export default MyEnrolledCourses;
