import gluLogo from "../../assets/landing/partners/glu.png";
import solanaLogo from "../../assets/landing/partners/solana.png";
import ethereumLogo from "../../assets/landing/partners/ethereum.png";
import baseLogo from "../../assets/landing/partners/base.png";
import printfulLogo from "../../assets/landing/partners/printful.png";
import backdrop1 from "../../assets/landing/partners/backdrop1.png";
import backdrop2 from "../../assets/landing/partners/backdrop2.png";
import backdrop3 from "../../assets/landing/partners/backdrop3.png";
const Partners = () => {
  return (
    <div className=" lg:h-[800px] bg-[#ffffff] mt-10 ">
      <div className=" flex flex-col gap-5">
        <div className=" flex justify-around mt-10">
          <h3 className=" font-d-din-bold text-[#8FA1B3] text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[50px] xl:text-[60px] 2xl:text-[65px] lg:ml-[50px]  ">
            Partners
          </h3>
          <img src={backdrop1} className=" w-1/4 max-w-[354px] h-auto" />
        </div>
        {/* ------------- */}
        <div className=" flex justify-around items-center lg:justify-normal lg:gap-[200px] lg:hidden">
          <img src={gluLogo} className="w-1/4 max-w-[275px] h-auto" />
          <img src={printfulLogo} className="w-1/3 max-w-[374px] h-auto" />
        </div>
        {/* -------------- */}
        <div className=" flex flex-col lg:flex-row lg:hidden">
          <div className=" flex justify-around items-center">
            <img src={baseLogo} className="w-1/6 max-w-[112px] h-auto" />
            <img src={solanaLogo} className="w-1/2 max-w-[348px] h-auto" />
          </div>
          <div className=" flex items-center justify-center">
            <img src={ethereumLogo} className=" w-1/3 max-w-[275px] h-auto" />
          </div>
        </div>
        {/* ------------------------------- */}
        <div className=" hidden lg:block ">
          <div className=" flex flex-col items-center xl:items-start xl:ml-[200px] 2xl:ml-[300px] gap-10">
            <div className=" flex items-center gap-[200px] ">
            <img src={gluLogo} className=" h-[100px] w-auto" />
            <img src={printfulLogo} className=" h-[50px] w-auto" />
          </div>
          <div className=" flex items-center gap-[100px]">
            <img src={baseLogo} className=" h-[100px] w-auto" />
            <img src={solanaLogo} className=" h-[100px] w-auto xl:h-[110px]" />
            <img src={ethereumLogo} className=" h-[100px] w-auto xl:h-[200px]" />
          </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className=" flex justify-between items-center">
          <img src={backdrop2} className=" w-1/4 max-w-[354px] h-auto" />
          <img src={backdrop3} className=" w-1/5 max-w-[120px] h-auto " />
        </div>
      </div>
    </div>
  );
};

export default Partners;
