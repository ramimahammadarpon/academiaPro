import { motion } from "motion/react";
import React, { useContext, useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { AuthContext } from "../Context/AuthContext";
import useApplicationApi from "../CustomHooks/useApplicationApi";
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Statistics = () => {
  const { user } = useContext(AuthContext);
  const { enrollmentPromise } = useApplicationApi();
  const [courses, setCourses] = useState([]);
  const [enrollment, setEnrollment] = useState([]);
  // console.log(enrollment);
  useEffect(() => {
    fetch("https://course-management-system-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
    if (user?.email && user?.accessToken) {
      enrollmentPromise().then((data) => {
        setEnrollment(data)
        // setLoading(false);
      });
    }
  }, [user]);
  let data = [];
  if (user?.email) {
     data = [
      { name: "Total Courses", value: courses.length },
      { name: "Total Enrollments", value: enrollment.length },
    ];
  } else {
    data = [{ name: "Courses", value: courses.length }];
  }
  return (
    <div className="mt-20 px-3">
      <h1 className="text-2xl font-semibold text-primary mb-7">Statistics</h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center justify-center"
      >
        <BarChart width={700} height={400} data={data}>
          <Tooltip></Tooltip>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Bar dataKey="value" fill="#7a60ec" shape={<TriangleBar />} />
        </BarChart>
      </motion.div>
    </div>
  );
};

export default Statistics;
