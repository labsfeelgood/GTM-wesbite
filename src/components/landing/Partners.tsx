import backdrop1 from "../../assets/landing/partners/backdrop1.png";
import backdrop2 from "../../assets/landing/partners/backdrop2.png";
import backdrop3 from "../../assets/landing/partners/backdrop3.png";
import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../../assets/landing/partners/1.jpg";
import partner2 from "../../assets/landing/partners/2.jpg";
import partner3 from "../../assets/landing/partners/3.jpg";
import partner4 from "../../assets/landing/partners/4.jpg";
import partner5 from "../../assets/landing/partners/5.jpg";

const Partners: React.FC = () => {
  return (
    <div className="  bg-[#ffffff] mt-10 ">
      <div className=" flex flex-col gap-5 ">
        <div className=" flex justify-around mt-10">
          <h3 className=" font-d-din-bold text-[#8FA1B3] text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[50px] xl:text-[60px] 2xl:text-[65px] lg:ml-[50px]  ">
            Partners
          </h3>
          <img src={backdrop1} className=" w-1/4  max-w-[354px] h-auto" />
        </div>
        {/* ------------------------------- */}
        <div className=" xl:w-[1000px] xl:mx-auto 2xl:w-[1400px] 2xl:mx-auto">
          <Marquee className="" speed={80} gradient delay={0} autoFill pauseOnHover gradientWidth={100}>
            <div className=" w-[100px] h-[100px] flex p-3 md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]">
              <img src={partner1} className=" w-full h-auto" />
            </div>
            <div className=" w-[100px] h-[100px] flex p-3 md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]">
              <img src={partner2} className=" w-full h-auto" />
            </div>
            <div className=" w-[100px] h-[100px] flex p-3 md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]">
              <img src={partner3} className=" w-full h-auto" />
            </div>
            <div className=" w-[100px] h-[100px] flex p-3 md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]">
              <img src={partner4} className=" w-full h-auto" />
            </div>
            <div className=" w-[100px] h-[100px] flex p-3 md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] xl:h-[250px] xl:w-[250px] 2xl:h-[300px] 2xl:w-[300px]">
              <img src={partner5} className=" w-full h-auto" />
            </div>
          </Marquee>
        </div>
        {/* ------------------ */}
        <div className=" flex justify-between items-center lg:mt-[100px] lg:mb-[50px]">
          <img src={backdrop2} className=" w-1/4 max-w-[354px] h-auto" />
          <img src={backdrop3} className=" w-1/5 max-w-[120px] h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
