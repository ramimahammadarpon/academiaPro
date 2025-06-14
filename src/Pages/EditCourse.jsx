import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import ornament1 from "../assets/Lottie/ornament.json";
import { AuthContext } from "../Context/AuthContext";
import { easeIn, motion } from "motion/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState([]);
  console.log(course);
  console.log(id);
  useEffect(() => {
    document.title = "AcademiaPro | Edit Course";
    fetch(`https://course-management-system-server.vercel.app/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);
  const handleEditCourse = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedFormData = new FormData(form);
    const updatedFormVal = Object.fromEntries(updatedFormData.entries());

    console.log("This is Edit Course", updatedFormVal);
    axios
      .patch(`https://course-management-system-server.vercel.app/courses/${id}`, updatedFormVal)
      .then((res) => {
        console.log(res.data);
        toast.success("Updated Course Info Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate('/manageCourses');
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err}`, {
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
  };
  return (
    <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen pt-32">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5, ease: easeIn }}
        className="shadow-2xl rounded-lg p-4 max-w-6xl mx-5 lg:mx-auto bg-base-100/20 backdrop-blur-md"
      >
        <h1 className="text-2xl text-center text-primary font-bold">
          Eidt Your Course Info
        </h1>
        <form
          onSubmit={handleEditCourse}
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Course Title</label>
            <input
              type="text"
              name="courseTitle"
              className="input w-full"
              placeholder="Enter Course Title"
              defaultValue={course?.courseTitle}
              required
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="input w-full"
              placeholder="Enter Photo URL"
              defaultValue={course?.photoURL}
              required
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Released Date</label>
            <input
              type="text"
              name="releasedDate"
              defaultValue={course?.releasedDate}
              required
              className="input w-full"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Duration</label>
            <input
              type="text"
              name="duration"
              className="input w-full"
              placeholder="Enter Course Duration"
              defaultValue={course?.duration}
              required
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Course Creator's Name (Read Only)</label>
            <input
              name="name"
              defaultValue={course?.name}
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4">
            <label className="label">Course Creator's Email(Read Only)</label>
            <input
              type="email"
              name="email"
              defaultValue={course?.email}
              className="input w-full"
              placeholder="Enter Your Email"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset rounded-box w-full p-4 md:col-span-2">
            <label className="label">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Enter Course Description"
              defaultValue={course?.description}
              required
            />
          </fieldset>

          <input
            className="btn mt-3 mx-4 text-primary bg-transparent border-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transition-all duration-300 hover:border-none ease-in-out md:col-span-2 transform hover:scale-101"
            type="submit"
            value="Update Course Info"
          />
        </form>
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
  );
};

export default EditCourse;
