import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketsPromise, handleCount }) => {
  const ticketsData = use(ticketsPromise);
  console.log(ticketsData);
  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ticketsData.map((ticket) => (
            <Ticket handleCount={handleCount} key={ticket.id} ticket={ticket}></Ticket>
            ))}
        </div>
        <div>
            <h2 className="text-2xl font-semibold">Task Status</h2>
            <p className="mt-2">Select a ticket to add to Task Status</p>
            <h2 className="text-2xl font-semibold mt-5">Resolved Task</h2>
            <p className="mt-2">No resolved tasks yet.</p>
        </div>
    </div>
  );
};

export default Tickets;
