// import React from "react";
// import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// import SideNavbar from "./DashboardComponents/sideNavbar";
// import Header from "./Header";
// import HomeDashboardMain from "./DashboardComponents/DasboardHome/HomeDashboardMain";

// const DashboardMain = () => {
//   const isUser = true;
//   let permission = true;
//   const Layout = () => {
//     return (
//       <>
//         <div className="flex ">
//           {isUser && (
//             <div className="w-[20%] h-screen border">
//               <Sidebar permission={permission} />
//             </div>
//           )}

//           <div
//             className={`${isUser ? "w-[80%]" : "w-[100%]"} bg-[whitesmoke] `}
//           >
//             <Header />
//             <Outlet />
//           </div>
//         </div>
//       </>
//     );
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           path: "/",

//           // element: permission ? isUser ? <LandingPage /> : <AdminLogin /> : "",
//           element: permission ? (
//             isUser ? (
//               <HomeDashboardMain />
//             ) : (
//                 // <AdminLogin />
//                 ""
//             )
//           ) : (
//             ""
//           ),
//         },
//         {
//           // path: "/text-moving",
//           // element: <MovingText />,
//         },

//       ],
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
//   };

// export default DashboardMain;

import React from "react";
import {
  Outlet,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import SideNavbar from "./DashboardComponents/sideNavbar";
import Header from "./Header";
import PropertiesMain from "./DashboardPages/DashProperties/PropertiesMain";
import HomeDashboardMain from "./DashboardComponents/DasboardHome/HomeDashboardMain";

const DashboardMain = () => {
  const isUser = true; // Define your user state here
  const permission = true; // Define your permission state here

  const Layout = () => {
    return (
      <div className="flex">
        {isUser && (
          <div className="w-[20%] h-screen border">
            <SideNavbar permission={permission} />
          </div>
        )}

        <div className={`${isUser ? "w-[80%]" : "w-[100%]"} bg-whitesmoke`}>
          {/* <Header /> */}
          <Outlet />
        </div>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeDashboardMain />} />
        <Route path="/dashproperties" element={<PropertiesMain />} />
      </Route>
    </Routes>
  );
};

export default DashboardMain;


