import React from "react";
import "./stylesheet/main.css";
import img6 from "../assets/img6.png";
import { FaSquareCheck } from "react-icons/fa6";


const Main = () => {
  return (
    <div className="main ">
      <div className="main-content flex justify-between">
      <div className="main-content-text">
        <p className="main-first-para mb-3">Online Training/Internship Program</p>
        <h2 className="font-bold text-3xl md:text-4xl mb-3">Best Platform to Complete <span >Diploma</span> 24 Days & 6 Week Training</h2>
        <p className="text-zinc-500 mb-3">
          Training के बाद Original Rating Sheet आपके कॉलेज में Speed Post से
          Deliver कर दी जाएगी.
        </p>
        <ul className="gap-0 mb-9 ps-6  text-xs md:text-lg">
          <li className="flex items-center gap-2"><FaSquareCheck className="text-blue-800"/>  100 % Timing Friendly</li>
          <li className="flex items-center gap-2"><FaSquareCheck className="text-blue-800"/>All India Certificate Validation</li>
          <li className="flex items-center gap-2"><FaSquareCheck className="text-blue-800"/> Certificate and Rating Sheet Direct College Delivery</li>
          <li className="flex items-center gap-2"><FaSquareCheck className="text-blue-800"/>Easy and Hindi language</li>
        </ul>
        <a href="https://wa.link/wfzvss" className="font-semibold"><span className="bg-blue-800 p-2 rounded-lg text-yellow-300">Join Training</span></a>
      </div>
      <img src={img6} width={400} alt="" />
      </div>
    </div>
  );
};

export default Main;
