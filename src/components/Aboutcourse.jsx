import React from "react";
import "./stylesheet/aboutcourse.css";

const Aboutcourse = () => {
  return (
    <div className="aboutcourse">
      <h1>About Course</h1>

      <div className="mb-8">
        
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Automation With PLC</h3>
        <p className="text-sm">
          PLC (Programmable Logic Controller) is a high-level computer that
          assists in controlling automation processes in industries. It controls
          digital and analog signals through sensors and actuators, enabling
          automated, secure, and efficient production processes. PLC is used
          across various industries such as manufacturing, energy, and plant
          construction.
        </p>
        <a href="https://wa.link/wfzvss" className="bg-yellow-300 rounded-lg p-2 inline-block mt-2 text-blue-700 text-sm">Join Course</a>
      </div>
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">AutoCAD</h3>
        <p className="text-sm">
          AutoCAD is pivotal in civil and mechanical engineering, streamlining
          tasks like drafting, designing, and project management. It enhances
          precision in creating blueprints, structural layouts, and mechanical
          components, crucial for efficient construction and manufacturing
          processes across diverse engineering applications.
        </p>
        <a href="https://wa.link/wfzvss" className="bg-yellow-300 rounded-lg p-2 inline-block mt-2 text-blue-700 text-sm">Join Course</a>
      </div>
     <div className="mb-8">
     <h3 className="text-lg font-semibold text-blue-800 mb-2">Computer Networking</h3>
      <p className="text-sm">
        Computer networking involves the practice of connecting computer systems
        and devices to facilitate data exchange and communication. It
        encompasses the design, implementation, and management of networks using
        technologies like routers, switches, and protocols such as TCP/IP.
        Networking enables sharing resources, accessing the internet, and
        supporting various applications across different environments.
      </p>
      <a href="https://wa.link/wfzvss" className="bg-yellow-300 rounded-lg p-2 inline-block mt-2 text-blue-700 text-sm">Join Course</a>
     </div>
      <div>
        <h3 className="text-lg font-semibold text-blue-800 mb-2">Electrical Fundamentals</h3>
        <p className="text-sm">
          Electrical fundamentals cover the basic principles and concepts of
          electricity, including voltage, current, resistance, and circuits.
          Understanding these fundamentals is essential for designing,
          analyzing, and troubleshooting electrical systems in various
          applications such as power generation, distribution, and electronics.
        </p>
        <a href="https://wa.link/wfzvss" className="bg-yellow-300 rounded-lg p-2 inline-block mt-2 text-blue-700 text-sm">Join Course</a>
      </div>
    </div>
  );
};

export default Aboutcourse;
