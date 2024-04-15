import peace from "../../assets/landing/peace.png";
import line1 from "../../assets/landing/line1.png";
import peaceIcon from "../../assets/landing/Group 804.svg";
export const TaxAndTreasury = () => {
  return (
    <div>
      <h3 className=" font-d-din-bold text-white text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] text-left lg:text-left ">
        TAX & TREASURY
      </h3>
      <div className=" ml-10">
        <p className=" font-d-din-italic text-white">Embrace the Power of 5%</p>
        <div>
          <div className=" relative mx-auto">
            <div className=" bg-[#C2DAF2] h-[2px] w-[130px] "></div>
            <div className=" relative top-[-15px] bg-[#C2DAF2] h-[15px] w-[2px] rotate-[-30deg] right-[4px]"></div>
          </div>
        </div>
      </div>
      <div className=" display flex flex-col items-center">
        <img src={peaceIcon} />
      </div>
      <div className=" flex flex-col items-center ">
        <div className=" relative mx-auto">
          <div className=" bg-[#ffffff] h-[2px] w-[230px] "></div>
          <div className=" relative   top-[-1px] bg-[#ffffff] h-[15px] w-[2px] rotate-[30deg] left-[-4px]"></div>
        </div>
        <p className=" font-d-din-bold text-white  text-[16px]">
          Technological Advancements - 2%
        </p>
        <p className=" font-d-din-regular text-white  text-[12px]">
          2% is dedicated to Technological Advancements, where innovation knows
          no bounds
        </p>
      </div>
    </div>
  );
};
