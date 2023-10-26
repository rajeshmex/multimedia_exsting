  import React, { useState } from "react";
  import { BiSearchAlt2, BiMessageRoundedDots } from "react-icons/bi";
  import { BsQuestionCircle, BsDropbox } from "react-icons/bs";
  import { AiOutlineUser } from "react-icons/ai";
  import { NavLink } from "react-router-dom";
  import { RxHamburgerMenu } from "react-icons/rx";
  const MobileHeader = () => {
    const [toogle, settoggle] = useState(false);

      
    return (
      <>
        <div className="w-full top-0 sticky md:hidden block bg-white z-50">
          <div
            className={`w-full flex justify-between px-2 items-center duration-150  `}
          >
            <NavLink href={"/"}> Logo </NavLink>

            <div className="flex items-center gap-3 ">
              <NavLink
                href={"/chat"}
                className=" rounded-full px-2 py-2  md:flex hidden md:gap-1 items-center"
              >
                <BiMessageRoundedDots />
                <span className="md:block hidden"> Chat</span>
              </NavLink>
              {/* <span className=" flex">
                <NotificationPopOver />
              </span> */}

              <NavLink
                href={"/help"}
                className=" rounded-full md:px-2 py-2 flex md:gap-1 items-center"
              >
                <BsQuestionCircle />
                <span className="block px-2 "> Help</span>
              </NavLink>

              <NavLink
                href={"/login"}
                className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
              >
                <AiOutlineUser />
                <span> Login </span>
              </NavLink>

              {/* open sheet  button  */}
              <RxHamburgerMenu />
            </div>
          </div>

          <div className="w-full  flex items-center justify-between my-1 px-2">
            <div className="w-full border lg:hidden flex items-center my-1 md:gap-2 gap-1 px-3 rounded-[14px] overflow-hidden bg-slate-100 ">
              <span className="border-r-2 px-2 border-s-teal-500 cursor-pointer bg-transparent">
                All
              </span>
              <input
                type="text"
                className="w-full px-2 py-2 bg-transparent outline-none "
                placeholder="Search Something"
              />
              <BiSearchAlt2 />
            </div>
          </div>
        </div>
      </>
    );
  };

  export default MobileHeader;
