import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import CustomDropdown from "./CustomDropDown";
import Select from "react-select";
import SelectDropdown from "../../components/common/SelectDropdown";

const PropertyFilter = () => {
  const villageOptions = [
    "All",
    "Cm rise school",
    "Primary school",
    "Main road",
    "airport",
    "paschim tola",
  ].map((option) => {
    return {
      label: option,
      value: option,
    };
  });

  const stateOptions = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Madhya Pradesh",
      value: "MP",
    },
    {
      label: "Uttar Pradesh",
      value: "UP",
    },
  ];

  const districtOptions = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Satna",
      value: "Satna",
    },
    {
      label: "Ratlam",
      value: "Ratlam",
    },
    {
      label: "Gwalior",
      value: "Gwalior",
    },
    {
      label: "Jabalpur",
      value: "Jabalpur",
    },
    {
      label: "Singrauli",
      value: "Singrauli",
    },
  ];

  const [minPrice, setMinPrice] = useState("100000");
  const [maxPrice, setMaxPrice] = useState("100000");
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [state, setState] = useState("");
  const [place, setPlace] = useState("all");
  const [district, setDistrict] = useState("all");
  const [village, setVillage] = useState("all");
  const [category, setcategory] = useState("");
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleDistrictChange = (value) => {
    setDistrict(value);
  };

  const handlePlaceChange = (e) => {
    setPlace(e.target.value);
  };

  const handleVillageChange = (value) => {
    setVillage(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleStateChange = (value) => {
    setState(value);
  };

  const handleCategoryChange = (e) => {
    setcategory(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location:", location);
    console.log("Search:", search);
    console.log("Category:", category);
  };

  const bhk = ["1", "2", "3", "4"];

  const handleBHKSelection = (id) => {
    setSelectedBHK(id);
  };

  const filterByAmount = () => {
    console.log("Filtering properties based on minPrice and maxPrice");
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
  };

  return (
    <>
      <div className="max-w-full p-2">
        <div className="flex flex-wrap p-2 justify-evenly">
          <div className="border w-full md:w-1/2 lg:w-1/5 p-2">
            <div className="p-2">
              <h1 className="text-2xl">Filters</h1>
              <hr />
              <div className="mt-3">
                <h3 className="text-lg font-semibold">Location</h3>
                <div className="flex justify-between flex-col border p-2 w-full">
                  <div className="flex">
                    <div className="w-full">
                      <form onSubmit={handleSubmit} className="">
                        <div className="mb-3">
                          <label
                            htmlFor="state"
                            className="block text-sm font-medium text-gray-700"
                          >
                            State
                          </label>

                          <SelectDropdown
                            name={"state"}
                            id={"state"}
                            value={state}
                            onChange={handleStateChange}
                            options={stateOptions}
                          />

                          {/* <div className="flex">
                            <select
                              id="state"
                              name="state"
                              value={state}
                              onChange={handleStateChange}
                              className="w-1/2 px-3 py-2 mt-1 text-sm border rounded-l-lg"
                            >
                              <option value="all">All</option>
                              <option value="Delhi">Delhi</option>
                              <option value="UP">Uttar Pradesh</option>
                              <option value="MP">Madhya Pradesh</option>
                            </select>
                            <input
                              type="text"
                              className="w-1/2 px-3 py-2 mt-1 text-sm border rounded-r-lg"
                              onChange={handlePlaceChange}
                              value={place}
                            />
                          </div> */}
                        </div>

                        <div className="mb-3">
                          <label
                            htmlFor="district"
                            className="block text-sm font-medium text-gray-700"
                          >
                            District
                          </label>
                          <SelectDropdown
                            name="district"
                            id="district"
                            value={district}
                            options={districtOptions}
                            onChange={handleDistrictChange}
                          />
                          {/* <CustomDropdown
                            options={[
                              "All",
                              "Satna",
                              "Ratlam",
                              "Gwalior",
                              "Jabalpur",
                              "Singrauli",
                            ]}
                            selectedOption={district}
                            onSelect={handleDistrictChange}
                          /> */}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="village"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Village/city
                          </label>

                          <SelectDropdown
                            id={"village"}
                            name={"village"}
                            options={villageOptions}
                            value={village}
                            onChange={handleVillageChange}
                          />

                          {/* <Select
                            id="village"
                            name="village"
                            options={villageOptions}
                            value={villageOptions.find(
                              (i) => i.value === village
                            )}
                            onChange={(selectedOption) => {
                              handleVillageChange(selectedOption.value);
                            }}
                          /> */}
                          {/* <select
                            id="village"
                            name="village"
                            value={village}
                            onChange={handleVillageChange}
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-lg"
                          >
                            <option value="all">All</option>
                            <option value="Cm rise school">
                              Cm rise school
                            </option>
                            <option value="Primary school">
                              Primary school
                            </option>
                            <option value="Main road">Main road</option>
                            <option value="airport">Airport</option>
                            <option value="Paschim tola">Paschim tola</option>
                          </select> */}
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="search"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Search
                          </label>
                          <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Enter your search"
                            value={search}
                            onChange={handleSearchChange}
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-lg"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            name="category"
                            value={category}
                            onChange={handleCategoryChange}
                            className="w-full px-3 py-2 mt-1 text-sm border rounded-lg"
                          >
                            <option value="all">All</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="entertainment">Entertainment</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">Price</h3>
                <div className="flex justify-between flex-col border p-3 w-full">
                  <div className="flex flex-col">
                    <div className="w-1/2">
                      <label htmlFor="minPrice">Min Price</label>
                      <input
                        type="text"
                        placeholder="Please enter your amount"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        onBlur={filterByAmount}
                      />
                    </div>

                    <input
                      type="range"
                      min={"100000"}
                      max={"100000000"}
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      style={{
                        width: "80%",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    />

                    <div className="w-1/2">
                      <label htmlFor="maxPrice">Max Price</label>
                      <input
                        type="text"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        onBlur={filterByAmount}
                        placeholder="Please enter your amount"
                      />
                    </div>

                    <input
                      type="range"
                      min={"1000"}
                      max={"100000000"}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      style={{
                        width: "80%",
                        marginTop: "20px",
                        marginBottom: "20px",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold">BHK</h3>
                <div className="flex justify-between flex-col border p-3 w-full">
                  <div className="flex">
                    <div className="w-1/2">
                      {bhk.map((val, id) => (
                        <span
                          key={id}
                          className={`block border mb-2 rounded-lg p-1 cursor-pointer${
                            selectedBHK === id ? " selected" : ""
                          }`}
                          style={{
                            transition: "border 0.3s ease-in-out",
                            backgroundColor:
                              selectedBHK === id ? "#3498db" : "transparent",
                            color: selectedBHK === id ? "#fff" : "#333",
                            cursor: "pointer",
                            userSelect: "none",
                          }}
                          onClick={() => handleBHKSelection(id)}
                        >
                          {val} BHK
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border w-full md:w-1/2 lg:w-4/5 p-2">
            <PropertyCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyFilter;
