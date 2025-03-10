import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-transparent text-neutral-400 mt-10 ">
      <div className="flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/satish-nemali">
          <BsLinkedin size={25} />
        </a>
        <p>|</p>
        <a href="https://github.com/Nemali-Satish">
          <BsGithub size={25} />
        </a>
        <p>|</p>
        <Link>
          <SiGmail
            size={25}
            onClick={() =>
              (window.location = "mailto:satishnemali2004@gmail.com")
            }
          />
        </Link>
      </div>
      <p className="text-md mt-5 tracking-[5px]">Created By @Satish Nemali</p>
    </footer>
  );
};

export default Footer;
