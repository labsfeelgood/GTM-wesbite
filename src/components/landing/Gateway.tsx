import gatewayImage from "../../assets/landing/1.png";
import elonImage from "../../assets/landing/elon.png"
import Button from "./Button";
// import Navbar from "./Navbar";
const Gateway = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      ></div>
      <img
      src={elonImage}
      alt=""
      className=" absolute left-[150px] top-[610px] w-[192px] h-[230px]"
      />
      {/* <Navbar /> */}
      <Button />
    </div>
  );
};

export default Gateway;
