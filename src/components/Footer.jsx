import React from "react";
import "./stylesheet/footer.css";
import Contact from "./Contact";
import { IoIosArrowBack } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <div className="footer text-white mt-4">
        <div className="footer-content">
          <div className="footer-content-left">
            <h3 className="border-b text-2xl mb-8 pb-3">Important Links</h3>
            <ul className="flex-col gap-4">
              <li>
               <a href="#about"><IoIosArrowBack className="inline-block mb-1 me-2 text-blue-600"/>
               About Us</a>
               
              </li>
              <li><a href="https://drive.google.com/drive/folders/12yma8BqyGIgEdGuMn6O9OBb3VxmhHybJ" target="_main"> <IoIosArrowBack className="inline-block mb-1 me-1 text-blue-600"/> Previous Certificates</a></li>
              <li><a href="https://www.emaxindia.in/about-e-max-education" target="_main">  <IoIosArrowBack className="inline-block mb-1 me-2 text-blue-600"/>
              About Affiliation (EMAX INDIA)</a></li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h3 className="border-b text-2xl mb-8 pb-3">Student Panel</h3>
            <ul className="flex-col gap-4">
              <li><a href="https://wa.link/wfzvss"> <IoIosArrowBack className="inline-block mb-1 me-1 text-blue-600"/> Contact Us</a></li>
              <li><a href="http://wame.pro/ge2tct"> <IoIosArrowBack className="inline-block mb-1 me-1 text-blue-600"/> Join Course</a></li>
              <li><a href=" http://wame.pro/710eoq"> <IoIosArrowBack className="inline-block mb-1 me-1 text-blue-600"/> Fee Structure</a></li>
              <li><a href="https://wa.link/wfzvss"> <IoIosArrowBack className="inline-block mb-1 me-1 text-blue-600"/> Request For Certificate</a></li>
            </ul>
          </div>
         
          <Contact/>
        </div>
        
      </div>
      <div className="footer-last">
        <p>
          &copy; 2024 All Rights Reserved by
          <a href="/" className="text-blue-700 ps-2">
            TechnicalTrainers
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
