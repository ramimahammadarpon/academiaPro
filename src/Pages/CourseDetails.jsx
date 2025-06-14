import Lottie from "lottie-react";
import React, { useContext, useEffect, useState } from "react";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { FaHourglassEnd } from "react-icons/fa";
import ornament1 from "../assets/Lottie/ornament.json";
import { MdAlternateEmail, MdDateRange } from "react-icons/md";
import { data, useParams } from "react-router";
import { easeIn, motion } from "motion/react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import useApplicationApi from "../CustomHooks/useApplicationApi";

const CourseDetails = () => {
  const { user } = useContext(AuthContext);
  const {applicationPromise} = useApplicationApi();
  console.log(user);
  const { id } = useParams();
  console.log(id);
  const [course, setCourse] = useState();
  const [enrolled, setEnrolled] = useState([]);
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [seat, setSeat] = useState(0);
  const [enrollmentCount, setEnrollmentCount] = useState(0);
  const [dataByEmail, setDataByEmail] = useState();
  const [loading, setLoading] = useState(true);

  console.log(course);
  console.log(enrolled);
  console.log(alreadyEnrolled);
  useEffect(() => {
    fetch(`https://course-management-system-server.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setEnrollmentCount(data.enrollment);
        setSeat(data.usedSeats);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    document.title = "AcademiaPro | Course Details";
    if (user?.email && user?.accessToken) {
      applicationPromise(user.email).then((data) => {
          setEnrolled(data);
          const existed = data.find((enroll) => enroll?.course_id === id);
          setDataByEmail(existed);
          if (existed) {
            setAlreadyEnrolled(true);
          } else {
            setAlreadyEnrolled(false);
          }
        });
    }
  }, [user?.email, id]);

  const handleEnrollment = () => {
    const enrollment = {
      course_id: course._id,
      course_name: course.courseTitle,
      course_photoURL: course.photoURL,
      course_duration: course.duration,
      creator_email: course.email,
      user_email: user?.email,
    };
    console.log(enrollment);

    axios
      .post("https://course-management-system-server.vercel.app/enrollment", enrollment)
      .then((result) => {
        console.log(result.data);
        return applicationPromise(user?.email);
      })
      .then((data) => {
        setEnrolled(data);
        const existed = data.find((enroll) => enroll?.course_id === id);
        console.log(existed);
        setDataByEmail(existed);
        if (existed) {
          setAlreadyEnrolled(true);
        } else {
          setAlreadyEnrolled(false);
        }
        axios
          .patch(`https://course-management-system-server.vercel.app/courses/${id}`, {
            enrollment: enrollmentCount + 1,
            usedSeats: seat + 1,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
              setEnrollmentCount(enrollmentCount + 1);
              setSeat(seat + 1);
            }
            toast.success(`Successfully Enrolled to ${course?.courseTitle}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      });
  };

  const handleCancelEnrollment = () => {
    console.log("congo");

    axios
      .delete(`https://course-management-system-server.vercel.app/enrollment/${dataByEmail._id}`)
      .then((res) => {
        if (res.data.deletedCount) {
          setAlreadyEnrolled(false);
          const deletedData = enrolled.filter(
            (enroll) => enroll.course_id !== id
          );
          setEnrolled(deletedData);
          axios
            .patch(`https://course-management-system-server.vercel.app/courses/${id}`, {
              enrollment: enrollmentCount - 1,
              usedSeats: seat - 1,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount === 1) {
                setEnrollmentCount(enrollmentCount - 1);
                setSeat(seat - 1);
              }
            });
        } else {
          setAlreadyEnrolled(true);
        }
      });
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="min-h-screen relative bg-gradient-to-b from-secondary/40 to-primary/60 pt-32">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 100 }}
            transition={{ duration: 0.5, ease: easeIn }}
            className="card lg:card-side bg-base-100/30 backdrop-blur-md shadow-sm max-w-7xl mx-3 lg:mx-auto items-center p-3 lg:p-0 h-[70vh] lg:h-auto"
          >
            <figure className="w-1/2">
              <img src={course?.photoURL} alt="Album" />
            </figure>
            <div className="card-body relative">
              <h2 className="card-title text-primary text-2xl">
                {course?.courseTitle}
              </h2>
              <div className="space-y-4">
                <p className="flex gap-8 items-center">
                  <span className="flex gap-3 w-40 items-center">
                    <MdDateRange />
                    Released Date
                  </span>
                  {course?.releasedDate}
                </p>
                <p className="flex gap-8 items-center">
                  <span className="flex gap-3 w-40 items-center">
                    <FaHourglassEnd />
                    Duration
                  </span>
                  {course?.duration}
                </p>
                <p className="flex gap-8 items-center">
                  <span className="flex gap-3 w-40 items-center">
                    <CgProfile />
                    Creator's Name
                  </span>
                  {course?.name}
                </p>
                <p className="flex gap-8 items-center">
                  <span className="flex gap-3 w-40 items-center">
                    <MdAlternateEmail />
                    Creator's Email
                  </span>
                  {course?.email}
                </p>
                <p className="flex gap-8 items-center">
                  <span className="flex gap-3 w-40 items-center">
                    <CgDetailsMore size={20} />
                    Course Description
                  </span>
                  {course?.description}
                </p>
              </div>
              <div className="card-actions absolute bottom-10 right-10">
                {alreadyEnrolled ? (
                  <button
                    onClick={handleCancelEnrollment}
                    className="lg:inline-block px-4 py-2 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-110 transition-all duration-150 cursor-pointer"
                  >
                    Cancel Enrollment
                  </button>
                ) : (
                  <button
                    onClick={handleEnrollment}
                    disabled={!user || enrolled.length >= 3 || seat >= 10}
                    className={`lg:inline-block px-4 py-2 text-lg text-secondary  border-2 border-secondary rounded-sm  ${
                      !user || enrolled.length >= 3 || seat >= 10
                        ? "cursor-not-allowed bg-stone-400"
                        : "cursor-pointer hover:bg-gradient-to-r from-primary to-secondary hover:text-white transform hover:scale-110 transition-all duration-150 hover:border-none"
                    }`}
                  >
                    {enrolled.length >= 3
                      ? "Reached Enrollment Limit"
                      : `${
                          seat >= 10
                            ? `No Seats Left`
                            : `${
                                !user
                                  ? `Login or Sign Up to Enroll`
                                  : `Enroll (Seats Remaining - ${10 - seat})`
                              }`
                        }`}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
          <Lottie
            className="absolute bottom-5 right-5 -z-[1]"
            style={{ width: "200px" }}
            animationData={ornament1}
            loop={true}
          ></Lottie>
          <Lottie
            className="absolute top-5 left-5 -z-[1]"
            style={{ width: "200px" }}
            animationData={ornament1}
            loop={true}
          ></Lottie>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
