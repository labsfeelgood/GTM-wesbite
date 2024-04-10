import gluLogo from "../../assets/landing/partners/glu.png";
import solanaLogo from "../../assets/landing/partners/solana.png";
import ethereumLogo from "../../assets/landing/partners/ethereum.png";
import baseLogo from "../../assets/landing/partners/base.png";
import printfulLogo from "../../assets/landing/partners/printful.png";
import backdrop1 from "../../assets/landing/partners/backdrop1.png";
import backdrop2 from "../../assets/landing/partners/backdrop2.png";
import backdrop3 from "../../assets/landing/partners/backdrop3.png";
const Partners = () => {
  return (
    <div className=" h-[800px] bg-white relative ">
      <h2 className=" font-d-din-bold text-[60px] uppercase text-[#8FA1B3] absolute left-[146px] top-16">
        Partners
      </h2>
     <div className=" absolute  left-40 top-52">
     <div className=" flex items-center gap-[150px]">
        <img
          src={gluLogo}
          className="  w-[300px] h-[145px]  "
        />
        <img
          src={printfulLogo}
          className="  w-[400px] h-[50px]  "
        />
      </div >
      <div className=" flex items-center gap-40">
        <img
          src={baseLogo}
          className="  w-[130px] h-[130px]  "
        />
        <img
          src={solanaLogo}
          className="  w-[430px] h-[130px] "
        />
        <img
          src={ethereumLogo}
          className=" w-[500px] h-[280px]  "
        />
      </div>
     </div>
      <img src={backdrop1} className=" absolute w-[354px] h-[176px]  left-[1500px] top-16" />
      <img src={backdrop2} className=" absolute w-[354px] h-[176px] top-[600px] " />
      <img src={backdrop3} className=" absolute w-[120px] h-[120px] top-[650px] left-[1600px] " />
    </div>
  );
};

export default Partners;
