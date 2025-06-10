import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { FaHourglassEnd } from "react-icons/fa";
import ornament1 from "../assets/Lottie/ornament.json";
import { MdAlternateEmail, MdDateRange } from "react-icons/md";
import { useParams } from "react-router";
import { easeIn, motion } from "motion/react";

const CourseDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [course, setCourse] = useState();
  console.log(course);
  useEffect(() => {
    fetch(`http://localhost:3000/course/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  return (
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
            <button className="lg:inline-block px-4 py-2 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-110 transition-all duration-150 cursor-pointer">
              Enroll
            </button>
          </div>
        </div>
      </motion.div>
      <Lottie
        className="absolute bottom-5 right-5"
        style={{ width: "200px" }}
        animationData={ornament1}
        loop={true}
      ></Lottie>
      <Lottie
        className="absolute top-5 left-5"
        style={{ width: "200px" }}
        animationData={ornament1}
        loop={true}
      ></Lottie>
    </div>
  );
};

export default CourseDetails;
