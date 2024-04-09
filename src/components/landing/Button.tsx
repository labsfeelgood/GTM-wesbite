import buttonOutline from "../../assets/landing/Button outline.png";
const Button = () => {
  return (
    <button className=" absolute left-[630px] top-[650px]">
      <div className="relative">
        <img
          src={buttonOutline}
          className=" w-[221px] h-[71px]"
          alt="but gtm"
        ></img>
        <div className=" absolute inset-0 flex items-center justify-center">
          <p className=" text-white uppercase font-d-din-bold text-[32px] shadow-text">
            Buy $GTM
          </p>
        </div>
      </div>
    </button>
  );
};

export default Button;
