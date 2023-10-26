import React from "react";
import UserBox from "./UserBox";
import NewUser from "./NewUser";
import SingleEmploye from "./SingleEmploye";

const HomeDashboardMain = () => {
  return (
    <>
      <div className="w-full h-[calc(100vh-80px)] overflow-hidden">
        <div className="p-4 w-full">
          <div className="w-full flex justify-between">
            <div className="w-[70%] p-2 space-y-3">
              <div className="w-full flex justify-between gap-2">
                <UserBox
                  ModleName="Total User"
                  total="5678"
                  icon={"group"}
                  grow="8"
                />
                <UserBox
                  ModleName="Total Employee"
                  total="78"
                  icon={"group"}
                  grow="2"
                />
                <UserBox
                  ModleName="Total Revenue"
                  total="$ 5678"
                  icon={"attach_money"}
                  grow="5"
                />
              </div>
              <div className="w-full flex gap-2">
                {/* <ChartBox /> */}
                {/* <SecondChart /> */}
              </div>

              <div className="w-full">
                <NewUser />
              </div>
            </div>
            <div className="w-[30%]  sticky top-0 overflow-y-auto h-[calc(100vh-100px)] bg-white rounded-md">
              <div className="w-full h-full bg-white rounded-md p-3">
                <div className="w-full top-0 sticky h-[40px] bg-[white] border-b-2">
                  <p className="font-bold text-[1.3rem] text-black">
                    Employes{" "}
                  </p>
                </div>
                <div className="w-full space-y-3">
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                  <SingleEmploye />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDashboardMain;
