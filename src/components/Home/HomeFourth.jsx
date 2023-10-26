import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
const HomeFourth = () => {
  const cardData = [
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {cardData.map((val, index) => (
            <div className="col-sm-12 clo-xl-6 col-lg-6">
              <div className="bg-white p-2">
                <div className="flex justify-content-between align-items-center pl-3">
                  {" "}
                  <h2 className="h5">Hello EveryOne</h2>
                  <IoIosArrowForward />
                </div>
                <div className="flex p-2 justify-evenly">
                  <div className="w-[40%] p-2 border">
                    <img src={val.image} alt={val.alt} />
                    <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                  </div>
                  <div className="w-[40%] p-2 border">
                    <img src={val.image} alt={val.alt} />
                    <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                  </div>
                </div>
                <div className="flex p-2 justify-evenly">
                  <div className="w-[40%] p-2 border">
                    <img src={val.image} alt={val.alt} />
                    <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                  </div>
                  <div className="w-[40%] p-2 border">
                    <img src={val.image} alt={val.alt} />
                    <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-sm-12 clo-xl-6 col-lg-6">
            <div className="w-full h-full relative border">
              {/* <Image src="/temp.avif" alt="" fill /> */}
              <div className="w-full h-full relative inset-0 z-20">
                <div className="w-full h-full absolute inset-0 p-4 overflow-y-auto overflow-x-hidden">
                  <h1 className="font-medium md:text-[1.2rem] text-[1rem] text-black pb-4">
                    Header Lorem, ipsum dolor sit amet consectetur adipi elit.
                    Fugiat reprehenderit maiores perspiciatis. Reprehenderit
                  </h1>
                  <ul className="list-none p-2 flex flex-wrap items-center">
                    {data.map((elm, i) => (
                      <li
                        className="flex gap-2 flex-row items-center align-items-center mb-3"
                        key={i}
                      >
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#000"
                            className="bi bi-hand-index-thumb-fill text-black"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z" />
                          </svg>
                        </span>
                        <div className="text-black flex items-center text-sm md:gap-2 md:text-xl  ">
                          <span className="text-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Assumenda, at!
                          </span>
                          <NavLink
                            href={"/"}
                            className="text-blue-700 text-sm font-semibold hover:underline duration-75 active:text-indigo-600"
                          >
                            Link
                          </NavLink>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFourth;

const data = [
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
  {
    title: "title",
  },
];
