import React from "react";
import allLinks from "./HeaderConstant";
import { NavLink } from "react-router-dom";

const Secheader = () => {
  return (
    <>
      <div className="w-full  md:flex hidden overflow-x-auto bg-white flex-nowrap shadow-md border-b border-b-[#363636]  ">
        {allLinks.map((elm) => {
          // console.log(elm);
          return (
            <NavLink
              to={elm.path}
              className="flex flex-grow flex-1 py-3 hover:text-sky-800 font-semibold capitalize transition-colors duration-150 ease-out px-1 text-center items-center justify-center"
              key={elm.id}
            >
              <span className="hover:text-[#ff10f0]"> {elm.name} </span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Secheader;
