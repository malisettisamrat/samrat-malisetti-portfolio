import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

export const Navbar = () => {
  return (
    <nav className="mb-20 items-center flex flex-wrap justify-between py-6">
      <div className="flex flex-shrink-0 items-center m-9">
        <text className="font-bold text-5xl w-10 mx-2">SM</text>
      </div>
      <div className="flex justify-center items-center gap-4 m-9 text-2xl">
        <a href="https://www.linkedin.com/in/samrat-malisetti/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/malisettisamrat">
          <FaGithub />
        </a>
        <a href="https://x.com/SamratMalisetti">
          <FaTwitter />
        </a>
        <a href="https://drive.google.com/file/d/1Cc1Mq19iLUAnPF1L4Osy7iwALSDf4GLb/view?usp=drive_link">
          <GrDocumentPdf />
        </a>
      </div>
    </nav>
  );
};
