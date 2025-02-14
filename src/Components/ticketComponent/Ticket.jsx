import "./ticket.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Ticket = () => {
  const location = useLocation();
  const data = location.state || {};
  return (
    <>
      <div className=" bg-[#041E23] flex flex-col  items-center justify-center gap-[22px] max-w-[90%]  md:max-w-[700px] w-full p-[24px] md:p-[38px] rounded-[40px] border border-[#0E464F] relative mt-[46px]  mx-auto ">
        <h2 className="flex justify-between items-center text-[#FFF] font-[JejuMyeongjo] text-[24px] md:text-[32px] font-normal self-stretch text-center md:text-start">
          Ready <span className="text-base">Step 3/3</span>
        </h2>

        <hr className="relative h-[4px] self-stretch bg-[#07373F] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[100%] before:bg-[#24A0B5] before:rounded-full" />

        <div className="text-center text-white">
          <h3 className="text-xl font-bold">Your Ticket is Booked!</h3>
          <p className="text-sm text-gray-300">
            You can download or check your email for a copy
          </p>
        </div>

        <div className=" relative w-full flex justify-center">
          <img src="/bg.svg" alt="ticket" className="w-[300px] "  />
          

          <div className="user-cont  flex w-[90%] md:max-w-[260px] min-h-[300px] h-[420px] md:h-[446px] p-[10px] items-center border border-[#24A0B5] absolute  top-[3%]    rounded-[12px] bg-[#041E23]">
            <div className="w-full h-auto ">
              <div className="flex flex-col w-full  gap-[4px] justify-center items-center text-center">
                <h2 className="text-white font-bold font-[Road rage] text-[24px] pt-6 ">
                  Techember Fest ”25
                </h2>

                <div className="text-[#FAFAFA] flex flex-col justify-center items-center gap-[4px] p-[4px] ">
                  <p className="text-[10px] font-Roboto leading-[15px] font-normal">
                    📍 04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p className="text-[10px] font-Roboto leading-[15px] font-normal">
                    {" "}
                    📆March 15, 2025 | 7:00 PM
                  </p>
                </div>
              </div>

              {/* otthers  */}
              <div className="w-[140px] h-[140px] mx-auto mt-[10px] mb-[8px] rounded-[12px] border-4 border-[#24A0B5]/50">
              {data.avatarUrl && (
    <img src={data.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
  )}</div>

              <div className="bg-[#08343C] w-full h-auto min-h-[150px] text-white p-[4px]  rounded-[12px]">
                {/* Grid for Name, Email, Ticket Type, and Ticket Count */}
                <div className="grid grid-cols-2 gap-[4px]">
                  <div className="flex flex-col">
                    <p className="text-[10px] font-normal font-Roboto opacity-[0.33]">
                      Enter your name
                    </p>
                    <span className="text-[12px] font-bold">{data.name}</span>
                  </div>

                  <div className="flex flex-col overflow-hidden">
                    <p className="text-[10px] font-normal font-Roboto opacity-[0.33]">
                      Enter your email*
                    </p>
                    <span className="text-[12px] font-bold ">
                    {data.email}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[10px] font-normal font-Roboto opacity-[0.33]">
                      Ticket Type:
                    </p>
                    <span className="text-[12px] font-bold">
                      Regular Access
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <p className="text-[10px] font-normal font-Roboto opacity-[0.33]">
                      Ticket for:
                    </p>
                    <span className="text-[12px] font-bold">1</span>
                  </div>
                </div>

                {/* Separate Textarea Section (Not Affected by Grid) */}
                <div className="mt-2">
                  <p className="text-[10px] font-normal font-Roboto opacity-[0.33]">
                    Special request?
                  </p>
                  <textarea 
                    className="p-2 text-[10px] w-full rounded-md text-white"
                    value={data.comment} readOnly
                    rows={3}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[3%]">
            <img src="/barcode.svg" alt="" />
          </div>
        </div>

        <div className="flex flex-col text-white md:flex-row justify-center items-center gap-[12px] w-full">

          <Link  className="w-full" to="/">
            <button className="border border-[#24A0B5] text-[#24A0B5] w-full md:w-full px-[16px] py-[10px] rounded-[8px]">
            Book Another Ticket
            </button>
          </Link>
           
            <button className="w-full md:w-full bg-[#24A0B5] px-[16px] py-[10px] rounded-[8px]">
            Download Ticket
            </button>
          
          </div>

        
      </div>
    </>
  );
};

export default Ticket;
