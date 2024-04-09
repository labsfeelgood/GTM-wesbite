import colonizeMars from "../../assets/landing/2.png" 
import ColonizeMarsMainText, { ColonizeMarsSubText } from "./ColonizeMarsText"
const Colonize = () => {
  return (
    <div className=" relative h-screen bg-[#000000]">
      <div
        className="absolute  bg-cover bg-center w-[899px] h-full right-0"
        style={{ backgroundImage: `url(${colonizeMars})` }}
      ></div>
      <ColonizeMarsMainText/>
      <ColonizeMarsSubText/>


    </div>
  )
}

export default Colonize