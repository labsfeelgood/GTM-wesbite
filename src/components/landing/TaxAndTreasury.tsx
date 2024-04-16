import peace from "../../assets/landing/peace.png";
import line1 from "../../assets/landing/line1.png";
import peaceIcon from "../../assets/landing/Group 804.svg";
export const TaxAndTreasury = () => {
  return (
    <div className=" xl:hidden">
      <h3 className=" font-d-din-bold text-white text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] text-left lg:text-left ml-5 sm:ml-10 ">
        TAX & TREASURY
      </h3>
      <div className=" ml-5 sm:ml-11">
        <p className=" font-d-din-italic text-white text-[16px] sm:text-[20px]">Embrace the Power of 5%</p>
        <div>
          <div className=" relative mx-auto">
            <div className=" bg-[#C2DAF2] h-[2px] w-[130px] "></div>
            <div className=" relative top-[-15px] bg-[#C2DAF2] h-[15px] w-[2px] rotate-[-30deg] right-[4px]"></div>
          </div>
        </div>
      </div>
      <div className=" display flex flex-col items-center">
        <img src={peaceIcon} className=" md:h-[400px] md:w-[400px]"/>
      </div>
      <div className=" flex  flex-col gap-10 p-6 sm:p-10">
        <div className=" flex flex-col  ">
          <div className=" relative ">
            <div className=" bg-[#ffffff] h-[2px] w-[230px] "></div>
            <div className=" relative   top-[-1px] bg-[#ffffff] h-[15px] w-[2px] rotate-[30deg] left-[-4px]"></div>
          </div>
          <p className=" font-d-din-bold text-white  text-[16px] sm:text-[20px]">
            Technological Advancements - 2%
          </p>
          <p className=" font-d-din-regular text-white  text-[12px] sm:text-[16px]">
            2% is dedicated to Technological Advancements, where innovation
            knows no bounds
          </p>
        </div>
        <div className=" flex flex-col  ">
          <div className=" relative ">
            <div className=" bg-[#ffffff] h-[2px] w-[230px] "></div>
            <div className=" relative   top-[-1px] bg-[#ffffff] h-[15px] w-[2px] rotate-[30deg] left-[-4px]"></div>
          </div>
          <p className=" font-d-din-bold text-white  text-[16px] sm:text-[20px]">
            Moon Fund - 2%
          </p>
          <p className=" font-d-din-regular text-white  text-[12px] sm:text-[16px]">
            Within every buy and sell, 2% is allocated to Moon Fund,
            strategically dedicated to fostering partnerships and elevating our
            cosmic presence through marketing endeavors
          </p>
        </div>
        <div className=" flex flex-col  ">
          <div className=" relative ">
            <div className=" bg-[#ffffff] h-[2px] w-[230px] "></div>
            <div className=" relative   top-[-1px] bg-[#ffffff] h-[15px] w-[2px] rotate-[30deg] left-[-4px]"></div>
          </div>
          <p className=" font-d-din-bold text-white  text-[16px] sm:text-[20px]">
            Liquidity Pool - 1%
          </p>
          <p className=" font-d-din-regular text-white  text-[12px] sm:text-[16px]">
            Stability is key to a successful space journey. By dedicating 1% of
            each transaction to liquidity, we ensure that Mission Mars remains
            on a secure trajectory
          </p>
        </div>
      </div>
    </div>
  );
};
