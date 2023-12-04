import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import kanbanboard from "../../assets/kanbanBoard.png";
import golf from "../../assets/golf.png";
import magma from "../../assets/magma.png";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoTypescript,
} from "react-icons/bi";

const Projects = () => {
  

  return (
    <div id="projects" className="w-[95%] m-auto mt-[20px]">
      <h2 className="text-3xl text-center mb-[20px] font-bold tracking-tight text-[#242424] sm:text-4xl">
        Projects
      </h2>
      <div className="grid text-white grid-cols-1 sm:grid-cols-3 gap-5">      <div className=" text-center">
        <a
            href="https://kanban-board-9f51.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
        <img
            src={kanbanboard}
            alt="kanban board"
            style={{
              transition: "transform 0.2s",
              ":hover": { transform: "scale(1.1)" },
            }}
          />
          </a>
          <h1 className="text-[14px] mt-[20px] margin-auto josefin-sans-bold text-[#bf9467]">
            Kanban Board
          </h1>
          <h1 className="text-[12px] mt-[20px] josefin-sans text-white">
            Tech Used:
          </h1>
          <div className="flex gap-4 justify-center">
            <BiLogoJavascript className="text-[22px] text-sky-500" />
            <BiLogoHtml5 className="text-[22px] text-sky-500" />
            <BiLogoCss3 className="text-[22px] text-sky-500" />
            <BiLogoTypescript className="text-[22px] text-sky-500" />
          </div>
        </div>
        <div className=" text-center">
          <a
            href="https://piyushhpandit.github.io/Golffers-Club/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={golf}
              alt="kanban board"
              style={{
                transition: "transform 0.2s",
                ":hover": { transform: "scale(1.1)" },
              }}
            />
          </a>
          <h1 className="text-[14px] mt-[20px] margin-auto josefin-sans-bold text-[#bf9467]">
            Sidecup Family Golf
          </h1>
          <h1 className="text-[12px] mt-[20px] josefin-sans text-white">
            Tech Used:
          </h1>
          <div className="flex gap-4 justify-center">
            <BiLogoJavascript className="text-[22px] text-sky-500" />
            <BiLogoHtml5 className="text-[22px] text-sky-500" />
            <BiLogoCss3 className="text-[22px] text-sky-500" />
            <BiLogoTypescript className="text-[22px] text-sky-500" />
          </div>
        </div>
        <div className=" text-center">
          <a
            href="https://piyushhpandit.github.io/Magma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={magma}
              alt="kanban board"
              style={{
                transition: "transform 0.2s",
                ":hover": { transform: "scale(1.1)" },
              }}
            />
          </a>
          <h1 className="text-[14px] mt-[20px] margin-auto josefin-sans-bold text-[#bf9467]">
            Magma Web3
          </h1>
          <h1 className="text-[12px] mt-[20px] josefin-sans text-white">
            Tech Used:
          </h1>
          <div className="flex gap-4 justify-center">
            <BiLogoJavascript className="text-[22px] text-sky-500" />
            <BiLogoHtml5 className="text-[22px] text-sky-500" />
            <BiLogoCss3 className="text-[22px] text-sky-500" />
            <BiLogoTypescript className="text-[22px] text-sky-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
