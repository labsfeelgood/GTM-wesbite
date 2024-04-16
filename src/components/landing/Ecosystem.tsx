import main1 from "../../assets/landing/4.png";
import loader1 from "../../assets/landing/Icons/loader1.svg";
import loader2 from "../../assets/landing/Icons/loader2.svg";
const Ecosystem = () => {
  return (
    <div className=" relative">
      <div className=" relative">
        <img
          src={main1}
          className=" w-full h-[800px] lg:h-screen object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent " />
      </div>
      <div className=" absolute inset-0 flex flex-col gap-8 p-10 lg:p-20">
        <h3 className=" text-white uppercase font-d-din-bold text-[24px] lg:text-[30px] xl:text-[40px]">
          ECOSYSTEM
        </h3>
        <div className=" flex flex-col gap-5">
          <div className=" flex justify-between lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              STAKING
            </p>
            <img
              src={loader1}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />
          <div className=" flex justify-between lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              MERCH
            </p>
            <img
              src={loader1}
              className=" w-[30px] h-[30px]"
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px]  xl:w-[690px]" />{" "}
          <div className=" flex justify-between lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              ARCADE BETTING
            </p>
            <img
              src={loader1}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />{" "}
          <div className=" flex justify-between  lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              ALPHA GROUP
            </p>
            <img
              src={loader2}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              MOON FUND
            </p>
            <img
              src={loader2}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              CASINO
            </p>
            <img
              src={loader2}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />
          <div className=" flex justify-between  lg:justify-normal lg:gap-[400px]">
            <p className=" font-d-din-regular text-white text-[16px] lg:text-[20px]  w-[240px] xl:text-[25px]">
              COMMUNITY PORTAL
            </p>
            <img
              src={loader2}
              className=" w-[30px] h-[30px] "
            />
          </div>
          <div className=" bg-[#7A8A99] h-[1px] w-full lg:w-[640px] xl:w-[690px]" />
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
