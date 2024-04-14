import { useLocation } from "react-router-dom";
import logo1 from "../../assets/landing/logo.png";
import logo3 from "../../assets/utility/logo3.png";
import closeIcon from "../../assets/utility/Shape.png";
import navArrow from "../../assets/utility/navArrow.png";
import { Link } from "react-router-dom";
import Socials from "./Socials";

interface Navbar {
  toggleMenu: any;
  isMenuOpen: any;
}
const Navbar: React.FC<Navbar> = ({ toggleMenu, isMenuOpen }) => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div>
      {isMenuOpen ? (
        <div className=" absolute inset-0 bg-black">
          <div className=" p-5 pr-5 flex flex-col gap-5 xl:hidden">
            <div className=" flex items-center justify-between ">
              <img src={logo3} className=" p-3" />
              <button className=" z-10" onClick={() => toggleMenu()}>
                <img src={closeIcon} className=" h-[20px] w-[20px]" />
              </button>
            </div>
            <div className=" flex flex-col gap-4 z-10">
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
        </div>
      ) : (
        <div className=" absolute inset-0 p-8 z-10">
          <div className=" flex items-center justify-between pt-0 xl:hidden ">
            <div className=" flex items-center mx-auto inset-0">
              <img
                src={logo1}
                className=" h-[51px] w-[139px]  sm:h-[80px] sm:w-[200px] lg:h-[180px] lg:w-[400px] "
              />
            </div>
            <button onClick={() => toggleMenu()}>
              <div className=" flex flex-col gap-[7px]">
                <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md lg:h-[6px] lg:w-[60px]" />
                <div className=" bg-[#C2DAF2] h-[3px] w-[30px] rounded-md lg:h-[6px] lg:w-[60px]" />
              </div>
            </button>
          </div>
        </div>
      )}

      {/* ------------------- */}
      <div className=" hidden xl:block  ">
        <div className=" absolute inset-0 flex justify-between mt-[75px] ml-[120px] mr-[120px] z-10">
          <Link to="/vision">
            <h3 className=" text-[24px] text-white font-d-din-bold uppercase  2xl:text-[35px]">
              VISION
            </h3>
          </Link>
          <Link to="utility">
            <h3 className=" text-[24px] text-white font-d-din-bold uppercase x 2xl:text-[35px]">
              UTILITY
            </h3>
          </Link>
          <img src={logo1} alt="" className=" mt-[-10px] 2xl:h-[188px] 2xl:w-[509px] h-[150px] w-[450px]" />
          <Link to="/roadmap">
            <h3 className=" text-[24px] text-white font-d-din-bold uppercase 2xl:text-[35px]">
              ROADMAP
            </h3>
          </Link>
          <Link to="/passengers">
            <h3 className=" text-[24px] text-white font-d-din-bold uppercase 2xl:text-[35px]">
              VIEW PASSENGERS
            </h3>
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
