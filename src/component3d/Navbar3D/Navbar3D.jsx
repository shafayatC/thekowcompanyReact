import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import { RiArrowDownSFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import MegaMenu from "../MegaMenu/MegaMenu";

const Navbar3D = () => {
    const [getMenuBool, setMenuBool] = useState(false);
    const menuRef = useRef(null);




    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = () => {
        setShowDiv(!showDiv);
    };

    // useEffect(()=>{


    //     const handleScroll = () => {
    //         if (window.scrollY > 0) {
    //             menuRef.current.style.backgroundImage = 'url("/img/3d/menubgr.jpg")';
    //             menuRef.current.style.backgroundSize = '100% 100%';
    //             console.log("scrolled");
    //         } else {
    //             menuRef.current.style.backgroundColor = 'green';
    //             console.log("not scroll");
    //         }
    //       };

    //       window.addEventListener('scroll', handleScroll);

    //       // Cleanup the event listener on component unmount
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };

    // },[])
    return (
        <>
            {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
            <div ref={menuRef} className={`fixed w-full top-0 z-[999]  shadow-xl md:shadow-none  bg-[length:100%_100%] ${showDiv && `bg-[url("/img/3d/bg_3.jpg")] h-[310px]`}`}>

                <div className="container mx-auto px-4 md:px-0 py-1">

                    <div className="hidden md:flex items-center justify-between gap-3">
                        <Link to={"/"}>
                            <img src={logo}
                                width={80}
                                height={40}
                                alt="logo" />
                        </Link>
                        {/* --------------------------------------For Large Screen------------------------------------------ */}
                        {/* <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12"> */}
                        <div className="flex gap-24 items-center relative">


                            <button onClick={toggleDiv} className="relative text-gray-800 text-xl lg:text-sm font-medium flex gap-1 items-center">SERVICES
                                {/* <span><RiArrowDownSFill /></span> */}
                                <span><IoMdArrowDropdown /></span>
                                {showDiv && <div
                                    className="absolute w-full mt-4 -ml-1"
                                >

                                    <MegaMenu />

                                </div>}
                            </button>



                            <HashLink to="/2d#apps" className="text-gray-800 text-xl lg:text-sm font-medium">3D TRENDS</HashLink>
                            <HashLink to="/2d#price" className="text-gray-800 text-xl lg:text-sm font-medium">CONTACT US</HashLink>
                            <HashLink to="/2d#2d-contact" className="text-gray-800 text-xl lg:text-sm font-medium">CONTACT US</HashLink>

                            <a href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="text-gray-800 text-xl lg:text-sm border-2 rounded-3xl px-8 py-1 border-[#7C9C30] font-medium" rel="noreferrer">SIGN UP</a>
                            <Link to="/" className="text-gray-800 text-[26px] lg:text-[32px]font-medium"><GoHomeFill />
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
                </div>
                {/* -----------------------------------For Mobile--------------------------------------- */}
                {
                    getMenuBool && <div className="block md:hidden bg-[#DEE2E2] pt-2 ">
                        <div className="container mx-auto">
                            <div className="flex flex-col text-center gap-4">
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#services" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">SERVICES</HashLink>
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#apps" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">APPS</HashLink>
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#price" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">PRICE</HashLink>
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#order-guide" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">ORDER GUIDE</HashLink>
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#2d-trends" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">2D TRENDS</HashLink>
                                <HashLink onClick={() => setMenuBool(false)} to="/2d#2d-contact" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]">CONTACT US</HashLink>

                                <a onClick={() => setMenuBool(false)} href="https://app.cutoutwiz.com/Identity/Account/Login?ReturnUrl=%2F" target="_blank" className="transition-all duration-300 text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold py-3 hover:bg-[#cfd6d6] hover:border-b-2 hover:border-[#7C9C30]" rel="noreferrer">SIGN UP</a>
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

export default Navbar3D;