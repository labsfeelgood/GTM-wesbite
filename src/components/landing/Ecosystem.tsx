import ecosytemImage from "../../assets/landing/4.png";
import loader1 from "../../assets/landing/Icons/loader1.png";
import loader2 from "../../assets/landing/Icons/loader2.png";
const Ecosystem = () => {
  const ecosystemContents = [
    {
      key: 1,
      title: "STAKING",
      logo: loader1,
    },
    {
      key: 2,
      title: "MERCH",
      logo: loader1,
    },
    {
      key: 3,
      title: "ARCADE BETTING",
      logo: loader1,
    },
    {
      key: 4,
      title: "ALPHA GROUP",
      logo: loader2,
    },
    {
      key: 5,
      title: "MOON FUND",
      logo: loader2,
    },
    {
      key: 6,
      title: "CASINO",
      logo: loader2,
    },
    {
      key: 7,
      title: "COMMUNITY PORTAL",
      logo: loader2,
    },
  ];
  return (
    <div className=" bg-[#000000] h-screen relative">
      <div
        className=" absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ecosytemImage})` }}
      >
        <div className=" absolute left-[220px] top-[110px] flex flex-col gap-8">
          <h2 className=" uppercase font-d-din-bold text-white text-[60px] ">
            ECOSYSTEM
          </h2>
          <div className=" flex flex-col gap-5">
          {ecosystemContents.map((content) => (
            <>
              <div className=" flex items-center  justify-between ">
                <h4 className=" uppercase font-d-din-regular text-white text-[33px]">
                  {content.title}
                </h4>
                {content.logo === loader2 ? (
                  <img src={content.logo} className=" h-[37px] w-[37px]" />
                ) : (
                  <img
                    src={content.logo}
                    className=" relative top-1 h-[70px] w-[70px] left-4 "
                  />
                )}
              </div>
              {
                content.key === 7 ? (<div></div>):(<div className=" w-[400px] text-[#7A8A99] bg-[#7A8A99] h-[1px]" />)
              }
            </>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
