import React from "react";
import "./stylesheet/card.css"
import { RiVidiconLine } from "react-icons/ri";
import { GrValidate } from "react-icons/gr";
import { MdOutlineEventSeat } from "react-icons/md";




const Card = (props) => {
  return (
    <div className="card-course rounded-lg overflow-hidden border ">
      <img src={props.img}  className="overflow-hidden" alt="" />
      <div className="card-content">
        <p className="first-para">{props.duration}</p>
        <h4 className="font-semibold text-xl " >{props.name}</h4>
        <h5  className="font-semibold text-xl mb-3">{props.branch}</h5>
        <div className="last-div">
        <div className="flex justify-between text-sm text-blue-700 font-light mb-2"> 
          <p className="last-para flex items-center gap-2 ">
            <RiVidiconLine className=""/>
            Online Classes</p>
          <p className="last-para flex items-center gap-2 ">
            <GrValidate/>
            Valid Certificate</p>
        </div>
        <div className="flex justify-between text-sm text-blue-700 font-light">
          <p className="last-para flex items-center gap-2 ">
            <MdOutlineEventSeat />
            40 Seats Available</p>
          <p className="last-para"> ₹ 1000/-</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
