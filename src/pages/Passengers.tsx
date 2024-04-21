import backdrop1 from "../assets/landing/passengers1.svg";
import backdrop2 from "../assets/landing/passengers2.svg";
import backdrop3 from "../assets/landing/passengers3.svg";
import main1 from "../assets/landing/Group 844.svg";
import Navbar from "../components/passengers/Navbar";
import Card from "../components/passengers/Card";
const Passengers = () => {
  const cardContent = [
    {
      key: 1,
      ml: 10,
      heading: "Collaboration",
      content:
        "The success of the team is rooted in collaboration, bringing people closer together for impactful outcomes",
    },
    {
      key: 2,
      ml: 10,
      heading: "Continuous Learning",
      content:
        "Investment in the team's growth and knowledge-sharing fosters new ideas and opportunities for both the team and clients",
    },
    {
      key: 3,
      ml: 10,
      heading: "Truth",
      content:
        "Transparency is a cornerstone. Being truthful and honest promotes openness within the team and with clients",
    },
    {
      ml: 20,
      key: 4,
      heading: "Creativity",
      content:
        "Embracing and channeling creativity is a driving force, encouraging innovative thinking beyond the status quo",
    },
  ];
  return (
    <div className=" min-h-screen bg-[#C6C0B4]">
      <Navbar />
      {/* ----------------------------------------------------------------------------- */}
      <div className=" ">
        <div className=" flex justify-between items-start ">
          <img src={backdrop1} className=" w-1/6 xl:w-auto h-auto" />
          <div className=" flex flex-col items-center">
            <img src={main1} className="  xl:w-[800px] xl:h-auto" />
          </div>
          <img src={backdrop2} className=" w-1/6 xl:w-auto h-auto" />
        </div>
        {/* ------------------------------------------------------------------------------- */}

        {/* ---------------------------------------------------------- */}
        <div className=" xl:hidden">
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24">
            <h3 className=" text-[#3D3D3D] uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
              dream team
            </h3>
            <p className=" text-[#3D3D3D] font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
              Mission Mars is not a solo endeavor; it stands on a robust
              foundation with a dedicated blockchain agency and team of clever
              KOLS supporting its trajectory
            </p>
          </div>
        </div>

        <div className=" hidden xl:block w-[1500px] mx-auto ">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col ">
              <h3 className=" text-[#3D3D3D] uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
                dream team
              </h3>
              <p className=" text-[#3D3D3D] font-d-din-regular text-[14px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
                Mission Mars is not a solo endeavor; it stands on a robust
                foundation with a dedicated blockchain agency and team of clever
                KOLS supporting its trajectory
              </p>
            </div>
            {/* --------------------------------------------------------------------- */}
            <div className=" flex flex-col gap-3 xl:flex-row xl:justify-between">
              {cardContent.map((content) => (
                <Card
                  heading={content.heading}
                  content={content.content}
                  key={content.key}
                  gap={content.ml}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center mt-10 pb-5">
          <img src={backdrop3} />
        </div>
      </div>
    </div>
  );
};

export default Passengers;
