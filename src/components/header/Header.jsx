import React, { useState } from "react";
import {
  BiSearchAlt2,
  BiMessageRoundedDots,
  BiBell,
  BiMicrophone,
} from "react-icons/bi";
import { BsQuestionCircle, BsDropbox } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { GiEarthAsiaOceania } from "react-icons/gi";
import MobileHeader from "./MobileHeader";
const Header = () => {
  const [showlang, setshowlang] = useState(false);
  const [isListening, setIsListenings] = useState(false);

  const startListening = () => {
    setIsListenings(true);
  };
  const stopListening = () => {
    setIsListenings(false);
  };

  const showlanguage = () => {
    setshowlang(!showlang);
  };

  return (
    <>
      <div className="w-full md:h-[80px] bg-white z-50 sticky top-0 md:flex hidden items-center justify-between px-4  md:px-11 overflow-hidden text-black  shadow-lg gap-3">
        <h2> Logo </h2>
        <div className="flex-1/2 border lg:flex hidden items-center md:gap-2 gap-1 px-3 rounded-2xl overflow-hidden bg-slate-100 ">
          <span className="border-r-2 px-2 border-s-teal-500 cursor-pointer bg-transparent">
            All
          </span>
          <input
            type="text"
            className="w-full px-2 py-2 bg-transparent outline-none "
            placeholder="Search Something"
          />
          <button onClick={isListening ? stopListening : startListening}>
            <BiMicrophone size={32} color={isListening ? "red" : "green"} />
          </button>
          {isListening ? <p>Listening...</p> : <p>not listening.</p>}
          <BiSearchAlt2 size={32} />
        </div>
        <div className="flex items-center h-full py-1 md:py-3   md:gap-3 gap-2">
          <NavLink
            href={"/"}
            className=" rounded-full px-2 py-2    md:flex hidden md:gap-1 items-center"
          >
            <BsDropbox />
            <span>Become a seller </span>
          </NavLink>
          <NavLink
            to={"/chat"}
            className=" rounded-full px-2 py-2  md:flex hidden md:gap-1 items-center"
          >
            <BiMessageRoundedDots />
            <span className="md:block hidden"> Chat</span>
          </NavLink>

          <span className="md:hidden flex">
            <BsQuestionCircle />
          </span>
          <NavLink
            to={"/help"}
            className=" rounded-full md:px-2 py-2 flex md:gap-1 items-center"
          >
            <BsQuestionCircle />
            <span className="block px-2 "> Help</span>
          </NavLink>

          {/* <span className="md:flex hidden">
            <NotificationPopOver />
          </span> */}

          <NavLink
            to={"/login"}
            className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
          >
            <AiOutlineUser />
            <span> Login </span>
          </NavLink>

          <div
            className="flex flex-row align-items-center justify-content-center gap-1 z-50 cursor-pointer "
            onClick={() => showlanguage()}
          >
            <GiEarthAsiaOceania />
            <span>EN</span>
          </div>
          {showlang ? (
            <div className="fixed right-5 top-12  " style={{ zIndex: "9999" }}>
              <NavLink>
                <p>Hindi</p>
                <p>English</p>
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
      <MobileHeader />
    </>
  );
};

export default Header;
