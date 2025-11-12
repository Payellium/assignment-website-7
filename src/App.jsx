import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Tickets from "./Components/Tickets/Tickets";
import Footer from "./Components/Footer/Footer";
import { toast, ToastContainer } from 'react-toastify';



const fetchTickets = async() =>{
  const res = await fetch("/public/tickets.json");
  return res.json();
}
const ticketsPromise = fetchTickets();
function App() {
  const [count, setCount] = useState(0);
  const handleCount = () =>{
    setCount(count+1);
    toast("Ticket added to Task Section");
  }

  const [resolvedCount, setResolvedCount] = useState(0);
  const handleResolvedCount = () =>{
    setResolvedCount(resolvedCount+1);
  }
  
  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedCount={resolvedCount} count={count} ></Banner>

      <div className="max-w-[1440px] mx-auto">
        <h2>Customer Tickets</h2>
      </div>
      <Suspense fallback="Tickets are loading...">
        <Tickets handleResolvedCount={handleResolvedCount} count={count} setCount={setCount} handleCount={handleCount} ticketsPromise={ticketsPromise}></Tickets>
      </Suspense>

      <Footer></Footer>
      <ToastContainer/>
    </>
  );
}



export default App;
