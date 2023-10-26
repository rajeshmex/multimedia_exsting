import React from "react";
import { ChevronRightCircle } from "lucide-react";
// import ReactSelect from "./ReactSelect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const RequirementJob = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState();
  const [qualification, setQualification] = useState();
  const [lang, setLang] = useState();
  const [experience, setExperience] = useState();
  const [gender, setGender] = useState();

  const data = [
    {
      title: "Graduation",
      language: "Good English",
      experience: "0 - 6 Months ",
    },
    {
      title: "Post Graduation",
      language: "Thora English",
      experience: "1-2 years",
    },
    {
      title: "12th Pass",
      language: "Fluent English",
      experience: "2 - 3 years ",
    },
    {
      title: "10th Pass",
      language: "Read Only",
      experience: " 3 + years ",
    },
  ];

  const data1 = [
    {
      title: "Telephonic",
    },
    {
      title: "face-to-face",
    },
  ];

  const data2 = [
    {
      mainName: "Free",
      price: "2300",
      planIncludes: [
        { id: crypto.randomUUID(), title: "Valid for 365 days" },

        { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

        { id: crypto.randomUUID(), title: "Unlimited jobs live" },
        { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
        { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
      ],
    },
    {
      mainName: "Gold",
      price: "2300",
      planIncludes: [
        { id: crypto.randomUUID(), title: "Valid for 365 days" },

        { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

        { id: crypto.randomUUID(), title: "Unlimited jobs live" },
        { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
        { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
      ],
    },
    {
      mainName: "Platinum ",
      price: "2300",
      planIncludes: [
        { id: crypto.randomUUID(), title: "Valid for 365 days" },

        { id: crypto.randomUUID(), title: "Good for 1-2 Hires" },

        { id: crypto.randomUUID(), title: "Unlimited jobs live" },
        { id: crypto.randomUUID(), title: "Min ₹ 50 / response" },
        { id: crypto.randomUUID(), title: "₹ 5 / unlock" },
      ],
    },
  ];

  const handleNext = () => {
    // alert("jhkkjhhv")
    navigate("/alljobs");
  };
  return (
    <>
      <div className="flex border justify-content-center">
        <div className="max-w-full md:w-[80%] border lg:w-[50%] p-3">
          <div className="w-full  py-5 flex items-center px-5 justify-center  ">
            <div className="w-full space-y-3 ">
              <h2 className="font-bold text-[1.2rem]">
                Candidate Requirement{" "}
              </h2>

              <div className="w-full ">
                <p className="text-[1rem] font-semibold "> Qualification</p>

                <div className="w-full flex gap-2 flex-wrap py-2">
                  {data?.map((elm) => (
                    <span
                      className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                        qualification === elm.title
                          ? "bg-[#158aed] text-[white]"
                          : "bg-white"
                      } `}
                      key={elm.title}
                      onClick={() => setQualification(elm.title)}
                    >
                      {elm.title}
                    </span>
                  ))}
                </div>
              </div>

              {/* skilsl  */}
              <div className="w-full ">
                <p className="text-[1rem] font-semibold "> Skills</p>

                <div className="w-full">{/* <ReactSelect /> */}</div>
              </div>

              {/* language */}

              <div className="w-full">
                <p className="text-[1rem] font-semibold "> Language </p>

                <div className="w-full flex gap-2 flex-wrap py-2 ">
                  {data?.map((elm) => (
                    <span
                      className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                        lang === elm.language
                          ? "bg-[#158aed] text-white"
                          : "bg-white"
                      } `}
                      key={elm.title}
                      onClick={() => setLang(elm.language)}
                    >
                      {elm.language}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <p className="text-[1rem] font-semibold ">
                  {" "}
                  Minimum Experience{" "}
                </p>

                <div className="w-full flex gap-2 flex-wrap py-2 ">
                  {data?.map((elm) => (
                    <span
                      className={`px-2 py-1 border-[1.2px] rounded-[30px] border-[#262626] cursor-pointer text-[0.9rem] ${
                        experience === elm.experience
                          ? "bg-[#158aed] text-white"
                          : "bg-white"
                      } `}
                      key={elm.title}
                      onClick={() => setExperience(elm.experience)}
                    >
                      {elm.experience}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <p className="text-[1rem] font-semibold "> Gender </p>

                <div className="w-full flex gap-2 flex-wrap py-2 ">
                  {["Male", "Female", "Both"].map((elm) => (
                    <span
                      className={`px-2 py-1 border-[1.2px] rounded-[20px] border-[#262626] cursor-pointer text-[0.9rem] ${
                        gender === elm ? "bg-[#158aed] text-white" : "bg-white"
                      } `}
                      key={elm}
                      onClick={() => setGender(elm)}
                    >
                      {elm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-2">
            <h2 className="font-bold text-[1.2rem]"> Interview Information </h2>
            <div className="w-full">
              <p className="text-[1rem] font-semibold ">
                {" "}
                Select Interview Mode{" "}
              </p>

              <div className="flex gap-2 py-2">
                {data1.map((elm) => (
                  <span
                    className={`py-1 px-3 rounded-[50px] border-[1.2px] cursor-pointer border-[#262626] hover:bg-[#158aed] hover:text-[white] ${
                      elm.title === mode
                        ? "bg-[#158aed] text-[white]"
                        : "bg-white"
                    }  duration-150`}
                    onClick={() => setMode(elm.title)}
                  >
                    {elm.title}
                  </span>
                ))}
              </div>
            </div>

            {mode === "face-to-face" && (
              <div className="w-full space-y-2 ">
                {/* <p className="text-[1rem] font- "> Interview Address </p> */}

                <div className="w-full">
                  <p className="text-[1rem]  font-semibold"> Full Address : </p>
                  <textarea
                    type="textarea"
                    placeholder="Enter Interview Address"
                    className="resize-none  outline-none rounded-sm border-[1.2px] w-full p-2 min-h-[100px]"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="w-full ">
            <div className="w-full flex flex-wrap">
              {data2.map((elm) => (
                <div className="md:w-1/3 w-full  h-[500px] p-2 ">
                  <div className="w-full hover:shadow-2xl shadow-sm rounded-sm border-[1.1px] duration-200 h-full p-3 flex flex-col justify-between">
                    <ul className="space-y-3 ">
                      {/* // header  */}

                      <div className="w-full pb-4">
                        <h2 className="text-[2.1rem] font-light ">
                          {elm.mainName}
                        </h2>
                        <p className="text-[1.2rem] font-semibold">
                          INR {elm.price}
                        </p>
                      </div>
                      {elm.planIncludes.map((elm) => (
                        <li
                          className="cursor-pointer space-x-[6px] flex items-center "
                          key={elm.id}
                        >
                          <ChevronRightCircle color="green" />
                          <span className="text-[0.9rem] leading-6">
                            {elm.title}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className="uppercase text-[1.1rem] bg-[#158aed] border-[1.2px] text-[white] w-full py-2 hover:bg-[#fff] hover:border-[black] hover:text-black duration-200
                
                rounded-[50px]
                "
                    >
                      Buy Plan Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="w-full bg-teal-400 text-[white] font-semibold rounded-sm py-2 mt-3 "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default RequirementJob;
