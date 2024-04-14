import twitteIcon from "../../assets/landing/Icons/akar-icons_twitter-fill.png";
import telegramIcon from "../../assets/landing/Icons/teenyicons_telegram-solid.png";
import youtubeIcon from "../../assets/landing/Icons/mdi_youtube.png";
import instagramIcon from "../../assets/landing/Icons/mdi_instagram.png";
import tiktokIcon from "../../assets/landing/Icons/ic_baseline-tiktok.png";
import etherscanIcon from "../../assets/landing/Icons/etherscan-logo-circle 1.png";
import dextoolsIcon from "../../assets/landing/Icons/dextools 1.png";

const Socials = () => {
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
    <div>
      <div className=" flex  flex-col items-center gap-[15px] mr-[-40px] mt-7">
        <div className="relative border h-[180px] w-[1px] bg-white  mb-[12px]"></div>
        {icons.map((icon) => (
          <a href={icon.url} target="_blank">
            <div className=" border rounded-full h-[35px] w-[35px] flex items-center justify-center text-[2px]">
              <img
                src={icon.logo}
                className=" w-[23px] h-[23px] m-auto"
                key={icon.key}
              />
            </div>
          </a>
        ))}
        <div className="relative border h-[180px] w-[1px] bg-white mt-[14px]"></div>
      </div>
    </div>
  );
};

export default Socials;
