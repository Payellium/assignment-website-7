import React from "react";
import Calender from "../../assets/Calender.png";

const Ticket = ({ ticket, handleCount }) => {
  return (
    <div>
      <div onClick={handleCount} className="card p-4 border border-gray-200 bg-white text-black">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-semibold">{ticket.title}</h4>
          <p
            className={
              ticket.status === "Open"
                ? "bg-[#B9F8CF] text-[#0B5E06] font-bold p-2 rounded-3xl"
                : "bg-[#F8F3B9] text-[#FEBB0C] font-bold p-2 rounded-3xl"
            }
          >
            {ticket.status}
          </p>
        </div>
        <p className="text-[#627382]">{ticket.description}</p>
        <div className="flex flex-col md:flex-row justify-between mt-2 font-bold">
          <div className="flex gap-3">
            <p className="text-[#627382]">#{ticket.id}</p>
            <span
              className={
                ticket.priority === "High"
                  ? "text-[#F83044]"
                  : ticket.priority === "Critical"
                  ? "text-purple-500"  
                  : ticket.priority === "Medium"
                  ? "text-[#FEBB0C]"
                  : "text-[#02A53B]"
              }
            >
              {ticket.priority} PRIORITY
            </span>
          </div>
          <div className="flex gap-3 text-[#627382]">
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
