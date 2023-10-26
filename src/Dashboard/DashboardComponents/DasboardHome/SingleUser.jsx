import React from "react";
const SingleUser = () => {
    const tempImgs =
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg";
     let status = true;
    return (
      <>
        <div className="w-full flex justify-between h-[45px]   bg-[white] items-center px-3 shadow-md ">
          <div className="w-[45px] h-full">
            <img
              src={tempImgs}
              alt=""
              className="w-full h-full object-cover rounded-full overflow-hidden"
            />
          </div>
          <h1 className="text-[0.9rem]"> User Name </h1>
          <p className="w-[200px] truncate text-[0.9rem]">
            {" "}
            testUsergmail@gmail.com
          </p>
          <p className="w-[200px] truncate text-[0.9rem]"> +91876525269 </p>
          <div className="">
            <button
              className={`${
                status ? "text-green-500" : "text-red-500"
              } font-[200] px-3 py-1 border rounded-md bg-green-100`}
            >
              {" "}
              Status{" "}
            </button>
          </div>
        </div>
      </>
    );
};

export default SingleUser;
