import Lottie from "lottie-react";
import React from "react";
import faqsLottie from "../assets/Lottie/faqs.json";
import { motion } from "motion/react";

const FAQs = () => {
  return (
    <div className="mt-20 px-3">
      <h1 className="text-2xl font-semibold text-primary mb-7">
        Frequently Asked Questions
      </h1>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col-reverse lg:flex-row gap-5 items-center"
      >
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100/30 backdrop-blur-md border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold text-primary">
              How Can I Enroll In a Course?
            </div>
            <div className="collapse-content text-sm">
              Simply go to the Courses Section once you click on the Course Card
              it will take you to the Course Details Section, there you'll find
              the Enroll button. If you're logged in, haven't exced the
              enrollment limit, and you've seats remaining for the course you'll
              be able to enroll
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100/30 backdrop-blur-md border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-primary">
              What's the maximum number of courses I can enroll in?
            </div>
            <div className="collapse-content text-sm">
              Each User can Enroll in Upto 3 courses at a time. This helps
              ensure fair access to all users and encourages focused learning.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100/30 backdrop-blur-md border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-primary">
              How can I cancel my course enrollment?
            </div>
            <div className="collapse-content text-sm">
              Go to the My Enrolled Courses, find the course you want to cancel,
              and click on the Cancel Enrollment Button your seat will be
              released immediately.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100/30 backdrop-blur-md border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-primary">
              What happens if a course has no seats available?
            </div>
            <div className="collapse-content text-sm">
              If all seats for a course is filled you'll se No Seats Available
              instead of Enroll button. You can check back later in case someone
              cancels their enrollment.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100/30 backdrop-blur-md border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold text-primary">
              Can I create my Own Course in this platform?
            </div>
            <div className="collapse-content text-sm">
              Yes. If you're an instructor, you can go to the Add Course page
              and submit a new course by filling out required informations,
              including course tiltle, description, duration, etc.
            </div>
          </div>
        </div>
        <div>
          <Lottie
            className="bg-base-100/30 backdrop-blur-md rounded-xl border border-white max-w-sm md:max-w-5xl"
            animationData={faqsLottie}
          ></Lottie>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
