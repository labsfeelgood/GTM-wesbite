import tweet1 from "../../assets/landing/tweets/first-tweet.png";
import tweet2 from "../../assets/landing/tweets/second-tweet.png";
import tweet3 from "../../assets/landing/tweets/third-tweet.png";
import tweet4 from "../../assets/landing/tweets/fourth-tweet.png";
import tweet5 from "../../assets/landing/tweets/fifth-tweet.png";
import tweet6 from "../../assets/landing/tweets/sixth-tweet.png";
import tweet7 from "../../assets/landing/tweets/seventh-tweet.png";
import tweet8 from "../../assets/landing/tweets/eighth-tweet.png";
import tweet9 from "../../assets/landing/tweets/ninth-tweet.png";
const ElonSays = () => {
  return (
    <div className="xl:ml-[100px] 2xl:ml-[150px]  flex flex-col xl:gap-5">
      <div>
        <h3 className=" text-white uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] xl:text-[50px] 2xl:text-[55px] text-center xl:text-left ">
          WELL, WHAT IS ELON SAYING?
        </h3>
      </div>
      <div className=" flex flex-col lg:flex-row sm:items-center">
        <div>
          <img src={tweet1} />
          <img src={tweet2} />
          <img src={tweet3} />
        </div>
        <div>
          <img src={tweet4} />
          <img src={tweet5} />
        </div>
        <div>
          <img src={tweet6} />
          <img src={tweet7} />
          <img src={tweet8} />
          <img src={tweet9} />
        </div>
      </div>
    </div>
  );
};

export default ElonSays;
