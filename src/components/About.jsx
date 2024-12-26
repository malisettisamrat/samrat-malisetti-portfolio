import React from "react";
import about from "../assets/about.png";
import { motion } from "motion/react";

export const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About Me</h1>
      <div className="flex flex-wrap">
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
            <p className="max-w-xl my-1 py-4 font-light tracking-normal">{`I am a Software Engineer with a Master's in Computer Science from California State University, Long Beach, passionate about building scalable, secure, and impactful software solutions. With expertise in Full-Stack development, Cloud technologies, and open-source contributions, I excel at creating clean, maintainable code. My experience spans developing interactive EdTech platforms, hackathon-winning mobile apps, and scalable enterprise solutions. Proficient in React, Node.js, PostgreSQL, and Kubernetes, I’m driven by a commitment to innovation and collaboration. Beyond work, I contribute to open-source projects and explore emerging technologies like AI and XR, constantly pushing the boundaries of what's possible.`}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
