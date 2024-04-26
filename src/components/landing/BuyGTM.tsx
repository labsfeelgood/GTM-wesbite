import buy1frame from "../../assets/landing/buy1.png";
import buy2frame from "../../assets/landing/buy2.png";
import "@uniswap/widgets/fonts.css";
const BuyGTM = () => {
  "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18";

  const address = "0xe8b1e79d937c648ce1fe96e6739ddb2714058a18";
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
              {address.slice(0, 5) +
                "...." +
                address.slice(address.length - 4, address.length)}
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
        <div className=" flex lg:gap-40 xl:gap-10 2xl:gap-36 mt-8 lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px] flex-col xl:flex-row items-center gap-20 ">
          <div className=" relative">
            <img
              src={buy1frame}
              className=" xl:w-[750px] xl:h-[530px] 2xl:w-[800px] w-[340px] h-[450px] sm:w-[600px] sm:h-[430px]"
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
          <div className=" p-5 relative">
            <img
              src={buy2frame}
              className=" w-[200px] h-[300px] sm:w-[300px] sm:h-[400px] lg:h-[500px] lg:w-[400px] xl:h-[500px] xl:w-[320px] 2xl:w-[400px]"
            />
            <div className=" absolute inset-0  2xl:top-[45px] 2xl:left-[45px] xl:top-[40px] xl:left-[38px] top-[50px] left-[35px] sm:top-[35px] sm:left-[45px]">
              <iframe
                className="   2xl:h-[450px] 2xl:w-[350px] xl:h-[420px] xl:w-[285px] h-[260px] w-[170px] sm:h-[360px] sm:w-[250px] lg:h-[450px] lg:w-[350px]"
                src="https://www.youtube.com/embed/VFO5dR4KL6w"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyGTM;
