import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeMain from "./components/Home/HomeMain";
import JobLanding from "./components/Job-portel/Joblanding";
import Secheader from "./components/header/Secheader";
import Header from "./components/header/Header";
import MovingText from "./components/movingtext/MovingText";
import JobNavbar from "./components/Job-portel/JobNavbar";
import ChatMain from "./pages/allchat/ChatMain";
import Helpmain from "./pages/help/Helpmain";
import CreateTicket from "./pages/help/ticket/createTicket";
import FirstPage from "./components/Job-portel/CreateJob/FirstPage";
import RequirementJob from "./components/Job-portel/CreateJob/RequirementJob";
import PostDetails from "./components/Job-portel/CreateJob/PostDetails";
import AllJobs from "./components/Job-portel/ViewJobs/AllJobs";
import ViewJobs from "./components/Job-portel/ViewJobs/viewJobs";
import ViewTicket from "./pages/help/viewticket/ViewTicket";
import ViewOneticket from "./pages/help/viewticket/viewOneticket";
import PropertyMain from "./pages/Properties/PropertyMain";
import PropertyNavbar from "./pages/Properties/PropertyNavbar";
import PropertyView from "./pages/Properties/PropertyView";
import PropertySeller from "./pages/Properties/PropertySeller";
import Login from "./pages/login/Login";
import Sign from "./pages/login/Signup";
import DashboardMain from "./Dashboard/DashboardMain";

const Routing = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const renderHeader = () => {
    if (
      currentPath.includes("/job-portal") ||
      currentPath.includes("postjob") ||
      currentPath.includes("requirementjob") ||
      currentPath.includes("createjob")
    ) {
      return <JobNavbar />;
    } else if (
      currentPath.includes("property") ||
      currentPath.includes("propertSeller")
    ) {
      return <PropertyNavbar />;
    } else if (currentPath.includes("/chat") || currentPath.includes("/dash")) {
      return null;
    } else {
      return (
        <>
          <Header />
          <Secheader />
          <MovingText />
        </>
      );
    }
  };

  return (
    <>
      {renderHeader()}
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/job-portal" element={<JobLanding />} />
        <Route path="/chat" element={<ChatMain />} />
        <Route path="/help" element={<Helpmain />} />
        <Route path="/createticket" element={<CreateTicket />} />
        <Route path="/createjob" element={<FirstPage />} />
        <Route path="/requirementjob" element={<RequirementJob />} />
        <Route path="/postjob" element={<PostDetails />} />
        <Route path="/alljobs" element={<AllJobs />} />
        <Route path="/viewjobs" element={<ViewJobs />} />
        <Route path="/viewticket" element={<ViewTicket />} />
        <Route path="/viewoneticket" element={<ViewOneticket />} />
        <Route path="/property" element={<PropertyMain />} />
        <Route path="/viewproperty" element={<PropertyView />} />
        <Route path="/propertSeller" element={<PropertySeller />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />

        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </>
  );
};

export default Routing;
