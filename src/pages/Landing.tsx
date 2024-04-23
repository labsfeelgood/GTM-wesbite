import Button from "../components/landing/Button";
import main1 from "../assets/landing/1.png";
import Navbar from "../components/landing/Navbar";
import twitteIcon from "../assets/landing/Icons/akar-icons_twitter-fill.png";
import telegramIcon from "../assets/landing/Icons/teenyicons_telegram-solid.png";
import youtubeIcon from "../assets/landing/Icons/mdi_youtube.png";
import instagramIcon from "../assets/landing/Icons/mdi_instagram.png";
import tiktokIcon from "../assets/landing/Icons/ic_baseline-tiktok.png";
import etherscanIcon from "../assets/landing/Icons/etherscan-logo-circle 1.png";
import dextoolsIcon from "../assets/landing/Icons/dextools 1.png";

import { useState } from "react";
import Colonize from "../components/landing/Colonize";
import WhatIsIt from "../components/landing/WhatIsIt";
import WhyGTM from "../components/landing/WhyGTM";
import Partners from "../components/landing/Partners";
import Ecosystem from "../components/landing/Ecosystem";
import BuyGTM from "../components/landing/BuyGTM";
import Overview from "../components/landing/Overview";
import HowItWorks from "../components/landing/HowItWorks";
import { TaxAndTreasury } from "../components/landing/TaxAndTreasury";
import Footer from "../components/Footer";
import ElonSays from "../components/landing/ElonSays";
const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu open state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const icons = [
    {
      key: 1,
      logo: twitteIcon,
      url: "https://google.com",
    },
    {
      key: 2,
      logo: telegramIcon,
      url: "",
    },
    {
      key: 3,
      logo: youtubeIcon,
      url: "",
    },
    {
      key: 4,
      logo: tiktokIcon,
      url: "",
    },
    {
      key: 5,
      logo: instagramIcon,
      url: "",
    },
    {
      key: 6,
      logo: dextoolsIcon,
      url: "",
    },
    {
      key: 7,
      logo: etherscanIcon,
      url: "",
    },
  ];
  return (
    <div className=" bg-black">
      <div className=" relative bg-[#000000] min-h-screen">
        <div className=" relative lg:z-10">
          <img src={main1} className={`w-full lg:h-screen lg:object-cover`} />
          <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
          {/* <img src={main2} className=" h-[48px] w-[40px] absolute bottom-0"/> */}
          {/* ------------------------------------------------------------------------------ */}
          <div className="  xl:hidden ">
            <div className=" flex sm:gap-3 gap-2  absolute inset-0 justify-center items-end sm:mb-3 mb-1">
              {icons.map((icon) => (
                <a href={icon.url} target="_blank">
                  <div className=" border rounded-full h-[22px] w-[22px] sm:h-[35px] sm:w-[35px] flex items-center justify-center ">
                    <img
                      src={icon.logo}
                      className=" sm:w-[23px] sm:h-[23px] w-[12px] h-[12px] m-auto"
                      key={icon.key}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}
          <Button />
          {/* ---------------------------------------------------------------------------------------------- */}
        </div>
        <div className=" flex flex-col ">
          <Colonize />
          <WhatIsIt />
          <WhyGTM />
          <Partners />
          <Ecosystem />
          <div className=" flex flex-col gap-10 xl:gap-40">
            <BuyGTM />
            <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />

            <TaxAndTreasury />
            <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />

            <Overview />
            <div className="w-full h-[1px] bg-gradient-to-r from-[#7A8A99] to-[#000000] lg:hidden" />

            <HowItWorks />
            <ElonSays/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
