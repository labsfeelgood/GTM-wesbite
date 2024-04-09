import whatIsItImage from "../../assets/landing/3.png"
const WhatIsIt = () => {
  return (
    <div className=' h-screen bg-[#000000] flex items-center justify-center gap-16'>
        <img 
        src={whatIsItImage} 
        alt="loading"
        className=" h-[400px] w-[1000px]"
        />
        <div className=" w-[450px] ">
            <h2 className=" text-[75px] text-white font-d-din-bold">WHAT IS IT?</h2>
            <p className=" text-white text-[40px] font-d-din-regular right-0 ">$GTM -</p>
            <p className=" text-white text-[40px] font-d-din-regular">a TOKEN/NFT project, rooted in Elon Musk's mission to colonize Mars and safeguard humanity.</p>
        </div>
    </div>
  )
}

export default WhatIsIt