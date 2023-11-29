import { GoHomeFill } from "react-icons/go";
import logo from "../../images/logo3.png"
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <>

      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
        <div className="bg-[#DEE2E2] sticky top-0 z-50">
          <div className="container mx-auto px-4 py-1 ">
            <div className="flex items-center justify-between md:justify-evenly gap-3">
              <Link to={"/"}>
                <img src={logo}
                  width={80}
                  height={40}
                  alt="logo" />
              </Link>
{/* --------------------------------------For Large Screen------------------------------------------ */}
              <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12">
                <a href="#images" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">IMAGES</a>
                <a href="#3d" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">3D</a>
                <a href="#ai" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">AI</a>
                <a href="#integration" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INTEGRATIONS</a>
                <a href="#squad" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">THE SQUAD</a>
                <a href="#trends" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INDUSTRY TRENDS</a>
                <a href="#subscribe" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold mr-4">SUBSCRIBE</a>
                <Link to="/" className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4"><GoHomeFill />
                </Link>
              </div>


              <div className="md:hidden cursor-pointer ">
              <CgMenuGridO className="text-[32px]" />
              </div>
            </div> 
{/* -----------------------------------For Mobile--------------------------------------- */}
            <div className="block md:hidden bg-[#DEE2E2]  py-2">
              <div className="flex flex-col items-center gap-2">
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">IMAGES</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">3D</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">AI</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INTEGRATIONS</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">THE SQUAD</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INDUSTRY TRENDS</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">SUBSCRIBE</a>
                <a href="#" className="text-gray-800 text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4"><GoHomeFill />
                </a>

              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;