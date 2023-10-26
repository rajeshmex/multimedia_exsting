import React from "react";

const SingleEmploye = () => {
  const tempImgs =
    "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg";
  return (
    <>
      <div className="w-full flex gap-2 items-center cursor-pointer hover:bg-[#ccc] duration-200 p-2">
        <div className="w-[35px] h-[35px] ">
          <img
            src={tempImgs}
            alt=""
            className="w-full h-full object-cover rounded-full overflow-hidden"
          />
        </div>

        <div className="">
          <h2 className="text-[1rem] leading-3 font-semibold">
            {" "}
            Employe Name{" "}
          </h2>
          <span className="text-[0.8rem] text-green-400 leading-3 ">
            {" "}
            Online{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default SingleEmploye;
