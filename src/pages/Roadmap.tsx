import { Navbar } from "./Utility";
import main1 from "../assets/roadmap/1.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import loader1 from "../assets/landing/Icons/loader1.svg";
// impor
const Roadmap = () => {
  return (
    <div className=" min-h-screen bg-black max-w-full">
      <Navbar />
      {/* ---------------------- */}
      <div className=" flex flex-col gap-4">
        <div>
          <div className=" relative">
            <img
              src={main1}
              className=" w-full lg:h-[700px] lg:object-cover lg:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black " />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-b md:to-black " /> */}
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
              roadmap
            </h3>
            <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
              Colonize Mars isn't just a meme coin – it's a movement fueled by
              the power of community
            </p>
            <div className=" flex flex-col gap-2">
              <div className=" flex gap-3 items-center mt-5 justify-center ">
                <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                  BUY $GTM
                </h3>
                <ArrowRightAltIcon className=" text-white" />
              </div>
              <div className=" bg-[#C2DAF2] w-[180px] h-[2px] mx-auto" />
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Overview
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            Colonize Mars recognizes the vital role of marketing and community
            engagement in the project's success. By fostering an active and
            interconnected community, Colonize Mars aims to create a supportive
            ecosystem where users feel valued, engaged, and informed
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />
        {/* --------------------------------------------------------------------------------- */}

        
      </div>
    </div>
  );
};

export default Roadmap;
