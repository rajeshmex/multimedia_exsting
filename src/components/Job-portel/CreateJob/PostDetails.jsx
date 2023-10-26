import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
const PostDetails = () => {
  const navigate = useNavigate();
  const [cityOpen, setCityOpen] = useState(false);
  const [stateOpen, setStateOpen] = useState(false);
  const industryTypes = [
    "IT",
    "Software Developer",
    "Web Developer",
    "Backend Developer",
    "FullStack Developer",
    "Management",
    "Other",
  ];

  const roles = ["HR", "Founder"];
    const handleNext = () => {
    navigate("/requirementjob");
}
  return (
    <div className="flex border justify-content-center">
      <div className="max-w-full md:w-[80%] border lg:w-[50%] p-3">
        <div className="w-full py-3 flex items-center justify-center pb-5">
          <div className="w-full space-y-3">
            <h1 className="font-bold text-[1.2rem]">Post Details</h1>

            <div className="w-full">
              <label htmlFor="jobTitle" className="font-semibold">
                Job Title:
              </label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm"
                placeholder="Please Enter Job Title"
              />
            </div>

            <div className="w-full">
              <label htmlFor="jobDescription" className="font-semibold">
                Job Description / Key and Responsibility:
              </label>
              <textarea
                type="text"
                name="jobDescription"
                id="jobDescription"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm min-h-[100px] resize-none"
                placeholder="Please Enter Job Description"
              />
            </div>

            <div className="w-full">
              <label htmlFor="jobType" className="font-semibold">
                Type of Job:
              </label>
              <select
                name="jobType"
                id="jobType"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm"
              >
                <option value="">Please Select One from Drop-down</option>
                {industryTypes.map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <h2 className="md:text-[1.3rem] text-[1rem] font-bold">
                Location & Compensation
              </h2>
            </div>

            <div className="w-full">
              <label htmlFor="jobLocation" className="font-semibold">
                Select Job Location:
              </label>
              <select
                name="jobLocation"
                id="jobLocation"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm"
              >
                <option value="">Please Select One from Drop-down</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Field">Field</option>
              </select>
            </div>

            <div className="w-full font-semibold">
              <div className="w-full flex flex-wrap">
                <div className="md:w-1/2 w-full md:pr-2 relative">
                  <label htmlFor="jobCity">Job City:</label>
                  <div
                    className="w-full border-[1.2px] rounded-sm flex px-2 items-center"
                    onClick={() => setCityOpen((prev) => !prev)}
                  >
                    <input
                      type="text"
                      name="jobCity"
                      id="jobCity"
                      className="w-full py-2 px-2"
                    />
                    <ChevronDown size={12} />
                  </div>
                  {cityOpen && (
                    <div className="w-[98%] absolute z-50 max-h-[300px] bg-[white] border-[1px] rounded-sm space-y-1">
                      <li
                        className="hover:bg-[#ccc] px-2 cursor-pointer list-none"
                        onClick={() => setCityOpen(false)}
                      >
                        City 1
                      </li>
                      <li
                        className="hover:bg-[#ccc] px-2 cursor-pointer"
                        onClick={() => setCityOpen(false)}
                      >
                        City 2
                      </li>
                      <li
                        className="hover:bg-[#ccc] px-2 cursor-pointer"
                        onClick={() => setCityOpen(false)}
                      >
                        City 3
                      </li>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 w-full md:pl-2 relative">
                  <label htmlFor="jobState">Job State:</label>
                  <div
                    className="w-full border-[1.2px] rounded-sm flex items-center px-2"
                    onClick={() => setStateOpen((prev) => !prev)}
                  >
                    <input
                      type="text"
                      name="jobState"
                      id="jobState"
                      className="w-full py-2 px-2"
                    />
                    <ChevronDown size={12} />
                  </div>
                  {stateOpen && (
                    <div className="w-[98%] z-40 absolute max-h-[300px] bg-[white] border-[1px] rounded-sm space-y-1">
                      <li
                        className="hover:bg-[#ccc] px-2 cursor-pointer list-none"
                        onClick={() => setStateOpen(false)}
                      >
                        State 1
                      </li>
                      <li
                        className="hover-bg-[#ccc] px-2 cursor-pointer"
                        onClick={() => setStateOpen(false)}
                      >
                        State 2
                      </li>
                      <li
                        className="hover-bg-[#ccc] px-2 cursor-pointer"
                        onClick={() => setStateOpen(false)}
                      >
                        State 3
                      </li>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="jobAddress" className="font-semibold">
                Full Address:
              </label>
              <textarea
                type="text"
                name="jobAddress"
                id="jobAddress"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm min-h-[100px]"
                placeholder="Please Enter your Office Address"
              />
            </div>

            <div className="w-full space-y-2">
              <label className="font-semibold">Receive Application From:</label>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <input type="radio" name="applicationRadius" />
                  <span>Within 10 KM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="applicationRadius" />
                  <span>Within 50 KM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="applicationRadius" />
                  <span>Entire City</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="applicationRadius" />
                  <span>All India</span>
                </div>
              </div>
              <hr className="w-full text-[red]" />
            </div>

            <div className="w-full">
              <label htmlFor="payType" className="font-semibold">
                Pay Type:
              </label>
              <select
                name="payType"
                id="payType"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm"
              >
                <option value="">Please Select One from Drop-down</option>
                <option value="Fixed">Fixed</option>
                <option value="Fixed+Incentive">Fixed + Incentive</option>
                <option value="OnlyIncentive">Only Incentive</option>
              </select>
            </div>

            <div className="w-full">
              <label htmlFor="salaryRange" className="font-semibold">
                Monthly Salary:
              </label>
              <div className="flex md:w-1/2 items-center border-[1.2px]">
                <input
                  type="text"
                  name="minSalary"
                  className="w-1/2 py-2 border-[1.2px] px-1"
                  placeholder="Minimum Monthly Salary"
                />
                <span className="text-[1.2rem] font-semibold py-1 px-1">
                  To
                </span>
                <input
                  type="text"
                  name="maxSalary"
                  className="w-1/2 py-2 border-[1.2px] px-1"
                  placeholder="Maximum Monthly Salary"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="joiningFee" className="font-semibold">
                Is there any joining fee?
              </label>
              <select
                name="joiningFee"
                id="joiningFee"
                className="w-full py-2 px-1 border-[1.5px] rounded-sm"
              >
                <option value="">Please Select One from Drop-down</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button
                onClick={handleNext}
              className="w-full bg-teal-400 text-[white] font-semibold rounded-sm py-2 mt-3 "
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
