import React, { useState } from "react";

const Accordion = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-gray-50 py-6 flex flex-col items-center justify-center relative overflow-hidden sm:py-12">
      <div
        onClick={() => setOpen(!open)}
        className="p-4 bg-blue-100 w-full rounded flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-sm text-blue-500">
            Add bitcoin to your wallet
          </h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {open && (
        <div className="w-full bg-white p-4">
          <h4 className="text-sm text-slate-400">
            Now you can earn bitcoin in your wallet just by referring coinx to
            one of your friend.
          </h4>
        </div>
      )}
    </div>
  );
};

export default Accordion;
