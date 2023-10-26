import React from "react";
import { ArrowRight } from "lucide-react";

const JobDetails = () => {
  return (
    <div className="w-full flex justify-center bg-light">
      <div className="max-w-full flex-row flex w-full md:w-[100%] p-3 gap-3 flex-wrap">
        {/* Right side code */}
        <div className="w-full md:w-[70%] p-8 bg-white shadow-sm rounded-[3px] py-5 pb-10">
          <div className="w-full py-2 flex justify-between items-start flex-wrap">
            <div className="flex items-center">
              <div className="w-[100px] h-[100px]">
                <img
                  src="https://img.freepik.com/free-vector/company-concept-illustration_114360-2581.jpg?w=2000"
                  alt=""
                  className="w-full h-full object-cover rounded-md overflow-hidden"
                />
              </div>
              <h1 className="md:text-[1.4rem] text-[1.2rem] font-bold md:pl-3">
                Company name
              </h1>
            </div>

            <div className="flex space-x-2 p-2 md:w-auto w-full md:justify-start justify-end">
              <button className="text-[1rem] font-semibold">Share</button>
              <button className="text-black border py-1 px-3 rounded-md">
                Follow
              </button>
            </div>
          </div>

          <div className="w-full flex justify-between flex-wrap">
            <div className="">
              <h2 className="md:text-[1.4rem] text-black font-bold">
                Front end developer
              </h2>
              <span className="text-[1.3rem] font-semibold text-[#363636cc] leading-3">
                12L - 15L
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button className="text-[1rem] font-semibold w-[110px] text-center px-3 py-2 text-black bg-[#fff] border rounded-sm">
                Save
              </button>
              <button className="text-white font-semibold w-[110px] text-center px-3 py-2 bg-teal-400 rounded-sm">
                Apply
              </button>
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-[1.5rem] font-semibold py-3">About</h2>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              molestias perspiciatis accusamus, alias asperiores laudantium
              voluptas suscipit ad facilis quis! Voluptatibus aspernatur aperiam
              iusto. Quos consequatur doloribus vitae recusandae quidem
              praesentium saepe, sunt magnam eos iste delectus dignissimos?
              Facilis.
            </p>
          </div>

          <div className="w-full">
            <h2 className="text-[1.5rem] font-semibold py-3">
              Key and Responsibility
            </h2>

            <ul className="md:pl-4 md:space-y-3">
              {[1, 2, 3, 4, 5, 6].map((elm) => (
                <li key={elm} className="flex gap-1">
                  <ArrowRight color="#2dd4bf" size={18} />
                  <p className="text-sm text-slate-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero qui omnis temporibus expedita numquam. Ab dolor rerum
                    molestias porro numquam!
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <h2 className="text-[1.5rem] font-semibold py-3">Your Skills</h2>

            <ul className="md:pl-4 flex gap-2 flex-wrap items-center">
              {[1, 2, 3, 4, 5, 6].map((elm) => (
                <li key={elm} className="flex gap-1">
                  <p className="text-sm border rounded-full px-2 py-1 bg-teal-50 text-black">
                    JavaScript
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Left side code */}
        <div className="md:w-[25%] border h-fit p-5 bg-white shadow-sm rounded-[3px]">
          <div className="w-full space-y-3">
            <h2 className="text-[1.3rem] text-[#484848] font-semibold">
              About the company
            </h2>
            <div>
              <h3>Website</h3>
              <div className="w-full flex space-x-1">
                <a href="https://www.google.com">www.google.com</a>
                <div className="flex items-center space-x-2"></div>
              </div>
            </div>

            <div className="w-full">
              <div className="text-[1.3rem] text-black font-semibold">
                Location
              </div>
              <h3 className="text-[#333] text-[1rem]">Banglore</h3>
            </div>

            <div className="w-full">
              <div className="text-[1.3rem] text-black font-semibold">
                Company Size
              </div>
              <h3 className="text-[#333] text-[1rem]">20-100 People</h3>
            </div>

            <div className="w-full">
              <div className="text-[1.3rem] text-black font-semibold">
                Company Type
              </div>
              <div className="flex flex-wrap gap-2 py-4">
                <div>
                  <span className="py-1 rounded-[50px] bg-teal-50 border border-teal-200 text-black px-2">
                    IT Company
                  </span>
                </div>
                <div>
                  <span className="py-1 rounded-[50px] bg-teal-50 border border-teal-200 text-black px-2">
                    IT Company
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
