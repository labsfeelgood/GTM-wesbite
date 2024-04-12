import Navbar from "../components/vision/Navbar";
import cover4 from "../assets/vision/4.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Vision = () => {
  return (
    <div className=" bg-[#000000] max-w-full">
      <Navbar />
      {/* --------------------------------------- */}
      <div className="relative h-screen ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cover4})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black "></div>
        <div className=" absolute flex flex-col items-center top-[650px] left-[600px]">
          <h3 className=" uppercase font-d-din-bold text-white text-[40px] ">
            VISION
          </h3>
          <p className=" font-d-din-regular text-white text-[30px] w-[700px] text-center ">
            Colonize Mars isn't just a meme coin – it's a movement fuelled by
            the power of community
          </p>
          <div className=" flex flex-col items-center gap-2">
            <button className=" uppercase font-d-din-bold text-[25px] text-white">
              BUY $GTM{" "}
              <ArrowRightAltIcon className=" text-white w-[130px]  h-[100px]" />
            </button>
            <div className=" w-[150px] bg-[#C2DAF2] h-[2px]" />
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      <div className=" h-screen bg-black max-w-full">
        <div className=" mx-auto">
            <h3 className=" uppercase text-white text-[30px] font-d-din-bold ">overview</h3>
            <p className=" text-white text-[25px] font-d-din-regular w-[1200px]">We're here to redefine what it means to be a part of something extraordinary. Our holder-first mindset puts you at the forefront of every decision we make. We're not just building a coin; we're building an interstellar family, united by our shared passion for the cosmos</p>
        </div>

      </div>
    </div>
  );
};

export default Vision;