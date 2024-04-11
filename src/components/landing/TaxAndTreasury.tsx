import peace from "../../assets/landing/peace.png"
export const TaxAndTreasury = () => {
  return (
    <div className=' bg-[#000000] h-screen'>
        <div className=" flex items-center">
        <h2 className=' uppercase font-d-din-bold text-white text-[60px]'>TAX & TREASURY</h2>
        <div>
            <h4 className=" font-d-din-italic text-white text-[32px]">Embrace the Power of 5%</h4>
        </div>
        </div>
        <div className=" ">
            <div className=" relative">
            <img src={peace} className=" absolute "/>
            <p className=" absolute text-white font-d-din-regular text-[36px] top-[150px] left-[120px]">2%</p>
            <p className=" absolute text-white font-d-din-regular text-[36px]  top-[150px] left-[230px]">2%</p>
            <p className=" absolute text-white font-d-din-regular text-[36px] top-[270px] left-[180px]">1%</p>
            </div>


        </div>

    </div>
  )
}
