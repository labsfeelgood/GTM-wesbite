import backdrop1 from "../assets/landing/passengers1.svg";
import backdrop2 from "../assets/landing/passengers2.svg";
import backdrop3 from "../assets/landing/passengers3.svg";
import backdrop4 from "../assets/landing/space-craft-backdrop.svg";
import main1 from "../assets/landing/Group 844.svg";
import Navbar from "../components/passengers/Navbar";
import Card from "../components/passengers/Card";
const Passengers = () => {
  const cardContent = [
    {
      key: 1,
      ml: 100,
      heading: "Collaboration",
      content:
        "The success of the team is rooted in collaboration, bringing people closer together for impactful outcomes",
    },
    {
      key: 2,
      ml: 5,
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
      ml: 15,
      key: 4,
      heading: "Creativity",
      content:
        "Embracing and channeling creativity is a driving force, encouraging innovative thinking beyond the status quo",
    },
  ];

  const passengers = [
    {
      key:1,
      name:"Esh",
      picturePath :""
    },
    {
      key:2,
      name:"Esh",
      picturePath :""
    },{
      key:3,
      name:"Esh",
      picturePath :""
    },{
      key:4,
      name:"Esh",
      picturePath :""
    },{
      key:5,
      name:"Esh",
      picturePath :""
    },{
      key:6,
      name:"Esh",
      picturePath :""
    },
  ]
  return (
    <div className=" min-h-screen bg-[#C6C0B4]">
      <Navbar />
      {/* ----------------------------------------------------------------------------- */}
      <div className=" ">
        <div className=" flex justify-between items-start ">
          <img src={backdrop1} className=" w-1/6 xl:w-auto h-auto" />
          <div className=" flex flex-col items-center">
            <img src={main1} className="  xl:w-[800px] xl:h-auto xl:mb-10" />
          </div>
          <img src={backdrop2} className=" w-1/6 xl:w-auto h-auto" />
        </div>
        {/* ------------------------------------------------------------------------------- */}

        {/* ---------------------------------------------------------- */}
        <div className=" xl:hidden">
          <div className=" flex flex-col gap-2 p-4 md:p-8 lg:p-24 mb-5">
            <div className=" flex items-center justify-between ">
              <h3 className=" text-[#3D3D3D] uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
                dream team
              </h3>
              {/* <img src={backdrop4} className="xl:hidden w-1/4 h-auto "/> */}
            </div>
            <p className=" text-[#3D3D3D] font-d-din-regular text-[20px] md:text-[20px] sm:text-[20px] lg:text-[25px] text-left">
              Mission Mars is not a solo endeavor; it stands on a robust
              foundation with a dedicated blockchain agency and team of clever
              KOLS supporting its trajectory
            </p>
          </div>
          <div className=" flex flex-col gap-5 xl:justify-between xl:flex-row ">
            {cardContent.map((content) => (
              <Card
                heading={content.heading}
                content={content.content}
                key={content.key}
                ml={content.ml}
              />
            ))}
          </div>
        </div>

        <div className=" hidden xl:block w-[1250px] 2xl:w-[1400px] mx-auto ">
          <div className=" flex flex-col gap-5">
            <div className=" flex flex-col ">
              <h3 className=" text-[#3D3D3D] uppercase font-d-din-bold text-[20px] md:text-[25px] lg-text-[40px] ">
                dream team
              </h3>
              <p className=" text-[#3D3D3D] font-d-din-regular text-[20px] md:text-[20px] sm:text-[16px] lg:text-[25px] text-left">
                Mission Mars is not a solo endeavor; it stands on a robust
                foundation with a dedicated blockchain agency and team of clever
                KOLS supporting its trajectory
              </p>
            </div>
            {/* --------------------------------------------------------------------- */}
            <div className=" flex flex-col gap-3 xl:justify-between xl:flex-row ">
              <div className={`flex flex-col items-center pt-[1px]`}>
                <div className=" bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black  border-2 border-r-[#C6C0B4] border-b-[#C6C0B4]">
                  <h3 className=" text-[32px] font-d-din-bold uppercase">
                    {cardContent[0].heading}
                  </h3>
                  <p className=" font-d-din-regular text-[20px] uppercase">
                    {cardContent[0].content}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col items-center pt-[100px]`}>
                <div className=" bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black  border-2 border-r-[#C6C0B4] border-b-[#C6C0B4]">
                  <h3 className=" text-[32px] font-d-din-bold uppercase">
                    {cardContent[1].heading}
                  </h3>
                  <p className=" font-d-din-regular text-[20px] uppercase">
                    {cardContent[1].content}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col items-center pt-[200px]`}>
                <div className=" bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black  border-2 border-r-[#C6C0B4] border-b-[#C6C0B4]">
                  <h3 className=" text-[32px] font-d-din-bold uppercase">
                    {cardContent[2].heading}
                  </h3>
                  <p className=" font-d-din-regular text-[20px] uppercase">
                    {cardContent[2].content}
                  </p>
                </div>
              </div>

              <div className={`flex flex-col items-center pt-[300px] relative`}>
                <div className=" absolute inset-0">
                  <img src={backdrop4} className=" " />
                </div>
                <div className=" bg-[#D9D9D9] w-[300px] h-[300px] p-5 border-t-black border-l-black  border-2 border-r-[#C6C0B4] border-b-[#C6C0B4]">
                  <h3 className=" text-[32px] font-d-din-bold uppercase">
                    {cardContent[3].heading}
                  </h3>
                  <p className=" font-d-din-regular text-[20px] uppercase">
                    {cardContent[3].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center xl:justify-start mt-10 pb-5 xl:ml-[100px]">
          <img src={backdrop3} className=" xl:w-1/3 xl:h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Passengers;
