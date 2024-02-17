import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center  text-sky-700">
      <h1 className="text-8xl font-bold">
        <span className="flex items-center">
          Linked{" "}
          <FaLinkedinIn className="mr-6 bg-sky-700 text-white p-2 rounded-md" />{" "}
          Text
        </span>
      </h1>
      <h1 className="text-8xl">Formatter</h1>
      <p className="text-2xl text-center mt-8 font-bold">
        Elevate your LinkedIn post with bold, strikethrough, italic text styles,<br/>
        and more! This valuable service is provided to you at no cost<br/>
       by <a>mariyabaig.com</a>.
      </p>
    </div>
  );
};

export default Landing;
