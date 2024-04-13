import logo2 from "../assets/vision/gateway to MARS.png";
import main1 from "../assets/utility/1.png";
import logo1 from "../assets/utility/Logo 2.png";
import logo3 from "../assets/utility/logo3.png";
import closeIcon from "../assets/utility/Shape.png";
import navArrow from "../assets/utility/navArrow.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo4 from "../assets/vision/gateway to MARS.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import main2 from "../assets/utility/2.png";
import frame2 from "../assets/utility/frame2.png";
import main3 from "../assets/utility/3(1).png"
const Utility = () => {
  return (
    <div className=" bg-[#000000] min-h-screen max-w-full ">
      <Navbar />
      {/* ------------------------------- */}
      <div className=" relative  md:h-[800px] md:mt-[100px]">
        <div className=" flex flex-col md:flex-row-reverse md:mt-10 md:mx-0 md:gap-[150px] ">
          <div className=" relative ">
            <img src={main1} className=" md:h-[560px] w-[850px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black md:bg-gradient-to-r md:to-transparent "></div>
          </div>
          <div className=" flex flex-col md:gap-5 md:mt-16">
            <h3 className=" uppercase text-white font-d-din-bold text-[24px] md:text-[35px] lg-text-[50px] text-center md:text-left w-full ">
              Staking
            </h3>
            <p className=" font-d-din-regular text-white text-[18px] text-center w-full mx-auto  p-6 md:w-[600px] md:text-[25px] lg:text-[30px] md:text-left md:p-0">
              Each $GTM holder will be allowed to claim & stake their $GTM
              tokens with the official $GTM staking pool. The APY earned from
              staking $GTM will fluctuate based on the amount of stakers in the
              pool. This is what we refer to as "Dynamic MARS Staking"
            </p>
            <div className=" flex gap-2 flex-col">
              <div className=" flex w-[180px] mx-auto  text-center gap-4 md:mx-0">
                <Link to='/utility/staking'><h4 className=" uppercase text-white font-d-din-regular text-[20px] text-center ">
                  Know more
                </h4></Link>
                <ArrowRightAltIcon className=" text-white " />
              </div>
              <div className=" h-[2px] w-[180px] bg-[#C2DAF2] mx-auto md:mx-0 " />
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------- */}
      <div className=" md:h-[800px] md:mt-24 mt-10">
        <div className=" md:flex md:gap-16 ">
          <div className=" relative md:w-[950px]">
            <img src={main2} className=" md:h-[370px] md:w-[700px] w-full" />
            <img
              src={frame2}
              className=" hidden md:block absolute inset-0 opacity-30 h-[450px] w-[1200px] left-[-160px] top-[-38px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black md:bg-gradient-to-r md:to-transparent "></div>
          </div>
          <div className=" flex flex-col md:gap-5 ">
            <h3 className=" uppercase text-white font-d-din-bold text-[24px] md:text-[35px] lg-text-[50px] text-center md:text-right w-full ">
              ARCADE betting
            </h3>
            <p className=" font-d-din-regular text-white text-[18px] text-center md:text-right w-full mx-auto  p-6 md:w-[600px] md:text-[25px] lg:text-[30px] md:p-0">
              Our games are designed for everyone to enjoy, focusing on simple
              and pure fun rather than complex skill-based mechanics. Join a
              lobby of your choice and face off against other players. The
              winner takes home a whopping 90% of the stakes
            </p>
            <div className=" flex gap-2 flex-col items-end">
              <div className=" flex w-[180px] mx-auto  text-center gap-4 md:mx-0">
                <h4 className=" uppercase text-white font-d-din-regular text-[20px] text-center ">
                  Know more
                </h4>
                <ArrowRightAltIcon className=" text-white " />
              </div>
              <div className=" h-[2px] w-[180px] bg-[#C2DAF2] mx-auto md:mx-0 " />
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------------------------------------------- */}
      <div>
        <div>
          <div className="  relative">
            <img src={main3} className=" w-full"/>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black md:bg-gradient-to-r md:to-transparent "></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Utility;
 const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div>
      {isOpen ? (
        <div className=" p-5 pr-5 flex flex-col gap-5 lg:hidden">
          <div className=" flex items-center justify-between ">
            <img src={logo3} className=" p-3" />
            <button className="" onClick={() => setIsOpen(false)}>
              <img src={closeIcon} className=" h-[20px] w-[20px]" />
            </button>
          </div>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/">
                  <h3
                    className={
                      isActive("/")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    HOME
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/vision") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/vision">
                  <h3
                    className={
                      isActive("/vision")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    VISION
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/utility") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/utility">
                  <h3
                    className={
                      isActive("/utility")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    UTILITY
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/roadmap") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/roadmap">
                  <h3
                    className={
                      isActive("/roadmap")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    ROADMAP
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                {isActive("/passengers") ? (
                  <img
                    src={navArrow}
                    className=" w-[70px] h-[10px] relative top-3"
                  />
                ) : (
                  <></>
                )}
                <Link to="/passengers">
                  <h3
                    className={
                      isActive("/passengers")
                        ? " text-[#FFFFFF] font-d-din-bold text-[20px] text-right"
                        : " text-[#8FA1B3] font-d-din-bold text-[20px] text-right"
                    }
                  >
                    PASSENGERS
                  </h3>
                </Link>
              </div>
              <div className=" bg-[#7A8A99] w-full mx-auto h-[1px]" />
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-between p-5 pt-8 lg:hidden">
          <div className=" flex items-center gap-3 ">
            <img src={logo1} className=" h-[25px] w-[20px] md:h-[40px] md:w-[35px]" />
            <img src={logo2} className=" h-[15px]  md:h-[25px] w-[250px]" />
          </div>
          <button onClick={() => setIsOpen(true)}>
            <div className=" flex flex-col gap-[7px]">
              <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md" />
              <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md" />
            </div>
          </button>
        </div>
      )}
      <div className=" hidden lg:block">
        <div className=" flex items-center pt-16">
          <div className=" mx-auto flex items-center gap-[100px] pr-8 pl-8 lg:gap-[100px] md:gap-[100px]">
            <div>
              <Link to="/vision"></Link>
              <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                vision
              </h3>
            </div>

            <div>
              <Link to="/utility">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  utility
                </h3>
              </Link>
            </div>
            <Link to="/">
              <div>
                <img src={logo4} />
              </div>
            </Link>
            <div>
              <Link to="roadmap">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  roadmap
                </h3>
              </Link>
            </div>
            <div>
              <Link to="passengers">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-white">
                  passengers
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export {Navbar}