import React from "react";
import Marquee from "react-fast-marquee";

const RunningText = () => {
  return (
    <div className="bg-black border-1 h-10 text-white flex items-center align-middle justify-center">
      <Marquee pauseOnHover={true}>
        <p className="runningtext mb-2 " style={{fontSize:"20px"}}>moving text</p>
      </Marquee>
    </div>
  );
};

export default RunningText;
