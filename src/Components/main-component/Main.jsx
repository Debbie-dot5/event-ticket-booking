import { Link } from "react-router-dom";
import "./main.css";
import { useState } from "react";


const Tickets = [
  {
    name: "Regular Access",
    price: "Free",
    date: "20/52",
  },
  {
    name: "VIP Access",
    price: "$50",
    date: "20/52",  
  },
  {
    name: "VVIP Access",
    price: "$150",
    date: "20/52",
  },
]

const Main = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <>
      <div className=" bg-[#041E23] flex flex-col  items-center justify-center gap-[32px] max-w-[700px] w-full p-[24px] md:p-[48px] rounded-[40px] border border-[#0E464F] relative mt-[46px]  mx-auto ">
        <h2 className="text-[#FFF] flex justify-between items-center font-[JejuMyeongjo] text-[24px] md:text-[32px] font-normal self-stretch text-center md:text-start">
          Ticket Selection  <span className="text-base">Step 1/3</span>
        </h2>

        <hr className="relative h-[4px] self-stretch bg-[#07373F] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[30%] before:bg-[#24A0B5] before:rounded-full" />


        <div className="flex flex-col gap-[24px] md:gap-[32px] p-[16px] md:p-[24px] justify-between items-start self-stretch rounded-[32px] bg-[#08252B] border border-[#0E464F] w-full">
          <div className="section-one flex flex-col gap-[8px] self-stretch h-auto md:h-[200px] items-center p-[16px] md:p-[24px] rounded-[24px]">
            <div className="flex flex-col gap-[8px] items-center text-center">
              <h2 className="heading font-[Road rage] self-stretch text-[48px] md:text-[62px] leading-[62px] ">Techember Fest ’25</h2>
              <p className="w-full md:w-[340px] text-[14px] md:text-[16px] font-normal text-[#FAFAFA]">
                Join us for an unforgettable experience at [Event Name]! Secure your spot now.
              </p>
            </div>

            <div className="text-[#FAFAFA] flex flex-col md:flex-row md:items-center gap-[8px] md:gap-[16px] text-center">
              <p>📍 [Event Location]</p>
              <span className="hidden md:inline">|</span>
              <p>March 15, 2025 | 7:00 PM</p>
            </div>
          </div>

          <hr className="h-[4px] self-stretch bg-[#07373F]" />

          <div className="flex flex-col gap-[16px] self-stretch items-center p-[16px] rounded-[24px] border border-[#07373F] bg-[#052228] w-full">
            <h3 className="w-full text-white">Select Ticket Type:</h3>

            <div className="flex flex-wrap gap-[12px] w-full justify-center">
              {Tickets.map((ticket, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTicket(index)}
                  className={`flex flex-col  w-full  md:justify-center md:items-center w-[140px] md:w-[158px] h-[110px] p-[12px] rounded-[12px] border cursor-pointer transition-all duration-300 ${
                    selectedTicket === index
                      ? "bg-[#197686] border-[#FAFAFA] shadow-lg scale-105"
                      : "bg-transparent border-[#197686] hover:bg-[#197686]/50"
                  }`}
                >
                  <h3 className="text-[#FAFAFA] text-lg font-bold">{ticket.price}</h3>
                  <p className="text-[#FAFAFA] text-sm uppercase leading-[150%]">{ticket.name}</p>
                  <p className="text-[#FAFAFA] text-xs">{ticket.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full gap-[8px]">
            <label className="text-[16px] font-normal text-white">Number of Tickets</label>
            <select className="p-[12px] w-full text-white bg-transparent rounded-[12px] border border-[#07373F]">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>

          <div className="flex flex-col text-white md:flex-row justify-center items-center gap-[12px] w-full">
            <button className="border border-[#24A0B5] text-[#24A0B5] w-full md:w-full px-[16px] py-[10px] rounded-[8px]">
              Cancel
            </button>
            <Link  className="w-full" to="/get-ticket">
            <button className="w-full md:w-full bg-[#24A0B5] px-[16px] py-[10px] rounded-[8px]">
              Next
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default Main;
