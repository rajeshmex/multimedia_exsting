import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PropertiesMain from './DashboardPages/DashProperties/PropertiesMain'
import SideNavbar from './DashboardComponents/sideNavbar'
import DashboardMain from './DashboardMain'

const Header = () => {
  return (
    <>
      <SideNavbar />
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route path="/dashproperties" element={<PropertiesMain />} />
      </Routes>
      
    </>
  );
}

export default Header