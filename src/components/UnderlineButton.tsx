import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const UnderlineButton = () => {
  return (
    <div>
       <div className=" flex gap-3 items-center justify-center">
       <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">Start Staking</h3>
        <ArrowRightAltIcon className=" text-white"/>
       </div>
       <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto"/>
    </div>
  )
}

export default UnderlineButton