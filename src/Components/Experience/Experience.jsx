import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import wishfy from "../../assets/wishfysample.png";
import login from "../../assets/loginwishfy.png"; // Import other images
import canvas from "../../assets/canvaswishfy.png";
const Experience = () => {
  const carouselImages = [wishfy, login, canvas]; // Add your image paths

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const features = [
    {
      name: "Technology Used:",
      description:
        "Collaborated with a dynamic team of two to conceive and develop a fully functional website, leveraging JavaScript, ReactJS, and Chakra UI.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Development From Scratch:",
      description:
        "Spearheaded the creation of the website from the ground up, ensuring a seamless and engaging user experience.",
      icon: LockClosedIcon,
    },
    {
      name: "Designing:",
      description:
        "Employed the efficiency of Tailwind CSS for comprehensive styling, delivering a visually appealing and responsive design.",
      icon: ServerIcon,
    },
  ];
  return (
    <div id="experience" className="w-[95%] p-10 bg-[#181414] m-auto mt-[20px]">
      <h2 className="text-3xl text-center font-bold tracking-tight text-[#242424] sm:text-4xl">
        Experience
      </h2>
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <div className="overflow-hidden py-24 sm:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                      <h2 className="text-base josefin-sans-bold font-semibold leading-7 text-[#bf9467]">
                        Wishfy,io
                      </h2>
                      <p className="mt-2 text-2xl josefin-sans-bold font-bold tracking-tight text-[#bf9467] sm:text-4xl">
                        Website Development
                      </p>
                      <p className="mt-6 text-sm leading-8 text-white">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                      <dl className="mt-10 poppins max-w-xl space-y-8 text-[12px] leading-7 text-white lg:max-w-none">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-[#bf9467]">
                              <feature.icon
                                className="absolute left-1 top-1 h-5 w-5 text-[#bf9467]"
                                aria-hidden="true"
                              />
                              {feature.name}
                            </dt>{" "}
                            <dd className="inline">{feature.description}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                  <img
                    src={image}
                    alt={`${index + 1}`}
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1642}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experience;
