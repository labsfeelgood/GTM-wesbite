import { Navbar } from "./Utility";
import main1 from "../assets/utility/stake 2.png";
import UnderlineButton from "../components/UnderlineButton";
import main2 from "../assets/utility/stake4.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Staking = () => {
  return (
    <div className=" min-h-screen bg-black max-w-full">
      <Navbar />
      {/* ---------------------- */}
      <div className=" flex flex-col gap-4">
        <div>
          <div className=" relative">
            <img src={main1} className=" w-full " />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-r md:to-black " />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black lg:bg-gradient-to-b md:to-black " />
          </div>
          <div className=" flex flex-col gap-3">
            <h3 className=" font-d-din-bold text-white uppercase text-[24px] md:text-[30px] lg-text-[40px] text-center">
              Staking
            </h3>
            <p className=" font-d-din-regular text-white text-[15px] text-center md:text-[20px] sm:text-[16px] lg:text-[25px] pl-2 pr-2">
              Staking represents a fundamental component of the ColonizeMars
              ecosystem.
            </p>
            <UnderlineButton />
          </div>
        </div>
        {/* ----------------------------------------------------------------- */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Overview
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            $GTM holder will be allowed to claim & stake their $GTM tokens with
            the official $GTM staking pool. The APY earned from staking $GTM
            will fluctuate based on the amount of stakers in the pool. This is
            what we refer to as "Dynamic MARS Staking"
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
        {/* ------------------------------------------------------------------------------ */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Earning Passive APY
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            One of the primary attractions of staking $GTM is the opportunity to
            earn passive Annual Percentage Yield (APY)
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
        {/* ------------------------------------------------------------------------------------- */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Interest Algorithms
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            The implementation of staking algorithms allows for the compounding
            of interest on $GTM tokens held over a duration, creating an
            incentive structure for sustained ecosystem investment
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
        {/* ------------------------------------------------------------------------------------------- */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Market Stabilization Function
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            The act of staking $GTM inherently contributes to the reduction of
            circulating supply, thereby mitigating market volatility and
            enhancing the overall economic stability of the Meme Kombat
            ecosystem
          </p>
        </div>
        <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000]" />
        {/* ------------------------------------------------------------------------------------------------------------------------ */}
        <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
          <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[30px] ">
            Incentivization of User Involvement
          </h3>
          <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
            Through APY earnings, users are financially motivated to maintain a
            continuous, vested interest in the platform, thereby amplifying
            community engagement and retention, particularly crucial during
            non-active periods on MARS
          </p>
        </div>
        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
        <div className=" relative">
          <div className=" relative">
            <img src={main2} className=" w-full" />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black lg:bg-gradient-to-r md:to-black " /> */}
          </div >
          <div className=" absolute inset-0 flex flex-col gap-8 p-10">
            <h3 className=" text-white uppercase font-d-din-bold text-[24px]">
              staking highlights
            </h3>
            <div className=" flex flex-col gap-5">
              <div className=" flex justify-between">
                <p className=" font-d-din-regular text-white text-[16px]">
                  TOKEN
                </p>
                <p className=" font-d-din-bold text-[#C2DAF2] text-[16px]">
                  $GTM
                </p>
              </div>
              <div className=" bg-[#7A8A99] h-[1px] w-full" />
              <div className=" flex justify-between">
                <p className=" font-d-din-regular text-white text-[16px]">
                  LOCKING PERIOD
                </p>
                <p className=" font-d-din-bold text-[#C2DAF2] text-[16px]">
                  10 DAYS
                </p>
              </div>
              <div className=" bg-[#7A8A99] h-[1px] w-full" />{" "}
              <div className=" flex justify-between">
                <p className=" font-d-din-regular text-white text-[16px]">
                  AUTOMATIC RESTAKING
                </p>
                <p className=" font-d-din-bold text-[#C2DAF2] text-[16px]">
                  YES
                </p>
              </div>
              <div className=" bg-[#7A8A99] h-[1px] w-full" />{" "}
              <div className=" flex justify-between">
                <p className=" font-d-din-regular text-white text-[16px]">
                  COMPOUNDING REWARDS
                </p>
                <p className=" font-d-din-bold text-[#C2DAF2] text-[16px]">
                  YES
                </p>
              </div>
              <div className=" bg-[#7A8A99] h-[1px] w-full" />
              <div>
                <div className=" flex gap-3 items-center mt-5">
                  <h3 className=" text-white font-d-din-regular uppercase text-[20px] md:text-[25px] lg-text-[30px]">
                    Start Staking
                  </h3>
                  <ArrowRightAltIcon className=" text-white" />
                </div>
                <div className=" bg-[#C2DAF2] w-[180px] h-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
