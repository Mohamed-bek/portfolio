import React, { useRef } from "react";
import { IoMdMenu } from "react-icons/io";
import Logo from "./Logo";

function Header() {
  const iconRef = useRef(null);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const links = [
    { id: 0, href: "#Home", title: "Home" },
    { id: 1, href: "#About", title: "About" },
    { id: 2, href: "#Projects", title: "Projects" },
    { id: 3, href: "#Contact", title: "Contact" },
  ];
  const HandlClick = () => {
    iconRef.current?.classList.toggle("scale-x-0");
    setTimeout(() => {
      headerRef.current.classList.toggle("border-[0.5px]");
      iconRef.current?.classList.toggle("hidden");
      document.getElementById("Container").classList.toggle("scale-110");
      document.getElementById("layerFilter").classList.toggle("active");
      headerRef.current.classList.toggle("active");
      logoRef.current.classList.toggle("translate-y-[50%]");
      setTimeout(() => {
        navRef.current.classList.toggle("hidden");
        navRef.current.classList.toggle("flex");
        setTimeout(() => navRef.current.classList.toggle("active"), 30);
      }, 300);
    }, 100);
  };

  const RemoveHeader = (e, link) => {
    e.preventDefault();
    document.getElementById("Container").classList.toggle("scale-110");
    navRef.current.classList.toggle("active");
    navRef.current.classList.toggle("hidden");
    navRef.current.classList.toggle("flex");
    headerRef.current.classList.toggle("activeBack");
    headerRef.current.classList.toggle("border-[0.5px]");
    logoRef.current.classList.toggle("translate-y-[50%]");
    setTimeout(() => {
      window.location = "/" + link;
    }, 350);
    setTimeout(() => {
      headerRef.current.classList.toggle("activeBack");
      headerRef.current.classList.toggle("active");
      iconRef.current?.classList.toggle("hidden");
      document.getElementById("layerFilter").classList.toggle("active");

      setTimeout(() => {
        iconRef.current?.classList.toggle("scale-x-0");
      }, 100);
    }, 400);
  };

  return (
    <>
      <div
        ref={logoRef}
        className="w-[80px] h-[80px] z-[9999999] fixed top-0 left-1/2 -translate-x-1/2 -translate-y-[300%] duration-500"
      >
        <Logo />
      </div>
      <div className=" fixed top-6 left-1/2 -translate-x-1/2 z-[9999999999] ">
        <div
          ref={headerRef}
          className="Hed w-[60px] border-solid border-[#636262]   h-[60px] rounded-full flex justify-center items-center bg-black/20 backdrop-blur-xl"
        >
          <nav
            ref={navRef}
            className="links w-full mx-auto hidden justify-center items-center font-bold text-[1.1rem] text-white"
          >
            {links?.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="px-3 cursor-pointer duration-200"
                onClick={(e) => RemoveHeader(e, link.href)}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div
            onClick={() => HandlClick()}
            className="bg-black/5 rounded-full cursor-pointer backdrop-blur-lg"
            //   ref={iconRef}
          >
            <div className="duration-200 p-2" ref={iconRef}>
              <IoMdMenu className="text-[1.4rem] text-white duration-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
