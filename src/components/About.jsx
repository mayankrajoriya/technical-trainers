import React from 'react'
import "./stylesheet/about.css"
import course from "../assets/course.webp";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { LiaUniversitySolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";

const About = () => {
  return (
    <div>
    <div className='about' id="about"><h1>About</h1>
    <p className='ps-9'>Our industrial training program provides college students with hands-on experience in their field, culminating in a recognized certificate upon completion. Gain practical skills through real-world projects and expert mentorship to enhance your career prospects.</p>
    </div>


    <div className=" course-content flex">
        <div>
          <img className="course-img" width={500} src={course} alt="" />
        </div>

        <div className="flex w-1/2 ">
          <div className="line mt-5 ">
            <div className="circle c1">
              <div className="logo-div">
                <LiaUniversitySolid className="w-6 h-8" />
              </div>
            </div>
            <div className="circle c2">
              <div className="logo-div">
                <HiMiniCurrencyDollar className="w-6 h-8" />
              </div>
            </div>
            <div className="circle c3">
              <div className="logo-div">
                <GrCertificate className="w-6 h-8" />
              </div>
            </div>
          </div>
           
          <div className="course-text  ms-4">
            <ul >
              <li >
                <h2>VARITY COURSES</h2>
                <p >
                  We Wil Provide Training In Autocad, PLC Programming,Computer
                  Networking & Basic Electrical & Electronics
                </p>
              </li>
              <li>
                <h2>Affordable Prices</h2>
                <p>
                  Our industrial training course offers affordable prices,
                  ensuring accessibility for college students seeking valuable
                  career preparation.
                </p>
              </li>
              <li>
                <h2>Valid Certificaton</h2>
                <p>
                  Our certification is recognized across India, validating the
                  skills and expertise gained through our industrial training
                  program. It enhances employability and career prospects
                  nationwide.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About