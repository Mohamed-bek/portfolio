import React from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-secondary py-7">
      <div className="text-[2.2rem] text-primary flex justify-center items-center gap-5 mb-5">
        <a className=" cursor-pointer hover:scale-[1.05] duration-200 hover:translate-y-[-5px] ">
          {" "}
          <FaGithub className="shadowSociale" />{" "}
        </a>
        <a className=" cursor-pointer hover:scale-[1.05] duration-200 hover:translate-y-[-5px]   block ">
          {" "}
          <FaLinkedin className="shadowSociale" />{" "}
        </a>
        <a className=" cursor-pointer hover:scale-[1.05] duration-200 hover:translate-y-[-5px]   block ">
          {" "}
          <FaEnvelope className="shadowSociale" />{" "}
        </a>
        <a className="cursor-pointer  hover:scale-[1.05] duration-200 hover:translate-y-[-5px]">
          {" "}
          <FaInstagram className="shadowSociale" />{" "}
        </a>
      </div>
      <div className="w-fit mx-auto">
        © 2025 Designed with ♥ by Mohamed Bekkouche
      </div>
    </div>
  );
}

export default Footer;
