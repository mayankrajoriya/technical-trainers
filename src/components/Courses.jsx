import React from "react";
import "./stylesheet/course.css";
import Card from "./Card";
import img4 from "../assets/img4.jpg";
import img1 from "../assets/img1.jpg";
import img3 from "../assets/img3.jpg";
import img2 from "../assets/img2.jpg";
import img5 from "../assets/img5.jpg";

const Courses = () => {
  return (
    <div className="course ">
      <h1 id="courses">Our Courses</h1>
      <div className="cards">
        <Card
          img={img4}
          duration="24 Days"
          name="AutoCAD (HINDI)"
          branch="Mechanical & Civil"
        />
        <Card
          img={img1}
          duration="24 Days"
          name="Automation with PLC (HINDI"
          branch="Electrical & Electronics
"
        />
        <Card
          img={img2}
          duration="24 Days"
          name="Computer Networking (HINDI)
"
          branch="Computer Science & Electronics

"
        />
        <Card
          img={img5}
          duration="24 Days"
          name="Basic Electrical (HINDI)
"
          branch="Electrical & Electronics
"
        />
        <Card
          img={img4}
          duration="6 Weeks"
          name="AutoCAD (HINDI)"
          branch="Mechanical & Civil

"
        />
        <Card
          img={img1}
          duration="6 Weeks"
          name="Automation with PLC (HINDI"
          branch="Electrical & Electronics
"
        />
        <Card
          img={img2}
          duration="6 Weeks"
          name="Computer Networking (HINDI)
"
          branch="Computer Science & Electronics

"
        />
        <Card
          img={img5}
          duration="6 Weeks"
          name="Basic Electrical (HINDI)
"
          branch="Electrical & Electronics
"
        />
        <Card
          img={img3}
          duration="6 Weeks"
          name="Electric Vehicle (ENGLISH)
"
          branch="Electrical, Electronics & Mechanical

"
        />
      </div>
    </div>
  );
};

export default Courses;
