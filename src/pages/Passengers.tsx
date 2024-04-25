import backdrop1 from "../assets/landing/passengers1.svg";
import backdrop2 from "../assets/landing/passengers2.svg";
import backdrop3 from "../assets/landing/passengers3.svg";
import backdrop4 from "../assets/landing/space-craft-backdrop.svg";
import main1 from "../assets/landing/rocket1.svg";
import Navbar from "../components/passengers/Navbar";
import Card from "../components/passengers/Card";
import PassengerCard from "../components/passengers/PassengerCard";
import pointer from "../assets/landing/nav-underline.svg";
import { useState } from "react";
import Footer from "../components/Footer";
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
      key: 1,
      name: "Esh",
      position: "Community Manager",
      twitterUrl: "https://twitter.com/ActiveEsh",
      telegramUrl: "",
    },
    {
      key: 2,
      name: "Wowa",
      position: "placeholder",
      twitterUrl: "https://twitter.com/wowa11",
      telegramUrl: "",
    },
    {
      key: 3,
      position: "placeholder",
      name: "Vish",
      twitterUrl: "https://twitter.com/0x1cV15Hxad",
      telegramUrl: "",
    },
    {
      key: 4,
      position: "placeholder",
      name: "Devon",
      twitterUrl: "",
      telegramUrl: "",
    },
    {
      key: 5,
      name: "Mark",
      position: "placeholder",
      twitterUrl: "",
      telegramUrl: "",
    },
    {
      key: 6,
      name: "chris",
      position: "placeholder",
      twitterUrl: "",
      telegramUrl: "",
    },
    {
      key: 7,
      name: "kush",
      position: "placeholder",
      twitterUrl: "",
      telegramUrl: "",
    },
    {
      key: 8,
      name: "sahil",
      position: "placeholder",
      twitterUrl: "https://twitter.com/BonoQuak",
      telegramUrl: "",
    },
    {
      key: 9,
      name: "Shmoo",
      position: "placeholder",
      twitterUrl: "https://twitter.com/ShmooNFT",
      telegramUrl: "https://t.me/shmooscalls/402",
    },
    {
      key: 10,
      name: "OD",
      position: "placeholder",
      twitterUrl: "https://twitter.com/Overdose_AI/status/1771653516899012774",
      telegramUrl: "https://t.me/overdose_gems_calls",
    },
    {
      key: 11,
      name: "Caff",
      position: "placeholder",
      twitterUrl: "https://twitter.com/ChadCaff",
      telegramUrl: "https://t.me/Chad_Crypto/1796",
    },
    {
      key: 12,
      name: "Mayhouse",
      position: "placeholder",
      twitterUrl: "https://twitter.com/maythous",
      telegramUrl: "https://t.me/maythouscalls/19900",
    },
    {
      key: 13,
      name: "CrytptoSausage",
      position: "placeholder",
      twitterUrl: "https://twitter.com/cryptosage27",
      telegramUrl: "",
    },
    {
      key: 14,
      name: "Thai",
      position: "placeholder",
      twitterUrl: "https://twitter.com/crypto_thai",
      telegramUrl: "",
    },
    {
      key: 15,
      name: "Joe420",
      position: "placeholder",
      twitterUrl: "https://twitter.com/joegrower420",
      telegramUrl: "https://t.me/Joe420Calls/10128",
    },
    {
      key: 16,
      name: "Ceaser",
      position: "placeholder",
      twitterUrl: "https://twitter.com/CaesarsCalls",
      telegramUrl: "https://t.me/Caesars_Calls/16812",
    },
    {
      key: 17,
      name: "Kobe",
      position: "placeholder",
      twitterUrl: "",
      telegramUrl: "",
    },
    {
      key: 18,
      name: "Gandaf",
      position: "placeholder",
      twitterUrl: "https://twitter.com/gandalfcryptto",
      telegramUrl: "",
    },
    {
      key: 19,
      name: "Cryptic Maestro",
      position: "placeholder",
      twitterUrl: "https://twitter.com/gandalfcryptto",
      telegramUrl: "https://t.me/Cryptic_Maestro/8476",
    },
    {
      key: 20,
      name: "Lukas",
      position: "placeholder",
      twitterUrl: "https://twitter.com/Lukasz16904731",
      telegramUrl: "",
    },
    {
      key: 21,
      name: "Ryan",
      position: "placeholder",
      twitterUrl: "https://twitter.com/_RTBreen",
      telegramUrl: "",
    },
    {
      key: 22,
      name: "Ceedz",
      position: "placeholder",
      twitterUrl: "https://twitter.com/cedzzz87",
      telegramUrl: "",
    },
    {
      key: 23,
      name: "Mango",
      position: "placeholder",
      twitterUrl: "https://twitter.com/fatmangoes",
      telegramUrl: "",
    },
    {
      key: 24,
      name: "OnTheMoonX",
      position: "placeholder",
      twitterUrl: "https://twitter.com/OnTheMoon247",
      telegramUrl: "",
    },
  ];
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible13, setIsVisible13] = useState(false);
  // const [isVisible14, setIsVisible14] = useState(false);
  const [isVisible15, setIsVisible15] = useState(false);
  const [isVisible16, setIsVisible16] = useState(false);
  const [isVisible17, setIsVisible17] = useState(false);
  // const [isVisible18, setIsVisible18] = useState(false);
  const [isVisible19, setIsVisible19] = useState(false);
  const [isVisible20, setIsVisible20] = useState(false);
  // const [isVisible21, setIsVisible21] = useState(false);
  const [isVisible22, setIsVisible22] = useState(false);
  // const [isVisible23, setIsVisible23] = useState(false);
  const [isVisible25, setIsVisible25] = useState(false);
  const [isVisible26, setIsVisible26] = useState(false);
  // const [isVisible27, setIsVisible27] = useState(false);
  return (
    <div>
      <div className=" min-h-screen bg-[#C6C0B4]">
        <Navbar />
        {/* ----------------------------------------------------------------------------- */}

        <div className=" ">
          <div className=" relative ">
            <div className=" flex justify-between items-start relative  xl:w-[1200px] xl:mx-auto">
              <img src={backdrop1} className=" w-1/6 xl:w-auto h-auto" />
              {/* ------------------------------------------------------------------------------------------------------------------------- */}
              {/* 1st passenger */}
              <div
                className={` hidden xl:block  z-10 absolute inset-0 top-[110px] left-[543px]   ${
                  isVisible1 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[92px] w-[77px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible1(true)}
                    onMouseLeave={() => setIsVisible1(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-110px] ">
                    <PassengerCard
                      name={passengers[0].name}
                      position={passengers[0].position}
                      twitterUrl={passengers[0].twitterUrl}
                      telegramUrl={passengers[0].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 2nd passenger */}
              <div className=" hidden xl:block   absolute inset-0  top-[213px] left-[500px] z-10 ">
                <div
                  className={`bg-opacity-0 h-[62px] w-[47px]  ${
                    isVisible2
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible2(true)}
                  onMouseLeave={() => setIsVisible2(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block   absolute inset-0 z-10 top-[70px] left-[170px] h-[200px] w-[300px]  ${
                  isVisible2 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[1].name}
                      position={passengers[1].position}
                      twitterUrl={passengers[1].twitterUrl}
                      telegramUrl={passengers[1].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 3rd Passenger */}
              <div
                className={` hidden xl:block  z-10 absolute inset-0 top-[213px] left-[561px] ${
                  isVisible3 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[62px] w-[45px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible3(true)}
                    onMouseLeave={() => setIsVisible3(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-110px] ">
                    <PassengerCard
                      name={passengers[2].name}
                      position={passengers[2].position}
                      twitterUrl={passengers[2].twitterUrl}
                      telegramUrl={passengers[2].telegramUrl}
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 4th passenger */}
              <div
                className={` hidden xl:block  z-10 absolute inset-0 top-[213px] left-[617px] ${
                  isVisible4 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[62px] w-[45px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible4(true)}
                    onMouseLeave={() => setIsVisible4(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-110px] ">
                    <PassengerCard
                      name={passengers[3].name}
                      position={passengers[3].position}
                      twitterUrl={passengers[3].twitterUrl}
                      telegramUrl={passengers[3].telegramUrl}
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 5th Passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[289px] left-[528px] z-10 ">
                <div
                  className={`bg-opacity-0 h-[62px] w-[45px] shadow ${
                    isVisible5
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible5(true)}
                  onMouseLeave={() => setIsVisible5(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block absolute inset-0 z-10 top-[150px] left-[190px] h-[200px] w-[300px]  ${
                  isVisible5 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[4].name}
                      position={passengers[4].position}
                      twitterUrl={passengers[4].twitterUrl}
                      telegramUrl={passengers[4].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 6th passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[288px] left-[591px] ${
                  isVisible6 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[62px] w-[45px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible6(true)}
                    onMouseLeave={() => setIsVisible6(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" hidden xl:block absolute inset-0  left-[240px] top-[-110px] ">
                    <PassengerCard
                      name={passengers[5].name}
                      position={passengers[5].position}
                      twitterUrl={passengers[5].twitterUrl}
                      telegramUrl={passengers[5].telegramUrl}
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 7th Passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[364px] left-[532px] z-10">
                <div
                  className={`bg-opacity-0 h-[64px] w-[45px]  ${
                    isVisible7
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible7(true)}
                  onMouseLeave={() => setIsVisible7(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block absolute inset-0 z-10 top-[220px] left-[200px] h-[200px] w-[300px]  ${
                  isVisible7 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[6].name}
                      position={passengers[6].position}
                      twitterUrl={passengers[6].twitterUrl}
                      telegramUrl={passengers[6].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 8th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[364px] left-[586px] ${
                  isVisible8 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[62px] w-[45px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible8(true)}
                    onMouseLeave={() => setIsVisible8(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" hidden xl:block absolute inset-0  left-[240px] top-[-110px] ">
                    <PassengerCard
                      name={passengers[7].name}
                      position={passengers[7].position}
                      twitterUrl={passengers[7].twitterUrl}
                      telegramUrl={passengers[7].telegramUrl}
                    />
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 9th Passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[497px] left-[393px] z-10">
                <div
                  className={`bg-opacity-0 h-[77px] w-[55px]  ${
                    isVisible9
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible9(true)}
                  onMouseLeave={() => setIsVisible9(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block absolute inset-0 z-10 top-[370px] left-[60px] h-[200px] w-[300px]  ${
                  isVisible9 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[8].name}
                      position={passengers[8].position}
                      twitterUrl={passengers[8].twitterUrl}
                      telegramUrl={passengers[8].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 10th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[498px] left-[710px] ${
                  isVisible10 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible10(true)}
                    onMouseLeave={() => setIsVisible10(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className="hidden xl:block absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[9].name}
                      position={passengers[9].position}
                      twitterUrl={passengers[9].twitterUrl}
                      telegramUrl={passengers[9].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 11th Passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[600px] left-[393px] z-10">
                <div
                  className={`bg-opacity-0 h-[77px] w-[55px]  ${
                    isVisible11
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible11(true)}
                  onMouseLeave={() => setIsVisible11(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block absolute inset-0 z-10 top-[470px] left-[60px] h-[200px] w-[300px]  ${
                  isVisible11 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[10].name}
                      position={passengers[10].position}
                      twitterUrl={passengers[10].twitterUrl}
                      telegramUrl={passengers[10].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 12th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[600px] left-[710px] ${
                  isVisible12 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible12(true)}
                    onMouseLeave={() => setIsVisible12(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" hidden xl:block absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[11].name}
                      position={passengers[11].position}
                      twitterUrl={passengers[11].twitterUrl}
                      telegramUrl={passengers[11].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 13th Passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[700px] left-[391px] z-10">
                <div
                  className={`bg-opacity-0 h-[77px] w-[57px]  ${
                    isVisible13
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible13(true)}
                  onMouseLeave={() => setIsVisible13(false)}
                ></div>
              </div>

              <div
                className={` hidden xl:block absolute inset-0 z-10 top-[570px] left-[60px] h-[200px] w-[300px]  ${
                  isVisible13 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[12].name}
                      position={passengers[12].position}
                      twitterUrl={passengers[12].twitterUrl}
                      telegramUrl={passengers[12].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 14th Passenger */}
              {/* <div
              className={`z-20 absolute inset-0 top-[684px] right-[638px] ${
                isVisible14 ? "opacity-100" : "opacity-0"
              } `}
            >
              <div className=" flex flex-row-reverse items-center gap-4 ">
                <div
                  className=" border  h-[77px] w-[55px]  shadow-md shadow-white rounded-md z-20  "
                  onMouseEnter={() => setIsVisible14(true)}
                  onMouseLeave={() => setIsVisible14(false)}
                />
                <img src={pointer} className=" " />
              </div>
              <div>
                <div className=" absolute inset-0  left-[50px] top-[-125px] ">
                  <PassengerCard
                    name={passengers[13].name}
                    position={passengers[13].position}
                    twitterUrl={passengers[13].twitterUrl}
                    telegramUrl={passengers[13].telegramUrl}
                  />
                </div>
              </div>
            </div> */}

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 15th Passenger */}
              <div
                className={`hidden xl:block z-10 absolute inset-0 top-[684px] left-[608px] ${
                  isVisible15 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible15(true)}
                    onMouseLeave={() => setIsVisible15(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[14].name}
                      position={passengers[14].position}
                      twitterUrl={passengers[14].twitterUrl}
                      telegramUrl={passengers[14].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 16th Passenger */}
              <div
                className={`hidden xl:block z-10 absolute inset-0 top-[701px] left-[710px] ${
                  isVisible16 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible16(true)}
                    onMouseLeave={() => setIsVisible16(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[15].name}
                      position={passengers[15].position}
                      twitterUrl={passengers[15].twitterUrl}
                      telegramUrl={passengers[15].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 17th passenger */}
              <div className=" hidden xl:block absolute inset-0  top-[804px] left-[388px] z-10">
                <div
                  className={`bg-opacity-0 h-[77px] w-[55px]  ${
                    isVisible17
                      ? "border shadow shadow-white rounded-md"
                      : "border-none"
                  } `}
                  onMouseEnter={() => setIsVisible17(true)}
                  onMouseLeave={() => setIsVisible17(false)}
                ></div>
              </div>

              <div
                className={`hidden xl:block  absolute inset-0 z-10 top-[670px] left-[60px] h-[200px] w-[300px]  ${
                  isVisible17 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className=" relative">
                  <div className=" absolute inset-0  ">
                    <PassengerCard
                      name={passengers[16].name}
                      position={passengers[16].position}
                      twitterUrl={passengers[16].twitterUrl}
                      telegramUrl={passengers[16].telegramUrl}
                    />
                  </div>
                  <img
                    src={pointer}
                    className=" absolute inset-0 top-[150px] left-[100px]"
                  />
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 19th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[780px] left-[608px] ${
                  isVisible19 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible19(true)}
                    onMouseLeave={() => setIsVisible19(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[18].name}
                      position={passengers[18].position}
                      twitterUrl={passengers[18].twitterUrl}
                      telegramUrl={passengers[18].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 20th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[801px] left-[710px] ${
                  isVisible20 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible20(true)}
                    onMouseLeave={() => setIsVisible20(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[19].name}
                      position={passengers[19].position}
                      twitterUrl={passengers[19].twitterUrl}
                      telegramUrl={passengers[19].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 21st Passenger */}

              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 22nd Passenger */}
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 25th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[990px] left-[608px] ${
                  isVisible25 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible25(true)}
                    onMouseLeave={() => setIsVisible25(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[22].name}
                      position={passengers[22].position}
                      twitterUrl={passengers[22].twitterUrl}
                      telegramUrl={passengers[22].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* 26th Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[990px] left-[710px] ${
                  isVisible26 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible26(true)}
                    onMouseLeave={() => setIsVisible26(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[23].name}
                      position={passengers[23].position}
                      twitterUrl={passengers[23].twitterUrl}
                      telegramUrl={passengers[23].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              {/* 22nd Passenger */}
              <div
                className={` hidden xl:block z-10 absolute inset-0 top-[880px] left-[608px] ${
                  isVisible22 ? "opacity-100" : "opacity-0"
                } `}
              >
                <div className=" flex  items-center gap-4 ">
                  <div
                    className=" border  h-[77px] w-[55px] shadow shadow-white rounded-md   "
                    onMouseEnter={() => setIsVisible22(true)}
                    onMouseLeave={() => setIsVisible22(false)}
                  />
                  <img src={pointer} className=" scale-x-[-1] " />
                </div>
                <div>
                  <div className=" absolute inset-0  left-[240px] top-[-120px] ">
                    <PassengerCard
                      name={passengers[21].name}
                      position={passengers[21].position}
                      twitterUrl={passengers[21].twitterUrl}
                      telegramUrl={passengers[21].telegramUrl}
                    />
                  </div>
                </div>
              </div>
              {/* ------------------------------------------------------------------------------------------------------------------- */}
              <div className=" flex flex-col items-center relative">
                <img
                  src={main1}
                  className="  xl:w-[800px] xl:h-auto xl:mb-10 w-[1400px] h-auto"
                />
              </div>
              <img src={backdrop2} className=" w-1/6 xl:w-auto h-auto" />
            </div>
            {/* ----------------------------------------------------- */}
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
                  foundation with a dedicated blockchain agency and team of
                  clever KOLS supporting its trajectory
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

                <div
                  className={`flex flex-col items-center pt-[300px] relative`}
                >
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

      {/* --------------------------- */}
      {/* Footer */}
      <Footer passengers={true}/>
    </div>
  );
};

export default Passengers;
