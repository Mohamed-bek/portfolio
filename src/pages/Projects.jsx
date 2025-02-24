import React, { useState, useEffect, useRef } from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import Project from "../components/Project";
import { SiMongodb, SiCloudinary, SiStripe } from "react-icons/si";

function Projects() {
  const projects = [
    {
      id: 0,
      title: "Britannia Sport and Exercise Science Academy",
      description:
        "A website highlighting the global presence of a UK-based team of sports scientists, coaches, and professionals. Built to showcase their expertise and impact across countries like Sweden, France, Morocco, and more.",
      image: "/images/project/Bsesa.png",
      video: "/images/bsesa1.mp4",
      link: "https://www.bsesac.co.uk/",
      techs: [
        {
          name: "React Js",
          icon: <FaReact />,
        },
        {
          name: "Node Js",
          icon: <FaNodeJs />,
        },
        {
          name: "Stripe",
          icon: <SiStripe />,
        },
      ],
    },
    {
      id: 1,
      title: "Foodly",
      description:
        "A restaurant platform designed for seamless food ordering and table booking. Showcasing a diverse menu of delicious meals, Foodly offers a user-friendly experience for both customers and administrators, complete with an admin panel for managing orders and reservations.",
      image: "/images/project/foodly.png",
      video: "/images/bsesa1.mp4",
      link: "https://food-lly.vercel.app/",
      techs: [
        {
          name: "React Js",
          icon: <FaReact />,
        },
        {
          name: "Node Js",
          icon: <FaNodeJs />,
        },
        {
          name: "Cloudinary",
          icon: <SiCloudinary />,
        },
      ],
    },
    {
      id: 2,
      title: "Your Health Towards Betterment",
      description:
        "A comprehensive platform dedicated to health, fitness, nutrition, and psychological well-being. Offering personalized fitness and nutrition plans, direct access to specialists, and educational campaigns, the platform focuses on providing expert services with a commitment to excellence, integrity, trust, and effectiveness.",
      image: "/images/project/sport.png",
      video: "/images/bsesa1.mp4",
      link: "https://sport-client-gamma.vercel.app/",
      techs: [
        {
          name: "React Js",
          icon: <FaReact />,
        },
        {
          name: "Node Js",
          icon: <FaNodeJs />,
        },
        {
          name: "MongoDb",
          icon: <SiMongodb />,
        },
      ],
    },
    {
      id: 3,
      title: "masroofy",
      description:
        "Masroofy is a user-friendly web application designed to help you take control of your finances. Whether you're tracking daily expenses, monitoring income, or analyzing your spending patterns, Masroofy provides the tools you need to make informed financial decisions.",
      image: "/images/project/masroofy.png",
      video: "/images/bsesa1.mp4",
      link: "https://masroofy-jade.vercel.app/",
      techs: [
        {
          name: "React Js",
          icon: <FaReact />,
        },
        {
          name: "Node Js",
          icon: <FaNodeJs />,
        },
        {
          name: "MongoDb",
          icon: <SiMongodb />,
        },
      ],
    },
  ];

  const [playId, setplayId] = useState(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="Projects" className="w-full min-h-[100dvh]">
      <h1 className="text-white text-center text-[5rem] py-5"> My Arts </h1>
      <div className="grid grid-cols-2 gap-4 w-[90%] mx-auto items-stretch">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            className="opacity-0 transform translate-y-[50px] transition-all duration-700 ease-out"
          >
            <Project project={project} playId={playId} setplayId={setplayId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
