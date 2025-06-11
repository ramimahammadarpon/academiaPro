import { motion } from "motion/react";
import React from "react";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";

const TableRow = ({index, course}) => {
  const MotionLink = motion(Link);
  return (
    <tr>
      <th>
       {index + 1}
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{course.courseTitle}</div>
            <div className="text-sm opacity-50 max-w-xs">{course.releasedDate}</div>
          </div>
        </div>
      </td>
      <td>
        {course.description}
      </td>
      <td>{course.duration}</td>
      <th className="flex items-center gap-4">
        <MotionLink to={`/courseDetails/${course._id}`} className="text-primary hover:bg-green-500/40 hover:backdrop-blur-sm hover:shadow-lg shadow-green-500 hover:text-green-500 cursor-pointer"><FaInfoCircle size={20} /></MotionLink>
        <MotionLink to={`/editCourse/${course._id}`} className="text-primary hover:bg-green-500/40 hover:backdrop-blur-sm hover:shadow-lg shadow-green-500 hover:text-green-500 cursor-pointer"><FaEdit size={20} /></MotionLink>
        <button className="text-orange-400 hover:bg-red-500/40 hover:backdrop-blur-sm hover:shadow-lg shadow-red-500 hover:text-red-500 cursor-pointer"><MdDelete size={25} /></button>
      </th>
    </tr>
  );
};

export default TableRow;
