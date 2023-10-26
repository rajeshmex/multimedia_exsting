import React from "react";
import { socket } from "../../assets/Index";

const HomeSec = () => {
  const cardData = [
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "Some quick example text to build on the card title.",
      image: socket,
      alt: "first",
    },
  ];

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <h2 className="h2 ">Job</h2>
        {cardData.map((val, index) => (
          <div className="col-sm-12 col-lg-3 col-xl-2 mb-3" key={index}>
            <div className="card shadow-2xl">
              <div className="flex flex-column flex-wrap justify-content-center align-items-center">
                <div className="card-body">
                  <img src={val.image} className="card-img-top" alt={val.alt} />
                  <h2 className="bg-white md:text-lg text-base md:py-2 py-1 sm:leading-9 leading-normal md:h-70 h-auto text-black font-semibold md:line-clamp-2 line-clamp-1">
                    {val.h2}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSec;
