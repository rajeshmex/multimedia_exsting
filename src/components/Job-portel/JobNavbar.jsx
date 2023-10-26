import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
const JobNavbar = () => {
  return (
    <>
      <div className="w-full z-50 flex items-center justify-between md:px-9 px-2 py-3 sticky top-0 bg-white  shadow-lg">
        <NavLink to={"/job-portal"}> Logo </NavLink>
        <div className="flex md:gap-4 gap-1 items-center ">
          <NavLink
            to={"/"}
            className="md:py-2 md:px-3 px-1 py-0  md:flex hidden  items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <span> Home </span>
          </NavLink>
          <NavLink
            to={"/login"}
            className="md:px-3 px-1  md:py-2 py-0  md:flex hidden items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <span> Contact </span>
          </NavLink>
          <NavLink
            to={"/job-portal/job-list"}
            className="md:px-3 px-1  md:py-2 py-0  md:flex hidden  items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <span> Jobs </span>
          </NavLink>

          <span className="flex  px-3">{/* <NotificationPopOver /> */}</span>
          <NavLink
            to={"/login"}
            className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
          >
            <AiOutlineUser />
            <span> Login </span>
          </NavLink>
          <NavLink
            to={"/createjob"}
            className=" md:px-6 px-3  md:py-2 py-1  md:mx-0 mx-2 flex  items-center gap-2 bg-teal-400 text-white rounded-[4px]"
          >
            {/* <User2 strokeWidth={0.8} className="md:block hidden" /> */}
            <span> Post a Job </span>
          </NavLink>

          {/* <div className="md:hidden block cursor-pointer w-max">
            <JobHamburger />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default JobNavbar;
