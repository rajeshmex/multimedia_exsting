import React from "react";
import { AtSign, Phone, User2 } from "lucide-react";
import MainMsgInput from "./MainmsgInput";
import AddImage from "./AddImage";
import Password from "./password";
import Recaptcha from "./Recaptcha";

const CreateTicket = () => {
  const handleFunction = () => navigate.push("/all-tickets", { state: true });

  return (
    <>
      <div className="w-full">
        <div className="px-3 py-5 ">
          <div className=" w-full">
            {/* heading  */}
            <div className="w-full text-center grid place-items-center py-2 ">
              <h2 className="text-lg md:text-[25px] font-bold text-[#ff10f0]">
                New Ticket
              </h2>
            </div>
            {/* form  header */}
            <div className="flex w-full items-center justify-center">
              <div className="flex flex-wrap px-2 md:space-x-3  items-center md:w-[75%] w-full shadow-md py-3  rounded-sm   text-[1.3rem]">
                <div className="shadow-sm py-2 px-3">
                  <div className="text-[1rem] flex items-center gap-1">
                    <User2 color="#ccc" /> :
                    <span className="text-[1rem]  font-semibold text-slate-700">
                      User Name
                    </span>
                  </div>
                </div>
                <div className="shadow-sm py-2 px-3">
                  <div className="text-[1rem] flex items-center gap-1">
                    <AtSign color="#ccc" /> :
                    <span className="text-[1rem]  font-semibold text-slate-700">
                      test@gmail.com
                    </span>
                  </div>
                </div>

                <div className="shadow-sm py-2 px-3">
                  <div className="text-[1rem] flex items-center gap-1">
                    <Phone color="#ccc" /> :
                    <span className="text-[1rem]  font-semibold text-slate-700">
                      9876543210
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-[100%] flex justify-content-center align-items-center">
              <div className="md:w-[80%] w-full flex flex-wrap items-center py-2 ">
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    Additional Phone number
                  </div>
                  <input
                    type="text"
                    className="w-full border-[1.6px] rounded-sm py-2 px-3"
                  />
                </div>
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    {" "}
                    Priority{" "}
                  </div>

                  <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
                    <option value=""> Select Priority </option>
                    <option value=""> Low </option>
                    <option value=""> High </option>
                    {/* <option value=""> Option 1 </option> */}
                  </select>
                </div>
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    {" "}
                    Help Topics{" "}
                  </div>

                  <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
                    <option value=""> Select Priority </option>
                    <option value=""> Low </option>
                    <option value=""> High </option>
                    {/* <option value=""> Option 1 </option> */}
                  </select>
                </div>
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    {" "}
                    Choose your Product{" "}
                  </div>

                  <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
                    <option value=""> Select Products </option>
                    <option value=""> Mobile </option>
                    <option value=""> Books </option>
                    <option value=""> others </option>
                    {/* <option value=""> Option 1 </option> */}
                  </select>
                </div>
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    {" "}
                    Select Service{" "}
                  </div>

                  <select className="w-full py-2 px-3 border-[1.6px] rounded-sm">
                    <option value=""> Select Products </option>
                    <option value=""> Mobile </option>
                    <option value=""> Books </option>
                    <option value=""> others </option>
                    {/* <option value=""> Option 1 </option> */}
                  </select>
                </div>
                <div className="md:w-1/2 w-full px-1 mb-2">
                  <div className="text-sm md:text-[1.2rem] font-bold">
                    Subject
                  </div>
                  <input
                    type="text"
                    className="w-full border-[1.6px] rounded-sm py-2 px-3"
                    placeholder="Subject"
                  />
                </div>
                <MainMsgInput />
                <AddImage />
                <Password />
                <Recaptcha />
                <div className="md:w-[80%] w-full p-1 flex space-x-2 items-center py-3">
                  <button
                    className="py-2 w-[130px] bg-[#ff10f0] text-[white] font-semibold"
                    onClick={handleFunction}
                  >
                    Submit Ticket
                  </button>
                  <button className="py-2 w-[130px] bg-[#f75050] text-[white] font-semibold">
                    Reset
                  </button>
                  <button className="py-2 w-[130px] bg-[violet] text-[white] font-semibold">
                    Cancel Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTicket;
