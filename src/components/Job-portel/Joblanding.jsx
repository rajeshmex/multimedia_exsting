import React from "react";
import { job } from "../../assets/Index";
import { NavLink } from "react-router-dom";

const JobLanding = () => {
  const images = {
    first: [
      {
        img: "https://media.istockphoto.com/id/172255004/photo/a-hand-unplugging-an-orange-cord-from-a-white-outlet.jpg?s=1024x1024&w=is&k=20&c=RlM1ICDO7DTquGfn_y0S35l8WXuJYzqxGfMP69pBMlg=",
      },

      {
        img: "https://rukminim1.flixcart.com/image/828/1242/kzogn0w0/computer/p/m/9/14a-ca0506tu-thin-and-light-laptop-hp-original-imagbmtfbpbkvyqz.jpeg?q=90",
      },
      {
        img: "https://media.istockphoto.com/id/104640741/photo/electrical-socket.jpg?s=1024x1024&w=is&k=20&c=aoUMesV3GC-rkMV3Vs0sv0NCqkMeeQIWU21BJRupDhQ=",
      },
      {
        img: "https://rukminim1.flixcart.com/image/192/240/xif0q/tablet/m/h/d/za6w0222in-za6w0249in-lenovo-original-imagzmkxznzydfba.jpeg?q=60",
      },
    ],
  };
  const [curr, setCurr] = React.useState(0);
  const prev = () => {
    setCurr((prev) => (prev === 0 ? images.first.length - 1 : prev - 1));
  };
  const next = () => {
    setCurr((prev) => (prev === images.first.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const slides = setInterval(next, 5000);
    return () => clearInterval(slides);
  }, []);

  // console.log(curr);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-12 col-xl-7 col-lg-6">
            <div className="p-5">
              <h1 className="font-bold text-3xl md:text-3xl mb-2 lg:text-5xl md:leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
              <p className="text-sm md:text-base pb-5">
                We will send you a link via SMS. To download the app, simply
                open it.
              </p>
              <div className="w-full md:p-3 p-2 bg-white flex items-center gap-2 rounded-[2px]">
                <div className="flex items-center w-full rounded-[4px] px-5 bg-[#e8e8e8]">
                  <div className="w-1/2">
                    <input
                      type="search"
                      className="w-full md:py-4 py-2 px-2 bg-[#e8e8e8] outline-none"
                      placeholder="What job are you looking for"
                    />
                  </div>
                  <span className="block h-6 border-solid border-black border-1"></span>
                  <div className="w-1/2">
                    <input
                      type="text"
                      className="w-full py-2 md:py-4 bg-[#e8e8e8] px-2 outline-none"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <button className="px-3 bg-teal-400 text-white md:py-4 py-2 rounded-[4px]">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-5 col-lg-6">
            <div className="w-full h-full flex justify-center items-center">
              <img src={job} alt="job" />
            </div>
          </div>
        </div>

        <div className="row mt-3">
          {" "}
          {/* Added row here */}
          <h1 className="h1 text-center font-bold">
            More than 190K Recruiters trust Us
          </h1>
          <div className="col-sm-12 col-xl-12">
            <div className="flex justify-center items-center">
              <div className="flex gap-4 items-center justify-center w-full flex-wrap">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((elm) => (
                  <div
                    className="w-max h-[60px] shadow-md px-2 rounded-lg my-2 items-center"
                    key={elm}
                  >
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xl-12">
            <div>
              <div className="w-full flex flex-col  overflow-hidden  px-1 py-2 ">
                {/* <MainHeader /> */}
                <div className="flex flex-wrap">
                  {[1, 2, 3, 4, 5, 6]?.map((elm, id) => (
                    <NavLink
                      href={`${elm.pathname}/${elm.id}?page=${elm.pathname}`}
                      className=" md:w-1/4 w-1/2 lg:w-1/6 px-2 overflow-hidden   py-1 "
                      key={id}
                    >
                      <div
                        className="p-1 bg-white  hover:shadow-lg  cursor-pointer transition-all duration-100 "
                        // style={{ transform: `translateX(-${curr * 100}%)` }}
                      >
                        <img
                          src={images.first[curr]?.img}
                          alt=""
                          className="w-full  object-contain  md:min-h-[180px] md:max-h-[180px] h-[120px] "
                        />
                        {/* <AdsLowerContent elm={elm.body} /> */}
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobLanding;
