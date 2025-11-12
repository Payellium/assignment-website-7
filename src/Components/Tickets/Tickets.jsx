import React, { use, useState } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({
  ticketsPromise,
  handleCount,
  count,
  setCount,
  handleResolvedCount,
}) => {
  const ticketsData = use(ticketsPromise);

  const [task, setTask] = useState([]);

  const addTask = (ticket) => {
    setTask([...task, ticket]);
  };

  const [completed, setCompleted] = useState([]);

  const handleComplete = (ticketRemove) => {
    const newTask = task.filter((ticket) => ticket !== ticketRemove);
    setTask(newTask);
    setCount(count - 1);
    handleResolvedCount();
    const newCompleted = [...completed, ticketRemove];
    setCompleted(newCompleted);
  };

  return (
    <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ticketsData.map((ticket) => (
          <Ticket
            addTask={addTask}
            handleCount={handleCount}
            key={ticket.id}
            ticket={ticket}
          ></Ticket>
        ))}
      </div>
      <div>
        <h2 className="text-2xl font-semibold">Task Status</h2>
        <div>
          {task.length === 0 ? (
            <p>Select a ticket to add to task status</p>
          ) : (
            <div>
              {task.map((ticket, index) => (
                <h2
                  className=" text-xl font-medium mt-5 border border-gray-300 p-4 bg-white text-black"
                  key={index}
                >
                  {ticket.title} <br />{" "}
                  <button
                    onClick={() => handleComplete(ticket)}
                    className="bg-[#02A53B] text-white p-4 rounded-lg w-full mt-3"
                  >
                    Complete
                  </button>
                </h2>
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mt-5">Resolved Task</h2>
          <ul>
            {completed.length === 0 ? (
              <p>No resolved task yet</p>
            ) : (
              <li className="flex-wrap">
                {completed.map((ticket) => (
                  <div
                    className=" border-b border-gray-400 bg-[#E0E7FF] text-xl font-medium p-4 text-black"
                    key={ticket.id}
                  >
                    {ticket.title} 
                  </div>
                ))}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
