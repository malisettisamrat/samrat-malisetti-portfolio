import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="mb-20 items-center flex flex-wrap justify-between py-6">
      <div className="flex flex-shrink-0 items-center m-9">
        <text className="font-bold text-5xl w-10 mx-2">SM</text>
      </div>
      <div className="flex justify-center items-center gap-4 m-9 text-2xl">
        <a
          href="https://www.linkedin.com/in/samrat-malisetti/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/malisettisamrat"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SamratMalisetti"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          href="https://drive.google.com/file/d/14WIUmESQ2EeoRNRL-HsFQCy5-NCCcFO7/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GrDocumentPdf />
        </a>
      </div>
    </nav>
  );
};
