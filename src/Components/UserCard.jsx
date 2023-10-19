import React from "react";
import "./UserCard.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const UserCard = ({ display, data }) => {
  // console.log(data);
  return (
    <div className="usrCrd">
      <div className="usrCrd-h-p">
        <h6>{data.t.id}</h6>
      </div>
      <div className="usrCrd-c-t">
        <AiFillCheckCircle className="usrCrd-c-t-icon" />
        <p>{data.t.title}</p>
      </div>
      <div className="usrCrd-p-d-t">
        <BsFillBarChartFill className="usrcrd-p-d-t-icon"></BsFillBarChartFill>
        <div className="usrCrd-d-t">
          <GoDotFill className="usrCrd-d-t-icon" />
          <h6>{data.t.tag[0]}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
