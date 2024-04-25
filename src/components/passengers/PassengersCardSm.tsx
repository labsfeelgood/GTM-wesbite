import twitterIcon from "../../assets/Footer/twitter.svg";
import telegramIcon from "../../assets/Footer/telegram.svg";

interface PassengerCardProps {
  name: string;
  position: string;
  twitterUrl?: string;
  telegramUrl?: string;
}

const PassengerCardSm: React.FC<PassengerCardProps> = ({
  name,
  position,
  twitterUrl,
  telegramUrl,
}) => {
  return (
    <div className="">
      <div className=" bg-gradient-card h-[70px] w-[120px] sm:h-[90px] sm:w-[150px] p-[2px] ">
        <div className=" bg-[#8F8270]  w-full h-full p-1 pl-2  flex flex-col items-start">
          <h3 className=" font-d-din-bold uppercase text-[15px] sm:text-[17px] text-black overflow-hidden">
            {name }
          </h3>
          <p className=" uppercase font-d-din-regular text-black text-[10px] sm:text-[13px]">
            {position}
          </p>
          <div className=" flex gap-1 mt-1">
            <a href={twitterUrl}>
              <div className=" border rounded-full border-black flex items-center justify-center p-1 w-[20px] h-[20px]">
                <img src={twitterIcon} />
              </div>
            </a>
            <a href={telegramUrl}>
              <div className=" border rounded-full border-black flex items-center justify-center p-1 w-[20px] h-[20px]">
                <img src={telegramIcon} className=" relative left-[-1px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerCardSm;
