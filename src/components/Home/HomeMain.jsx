import React from "react";
import HomeFirst from "./HomeFirst";
import HomeSec from "./HomeSec";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import HomeFifth from "./HomeFifth";

const HomeMain = () => {
  return (
    <>
      <HomeFirst />
      <HomeSec />
      <HomeThird />
      <div className="bg-light mb-3">{/* <HomeSec /> */}</div>
      <HomeFourth />
      <HomeFifth />
    </>
  );
};

export default HomeMain;
