import footerArrow from "../assets/landing/NavArrow.svg";
import youtubeLogo from "../assets/Footer/youtube.svg";
import twitterLogo from "../assets/Footer/twitter.svg";
import telegramLogo from "../assets/Footer/telegram.svg";
import dextoolsLogo from "../assets/Footer/dextools.svg";
import instaLogo from "../assets/Footer/instagram.svg";
import etherscanLogo from "../assets/Footer/etherscan.svg";
import tiktokLogo from "../assets/Footer/tiktok.svg"
const Footer = () => {
    const footerIcons = [
        {
            key:1,
            icon:etherscanLogo,
            link:""
        }, {
            key:2,
            icon:dextoolsLogo,
            link:""
        }, {
            key:3,
            icon:twitterLogo,
            link:""
        }, {
            key:4,
            icon:youtubeLogo,
            link:""
        }, {
            key:5,
            icon:tiktokLogo,
            link:""
        }, {
            key:6,
            icon:telegramLogo,
            link:""
        }, {
            key:7,
            icon:instaLogo,
            link:""
        },

    ]
  return (
    <div className="  mt:[30px] xl:mt-[100px]">
      <div className=" h-[50px] xl:h-[80px]  bg-white  mx auto flex justify-between">
        <div className=" w-[1200px] mx-auto flex items-center justify-between">
          <div className=" flex items-center gap-2">
            <div>
              <p className=" text-[15px] xl:text-[20px]  text-black font-d-din-bold">
                BUY $GTM
              </p>
              <div className=" h-[2px] w-full bg-black" />
            </div>
            <div>
              <img src={footerArrow} className=" w-1/2 xl:w-full h-auto"/>
            </div>
          </div>
          <div className=" flex gap-2  xl:gap-4 items-center border">
            {
                footerIcons.map((icon)=>(
                    <div key={icon.key} className="">
                        <a href={icon.link}><img src={icon.icon} className=" w-[20px] h-auto xl:w-full"/></a>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
