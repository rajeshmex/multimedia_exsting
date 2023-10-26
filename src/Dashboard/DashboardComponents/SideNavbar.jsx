import React from "react";
import { NavLink } from "react-router-dom";
const logo =
  "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg";
const SideNavbar = ({permission}) => {
  
  const data = [
    {
      id: crypto.randomUUID(),
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      id: crypto.randomUUID(),
      title: "Properities",
      link: "/dashproperties",
    },
    {
      id: crypto.randomUUID(),
      title: "Moving Text",
      link: "/dashtext-moving",
    },
    {
      id: crypto.randomUUID(),
      title: "Home-Page",
      link: "/dashhome-page",
    },
    {
      id: crypto.randomUUID(),
      title: "Head Menu Bar",
      link: "/dashmenu",
    },
    {
      id: crypto.randomUUID(),
      title: "Click Here Menu Bar",
      link: "/dashclick-here-menu",
    },
    {
      id: crypto.randomUUID(),
      title: "Sub-Menu",
      link: "/dashsub-menu",
    },
    {
      id: crypto.randomUUID(),
      title: "Card Master",
      link: "/dashcard-master",
    },
    {
      id: crypto.randomUUID(),
      title: "Country Page ",
      link: "/dashcountry",
    },
    {
      id: crypto.randomUUID(),
      title: "Chat",
      link: "/dashchat",
    },
    {
      id: crypto.randomUUID(),
      title: "Ticket",
      link: "/dashticket-page",
    },
    {
      id: crypto.randomUUID(),
      title: "Product",
      link: "/dashsimilar-product",
    },
    {
      id: crypto.randomUUID(),
      title: "Notification",
      link: "/dashnotification",
    },
    {
      id: crypto.randomUUID(),
      title: "All Users",
      link: "/dashusers",
    },
    {
      id: crypto.randomUUID(),
      title: "All Employee",
      link: "/dashemployees",
    },
    {
      id: crypto.randomUUID(),
      title: "User Record",
      link: "/dashuser-record",
    },
    {
      id: crypto.randomUUID(),
      title: "Jobs",
      link: "/dashall-post-jobs",
    },
    {
      id: crypto.randomUUID(),
      title: "AllCompanyJobList",
      link: "/dasha-company-all-job-list",
    },

    { id: crypto.randomUUID(), link: "/hosting", title: "Hosting" },
  ];

  return (
    <>
      <div className="w-full">
        <img src={logo} alt="" className="w-full h-[100px] object-contain" />

        {permission ? (
          <>
            <ul className="">
              {data?.map((elm) => {
                 console.log(elm);
                return (
                  <NavLink to={elm?.link} key={elm.id}>
                    <li className="py-2 px-2 hover:bg-[#ccc] cursor-pointer text-[1rem] font-bold border">
                      {elm.title}
                    </li>
                  </NavLink>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <NavLink to="/employee-form">
              <li className="py-2 px-2 hover:bg-[#ccc] cursor-pointer text-[1rem] font-bold border list-none">
                Fill Your Details
              </li>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
};

export default SideNavbar;
