// import twitterIcon from "../../assets/Footer/twitter.svg";
// import telegramIcon from "../../assets/Footer/telegram.svg";

interface PassengerCardProps {
  name: string;
  position: string;
  twitterUrl?: string;
  telegramUrl?: string;
}

const PassengerCard: React.FC<PassengerCardProps> = ({
  name,
}) => {
  return (
    <div className="">
      <div className=" bg-gradient-card h-[140px] w-[260px] p-[2px] ">
        <div className=" bg-[#8F8270]  w-full h-full   flex flex-col items-center justify-center">
          <h3 className=" font-d-din-bold uppercase text-[30px] text-black overflow-hidden">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PassengerCard;
