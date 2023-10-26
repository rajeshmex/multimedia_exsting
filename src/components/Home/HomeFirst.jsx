import React from "react";
import { banner } from "../../assets/Index";

const HomeFirst = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-sm-12 p-1"
          style={{ height: "270px", width: "100%" }}
        >
          <img src={banner} alt="banner" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default HomeFirst;
