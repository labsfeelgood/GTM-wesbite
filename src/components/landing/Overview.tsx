// import frame1 from "../../assets/landing/buy1.png";
import frame2 from "../../assets/landing/buy2.png";
import copyIcon from "../../assets/landing/Icons/copy_icon.png";
// import graph from "../../assets/landing/graph.png";
import etherScanLogo from "../../assets/landing/Icons/etherscan-logo-circle 1.png";
import zerionIcon from "../../assets/landing/Icons/zerion-icon_circle.png";
const Overview = () => {
  return (
    <div>
      <div className=" flex flex-col gap-2 mt-40 p-7 lg:ml-[50px] xl:ml-[100px] 2xl:ml-[150px]">
        <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
          Overview
        </h3>
        <p className=" text-white font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
          At its core, the $GTM Treasury is a multifaceted entity designed to
          optimize resources and maximize value for our community.<br></br> The $GTM
          Treasury is the beating heart of our ecosystem, driving growth,
          sustainability, and prosperity for our community members. More than
          just a financial hub, it serves as a catalyst for innovation and
          empowerment, fueling our mission to revolutionize the world of trading
          and sports betting
        </p>
      </div>
      {/* ------------------------------------- */}
      <div className=" flex gap-40 flex-col lg:flex-row">
    {/* <div className="relative ">
      <img src={frame1} className=" w-[850px] h-[530px]" />
      <div className=" bg-[#131313] w-[792px] h-[520px] absolute inset-0 left-7 top-1 " />
      <h3 className=" text-[25px] font-d-din-regular absolute inset-0 top-4 left-12 uppercase text-[#C2DAF2]">
        TREASURY
      </h3>
      <img
        src={graph}
        className=" absolute inset-0 w-[792px] left-7 top-16"
      />
    </div> */}
    <div className=" relative ">
      <img src={frame2} className="h-[300px] lg:h-[530px]" />
      <div className=" absolute inset-0 top-9 left-9 flex flex-col justify-around">
        <div className=" ">
          <h4 className="uppercase text-[#C2DAF2] lg:text-[25px] text:[15px] font-d-din-regular">
            BALANCE
          </h4>
          <h2 className=" font-d-din-bold text-white lg:text-[38px] text-[20px] uppercase ">
            $85,893.32
          </h2>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
        <div className=" ">
          <h4 className="uppercase text-[#C2DAF2] lg:text-[25px] text:[15px] font-d-din-regular">
            ADDRESS
          </h4>
          <div className=" flex gap-2 items-center">
            <h2 className=" font-d-din-bold text-white lg:text-[35px] text-[20px] uppercase ">
              0x73b1…65cf
            </h2>
            <button>
              <img src={copyIcon} className="w-[15px] h-auto" />
            </button>
          </div>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
        <div className=" flex flex-col gap-2">
          <h4 className="uppercase text-[#C2DAF2] lg:text-[25px] text:[15px] font-d-din-regular">
            LINKS
          </h4>
            <div className=" flex gap-5">
              <a href="" target="_blank">
                <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
                  <img
                    src={etherScanLogo}
                    className=" w-[23px] h-[23px] m-auto"
                  />
                </div>
              </a>
              <a href="" target="_blank">
                <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
                  <img
                    src={zerionIcon}
                    className=" w-[23px] h-[23px] m-auto"
                  />
                </div>
              </a>
            </div>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default Overview;
{
  /* <div className=" h-screen bg-[#000000] relative">
<div className=" absolute left-48 flex flex-col gap-20">
  <div className=" flex flex-col gap-3 ml-7">
    <h4 className=" uppercase font-d-din-bold text-white text-[35px]">
      overview
    </h4>
    <p className=" font-d-din-regular text-white text-[28px] w-[1400px]">
      At its core, the $GTM Treasury is a multifaceted entity designed to
      optimize resources and maximize value for our community. The $GTM
      Treasury is the beating heart of our ecosystem, driving growth,
      sustainability, and prosperity for our community members. More than
      just a financial hub, it serves as a catalyst for innovation and
      empowerment, fueling our mission to revolutionize the world of
      trading and sports betting
    </p>
  </div>
  <div className=" flex gap-40">
    <div className="relative ">
      <img src={frame1} className=" w-[850px] h-[530px]" />
      <div className=" bg-[#131313] w-[792px] h-[520px] absolute inset-0 left-7 top-1 " />
      <h3 className=" text-[25px] font-d-din-regular absolute inset-0 top-4 left-12 uppercase text-[#C2DAF2]">
        TREASURY
      </h3>
      <img
        src={graph}
        className=" absolute inset-0 w-[792px] left-7 top-16"
      />
    </div>
    <div className=" relative">
      <img src={frame2} className=" h-[530px]" />
      <div className=" absolute inset-0 top-9 left-9 flex flex-col justify-around">
        <div className=" ">
          <h4 className="uppercase text-[#C2DAF2] text-[25px] font-d-din-regular">
            BALANCE
          </h4>
          <h2 className=" font-d-din-bold text-white text-[38px] uppercase ">
            $85,893.32
          </h2>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
        <div className=" ">
          <h4 className="uppercase text-[#C2DAF2] text-[25px] font-d-din-regular">
            ADDRESS
          </h4>
          <div className=" flex gap-4 items-center">
            <h2 className=" font-d-din-bold text-white text-[35px] uppercase ">
              0x73b1…65cf
            </h2>
            <button>
              <img src={copyIcon} className="" />
            </button>
          </div>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
        <div className=" flex flex-col gap-2">
          <h4 className="uppercase text-[#C2DAF2] text-[25px] font-d-din-regular">
            LINKS
          </h4>
            <div className=" flex gap-5">
              <a href="" target="_blank">
                <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
                  <img
                    src={etherScanLogo}
                    className=" w-[23px] h-[23px] m-auto"
                  />
                </div>
              </a>
              <a href="" target="_blank">
                <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
                  <img
                    src={zerionIcon}
                    className=" w-[23px] h-[23px] m-auto"
                  />
                </div>
              </a>
            </div>
          <div className="w-[230px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5"></div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-[1000px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] mt-5" />
</div>
</div> */
}
