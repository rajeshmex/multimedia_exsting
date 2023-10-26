import React, { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { prop3 } from "../../assets/Index";
import { ChevronLeft, ChevronRight, IndianRupee, Plus } from "lucide-react";
import PropertyAddress from "./PropertyAddress";

const PropertySeller = ({
  addImage,
  setUpdateImage,
  AddMoreImages,
  Remove,
}) => {
  const [category, setCategory] = useState("all");
  const [iconColor, setIconColor] = useState("black"); // State for the arrow icon color
  const [num, setNum] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    // For example, you can send the data to your server or perform any necessary actions.

    console.log("Category:", category);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Function to change the color of the arrow icon
  const changeColour = (color) => {
    setIconColor(color);
  };

  const data = [
    {
      id: "1",
      img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-binyamin-mellish-106399.jpg&fm=jpg",
    },

    {
      id: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
    {
      id: "1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-RxPKS6VErcRoV96Efj9K8k63ucZsqCrE1CiWGTfVpGm-6G8Vd5CxSIfobtzYp2CAeaI&usqp=CAU",
    },
    {
      id: "1",
      img: "https://realestatedigital.propertiescdn.com/ListingImages/mdbmls/images/0/0/MDWO2003974.jpg?ts=637817641200000000",
    },
  ];
  return (
    <div>
      <div className=" " style={{ border: "1px solid grey" }}>
        <div className="mt-3">
          <div className="flex justify-between flex-col p-2 w-full">
            <div className="flex justify-center">
              <span className="absolute left-28">
                <BsFillArrowLeftCircleFill
                  size={35}
                  color={iconColor} // Set the color of the arrow icon
                  onClick={() => changeColour("green")} // Change the color to red on click
                />
              </span>

              <div className="w-[50%] ">
                <form
                  onSubmit={handleSubmit}
                  className=""
                  style={{ border: "1px solid black" }}
                >
                  <div className="mb-3 ">
                    <select
                      id="category"
                      name="category"
                      value={category}
                      onChange={handleCategoryChange}
                      className="w-full px-3 py-2 mt-1 text-sm border rounded-lg text-center"
                    >
                      <option value="all">Sale Property name select</option>
                      <option value="all">Building</option>
                      <option value="food">Shop</option>
                      <option value="food">Land</option>
                      <option value="shopping">Shopping Center</option>
                      <option value="entertainment">Entertainment</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="border ">
            <div className="w-full md:w-[100%] p-1" style={{ height: "800px" }}>
              <div className="w-full  border  h-full rounded-sm flex flex-col gap-1 ">
                <div className="w-full h-[80%] bg-grey  border-[1px] relative">
                  <img
                    src={data[num]?.img}
                    alt=""
                    className="  h-full object-contain "
                    style={{ width: "100vw" }}
                  />
                </div>
                <div className="w-full flex overflow-x-auto overflow-y-hidden h-[20%] gap-1 border-[1px] border-black relative">
                  <div className="absolute left-[0px] top-0 bottom-0 flex items-center justify-center ">
                    <ChevronLeft size={28} />
                  </div>
                  {data.map((elm, i) => (
                    <div className="w-1/5 h-full  min-w-1/5 " key={i}>
                      <img
                        src={elm?.img}
                        alt=""
                        className="w-full h-full object-cover border-[1px] border-transparent hover:border-black"
                        onClick={() => setNum(i)}
                      />
                    </div>
                  ))}
                  <div className="absolute right-[5px] top-0 bottom-0 flex items-center justify-center ">
                    <ChevronRight size={28} />
                  </div>
                </div>

                <div className="w-full flex items-center justify-center py-1">
                  {num}/{data.length}
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[100%] w-full border  p-1 ">
            <div className="text-sm md:text-[1.2rem] relative left-40 mb-2 font-bold md:w-[50%]">
              Attach a File
            </div>
            <div className="flex justify-center  w-full h-[50px] items-center ">
              <div className="w-[80%] flex">
                <div className="w-[50%] border-[1.6px] rounded-sm flex items-center">
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full h-full px-4 "
                    placeholder=""
                    onChange={(e) => setUpdateImage(e.target.files[0])}
                  />
                </div>
                <button
                  className="px-3 py-3 w-[20%] h-full  bg-[#ff10f0] text-[#fff] md:block hidden text-base"
                  onClick={AddMoreImages}
                >
                  Add
                </button>

                <button
                  className="px-3 py-3 w-[20%]  h-full bg-yellow-100 text-[#000] md:block hidden text-sm"
                  onClick={() => Remove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
              </div>
              <PropertyAddress />
      </div>
    </div>
  );
};

export default PropertySeller;
