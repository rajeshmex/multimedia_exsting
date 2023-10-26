import { Home, MapPin, MoreVertical } from "lucide-react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AllJobs = ({ elm, requiterId }) => {
  const [openMore, setMore] = useState(false);
  const navigate = useNavigate();

  const HandleMore = (data) => {
    if (data === "view-details") {
      // navigate to  post details page
      navigate("/viewjobs");
      setMore(false);
      return;
    }
    if (data === "edit") {
      // navigate to edit page
      navigate.push(`/requiter/edit-job?id=${requiterId}&jobId=${elm}`);
      setMore(false);
      return;
    } else {
      // delete Item Function Or Api Calls
      setMore(false);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center ">
        <div className="max-w-full flex md:w-[80%] pt-5 flex-wrap">
          <div className="md:w-1/3  w-full  min-h-[250px]  p-1">
            <div className=" border-[1.2px] w-full  cursor-pointer p-2  hover:shadow-md duration-300">
              <div className="w-full flex   justify-between relative">
                <h1 className="font-semibold text-[1.2rem] text-black w-[90%] items-center truncate relative flex justify-between  py-1">
                  <span className="w-full truncate">
                    Job Title Job Title Job Title Job Title Job Title Job Title
                    Job Title Job Title
                  </span>

                  <span
                    className={`px-1 text-center text-[white]  text-[0.7rem]  ${
                      elm === "2" ? "bg-red-500" : "bg-green-400"
                    }`}
                  >
                    {elm === "2" ? "de-active" : "Active"}
                  </span>
                </h1>

                <button onClick={() => setMore((prev) => !prev)}>
                  <MoreVertical />
                </button>

                <div
                  className={`shadow-md absolute right-[18px] top-1 bg-[white]  ${
                    openMore ? "opacity-100 visible" : "invisible opacity-0"
                  } duration-150`}
                >
                  <ul>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("view-details")}
                    >
                      View
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("edit")}
                    >
                      Edit
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("delete")}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-[1.1rem] text-[#262626] uppercase w-full truncate">
                Company Name
              </h2>
              <div className="text-[0.8rem] text-[#158aed] uppercase w-full  flex justify-between py-1">
                <span> Post Date : 12-12-2022 </span>
                <span> full time </span>
              </div>

              <span className="text-[0.9rem] font-bold ">₹12000 - ₹15000</span>
              <p className="w-full text-[1rem] text-[#505050] leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                rem iure soluta dolorem magnam sunt dicta odio at quo
                repudiandae.
              </p>
              <div className="text-[0.8rem] py-1 font-semibold text-[#258aed] flex justify-between">
                <span>2 Opening </span>
                <div className="uppercase flex gap-1 items-center">
                  <span className="">
                    {elm === "2" ? (
                      "apartment"
                    ) : (
                      <Home startOffset={0.5} color="#ccc" size={14} />
                    )}
                  </span>
                  <span> {elm === "2" ? "work from Office" : "Remote"} </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="uppercase flex items-center gap-2">
                  <MapPin />

                  <span className="w-1/2 truncate">
                    {" "}
                    Noida Sector 2 200110{" "}
                  </span>
                </div>

                <button
                  className="relative px-3 py-1 border-[1.2px] rounded-[50px] bg-teal-400 text-[#fff] overflow-hidden truncate"
                  onClick={() =>
                    navigate.push(`/requiter/${elm}?id=${requiterId}`)
                  }
                >
                  Response
                  <span className="  right-1 font-semibold text-[1.1rem] pl-2">
                    12000
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  w-full  min-h-[250px]  p-1 ">
            <div className=" border-[1.2px] w-full  cursor-pointer p-2  hover:shadow-md duration-300">
              <div className="w-full flex   justify-between relative">
                <h1 className="font-semibold text-[1.2rem] text-black w-[90%] items-center truncate relative flex justify-between  py-1">
                  <span className="w-full truncate">
                    Job Title Job Title Job Title Job Title Job Title Job Title
                    Job Title Job Title
                  </span>

                  <span
                    className={`px-1 text-center text-[white]  text-[0.7rem]  ${
                      elm === "2" ? "bg-red-500" : "bg-green-400"
                    }`}
                  >
                    {elm === "2" ? "de-active" : "Active"}
                  </span>
                </h1>

                <button onClick={() => setMore((prev) => !prev)}>
                  <MoreVertical />
                </button>

                <div
                  className={`shadow-md absolute right-[18px] top-1 bg-[white]  ${
                    openMore ? "opacity-100 visible" : "invisible opacity-0"
                  } duration-150`}
                >
                  <ul>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("view-details")}
                    >
                      View
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("edit")}
                    >
                      Edit
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("delete")}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-[1.1rem] text-[#262626] uppercase w-full truncate">
                Company Name
              </h2>
              <div className="text-[0.8rem] text-[#158aed] uppercase w-full  flex justify-between py-1">
                <span> Post Date : 12-12-2022 </span>
                <span> full time </span>
              </div>

              <span className="text-[0.9rem] font-bold ">₹12000 - ₹15000</span>
              <p className="w-full text-[1rem] text-[#505050] leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                rem iure soluta dolorem magnam sunt dicta odio at quo
                repudiandae.
              </p>
              <div className="text-[0.8rem] py-1 font-semibold text-[#258aed] flex justify-between">
                <span>2 Opening </span>
                <div className="uppercase flex gap-1 items-center">
                  <span className="">
                    {elm === "2" ? (
                      "apartment"
                    ) : (
                      <Home startOffset={0.5} color="#ccc" size={14} />
                    )}
                  </span>
                  <span> {elm === "2" ? "work from Office" : "Remote"} </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="uppercase flex items-center gap-2">
                  <MapPin />

                  <span className="w-1/2 truncate">
                    {" "}
                    Noida Sector 2 200110{" "}
                  </span>
                </div>

                <button
                  className="relative px-3 py-1 border-[1.2px] rounded-[50px] bg-teal-400 text-[#fff] overflow-hidden truncate"
                  onClick={() =>
                    navigate.push(`/requiter/${elm}?id=${requiterId}`)
                  }
                >
                  Response
                  <span className="  right-1 font-semibold text-[1.1rem] pl-2">
                    12000
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  w-full  min-h-[250px]  p-1 ">
            <div className=" border-[1.2px] w-full  cursor-pointer p-2  hover:shadow-md duration-300">
              <div className="w-full flex   justify-between relative">
                <h1 className="font-semibold text-[1.2rem] text-black w-[90%] items-center truncate relative flex justify-between  py-1">
                  <span className="w-full truncate">
                    Job Title Job Title Job Title Job Title Job Title Job Title
                    Job Title Job Title
                  </span>

                  <span
                    className={`px-1 text-center text-[white]  text-[0.7rem]  ${
                      elm === "2" ? "bg-red-500" : "bg-green-400"
                    }`}
                  >
                    {elm === "2" ? "de-active" : "Active"}
                  </span>
                </h1>

                <button onClick={() => setMore((prev) => !prev)}>
                  <MoreVertical />
                </button>

                <div
                  className={`shadow-md absolute right-[18px] top-1 bg-[white]  ${
                    openMore ? "opacity-100 visible" : "invisible opacity-0"
                  } duration-150`}
                >
                  <ul>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("view-details")}
                    >
                      View
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("edit")}
                    >
                      Edit
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("delete")}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-[1.1rem] text-[#262626] uppercase w-full truncate">
                Company Name
              </h2>
              <div className="text-[0.8rem] text-[#158aed] uppercase w-full  flex justify-between py-1">
                <span> Post Date : 12-12-2022 </span>
                <span> full time </span>
              </div>

              <span className="text-[0.9rem] font-bold ">₹12000 - ₹15000</span>
              <p className="w-full text-[1rem] text-[#505050] leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                rem iure soluta dolorem magnam sunt dicta odio at quo
                repudiandae.
              </p>
              <div className="text-[0.8rem] py-1 font-semibold text-[#258aed] flex justify-between">
                <span>2 Opening </span>
                <div className="uppercase flex gap-1 items-center">
                  <span className="">
                    {elm === "2" ? (
                      "apartment"
                    ) : (
                      <Home startOffset={0.5} color="#ccc" size={14} />
                    )}
                  </span>
                  <span> {elm === "2" ? "work from Office" : "Remote"} </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="uppercase flex items-center gap-2">
                  <MapPin />

                  <span className="w-1/2 truncate">
                    {" "}
                    Noida Sector 2 200110{" "}
                  </span>
                </div>

                <button
                  className="relative px-3 py-1 border-[1.2px] rounded-[50px] bg-teal-400 text-[#fff] overflow-hidden truncate"
                  onClick={() =>
                    navigate.push(`/requiter/${elm}?id=${requiterId}`)
                  }
                >
                  Response
                  <span className="  right-1 font-semibold text-[1.1rem] pl-2">
                    12000
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/3  w-full  min-h-[250px]  p-1 ">
            <div className=" border-[1.2px] w-full  cursor-pointer p-2  hover:shadow-md duration-300">
              <div className="w-full flex   justify-between relative">
                <h1 className="font-semibold text-[1.2rem] text-black w-[90%] items-center truncate relative flex justify-between  py-1">
                  <span className="w-full truncate">
                    Job Title Job Title Job Title Job Title Job Title Job Title
                    Job Title Job Title
                  </span>

                  <span
                    className={`px-1 text-center text-[white]  text-[0.7rem]  ${
                      elm === "2" ? "bg-red-500" : "bg-green-400"
                    }`}
                  >
                    {elm === "2" ? "de-active" : "Active"}
                  </span>
                </h1>

                <button onClick={() => setMore((prev) => !prev)}>
                  <MoreVertical />
                </button>

                <div
                  className={`shadow-md absolute right-[18px] top-1 bg-[white]  ${
                    openMore ? "opacity-100 visible" : "invisible opacity-0"
                  } duration-150`}
                >
                  <ul>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("view-details")}
                    >
                      View
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("edit")}
                    >
                      Edit
                    </li>
                    <li
                      className="hover:bg-[#ccc] px-2 py-[3px] text-[0.8rem]"
                      onClick={() => HandleMore("delete")}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-[1.1rem] text-[#262626] uppercase w-full truncate">
                Company Name
              </h2>
              <div className="text-[0.8rem] text-[#158aed] uppercase w-full  flex justify-between py-1">
                <span> Post Date : 12-12-2022 </span>
                <span> full time </span>
              </div>

              <span className="text-[0.9rem] font-bold ">₹12000 - ₹15000</span>
              <p className="w-full text-[1rem] text-[#505050] leading-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
                rem iure soluta dolorem magnam sunt dicta odio at quo
                repudiandae.
              </p>
              <div className="text-[0.8rem] py-1 font-semibold text-[#258aed] flex justify-between">
                <span>2 Opening </span>
                <div className="uppercase flex gap-1 items-center">
                  <span className="">
                    {elm === "2" ? (
                      "apartment"
                    ) : (
                      <Home startOffset={0.5} color="#ccc" size={14} />
                    )}
                  </span>
                  <span> {elm === "2" ? "work from Office" : "Remote"} </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="uppercase flex items-center gap-2">
                  <MapPin />

                  <span className="w-1/2 truncate">
                    {" "}
                    Noida Sector 2 200110{" "}
                  </span>
                </div>

                <button
                  className="relative px-3 py-1 border-[1.2px] rounded-[50px] bg-teal-400 text-[#fff] overflow-hidden truncate"
                  onClick={() =>
                    navigate.push(`/requiter/${elm}?id=${requiterId}`)
                  }
                >
                  Response
                  <span className="  right-1 font-semibold text-[1.1rem] pl-2">
                    12000
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
