import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";



const fetchTickets = async() =>{
  const res = await fetch("/public/tickets.json");
  return res.json();
}
const ticketsPromise = fetchTickets();
function App() {

  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="max-w-[1440px] mx-auto">
        <h2>Customer Tickets</h2>
      </div>
      <Suspense fallback="Tickets are loading...">
        <Tickets ticketsPromise={ticketsPromise}></Tickets>
      </Suspense>

      
    </>
  );
}

export default App;
