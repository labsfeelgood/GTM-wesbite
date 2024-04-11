import logo from "../../assets/landing/logo.png"
import Socials from "./Socials"
const Navbar = () => {
  return (
    <div className=" absolute inset-0 flex justify-between mt-[75px] ml-[150px] mr-[132px]">
        <h3 className=" text-[24px] text-white font-d-din-bold uppercase">VISION</h3>
        <h3 className=" text-[24px] text-white font-d-din-bold uppercase">UTILITY</h3>
        <img 
        src={logo}
              alt=""
        className=" mt-[-10px] h-[188px] w-[509px]"
        />
        <h3 className=" text-[24px] text-white font-d-din-bold uppercase">ROADMAP</h3>
        <h3 className=" text-[24px] text-white font-d-din-bold uppercase">VIEW PASSENGERS</h3>
        <Socials/>
    </div>
  )
}

export default Navbar