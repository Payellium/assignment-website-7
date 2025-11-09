import React from "react";
import Calender from "../../assets/Calender.png";

const Ticket = ({ ticket }) => {
  return (
    <div>
        <div className="card p-4 border border-gray-200">
            <div className="flex justify-between items-center">
                <h4>{ticket.title}</h4>
                <p className="btn">{ticket.status}</p>
            </div>
            <p>{ticket.description}</p>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="flex gap-3">
                    <p>#{ticket.id}</p>
                    <span>{ticket.priority} PRIORITY</span>
                </div>
                <div className="flex gap-3">
                    <p>{ticket.customer}</p>
                    <img src={Calender} alt="" />
                    <span>{ticket.createdAt}</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Ticket;
