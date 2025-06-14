import React from "react";
import teacher1 from "../assets/teacher1.png";
import teacher2 from "../assets/teacher2.png";
import learning1 from "../assets/learning1.png";
import learning2 from "../assets/learning2.png";

import { motion } from "motion/react";
const AboutUs = () => {
  return (
    <div className="relative bg-gradient-to-b from-secondary/40 to-primary/60 min-h-screen py-20 lg:py-26 px-3">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center font-semibold text-2xl text-primary mb-7">
          About Us
        </h1>

        <section className="mb-5">
          <p>
            Welcome to AcademiaPro, your all-in-one platform for simplified
            course management and seamless learning experiences. Whether you're
            an instructor looking to create and manage courses or a student
            eager to learn, our platform empowers you with the right tools to
            achieve your goal. <br /> We are commited to eliminating the
            complexities of course adminitrastion so that teachers can focuss on
            teaching and students can focus on learning
          </p>
        </section>

        <section className="mb-5 mt-20 flex flex-col lg:flex-row lg:gap-30">
          <div className="lg:w-1/2">
            <h3 className="text-primary font-semibold text-lg">Our Vision</h3>

            <p>
              We envision a future where every individual has access to qualify
              education, regradless of their gackground or location. <br /> By
              harnessing the power of technology, AcademiaPro strives to make
              learning more inclusive, interactive, and impactful. <br /> Our
              Platform is designed to support not just traditional classrooms,
              but also remote learning environments, self-paced study, and
              collaborative educational communities. <br /> We are constantly
              expanding our features, integrating new technologies, and refining
              user experiences. <br /> From AI-based recommendations to peer
              collaboration tools, our roadmap is full of exciting innovatins
              that will further transform the way you lears and teach.
            </p>
          </div>
          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <motion.img
              initial={{ y: 0 }}
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              src={teacher1}
              className="w-52 lg:w-80 border-8 border-t-0 border-r-0 border-primary rounded-xl"
              alt=""
            />
            <motion.img
              initial={{ x: 50, y: -50 }}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 4, repeat: Infinity }}
              src={teacher2}
              className="w-52 lg:w-80 border-8 border-t-0 border-l-0 border-secondary rounded-xl"
              alt=""
            />
          </div>
        </section>

        <section className="mb-5 flex flex-col lg:flex-row-reverse lg:gap-30">
          <div className="lg:w-1/2">
            <h3 className="text-primary font-semibold text-lg">
              What Makes Us Different?
            </h3>

            <p className="mb-3">
              Unlike many generic learning platforms, AcademiaPro is
              custom-built to meet the specific needs of course creators and
              students alike. Every feature, from enrollment control to
              real-time statistics, is creafted to enhance usability and
              performance
            </p>

            <ul className="list-disc pl-10">
              <li>
                <h5 className="font-semibold text-primary">
                  Secure User Authentication
                </h5>
                <p>
                  Protecting user data and ensuring safe access for instructors
                  and students
                </p>
              </li>
              <li>
                <h5 className="font-semibold text-primary">
                  Smart Enroll System
                </h5>
                <p>
                  Limit seats, manage waitlists, and handle course capacity
                  real-time.
                </p>
              </li>
              <li>
                <h5 className="font-semibold text-primary">
                  Mobile Responsive Design
                </h5>
                <p>Access Your Courses anytime anywhere --- on any device</p>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 mt-4 lg:mt-0">
            <motion.img
              initial={{ x: 0 }}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 4, repeat: Infinity }}
              src={learning1}
              className="w-52 lg:w-80 border-8 border-t-0 border-r-0 border-primary rounded-xl"
              alt=""
            />
              <motion.img
                initial={{ y: -50 }}
                animate={{ y: [-50, -100, -50] }}
                transition={{ duration: 4, repeat: Infinity }}
                src={learning2}
                className="w-52 lg:w-80 border-8 border-t-0 border-l-0 border-secondary rounded-xl"
                alt=""
              />
          </div>
        </section>

        <section className="mb-5">
          <h3 className="text-primary font-semibold text-lg">Who We Are</h3>

          <p>
            AcademiaPro was created by a team of developers, educators, and
            students who personally experienced the challenges of managing
            courses and academic content in traditional systems. Frustrated by
            outdated platforms and fragmented tools, we set out to build
            something better --- a unified solution that is smart, secure, and
            scalable. We combine deep technical experise with a genuine passion
            for learning to bring you a product that evolves with the needs of
            medern education.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
