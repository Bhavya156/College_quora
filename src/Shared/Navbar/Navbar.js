import React from "react";
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";


const Navbar = () => {
 
  return (

      <div
        className="fixed top-0 left0 h-full w-16 m-0 mt-16
                        flex flex-col 
                        bg-gray-900 text-gray-100"
      >
        <NavbarIcon icon={<FaFire size="28" />} text="Fire" />
        <NavbarIcon icon={<BsPlus size="32" />} />
        <NavbarIcon icon={<BsFillLightningFill size="20" />} />
        <NavbarIcon icon={<FaPoo size="20" />} />
        <NavbarIcon icon={<BsGearFill size="20" />} />
      </div> 
      
  );
};

const NavbarIcon = ({ icon, text}) => (
  <div className="navbar-icon group">
    {icon}

    <span class="navbar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default Navbar;
