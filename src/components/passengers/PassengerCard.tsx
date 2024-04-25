import twitterIcon from "../../assets/Footer/twitter.svg";
import telegramIcon from "../../assets/Footer/telegram.svg";

interface PassengerCardProps {
  name: string;
  position: string;
  twitterUrl?: string;
  telegramUrl?: string;
}

const PassengerCard: React.FC<PassengerCardProps> = ({
  name,
  position,
  twitterUrl,
  telegramUrl,
}) => {
  return (
    <div className="">
      <div className=" bg-gradient-card h-[140px] w-[240px] p-[2px] ">
        <div className=" bg-[#8F8270]  w-full h-full p-3  flex flex-col items-start">
          <h3 className=" font-d-din-bold uppercase text-[30px] text-black">
            {name}
          </h3>
          <p className=" uppercase font-d-din-regular text-black text-[20px]">
            {position}
          </p>
          <div className=" flex gap-2">
            <a href={twitterUrl}>
              <div className=" border rounded-full border-black flex items-center justify-center p-1">
                <img src={twitterIcon} />
              </div>
            </a>
            <a href={telegramUrl}>
              <div className=" border rounded-full border-black flex items-center justify-center p-1 ">
                <img src={telegramIcon} className=" relative left-[-1px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerCard;
