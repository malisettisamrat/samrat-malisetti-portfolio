import React from "react";
import about from "../assets/about.png";
import { motion } from "motion/react";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-xl" src={about} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg;justify-start">
            <p className="max-w-xl my-1 py-4 font-light tracking-normal text-center lg:text-left">{`I am a versatile Software Engineer with expertise in building robust, scalable applications across web and mobile platforms. My technical toolkit includes React, React Native, Next.js, Node.js, and Python, with proficiency in databases like PostgreSQL, MySQL, and MongoDB. I have hands-on experience working with cloud platforms such as GCP, Azure, and AWS, and I excel in creating seamless user experiences and secure, efficient backend architectures. Over the years, I have designed and developed dynamic features like real-time APIs, role-based authentication, and integration with tools like OpenAI for adaptive solutions. I am passionate about optimizing performance, enhancing scalability, and delivering high-quality software that meets both technical and business objectives. With a Master’s in Computer Science and a commitment to innovation, I thrive in collaborative environments where I can contribute to impactful projects.`}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
