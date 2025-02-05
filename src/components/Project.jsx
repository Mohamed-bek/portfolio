import React, { useState } from "react";
import { FaLink, FaPause, FaPlay } from "react-icons/fa";
import LazyVideoHoverEffect from "./ImageGalleryAnimation";

function Project({ project, playId, setplayId }) {
  const [play, setPlay] = useState(false);
  return (
    <div
      key={project.id}
      className="group h-full border-[#2c2c2c] bg-[#151515] border rounded-md overflow-hidden relative"
    >
      <div className="duration-200  group-hover:bg-[#00000089] absolute top-0 left-0 w-full bg-transparent z-30  h-[calc(100%-280px)] flex justify-center items-center">
        <div className="  border-[white] border scale-0 group-hover:scale-100 duration-200 p-5 bg-black/60 rounded-full w-fit flex justify-center items-center">
          {(!play || playId !== project.id) && (
            <FaPlay
              onClick={() => {
                setplayId(null);
                setTimeout(() => {
                  setPlay(true);
                  setplayId(project.id);
                  console.log(play, project.id);
                }, 50);
              }}
              className="text-white text-[2rem] translate-x-[2px] cursor-pointer duration-300"
            />
          )}
          {play && playId === project.id && (
            <FaPause
              onClick={() => {
                setPlay(false);
                setplayId(null);
              }}
              className="text-white text-[2rem]  cursor-pointer duration-300"
            />
          )}
        </div>
      </div>
      {play && playId === project.id ? (
        <div className=" h-[calc(100%-280px)]">
          <LazyVideoHoverEffect videoUrl={project?.video} playState={play} />
        </div>
      ) : (
        <div className="h-[calc(100%-280px)]">
          <img src={project.image} className="w-full" alt="img" />
        </div>
      )}
      <div className="h-[280px] px-5 py-3 text-white border-t border-t-[#2c2c2c]">
        <a
          className="text-[1.5em] mb-3 text-nowrap text-left  w-full flex items-center gap-3  hover:text-secondary duration-200"
          href={project.link}
          target="_blank"
        >
          {project.title}
          <FaLink />
        </a>
        <div className="flex gap-4 items-center mb-3">
          {project.techs?.map((tech, i) => (
            <div
              key={i}
              className="bg-[#2d2f32]  text-white font-bold text-[1.05rem] hover:bg-[#222325]  flex items-center gap-2 px-4 cursor-pointer duration-200 py-[6px] rounded-md fade-in-down opacity-0"
            >
              <span className="text-secondary text-[1.3rem]">{tech.icon}</span>{" "}
              {tech.name}
            </div>
          ))}
        </div>
        <div className="w-[100%] mb-2 mx-auto h-[1px] bg-[#80808043]"> </div>
        <p className="text-[1.15rem] text-tertiary font-medium ">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default Project;
