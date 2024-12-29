import React from "react";
import profile from "../assets/profile.png";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export const Intro = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Samrat Malisetti
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-violet-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl my-1 py-4 font-light tracking-tighter text-center lg:text-left"
            >{`I am a Software Engineer, driven by a passion for building scalable, secure, and impactful software solutions. My expertise spans Software Development, Full-Stack development, Cloud Technologies, and Open-Source contributions, all tied together by a commitment to clean, maintainable code.
`}</motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-lg w-full max-w-sm md:max-w-md lg:max-w-sm xl:max-w-xs h-auto"
              src={profile}
              alt="Samrat Malisetti"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
