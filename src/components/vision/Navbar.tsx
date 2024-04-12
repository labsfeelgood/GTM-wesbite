import { Link } from "react-router-dom";
import logo from "../../assets/vision/gateway to MARS.png";
const Navbar = () => {
  return (
    <div className=" h-[100px] bg-[#000000]  ">
      <div className=" flex items-center max-w-[1600px] mx-auto justify-between pt-16">
        <Link to="/vision">
          <h3 className=" uppercase text-[30px] font-d-din-bold text-white">
            VISION
          </h3>
        </Link>
        <Link to="/utility">
          <h3 className=" uppercase text-[30px] font-d-din-bold text-white">
            UTILITY
          </h3>
        </Link>
        <Link to="/">
          <img src={logo} />
        </Link>
        <Link to="/roadmap">
          <h3 className=" uppercase text-[30px] font-d-din-bold text-white">
            ROADMAP
          </h3>
        </Link>
        <Link to="/passengers">
          <h3 className=" uppercase text-[30px] font-d-din-bold text-white">
            VIEW PASSENGERS
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
