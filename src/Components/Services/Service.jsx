import React from "react";
import {
  BiCameraHome,
  BiCodeAlt,
  BiLogoChrome,
  BiLogoCss3,
  BiLogoDocker,
} from "react-icons/bi";

const Service = () => {
  return (
    <div id="services" className="bg-[#181414] w-[95%] m-auto p-5 mt-[100px]">
      <div className="text-center">
        <h2 className="text-3xl mb-4 font-bold tracking-tight text-[#242424] sm:text-4xl">
          Services
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly">
        <div className="text-white p-6 w-full sm:w-[20%] bg-[#100c0c] mx-auto">
          <BiLogoCss3 className="text-[72px] bg-[#181414] rounded-full m-auto p-4 text-[#bf9467] mb-[10px]" />
          <h1 className="text-center">Web Design</h1>
          <h2 className="text-[10px] text-justify mt-6">
            Elevate your online presence with captivating web design that blends
            creativity and functionality seamlessly. Crafted with precision, our
            web designs not only engage users but also drive conversions and
            leave a lasting impression.
          </h2>
        </div>

        <div className="text-white p-6 w-full sm:w-[20%] bg-[#100c0c] mx-auto">
          <BiCodeAlt className="text-[72px] bg-[#181414] rounded-full m-auto p-4 text-[#bf9467] mb-[10px]" />
          <h1 className="text-center">Web Development</h1>
          <h2 className="text-[10px] text-justify mt-6">
            Harness the power of cutting-edge technology with our bespoke web
            development services. Our skilled developers bring your ideas to
            life, creating robust and scalable web solutions.
          </h2>
        </div>

        <div className="text-white p-6 w-full sm:w-[20%] bg-[#100c0c] mx-auto">
          <BiLogoDocker className="text-[72px] bg-[#181414] rounded-full m-auto p-4 text-[#bf9467] mb-[10px]" />
          <h1 className="text-center">Deployment</h1>
          <h2 className="text-[10px] text-justify mt-6">
            Seamless deployment of your web solution, ensuring a smooth
            transition from development to live. Our deployment process is
            meticulously executed to minimize downtime and maximize efficiency.
          </h2>
        </div>

        <div className="text-white p-6 w-full sm:w-[20%] bg-[#100c0c] mx-auto">
          <BiLogoChrome className="text-[72px] bg-[#181414] rounded-full m-auto p-4 text-[#bf9467] mb-[10px]" />
          <h1 className="text-center">Maintenance</h1>
          <h2 className="text-[10px] text-justify mt-6">
            Ensure your website stays at peak performance with our proactive and
            comprehensive maintenance services. Our dedicated team monitors,
            updates, and troubleshoots to keep your site secure and up-to-date.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Service;
