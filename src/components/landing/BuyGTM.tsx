import buy1frame from "../../assets/landing/buy1.png";
import buy2frame from "../../assets/landing/buy2.png";
import { SwapWidget, darkTheme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
const BuyGTM = () => {
  return (
    <div className=" h-screen bg-[#000000] relative mx-auto">
      <div className=" absolute left-48 flex flex-col gap-7 mt-6">
        <h2 className=" font-d-din-bold text-white text-[60px] mt-6 ml-5">
          BUY $GTM
        </h2>
        <div className=" flex gap-9 items-center ml-5">
          <p className=" text-white font-d-din-regular text-[30px]">
            Contract Address: 0xe8b...8a18
          </p>
          <div className=" w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />
          <p className=" text-white font-d-din-regular text-[30px]">Tax: 5%</p>
          <div className=" w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />
          <p className=" text-white font-d-din-regular text-[30px]">
            Network: ETH
          </p>
        </div>
        <div className=" flex gap-40 mt-8">
          <div className=" relative">
            <img src={buy1frame} className=" w-[850px] h-[530px]" />
            <div className=" bg-[#131313] w-[792px] h-[520px] absolute inset-0 left-7 top-1" />
            <div className=" Uniswap absolute inset-0 left-[110px] top-[65px]">
              <SwapWidget theme={darkTheme} width={850} />
            </div>
          </div>
          <div>
            <img src={buy2frame} className=" h-[530px]" />
          </div>
        </div>
        <div className="w-[1000px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-20 ml-5" />
      </div>
    </div>
  );
};

export default BuyGTM;
