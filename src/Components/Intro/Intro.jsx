import React, { useEffect, useState } from "react";
import propic from "../../../src/assets/propicbng.png";
import resumePDF from "../../../src/assets/Piyush_CV.pdf";

const Typewriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const word = words[currentWordIndex];
    let currentCharacterIndex = 0;

    const typingInterval = setInterval(() => {
      setCurrentWord((prev) => prev + word[currentCharacterIndex]);
      currentCharacterIndex++;

      if (currentCharacterIndex === word.length) {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Wait for a moment and then erase the word
        setTimeout(() => {
          setIsTyping(true);
          eraseWord();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex, words]);

  const eraseWord = () => {
    const word = words[currentWordIndex];
    let currentCharacterIndex = word.length - 1;

    const erasingInterval = setInterval(() => {
      setCurrentWord((prev) => prev.slice(0, -1));
      currentCharacterIndex--;

      if (currentCharacterIndex < 0) {
        clearInterval(erasingInterval);

        // Move to the next word or back to the first word
        setCurrentWordIndex((prevIndex) =>
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 50);

    return () => clearInterval(erasingInterval);
  };

  return (
    <h2 className="text-white josefin-sans-bold text-left">{currentWord}</h2>
  );
};

const Intro = () => {
  return (
    <div id="home" className="relative flex flex-col sm:flex-row">
      {/* Background Image */}
      <div
        className="block sm:hidden absolute inset-0 bg-cover mt-[100px] ml-[160px]"
        style={{ backgroundImage: `url(${propic})`, width: "50%" }}
      ></div>

      {/* Text Content */}
      <div className="m-auto w-[90%] sm:w-[60%] relative z-10 text-left">
        <h1 className="text-white josefin-sans text-left mt-[170px] text-[30px] sm:text-[52px] md:text-[36px] lg:text-[48px] xl:text-[64px]">
          Welcome!
          <br />
          <span style={{ fontSize: "35px" }}>
            I am a <span style={{ color: "#bf9467" }}>Frontend Developer</span>
          </span>
        </h1>

        {/* Typewriter Component*/}

        <div className="flex m-left sm:m-auto mt-[20px] mb-[20px] w-[60%] sm:w-[40%]">
          <button
            className="text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] text-white m-auto hover:ring ring-red-500 border rounded-xl px-2 josefin-sans"
            onClick={() => console.log("Download button clicked")}
          >
            Get Resume
          </button>
          <button className="text-white text-[12px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[18px] border m-auto rounded-xl px-2 josefin-sans hover:ring ring-red-500">
            Know More
          </button>
        </div>
      </div>

      {/* Visible Image for Larger Screens */}
      <div className="hidden sm:block">
        <img src={propic} alt="Piyush Pic" className="h-full" />
      </div>
    </div>
  );
};

export default Intro;
