import React from 'react'
import SingleUser from './SingleUser';

const NewUser = () => {
    const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <>
      <div className="w-full bg-[#fff] min-h-[250px]  rounded-md max-h-[250px] overflow-y-auto ">
        <div className="w-full top-0 sticky bg-[white] h-[60px] p-2 flex justify-between border-b-2 ">
          <div className="">
            <h2 className="w-full text-black font-semibold text-[1.1rem]">
              {" "}
              New User{" "}
            </h2>
            <p className="font-[400] text-[#949494] text-[0.9rem]">
              {" "}
              New User tracking information{" "}
            </p>
          </div>

          <div className="">
            <select name="" id="" className="px-3 py-1 bg-[#f5f5f5] rounded-md">
              <option value="">Daily</option>
              <option value="">Weekly</option>
              <option value="">Monthly</option>
            </select>
          </div>
        </div>

        <div className="p-2 space-y-3">
          {data.map((elm) => (
            <SingleUser key={elm} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewUser