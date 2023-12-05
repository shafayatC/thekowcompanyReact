import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [getMenuBool, setMenuBool] = useState(false); 
  return (
    <>
      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
      <div className="bg-[#DEE2E2] sticky w-full top-0 z-[999]  shadow-xl md:shadow-none">
        <div className="container mx-auto px-4 py-1">
          <div className="hidden md:flex items-center justify-between gap-3">
            <Link to={"/"}>
              <img src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            {/* --------------------------------------For Large Screen------------------------------------------ */}
            {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
            <HashLink to="/#images" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">IMAGES</HashLink>
            <HashLink to="/#3d" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">3D</HashLink>
            <HashLink to="/#ai" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">AI</HashLink>
            <HashLink to="/#integration" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">INTEGRATIONS</HashLink>
            <HashLink to="/#squad" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">THE SQUAD</HashLink>
            <HashLink to="/#trends" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">INDUSTRY TRENDS</HashLink>
            <HashLink to="/#virtual" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]">VIRTUAL TOUR</HashLink>
            <HashLink to="/#subscribe" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold">SUBSCRIBE</HashLink>
            <Link to="/" className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill />
            </Link>
          </div>
          <div className="flex items-center justify-between md:hidden">
            <Link to={"/"}>
              <img src={logo}
                width={80}
                height={40}
                alt="logo" />
            </Link>
            <CgMenuGridO onClick={() => setMenuBool(!getMenuBool)} className="text-[32px]  cursor-pointer" />
          </div>
        </div>
        {/* -----------------------------------For Mobile--------------------------------------- */}
        {
          getMenuBool &&         <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
          <div className="container mx-auto">
            <div className="flex flex-col text-center gap-4">
              <HashLink onClick={() => setMenuBool(false)} href="#images" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">IMAGES</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#3d" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">3D</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#ai" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">AI</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#integration" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">INTEGRATIONS</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#squad" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">THE SQUAD</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#trends" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">INDUSTRY TRENDS</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#virtual" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">VIRTUAL TOUR</HashLink>
              <HashLink onClick={() => setMenuBool(false)} href="#subscribe" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">SUBSCRIBE</HashLink>
              <Link onClick={() => setMenuBool(false)} to="/" className="transition-all duration-300 flex flex-col items-center text-gray-800 text-[32px] border-b-2 py-3 hover:bg-[#cfd6d6] border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30]"><GoHomeFill /></Link>
            </div>
          </div>
        </div>
        }
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Navbar;