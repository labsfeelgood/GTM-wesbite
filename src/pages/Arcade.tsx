import { Navbar } from "./Utility";
import main1 from "../assets/utility/2-arcade.png";
import main2 from "../assets/utility/3-arcade.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Footer from "../components/Footer";

const Arcade = () => {
  return (
    <div>
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
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r md:to-black " />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-b md:to-black " />
            </div>
            <div className=" flex flex-col gap-3">
              <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
                arcade betting
              </h3>
              <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
                GTM Arcade - Your Ultimate Gaming Destination!
              </p>
              <div className=" flex flex-col gap-2">
                <a href=" https://arcade.colonizemars.space/" target="_blank">
                  <div className=" flex gap-3 items-center mt-5 justify-center ">
                    <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                      VISIT ARCADE
                    </h3>
                    <ArrowRightAltIcon className=" text-white" />
                  </div>
                </a>
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
              Are you a passionate gamer seeking rewards for your gaming
              prowess? Look no further, because GTM Arcade is your home for
              immersive gaming experiences and exciting rewards!
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
          {/* ------------------------------------------------------------------------------ */}
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
              hOW IT WORKS
            </h3>
            <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Join a lobby of your choice and face off against other players.
              The winner takes home a whopping 90% of the stakes, while the
              remaining 10% is contributed to the project vault. This fund will
              be utilized to drive the project forward, ensuring continuous
              innovation and improvement
            </p>
          </div>
          {/* ------------------------------------------------------------------------------------- */}
          <div className=" relative">
            <div className=" relative">
              <img
                src={main2}
                className="  w-full h-[600px] object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-r md:to-black " />
            </div>
            <div className=" absolute inset-0 flex flex-col gap-8 p-10 lg:p-20">
              <h3 className=" text-white uppercase font-d-din-bold text-[24px] lg:text-[30px]">
                ARCADE SETUP
              </h3>
              <div className=" flex flex-col gap-5">
                <div className=" flex justify-between lg:gap-[470px] lg:justify-normal">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    GAMES
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    06
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[580px]" />
                <div className=" flex justify-between lg:gap-[360px] lg:justify-normal">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    KYC & VERIFICATION
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    NO
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[580px]" />{" "}
                <div className=" flex justify-between lg:gap-[325px] lg:justify-normal">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    INSTANT WITHDRAWALS
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    YES
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[580px]" />{" "}
                <div className=" flex justify-between lg:gap-[400px] lg:justify-normal">
                  <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]">
                    PROVABLY FAIR
                  </p>
                  <p className=" font-d-din-bold text-[#C2DAF2] text-[16px] lg:text-[20px]">
                    YES
                  </p>
                </div>
                <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[580px]" />
                <div className=" flex flex-col gap-2">
                  <a href=" https://arcade.colonizemars.space/" target="_blank">
                    <div className=" flex gap-3 items-center mt-5">
                      <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                        VISIT ARCADE
                      </h3>
                      <ArrowRightAltIcon className=" text-white" />
                    </div>
                  </a>
                  <div className=" bg-[#C2DAF2] w-[180px] h-[2px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Arcade;
