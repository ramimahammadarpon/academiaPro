import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const EnrollmentTable = ({ index, enroll, enrollment, setEnrollment }) => {
  const [enrollmentCount, setEnrollmentCount] = useState();
  const [seat, setSeat] = useState();

  useEffect(() => {
    fetch(`https://course-management-system-server.vercel.app/courses/${enroll.course_id}`)
      .then((res) => res.json())
      .then((data) => {
        setEnrollmentCount(data.enrollment);
        setSeat(data.usedSeats);
      });
  }, [enroll.course_id]);

  const handleRemoveEnrollment = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://course-management-system-server.vercel.app/enrollment/${enroll._id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const deletedData = enrollment.filter(
                (enrl) => enrl._id !== enroll._id
              );
              setEnrollment(deletedData);
              axios
                .patch(`https://course-management-system-server.vercel.app/courses/${enroll.course_id}`, {
                  enrollment: enrollmentCount - 1,
                  usedSeats: seat - 1,
                })
                .then((res) => {
                  console.log(res.data);
                  if (res.data.modifiedCount === 1) {
                    setEnrollmentCount(enrollmentCount - 1);
                    setSeat(seat - 1);
                  }
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                });
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={enroll?.course_photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{enroll?.course_name}</div>
            <div className="text-sm opacity-50 max-w-xs">
              {enroll?.creator_email}
            </div>
          </div>
        </div>
      </td>
      <td>{enroll.course_duration}</td>
      <th className="flex items-center gap-4">
        <button
          onClick={handleRemoveEnrollment}
          className="text-orange-400 hover:bg-red-500/40 hover:backdrop-blur-sm hover:shadow-lg shadow-red-500 hover:text-red-500 cursor-pointer"
        >
          <MdDelete size={25} />
        </button>
      </th>
    </tr>
  );
};

export default EnrollmentTable;
