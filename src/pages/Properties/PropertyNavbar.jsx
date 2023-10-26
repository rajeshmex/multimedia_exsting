import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

// import { BsCart } from "react-icons/bs";;
const PropertyNavbar = () => {
  const propertyType = [
    "Flat",
    "Shop",
    "House",
    "Land",
    "Buildings floor",
    "Apartment",
    "Villa",
  ];

  return (
    <>
      <div className="w-full z-50 flex items-center justify-between md:px-9 px-2 py-3 sticky top-0 bg-white  shadow-lg">
        <NavLink to={"/job-portal"}>
          {" "}
          <div className="ml-5">Logo</div>{" "}
        </NavLink>
        <div className="flex md:gap-2 w-[70%]  items-center ">
          <div className="flex gap-2  w-[34%] ">
            <select
              id="category"
              name="category"
              // value={category}
              // onChange={handleCategoryChange}
              className="w-full p-2 mt-1 text-sm  rounded-lg"
            >
              <option value="all">Select Renet Property</option>
              {propertyType.map((val, id) => {
                return (
                  <>
                    <option value="food">{val}</option>
                  </>
                );
             })} 
            </select>
            <select
              id="category"
              name="category"
              // value={category}
              // onChange={handleCategoryChange}
              className="w-full p-2 mt-1 text-sm  rounded-lg"
            >
              <option value="all">Select Buy Property</option>
              <option value="food">Food</option>
            </select>
          </div>
          {propertyType.map((val, id) => {
            return (
              <>
                <NavLink
                  to={"/"}
                  className="md:py-2 md:px-3 px-1 py-0  md:flex hidden  items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
                >
                  <span> {val} </span>
                </NavLink>
              </>
            );
          })}
          <NavLink
            to={"/login"}
            className="border-2 rounded-full md:px-5 px-3  md:py-5 py-0 border-pink-300 flex flex-col "
          >
            {/* <AiOutlineUser /> */}
            <span> Seller-Point </span>
          </NavLink>

          <span className="flex  px-3">{/* <NotificationPopOver /> */}</span>
        </div>
        <div className="flex md:gap-4 gap-3   items-center ">
          <NavLink
            to={"/login"}
            className="border-2 rounded-full md:px-6 px-3  md:py-1 py-0   border-pink-300 flex  items-center gap-2"
          >
            <AiOutlineUser />
            <span> Login </span>
          </NavLink>
          <NavLink
            to={"/"}
            className="md:py-2 md:px-3 px-1 py-0  md:flex hidden  items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <span> Home </span>
          </NavLink>
          <NavLink
            to={"/"}
            className="md:py-2 md:px-3 px-1 py-0  md:flex hidden  items-center gap-2 hover:text-[#2dd4bf] duration-200 transition-colors ease-out"
          >
            <div className="flex mr-5">
              <AiOutlineShoppingCart size={30} />
              <span className="block border text-center rounded-full bg-red-400 absolute top-0 px-1 pl-2 right-5">
                0
              </span>
            </div>
          </NavLink>

          {/* <div className="md:hidden block cursor-pointer w-max">
            <JobHamburger />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default PropertyNavbar;
