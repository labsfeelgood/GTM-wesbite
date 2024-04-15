import main1 from "../../assets/landing/2.png";
import underline from "../../assets/landing/underline.png";
import main2 from "../../assets/landing/2(1).png"
const Colonize = () => {

  return (
    <div className="relative lg:h-[800px]">
      <div className=" flex flex-col gap-0 h-[150px] items-center">
        <h2 className=" font-d-din-bold text-white text-[27px] uppercase lg:text-[68px] z-10">
          colonize mars
        </h2>
        <div className=" relative">
          <p className=" text-white font-d-din-regular text-[13px] lg:text-[32px] ">
            The ultimate, community-driven, meme coin!
          </p>
          <img src={underline} className=" w-[200px] lg:w-[450px] absolute inset-0 top-2 z-10" />
        </div>

        <p className=" text-[13px] font-d-din-italic text-[#C2DAF2] lg:text-[32px] z-10">
          Powered by{" "}
          <span className=" font-d-din-bold text-[13px] text-[#C2DAF2] lg:text-[32px] z-10">
            $GTM
          </span>
        </p>
      </div>
      {/* -------------------- */}
      <div className=" relative lg:hidden">
        <img src={main1} className=" w-full " />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-black lg:via-transparent lg:to-transparent" />
      </div>
      {/* ------------------ */}
      <div className="hidden lg:block absolute top-0  right-0  ">
        <img src={main2} className=" h-[800px] "/>

      </div>
      {/* ------------------------- */}
      <div className=" flex flex-col items-center gap-4 lg:flex-row border lg:items-end">
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            5,200
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            HOLDERS
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            $2.5M
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            MCAP
          </p>
        </div>
        <div className=" flex flex-col items-center">
          <h3 className=" uppercase text-white font-d-din-bold text-[27px]">
            MARS
          </h3>
          <p className=" text-white uppercase font-d-din-regular text-[17px]">
            DESTINATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default Colonize;
