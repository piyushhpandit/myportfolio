import React from "react";
import aboutmepic from "../../assets/aboutmepic.png";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
const Aboutme = () => {
  return (
    <div id="about" className="text-white flex flex-col sm:flex-row justify-evenly w-[100%]">
      <div className="h-[450px] bg-[#181414] w-full sm:w-[30%] text-[#242820] text-[44px] poppins text-center">
        
        <h2 className="w-[50%] ml-[100px] mt-[10px] text-3xl font-bold tracking-tight text-[#242424] sm:text-4xl">
       About me
      </h2>
        <div className="mt-4 relative w-[90%] m-auto">
          <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
            <h1 className="text-[14px] flex justify-between">Web Design</h1>
            <h1 className="text-[14px] flex justify-between">90%</h1>
          </div>
          <style>
            {`
            progress[value]::-webkit-progress-value {
              background-color: #bf9467;
            }
          `}
          </style>
          <progress
            className="w-full h-1 bg-gray-700"
            value="90"
            max="100"
            readOnly
          ></progress>
        </div>
        <div className="mt-4 relative w-[90%] m-auto">
          <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
            <h1 className="text-[14px] flex justify-between">Branding</h1>
            <h1 className="text-[14px] flex justify-between">88%</h1>
          </div>
          <style>
            {`
            progress[value]::-webkit-progress-value {
              background-color: #bf9467;
            }
          `}
          </style>
          <progress
            className="w-full h-1 bg-gray-700"
            value="88"
            max="100"
            readOnly
          ></progress>
        </div>
        <div className="mt-4 relative w-[90%] m-auto">
          <div className="flex items-center justify-between mt-2 text-sm text-gray-400">
            <h1 className="text-[14px] flex justify-between">Development</h1>
            <h1 className="text-[14px] flex justify-between">95%</h1>
          </div>
          <style>
            {`
            progress[value]::-webkit-progress-value {
              background-color: #bf9467;
            }
          `}
          </style>
          <progress
            className="w-full h-1 bg-gray-700"
            value="95"
            max="100"
            readOnly
          ></progress>
        </div>
      </div>

      {/* Picture */}
      <div className="bg-[#28241c] w-full sm:w-[30%] relative">
        <img
          src={aboutmepic}
          alt="aboutmepic"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-[#181414] w-full sm:w-[30%]">
        <h1
          className="
      josefin-sans 
      px-5  
      py-1
      mt-10  
      tracking-widest
      text-[20px]"
        >
          Who Am I
        </h1>
        <h1
          className="
      josefin-sans-bold 
      px-0.5
      tracking-widest
      text-[30px]
      bg-[#bf9467]
      w-[75%]
      ml-5"
        >
          PIYUSH MISHRA
        </h1>
        <h1
          className="
      josefin-sans-bold 
      px-5
      mt-[45px]
      text-[16px]
   "
        >
          FrontEnd Developer
        </h1>
        <h1
          className="
      josefin-sans-bold 
      px-5
      mt-[15px]
      text-[12px]
   "
        >
          Detail-oriented Front-End Developer with expertise in building
          interactive web architectures, translating designs into functional
          applications, and ensuring high-performance products. Proven
          proficiency in NodeJS, ExpressJS, MongoDB, HTML5, Angular, and
          ReactJs. Strong commitment to code quality through the implementation
          of Unit and Integration tests. Adept at collaborating with development
          teams and managers to ideate software solutions.
        </h1>

        <div className="flex justify-between w-[90%] m-auto mt-[50px]">
          <h1
            className="
    josefin-sans-bold 
    mt-[15px]
    text-[14px]"
          >
            Follow Me:
          </h1>

       {/*    <a
            href="https://www.instagram.com/piyushhpandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram className="mt-[10px] text-[22px]" />
          </a> */}

          <a
            href="https://www.linkedin.com/in/piyushhpandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin className="mt-[10px] text-[22px]" />
          </a>
          <a
            href="https://twitter.com/piyushhpandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoTwitter className="mt-[10px] text-[22px]" />
          </a>
          <a
            href="https://github.com/piyushhpandit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub className="mt-[10px] text-[22px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
