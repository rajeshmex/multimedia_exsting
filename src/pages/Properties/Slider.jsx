// import React, { useState } from "react";

// const Slider = () => {
//   const min = 100;
//   const max = 500000; // Set the maximum limit to 500,000

//   const [minPrice, setMinPrice] = useState(min);
//   const [maxPrice, setMaxPrice] = useState(max);
//   const [minThumb, setMinThumb] = useState(0);
//   const [maxThumb, setMaxThumb] = useState(100);

//   const handleMinChange = (event) => {
//     let newMinPrice = parseInt(event.target.value);
//     newMinPrice = Math.min(newMinPrice, maxPrice - 500);
//     setMinPrice(newMinPrice);
//     setMinThumb(((newMinPrice - min) / (max - min)) * 100);
//   };
//   const handleMaxChange = (event) => {
//     let newMaxPrice = parseInt(event.target.value);

//     // Enforce the maximum limit
//     if (newMaxPrice > max) {
//       newMaxPrice = max;
//     }

//     newMaxPrice = Math.max(newMaxPrice, minPrice + 500);
//     setMaxPrice(newMaxPrice);
//     setMaxThumb(100 - ((newMaxPrice - min) / (max - min)) * 100);
//   };

//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="relative max-w-xl w-full p-3">
//         <div>
//           <input
//             type="range"
//             step="100"
//             min={min}
//             max={max}
//             value={minPrice}
//             onChange={handleMinChange}
//             className="absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
//           />

//           <input
//             type="range"
//             step="100"
//             min={min}
//             max={max}
//             value={maxPrice}
//             onChange={handleMaxChange}
//             className="absolute appearance-none z-20 h-2 w-full opacity-0 cursor-pointer"
//           />

//           <div className="relative z-10 h-2">
//             <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

//             <div
//               className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
//               style={{ right: maxThumb + "%", left: minThumb + "%" }}
//             ></div>

//             <div
//               className="absolute z-30 w-6 h-6 top-0 left-0 bg-green-300 rounded-full -mt-2 -ml-1"
//               style={{ left: minThumb + "%" }}
//             ></div>

//             <div
//               className="absolute z-30 w-6 h-6 top-0 right-0 bg-green-300 rounded-full -mt-2 -mr-3"
//               style={{ right: maxThumb + "%" }}
//             ></div>
//           </div>
//         </div>

//         <div className="flex justify-between items-center py-5">
//           <div>
//             <input
//               type="text"
//               maxLength="5"
//               value={minPrice}
//               onChange={handleMinChange}
//               className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               maxLength="5"
//               value={maxPrice}
//               onChange={handleMaxChange}
//               className="px-3 py-2 border border-gray-200 rounded w-24 text-center"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
