import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [location, setLocation] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [totalEmployees, setTotalEmployees] = useState("");
  const [gstOrPan, setGstOrPan] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the form data for submission or processing here
  };

  return (
    <>
      <div className=" max-w-full md:w-[80%] lg:w-[100%] p-4 mx-auto">
        <div className="flex justify-content-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap justify-center items-center w-[80%] p-3 border rounded-lg"
          >
            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="name">Company Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter Company Name *"
              />
            </div>

            <div className="w-full md:w-1/2 p-2">
              <label htmlFor="industry">Select Industry Type</label>
              <input
                type="text"
                name="industry"
                id="industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Select Industry Type"
              />
            </div>

            <div className="w-full p-2">
              <label htmlFor="website">Company Website</label>
              <input
                type="text"
                name="website"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Company Website (optional)"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="facebookLink">Company Facebook Link</label>
              <input
                type="text"
                name="facebookLink"
                id="facebookLink"
                value={facebookLink}
                onChange={(e) => setFacebookLink(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Company Facebook Link"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="instagramLink">Company Instagram Link</label>
              <input
                type="text"
                name="instagramLink"
                id="instagramLink"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Company Instagram Link"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="twitterLink">Company Twitter Link</label>
              <input
                type="text"
                name="twitterLink"
                id="twitterLink"
                value={twitterLink}
                onChange={(e) => setTwitterLink(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Company Twitter Link"
              />
            </div>

            <div className="w-full p-2">
              <label htmlFor="location">Company Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Company Location"
              />
            </div>

            <div className="w-full p-2">
              <label htmlFor="aboutCompany">About Company</label>
              <textarea
                name="aboutCompany"
                id="aboutCompany"
                value={aboutCompany}
                onChange={(e) => setAboutCompany(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="About Company"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="totalEmployees">
                Total Employees in your Company
              </label>
              <input
                type="text"
                name="totalEmployees"
                id="totalEmployees"
                value={totalEmployees}
                onChange={(e) => setTotalEmployees(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Total Employees"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="gstOrPan">Enter Company GST No or PAN No *</label>
              <input
                type="text"
                name="gstOrPan"
                id="gstOrPan"
                value={gstOrPan}
                onChange={(e) => setGstOrPan(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter Company GST No or PAN No *"
              />
            </div>

            <div className="w-full md:w-1/3 p-2">
              <label htmlFor="role">Our Role in the Company</label>
              <input
                type="text"
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Our Role in the Company"
              />
            </div>

            <div className="w-full p-2">
              <button
                type="submit"
                onClick={()=>navigate("/postjob")}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
              >
                Continue to post a job
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
