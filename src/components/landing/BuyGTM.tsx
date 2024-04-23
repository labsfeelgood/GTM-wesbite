import buy1frame from "../../assets/landing/buy1.png";
import buy2frame from "../../assets/landing/buy2.png";
import "@uniswap/widgets/fonts.css";
const BuyGTM = () => {
    "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18";
 

  return (
    <div className=" bg-black">
      <div className=" mt-10">
        <h3 className=" font-d-din-bold text-white text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[50px] lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] text-center lg:text-left ">
          buy $GTM
        </h3>
        <div className=" flex flex-col lg:flex-row  lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] lg:gap-8">
          <div className=" flex  justify-between items-center p-5 lg:justify-normal lg:gap-2 lg:p-0">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Contract address:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              0xe8b...8a18
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />
          <div className=" hidden lg:block w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />
          <div className=" flex  justify-between items-center p-5 lg:gap-2">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Tax:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              5%
            </p>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />
          <div className="hidden lg:block w-[2px] h-[60px] text-[#7A8A99] bg-[#7A8A99]" />

          <div className=" flex  justify-between items-center p-5 lg:gap-2">
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              Network:
            </p>
            <p className=" text-white text-[18px] font-d-din-bold text-center pr-4 pl-4 lg:pr-0 lg:pl-0 sm:text-[24px] md:text-[26px]  ">
              ETH
            </p>
          </div>
        </div>
        <div className=" flex lg:gap-40 mt-8 lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] flex-col xl:flex-row items-center gap-20 ">
          <div className=" relative">
            <img
              src={buy1frame}
              className=" xl:w-[850px] xl:h-[530px] w-[340px] h-[450px] sm:w-[600px] sm:h-[430px]"
            />
            <div className=" Uniswap absolute inset-0  top-3  left-[25px] w-[250px] sm:hidden">
              {/* <SwapWidget theme={darkTheme} width={300} /> */}
              <iframe
                src="https://app.uniswap.org/#/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18"
                height="420px"
                width="100%"
                style={{
                  border: "0",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: "10px",
                  maxWidth: "280px",
                  minWidth: "280px",
                }}
              ></iframe>
            </div>
            <div className=" Uniswap absolute inset-0  top-3   left-[60px] w-[250px] hidden sm:block xl:hidden">
              {/* <SwapWidget theme={darkTheme} width={300} /> */}
              <iframe
                src="https://app.uniswap.org/#/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18"
                height="400px"
                width="100%"
                style={{
                  border: "0",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: "10px",
                  maxWidth: "480px",
                  minWidth: "480px",
                }}
              ></iframe>
            </div>
            <div className=" Uniswap absolute inset-0  left-10 w-[250px] hidden xl:block xl:top-[15px] xl:left-[80px] ">
              <iframe
                src="https://app.uniswap.org/#/swap?outputCurrency=0xe8b1e79d937c648ce1fe96e6739ddb2714058a18"
                height="500px"
                width="100%"
                style={{
                  border: "0",
                  margin: "0 auto",
                  display: "block",
                  borderRadius: "10px",
                  maxWidth: "630px",
                  minWidth: "630px",
                }}
              ></iframe>
            </div>
          </div>
          <div className=" p-5">
            <img
              src={buy2frame}
              className=" w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:h-[500px] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyGTM;
