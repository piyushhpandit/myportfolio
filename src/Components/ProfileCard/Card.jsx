// CardComponent.js
import React from "react";
import profileImage from "../../assets/mypic.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Card = () => {
  return (
    <div className="wrapper">
      <div className="card front-face">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full h-full w-full"
        />
      </div>
      <div className="card back-face">
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-full h-32 w-32 p-1 bg-gradient-to-r from-teal-500 to-emerald-500"
        />
        <div className="info text-center">
          <div className="title text-3xl font-semibold">CodingLab</div>
          <p>User interface designer and front-end developer</p>
        </div>
        <ul className="flex">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaYoutube />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Card;
