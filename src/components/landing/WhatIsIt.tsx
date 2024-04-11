import whatIsItImage from "../../assets/landing/3.png";
const WhatIsIt = () => {
  return (
    <div className=" h-[800px] bg-[#000000] flex flex-col gap-[100px]">
      <div className=" flex items-center gap-24 mt-40">
        <img
          src={whatIsItImage}
          alt="loading"
          className="  h-[350px] w-[900px] ml-10"
        />
        <div className=" w-[450px]  ">
          <h2 className=" text-[60px] text-white font-d-din-bold">
            WHAT IS IT?
          </h2>
          <p className=" text-white text-[40px] font-d-din-regular right-0 ">
            $GTM -
          </p>
          <p className=" text-white text-[40px] font-d-din-regular w-[700px]">
            a TOKEN/NFT project, rooted in Elon Musk's mission to colonize Mars
            and safeguard humanity.
          </p>
        </div>
        
      </div>
      {/* <div className="w-[1000px] h-[2px] bg-gradient-to-r from-[#7A8A99] to-[#000000] ml-24 mt-10" /> */}
    </div>
  );
};

export default WhatIsIt;
