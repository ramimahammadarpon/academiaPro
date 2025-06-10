import { animate, easeIn, easeOut, scale } from "motion";
import { motion } from "motion/react";
import React, { useState } from "react";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
import { FaHourglassEnd } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const SliderCard = ({ card }) => {
  const { photoURL, courseTitle, description, duration, email, releasedDate } =
    card;
  // console.log(photoURL);
  const [hover, setHover] = useState(false);
  // console.log(hover);

  return (
    <div className="px-2 w-full">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{backgroundImage: `url(${photoURL}`}}
        className={`lg:h-[85vh] mg:h-[60vh] h-[50vh] rounded-2xl bg-no-repeat bg-cover bg-center relative overflow-hidden`}
      >
        <div className="w-full h-full bg-primary/20 backdrop-blur-xs flex lg:hidden flex-col justify-center items-center">
          <div className="w-2/3">
            <h3 className="text-2xl font-bold text-secondary mb-3">
              {courseTitle}
            </h3>
            <p className="mb-2 flex gap-5 items-center">
              <CgDetailsMore size={20} />
              {description}
            </p>
            <p className="mb-2 flex gap-5 items-center">
              <CgProfile />
              {email}
            </p>
            <p className="mb-2 flex gap-5 items-center">
              <FaHourglassEnd /> {duration}
            </p>
            <p className="mb-2 flex gap-5 items-center">
              <MdDateRange size={35} /> {releasedDate}
            </p>
          </div>
        </div>
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={hover ? { y: "0%", opacity: 1 } : { y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className={`w-full h-full bg-primary/40 backdrop-blur-xs border-2 border-primary`}
        ></motion.div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={hover ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: easeIn }}
          className="bg-primary/30 absolute bottom-0 p-10 text-white w-full"
        >
          <h3 className="text-2xl font-bold text-secondary mb-3">
            {courseTitle}
          </h3>
          <p className="mb-2 flex gap-5 items-center">
            <CgDetailsMore size={20} />
            {description}
          </p>
          <p className="mb-2 flex gap-5 items-center">
            <CgProfile />
            {email}
          </p>
          <p className="mb-2 flex gap-5 items-center">
            <FaHourglassEnd /> {duration}
          </p>
          <p className="mb-2 flex gap-5 items-center">
            <MdDateRange size={35} /> {releasedDate}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
