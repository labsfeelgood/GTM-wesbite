import logo1 from "../../assets/utility/Logo 2.png";
import logo3 from "../../assets/utility/logo3.png";
import closeIcon from "../../assets/utility/Shape.png";
import navArrow from "../../assets/utility/navArrow.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo4 from "../../assets/landing/logo.svg";
import currentNavIcon from "../../assets/utility/current_nav.png";
import underline from "../../assets/landing/nav-underline.svg"
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
                        ? " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
                        : " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
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
                        ? " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
                        : " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
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
                        ? " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
                        : " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
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
                        ? " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
                        : " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
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
                        ? " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
                        : " text-[#3D3D3D] font-d-din-bold text-[20px] text-right"
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
        <div className=" flex items-center justify-between p-5 pt-8 xl:hidden">
          <div className=" flex items-center gap-3 ">
            <div className=" flex flex-col items-center justify-center">
              <div className=" bg-[#A6916E] rounded-full w-[30px] md:h-[50px] h-[30px] md:w-[50px] flex items-center justify-center">
                <img
                  src={logo1}
                  className=" h-[25px] w-[20px] md:h-[40px] md:w-[35px]"
                />
              </div>
            </div>
            <img src={logo4} className=" h-[15px]  md:h-[25px] w-[250px]" />
          </div>
          <button onClick={() => setIsOpen(true)}>
            <div className=" flex flex-col gap-[7px]">
              <div className=" bg-[#3D3D3D] h-[3px] w-[30px] rounded-md" />
              <div className=" bg-[#3D3D3D] h-[3px] w-[30px] rounded-md" />
            </div>
          </button>
        </div>
      )}
      <div className=" hidden xl:block">
        <div className=" flex items-center pt-16">
          <div className=" mx-auto flex items-center gap-[100px] pr-8 pl-8 lg:gap-[100px] md:gap-[100px]">
            <div className=" flex flex-col items-center relative w-[150px] ">
              <Link to="/vision">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-[#3D3D3D]">
                  vision
                </h3>
              </Link>

              {isActive("/vision") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-6 w-[130px] z-10"
                />
              )}
            </div>

            <div className=" flex flex-col items-center relative w-[150px] ">
              <Link to="/utility">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-[#3D3D3D]">
                  utility
                </h3>
              </Link>

              {isActive("/utility") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-6 w-[130px] z-10 "
                />
              )}
            </div>
            <Link to="/">
              <div>
                <img src={logo4} />
              </div>
            </Link>

            <div className=" flex flex-col items-center relative w-[180px]  ">
              <Link to="/roadmap">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-[#3D3D3D]">
                  roadmap
                </h3>
              </Link>

              {isActive("/roadmap") && (
                <img
                  src={currentNavIcon}
                  className=" absolute top-3 w-[180px] z-10"
                />
              )}
            </div>
            <div className=" flex flex-col items-center relative w-[200px] ">
              <Link to="/passengers">
                <h3 className=" uppercase font-d-din-bold text-[25px] xl:text-[30px] text-[#3D3D3D]">
                  passengers
                </h3>
              </Link>
              {isActive("/passengers") && (
                <img
                  src={underline}
                  className=" absolute top-5 w-[180px] z-10 right-5"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
