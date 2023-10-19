import React, { useEffect, useState } from "react";
// import "./user.css";
import LargeCard from "../Components/LargeCard";

const User = ({ display, data }) => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const users = data?.users;
    const userDatas = [];
    for (let k = 0; k < users?.length; k++) {
      let temp = [];
      for (let i = 0; i < data?.tickets?.length; i++) {
        if (data.tickets[i].userId === users[k].id) {
          temp.push({ u: users[k], t: data.tickets[i] });
        }
      }
      userDatas.push(temp);
    }
    setShowData(userDatas);
    // console.log(showData);
    if (display.ordering === "priority") {
      userDatas.sort((a, b) => a[0].t.priority - b[0].t.priority); // Sort users by the priority of their first ticket
      setShowData(userDatas);
    }
    // console.log(display.ordering);
    if (display.ordering === "title") {
      userDatas.sort((a, b) => a[0].t.title.localeCompare(b[0].t.title)); // Sort users by the title of their first ticket
      setShowData(userDatas);
    }
  }, [display, data]);
  return (
    <div className="user">
      {showData &&
        showData.map((d) => <LargeCard display={display} data={d} />)}
    </div>
  );
};

export default User;
