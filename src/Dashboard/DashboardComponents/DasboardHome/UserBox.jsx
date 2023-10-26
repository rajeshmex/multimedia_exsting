import React from 'react'

const UserBox = ({ ModleName, total, icon, grow }) => {
  return (
    <>
      <div className="w-1/3 bg-white rounded-lg h-[200px] p-3 flex flex-col justify-between">
        <div className="flex justify-between ">
          <h3 className="text-[1rem] font-bold"> {ModleName} </h3>

          <div className="w-[40px] h-[40px] rounded-full p-1 bg-green-200 overflow-hidden flex items-center justify-center">
            <span className="material-symbols-outlined text-[40px] text-blue-500">
              {icon}
            </span>
          </div>
        </div>

        <h3 className="text-[1.7rem] font-bold"> {total} </h3>

        <div className="flex gap-1 items-center">
          <span className="material-symbols-outlined text-green-600 ">
            vital_signs
          </span>
          <span className="text-green-600 font-bold mr-2"> {grow}% </span>
          <span className="uppercase text-[#9e9e9e] text-[0.7rem]">
            {" "}
            Since Last week{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default UserBox