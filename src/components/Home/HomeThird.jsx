import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";

const HomeThird = () => {
  const cardData = [
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },

    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/200/200/jlph9jk0/cycle/h/f/k/skyper-26t-sskp26bk0001-16-hero-original-imaf8ru5xysfgtmx.jpeg?q=70",
      alt: "first",
    },
    {
      h2: "repellat provident occaecati excepturi optio reprehenderit",
      p: "HP 360 Intel Celeron Quad Core N4020",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70",
      alt: "first",
    },
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  // Function to get the data for the current page
  const getCurrentPageData = () => {
    const startIdx = currentPage * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    return cardData.slice(startIdx, endIdx);
  };

  const [visibleData, setVisibleData] = useState(getCurrentPageData());

  useEffect(() => {
    // Update data every 10 seconds
    const intervalId = setInterval(() => {
      setCurrentPage(
        (prevPage) => (prevPage + 1) % (cardData.length / itemsPerPage)
      );
      setVisibleData(getCurrentPageData());
    }, 1000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [currentPage, cardData, itemsPerPage]);

  return (
    <div className="container-fluid p-3 bg-slate-300">
      <div className="row">
        {visibleData.map((val, index) => (
          <div key={index} className="col-sm-12 col-lg-4 col-xl-4 mb-3">
            <div className="border bg-white p-2">
              <div className="flex justify-content-between align-items-center pl-3">
                <h2 className="h5">Hello Everyone</h2>
                <IoIosArrowForward />
              </div>
              <div className="flex p-2 justify-evenly">
                <div className="w-[40%] p-2 border">
                  <img
                    src={val.image}
                    alt={val.alt}
                    style={{ height: "170px" }}
                  />
                  <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                </div>
                <div className="w-[40%] p-2 border">
                  <img
                    src={val.image}
                    alt={val.alt}
                    style={{ height: "170px" }}
                  />
                  <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                </div>
              </div>
              <div className="flex p-2 justify-evenly">
                <div className="w-[40%] p-2 border">
                  <img
                    src={val.image}
                    alt={val.alt}
                    style={{ height: "170px" }}
                  />
                  <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                </div>
                <div className="w-[40%] p-2 border">
                  <img
                    src={val.image}
                    alt={val.alt}
                    style={{ height: "170px" }}
                  />
                  <h1 className="pt-2 text-sm font-normal">{val.p}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeThird;
