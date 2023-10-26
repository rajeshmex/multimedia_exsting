import React, { useState } from "react";
import {
  Clipboard,
  CloudFog,
  IndianRupee,
  Locate,
  LocateFixed,
  RectangleHorizontal,
  User2,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import CategoryPropertyData from "./PropertyConstatnt";
const PropertyCard = () => {
  let image = false;
  const [openModel, setOpenModel] = useState(false);
  const handleContact = () => {
    if (!paid) {
      setOpenModel((prev) => !prev);
    }
  };

  const descriptionMaxLength = 100;
  const navigate = useNavigate();

  const deleteProp = () => {
    window.confirm("Confirm You want to Delete the item");
  };
  return (
    <>
      <div className="relative flex gap-3 rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        {/* <div
            className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white border shadow-lg shadow-blue-gray-500/40"
            style={{ height: "200px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
              alt="ui/ux review check"
              style={{ height: "200px" }}
            />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
          </div> */}
        {CategoryPropertyData.map((val, id) => {
          return (
            <>
              <div className="relative flex w-full max-w-[28rem] p-3 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="w-full border flex flex-col bg-white space-y-1 ">
                  <div
                    className="w-full  h-[330px] flex flex-col  shadow-md bg-white 
      duration-200 ease-in relative"
                  >
                    <div className="w-full flex items-center  justify-center  py-1">
                      <p className="text-[1.2rem] font-bold text-[rgb(21,138,237)]">
                        This {val.category} is for sale
                      </p>
                    </div>
                    <div className="flex space-x-2 h-full p-1 w-full items-start flex-wrap md:flex-nowrap">
                      {/* <img
                      src={
                        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                      }
                      alt=""
                      className="md:w-[35%] w-full h-full object-cover aspect-auto "
                    /> */}
                      <div className="w-full py-2 ">
                        <div className="flex w-full items-center space-x-1">
                          <User2 />

                          <h1 className="uppercase font-semibold leading-tight truncate ">
                            {val.sellername}
                          </h1>
                        </div>

                        <div className="flex items-center gap-2 py-1 text-[0.9rem]">
                          <LocateFixed />
                          <span>
                            {" "}
                            {val.state} {val.village} , {val.district}{" "}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 py-1 text-[0.9rem]">
                          <Clipboard />
                          <span> TS Code : {val.tscode}</span>
                        </div>

                        <div className="flex gap-4 w-full justify-between flex-wrap">
                          <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                            <IndianRupee />
                            <span className="text-[1rem] font-semibold">
                              {val.price}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 pb-1 text-[0.9rem] pr-3 font-semibold">
                            <Locate />
                            <span className="text-[1rem] ">
                              {" "}
                              Area :{val.area} hectares{" "}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-4 flex-wrap">
                          <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                            <RectangleHorizontal />
                            <span className="text-[1rem]">
                              Measles:{" "}
                              {val.measles.slice(0, descriptionMaxLength)}
                              {val.measles.length > descriptionMaxLength
                                ? "..."
                                : ""}
                            </span>
                          </div>
                        </div>

                        <label className="text-[1rem] font-semibold">
                          Description{" "}
                        </label>
                        <div className="flex items-start gap-2 pb-1 text-[0.9rem]">
                          <span className="font-light text-[0.8rem] onlyLimitedLine">
                            {val.description.slice(0, descriptionMaxLength)}
                            {val.description.length > descriptionMaxLength
                              ? "..."
                              : ""}
                          </span>
                        </div>

                        <div className="w-full gap-2 flex">
                          <button
                            className="text-white rounded-md w-1/3 py-[5px] bg-[#158aed] text-[0.8rem]  font-semibold
                 hover:bg-[white] hover:text-[#158aed] hover:border-[1.1px] hover:border-[#158aed]
                border-[1.1px] border-transparent duration-200 ease-in-out
                "
                            onClick={() =>
                              navigate.push(
                                `/properties/single-properties/${id}`
                              )
                            }
                          >
                            {" "}
                            Add to cart
                            <span ca> </span>
                          </button>
                          <button
                            className="text-white rounded-md w-1/3 py-[5px] bg-[#158aed] text-[0.8rem]  font-semibold
                 hover:bg-[white] hover:text-[#158aed] hover:border-[1.1px] hover:border-[#158aed]
                border-[1.1px] border-transparent duration-200 ease-in-out
                "
                            onClick={() =>
                              navigate.push(
                                `/properties/single-properties/${id}`
                              )
                            }
                          >
                            {" "}
                            View
                            <span ca> </span>
                          </button>
                          <button
                            className="text-white rounded-md w-1/3 py-[5px] bg-[#158aed] text-[0.8rem]  font-semibold
                 hover:bg-[white] hover:text-[#158aed] hover:border-[1.1px] hover:border-[#158aed]
                border-[1.1px] border-transparent duration-200 ease-in-out
                "
                            onClick={() =>
                              navigate.push(
                                `/properties/single-properties/${id}`
                              )
                            }
                          >
                            {" "}
                            Contact
                            <span ca> </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default PropertyCard;
