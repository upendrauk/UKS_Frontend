import React, { useEffect, useState } from "react";
// import "./status.css";
import LargeCard from "../Components/LargeCard";

const Status = ({ display, data }) => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const backlog = [];
    const todo = [];
    const inProg = [];
    const completed = [];
    const cancled = [];
    for (let i = 0; i < data?.tickets.length; i++) {
      // console.log(data.tickets[i].status);
      if (data.tickets[i].status === "Backlog") {
        backlog.push(data.tickets[i]);
      } else if (data.tickets[i].status === "Todo") {
        todo.push(data.tickets[i]);
      } else if (data.tickets[i].status === "In progress") {
        inProg.push(data.tickets[i]);
      } else if (data.tickets[i].status === "Done") {
        completed.push(data.tickets[i]);
      } else if (data.tickets[i].status === "Cancled") {
        cancled.push(data.tickets[i]);
      }
    }

    setShowData([backlog, todo, inProg, completed, cancled]);
    if (display.ordering === "priority") {
      setShowData(
        [backlog, todo, inProg, completed, cancled].map((section) => {
          return section.sort((a, b) => a.priority - b.priority);
        })
      );
    }
    // console.log(display.ordering);
    if (display.ordering === "title") {
      const sortedShowData = [
        backlog.sort((a, b) => a.title.localeCompare(b.title)),
        todo.sort((a, b) => a.title.localeCompare(b.title)),
        inProg.sort((a, b) => a.title.localeCompare(b.title)),
        completed.sort((a, b) => a.title.localeCompare(b.title)),
        cancled.sort((a, b) => a.title.localeCompare(b.title)),
      ];

      setShowData(sortedShowData);
    }

    // console.log(showData);
  }, [display, data]);

  return (
    <div className="status">
      {showData &&
        showData.map((d) => <LargeCard display={display} data={d} />)}
    </div>
  );
};

export default Status;
