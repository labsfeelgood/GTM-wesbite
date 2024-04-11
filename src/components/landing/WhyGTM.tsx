import testimonial1 from "../../assets/landing/testimonial1.png";
import testimonial2 from "../../assets/landing/testimonial2.png";
import testimonial3 from "../../assets/landing/testimonial3.png";

// import TestimonialCard from "./TestimonialCard";
const WhyGTM = () => {
  // const testimonialCardInfo = [
  //   {
  //     key: 1,
  //     image: testimonial1,
  //     heading: "MEMETICS",
  //     content:
  //       "Seamlessly integrates into gaming, AI betting, shopping, and staking, creating a comprehensive $GTM ecosystem",
  //   },
  //   {
  //     key: 2,
  //     image: testimonial2,
  //     heading: "DOXXED DEV",
  //     content:
  //       "Led by a fully disclosed developer and backed by reputable blockchain agencies, $GTM prioritizes transparency and community engagement",
  //   },
  //   {
  //     key: 3,
  //     image: testimonial3,
  //     heading: "LORE",
  //     content:
  //       "Embodies ELONS quest to explore Mars for survival and advancement, Elon's grand vision",
  //   },
  // ];
  return (
    <div className=" relative h-[800px] bg-[#000000] ">
      <div className=" absolute left-48 flex flex-col gap-7">
        <h2 className=" uppercase text-white font-d-din-bold text-[60px]">
          WHY $GTM
        </h2>
        <div className=" flex gap-32  justify-center mt-10">
          <div className="flex flex-col gap-4  items-center w-[400px] ">
            <div className="w-[200px] h-[200px] border-[#7A8A99] rounded-full border-[2px] shadow-lg shadow-[#7A8A99] mb-3 ">
              <img src={testimonial1} />
            </div>
            <h3 className="uppercase font-d-din-bold text-white text-[24px]">
              MEMETICS
            </h3>
            <p className="text-white text-[24px] font-d-din-regular mx-auto text-center w-[400px] ">
              Seamlessly integrates into gaming, AI betting, shopping, and
              staking, creating a comprehensive $GTM ecosystem
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center  w-[400px]">
            <div className="w-[200px] h-[200px] border-[#7A8A99] rounded-full border-[2px] shadow-lg shadow-[#7A8A99] mb-3 ">
              <img src={testimonial2} />
            </div>
            <h3 className="uppercase font-d-din-bold text-white text-[24px]">
              DOXXED DEV
            </h3>
            <p className="text-white text-[24px] font-d-din-regular mx-auto text-center w-[400px] ">
              Led by a fully disclosed developer and backed by reputable
              blockchain agencies, $GTM prioritizes transparency and community
              engagement
            </p>
          </div>
          <div className="flex flex-col gap-4  items-center justify-center  w-[400px]">
            <div className="w-[200px] h-[200px] border-[#7A8A99] rounded-full border-[2px] shadow-lg shadow-[#7A8A99] mb-3 ">
              <img src={testimonial3} />
            </div>
            <h3 className="uppercase font-d-din-bold text-white text-[24px]">
              LORE
            </h3>
            <p className="text-white text-[24px] font-d-din-regular mx-auto text-center w-[400px] ">
              Embodies ELONS quest to explore Mars for survival and advancement,
              Elon's grand vision
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGTM;
