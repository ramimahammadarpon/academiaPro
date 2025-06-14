import { animate } from "motion";
import { motion } from "motion/react";
import React from "react";
import { FaHourglassEnd } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Link, useNavigate } from "react-router";

const Card = ({ course, index }) => {
  const navigate = useNavigate();
  return (
    <motion.div
    initial={{opacity:0, scale:0}}
    whileInView={{opacity:1, scale:1}}
    transition={{duration:.3, delay: index*.15}}
    className="shadow-2xl rounded-xl overflow-hidden"
    >
      <Link
        to={`/courseDetails/${course._id}`}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{backgroundImage: `url(${course?.photoURL}`}}
          className={`relative bg-cover bg-center bg-no-repeat h-60`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bg-[#160124]/50 w-full h-full flex justify-center items-center"
          >
            <button
            onClick={()=> navigate(`/courseDetails/${course._id}`)}
              className="px-4 py-2 bg-white text-black font-medium z-[1] cursor-pointer rounded-sm"
            >
              View Details
            </button>
          </motion.div>
        </motion.div>
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-primary">
            {course.courseTitle}
          </h1>
          <p className="p-2 flex items-center gap-3">
            <FaHourglassEnd size={15} /> {course.duration}
          </p>
          <p className="p-2 flex items-center gap-3 text-xs font-extralight">
            <MdDateRange size={15} />
            {course.releasedDate}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card;
