import React, { useState } from "react";

const PropertyAddress = () => {
  const [village, setVillage] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [landmark, setLandmark] = useState("");
  const [buildingDetails, setBuildingDetails] = useState("");
  const [otherInformation, setOtherInformation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here
    // For example, you can send the data to your server or perform any necessary actions.

    console.log("Village:", village);
    console.log("District:", district);
    console.log("State:", state);
    console.log("Other Details:", otherDetails);
    console.log("Landmark:", landmark);
    console.log("Building Details:", buildingDetails);
    console.log("Other Information:", otherInformation);
  };

  return (
    <div className="mt-3 ml-14 p-3">
      <form onSubmit={handleSubmit}>
        <div className="w-[50%] border p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Address</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">Village:</label>
              <input
                type="text"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg flex-grow px-3 py-2"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">District:</label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg flex-grow px-3 py-2"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">State:</label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg flex-grow px-3 py-2"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">
                Other Details:
              </label>
              <textarea
                value={otherDetails}
                onChange={(e) => setOtherDetails(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg px-3 py-2 flex-grow"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">Landmark:</label>
              <input
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg flex-grow px-3 py-2"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">
                Building Details:
              </label>
              <textarea
                value={buildingDetails}
                onChange={(e) => setBuildingDetails(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg px-3 py-2 flex-grow"
              />
            </div>
            <div className="flex items-center">
              <label className="text-xl font-semibold w-1/4">
                Other Information:
              </label>
              <textarea
                value={otherInformation}
                onChange={(e) => setOtherInformation(e.target.value)}
                className="text-xl border border-gray-500 rounded-lg px-3 py-2 flex-grow"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyAddress;
