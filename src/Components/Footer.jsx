import React from "react";
import { Link } from "react-router";
import facebook from "../assets/facebook.png";
import gitHub from "../assets/github.png";
import linkedIn from "../assets/linkedIn.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <div className="flex md:py-16 py-10 px-3 bg-[#15001c] flex-col md:items-start md:px-10 lg:px-30">
      <div className="flex flex-col md:flex-row gap-3 md:justify-between w-full md:mt-4 md:text-left text-center">
        <div className="flex flex-col">
         <a className="text-xl mb-2">
            <span className="text-primary font-medium text-2xl">Academia</span>
            <span className="text-secondary text-2xl">Pro</span>
          </a>
          <p className="text-secondary">Your Courses, Organized. Your Learning Optimized. <br /> One Platform. Endless Learning Possibilities.</p>
        </div>
        <div className="text-secondary px-5 flex flex-col">
            <h3 className="font-medium mb-2 text-primary text-lg">Legal</h3>
          <Link to="/termsAndServices">Terms and Services</Link>
          <Link to="/privacyPolicy">Privacy Policy</Link>
          <Link to="/otherDocumentations">Other Documentations</Link>
        </div>
        <div className="lg:flex justify-end items-end">
          <div className="">
            <h4 className="font-semibold text-lg text-primary my-2">
              Contact Us Via
            </h4>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=100009160702928"
                target="blank"
              >
                <img className="w-8" src={facebook} alt="" />
              </a>
              <a href="mailto:ramim6708@gmail.com" target="blank">
                <img className="w-8" src={gmail} alt="" />
              </a>
              <a href="https://github.com/ramimahammadarpon" target="blank">
                <img className="w-8" src={gitHub} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramim-ahammad-367431297/"
                target="blank"
              >
                <img className="w-8" src={linkedIn} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
