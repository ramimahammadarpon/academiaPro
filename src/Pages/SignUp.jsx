import Lottie from "lottie-react";
import React, { useState } from "react";
import ornament1 from "../assets/Lottie/ornament.json";
import loginAnimation from "../assets/Lottie/login.json";
import { FaRegEye, FaRegEyeSlash, FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { TiKeyOutline } from "react-icons/ti";
import { GrKey, GrValidate } from "react-icons/gr";
import { easeIn, motion } from "motion/react";
import { Link } from "react-router";
import { MdAddPhotoAlternate, MdAlternateEmail } from "react-icons/md";

const SignUp = () => {
  const [password, setPassword] = useState(true);
  const [confirmPass, setConfirmPass] = useState(true);
  const [err, setErr] = useState('');
  const handleSignUpForm = (e) => {
    e.preventDefault();
    setErr('');
    const form = e.target;
    const formData = new FormData(form);
    const { email, initialPassword, confirmPassword, ...rest } =
      Object.fromEntries(formData.entries());
    console.log(email, initialPassword, confirmPassword, rest);
    if(initialPassword !== confirmPassword) {
        console.log("yes0");
        setErr("Confirm Password can't Be different from the Initial Password.")
        return;
    }
    if(initialPassword === email) {
        console.log("yes");
        setErr("Password and Mail can't be same.")
        return;
    }
  };
  return (
    <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60">
      <div className="hero min-h-screen">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.5, ease: easeIn }}
          className="hero-content lg:min-w-4xl gap-10 flex-col lg:flex-row-reverse bg-base-100/20 backdrop-blur-md rounded-2xl shadow-2xl lg:mt-30"
        >
          <div className="text-center lg:text-left">
            <Lottie
              style={{ width: "350px" }}
              animationData={loginAnimation}
              loop={true}
            ></Lottie>
          </div>
          <div className="card w-full max-w-sm shrink-0">
            <div className="card-body">
              <form onSubmit={handleSignUpForm} className="fieldset">
                <div>
                  <h1 className="text-2xl font-semibold text-primary text-center mr-4.5">
                    Sign Up Now
                  </h1>
                  <div className="flex justify-between items-center mr-4.5 mt-3">
                    <button className="btn bg-black text-xs text-white border-black">
                      <svg
                        aria-label="GitHub logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        ></path>
                      </svg>
                      GitHub Login
                    </button>
                    <div className="divider divider-horizontal">OR</div>
                    <button className="btn bg-white text-xs text-black border-[#e5e5e5]">
                      <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m0 0H512V512H0" fill="#fff"></path>
                          <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                          ></path>
                          <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                          ></path>
                        </g>
                      </svg>
                      Google Login
                    </button>
                  </div>
                </div>
                <div className="divider divider-secondary mr-4.5 my-auto">
                  OR
                </div>
                <label className="label">Name</label>
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="name"
                    className="input focus:outline-secondary focus:border-primary pl-10"
                    placeholder="Name"
                  />
                  <FaRegUser
                    size={15}
                    className="absolute top-3.5 left-3 z-[1]"
                  />
                </div>
                <label className="label">Photo URL</label>
                <div className="relative max-w-xs">
                  <input
                    type="text"
                    name="photoURL"
                    className="input focus:outline-secondary focus:border-primary pl-10"
                    placeholder="Photo URL"
                  />
                  <MdAddPhotoAlternate
                    size={15}
                    className="absolute top-3.5 left-3 z-[1]"
                  />
                </div>
                <label className="label">Email</label>
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    name="email"
                    className="input focus:outline-secondary focus:border-primary pl-10"
                    placeholder="Email"
                  />
                  <MdAlternateEmail
                    size={15}
                    className="absolute top-3.5 left-3 z-[1]"
                  />
                </div>
                <label className="label">Password</label>
                <div className="relative max-w-xs">
                  <label className="input validator">
                    <input
                    className="pl-6.5"
                      type={password? "password": "text"}
                      required
                      placeholder="Password"
                      name="initialPassword"
                      minLength="8"
                      pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}"
                      title="Must be more than 8 characters, including number, lowercase letter, uppercase letter and Special Character"
                    />
                  </label>
                  <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter, and Special Character
                  </p>
                  <GrKey size={15} className="absolute top-3.5 left-3 z-[1]" />
                  <button
                    type="button"
                    onClick={() => setPassword(!password)}
                    className="absolute top-3 right-3 z-[1]"
                  >
                    {password ? (
                      <FaRegEye size={17} />
                    ) : (
                      <FaRegEyeSlash size={17} />
                    )}
                  </button>
                </div>
                <label className="label">Confirm Password</label>
                <div className="relative max-w-xs">
                  <input
                    type={confirmPass ? "password" : "text"}
                    name="confirmPassword"
                    className="input focus:outline-secondary focus:border-primary px-10"
                    placeholder="Re-Enter Password"
                  />
                  <GrValidate
                    size={15}
                    className="absolute top-3.5 left-3 z-[1]"
                  />
                  <button
                    type="button"
                    onClick={() => setConfirmPass(!confirmPass)}
                    className="absolute top-3 right-3 z-[1]"
                  >
                    {confirmPass ? (
                      <FaRegEye size={17} />
                    ) : (
                      <FaRegEyeSlash size={17} />
                    )}
                  </button>
                </div>
                {err && <p className="text-red-500 mr-5">{err}</p>}
                <button
                  type="submit"
                  className="mt-3 px-3 py-1 lg:mr-4 text-lg text-secondary hover:bg-gradient-to-r from-primary to-secondary hover:text-white border-2 border-secondary hover:border-none rounded-sm transform hover:scale-x-105 transition-all duration-150  cursor-pointer"
                >
                  Sign Up
                </button>
              </form>
              <p>
                Already Have An Account?{" "}
                <Link className="link text-secondary" to="/login">
                  Login Now
                </Link>
              </p>
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
    </div>
  );
};

export default SignUp;
