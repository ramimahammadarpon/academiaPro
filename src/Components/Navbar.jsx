import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useContext, useState } from "react";
import profilePic from "../assets/profilePic.jpg";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { li } from "motion/react-client";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Sign Out Successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className="hover:bg-transparent hover:text-secondary transform hover:scale-105 transition-all duration-100"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-transparent hover:text-secondary transform hover:scale-105 transition-all duration-100"
          to="/courses"
        >
          Courses
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className="hover:bg-transparent hover:text-secondary transform hover:scale-105 transition-all duration-100"
              to="/addCourse"
            >
              Add Course
            </NavLink>
          </li>
          <li><NavLink
            className="hover:bg-transparent hover:text-secondary transform hover:scale-105 transition-all duration-100"
            to="/manageCourses"
          >
            Manage Courses
          </NavLink></li>
        </>
      )}
    </>
  );
  const [responsive, setResponsive] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevVal = scrollY.getPrevious();
    if (latest > prevVal && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <div className="lg:flex justify-center items-center">
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed z-10 lg:top-5 navbar bg-gradient-to-l from-white/40 to-white/20 shadow-sm max-w-7xl lg:rounded-lg px-4 backdrop-blur-sm lg:border border-white/30"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100/40 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl">
            <span className="text-primary font-medium text-2xl">Academia</span>
            <span className="text-secondary text-2xl">Pro</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg gap-3">{links}</ul>
        </div>
        <div className="navbar-end flex gap-5">
          <div className="relative">
            {user ? (
              <img
                onClick={() => setResponsive(!responsive)}
                src={user.photoURL}
                className="rounded-full w-9 aspect-square object-cover border-2 border-secondary"
                alt=""
              />
            ) : (
              <img
                onClick={() => setResponsive(!responsive)}
                src={profilePic}
                className="lg:hidden rounded-full w-9 aspect-square object-cover border-2 border-secondary"
                alt=""
              />
            )}
            <ul
              className={`absolute lg:hidden right-0 w-40 text-right top-13 bg-base-100/40 p-2 rounded-lg space-y-2 transition-all duration-75 ease-in ${
                responsive
                  ? "scale-100 opacity-100 visible pointer-events-auto"
                  : "scale-90 opacity-0 invisible pointer-events-none"
              }`}
            >
              {user ? (
                <>
                  {" "}
                  <p className="text-primary">{user.displayName}</p>{" "}
                  <button onClick={handleSignOut}>Sign Out</button>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signUp">Sign Up</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="hidden lg:inline-block px-3 py-1 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-110 transition-all duration-150 cursor-pointer"
            >
              Sign Out
            </button>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="hidden lg:inline-block px-4 py-1  text-lg bg-gradient-to-r from-primary to-secondary text-white rounded-sm hover:bg-none hover:border-2 border-primary hover:text-primary transform hover:scale-105 transition-all duration-150"
              >
                Login
              </Link>
              <Link
                to="/signUp"
                className="hidden lg:inline-block px-3 py-1 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-110 transition-all duration-150"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
