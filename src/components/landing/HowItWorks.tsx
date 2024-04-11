import border from "../../assets/landing/border.png";
import hiw1 from "../../assets/landing/staking hiw 1.png";
import hiw2 from "../../assets/landing/Group 754.png";
import hiw3 from "../../assets/landing/Group 757.png";
import hiw4 from "../../assets/landing/money 1.png";
import hiw5 from "../../assets/landing/pp 1.png";
const HowItWorks = () => {
  return (
    <div className=" h-[1500px] bg-[#000000] relative">
      <div className=" absolute left-[100px] flex flex-col gap-9">
        <h3 className="uppercase font-d-din-bold text-white text-[30px]">
          HOW IT WORKS
        </h3>
        <HowItWorksComponent />
      </div>
    </div>
  );
};

export default HowItWorks;

const HowItWorksComponent = () => {
  const hiwData = [
    {
      key: 1,
      image: hiw1,
      title: "Staking Rewards",
      content:
        "Stake your $GTM tokens and earn rewards while contributing to the security and stability of our network",
    },
    {
      key: 2,
      image: hiw2,
      title: "marketing Initiatives",
      content:
        "Fuel our outreach efforts and amplify our brand presence through strategic marketing campaigns that drive awareness and engagement",
    },
    {
      key: 3,
      image: hiw3,
      title: "Community Incentives",
      content:
        "Reward our loyal community members for their contributions, participation, and support, fostering a vibrant and inclusive ecosystem",
    },
    {
      key: 4,
      image: hiw4,
      title: "Profit Allocation",
      content:
        "The $GTM Treasury serves as the central repository for profits generated from our various revenue streams, including merchandise sales, signal bots, betting profits, and staking fees",
    },
    {
      key: 5,
      image: hiw5,
      title: "Strategic Investments",
      content:
        "Utilize funds from the treasury to purchase additional $GTM tokens, initiate buybacks, contribute to liquidity pools, and facilitate token burns, enhancing liquidity and value for our stakeholders",
    },
  ];

  return (
    <div className=" flex flex-col gap-9">
      {hiwData.map((content) => (
        <div className=" relative">
          <img src={border} className=" h-[200px] w-[1500px]" />
          <div className=" flex items-center gap-8 absolute inset-0 left-7">
            {(content.image === hiw2 || content.image === hiw3)  ? (
              <img src={content.image} className=" h-[200px] w-[200px]" />
            ) : (
              <img src={content.image} className=" h-[150px] w-[150px]" />
            )}
            <div>
              <h4 className=" font-d-din-bold text-[#C2DAF2] text-[25px] uppercase">
                {content.title}
              </h4>
              <p className=" font-d-din-regular text-white text-[25px] w-[1000px]">
                {content.content}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};
