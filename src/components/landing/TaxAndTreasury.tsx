import peace from "../../assets/landing/peace.png"
import line1 from "../../assets/landing/line1.png"
export const TaxAndTreasury = () => {
  return (
    <div className=' bg-[#000000] h-screen relative'>
       <div className=" absolute left-48 ml-4 flex flex-col">
       <div className=" flex items-center gap-[700px] " >
        <h2 className=' uppercase font-d-din-bold text-white text-[60px]'>TAX & TREASURY</h2>
        <div className=" flex flex-col gap-[-10px] mt-4 relative">
            <img src={line1}/>
            <h4 className=" font-d-din-italic text-white text-[32px] absolute mt-2">Embrace the Power of 5%</h4>
        </div>
        </div>
        <div className=" top-[100px] ">
            <div className=" relative">
            <img src={peace} className=" absolute "/>
            <p className=" absolute text-white font-d-din-regular text-[36px] top-[150px] left-[120px]">2%</p>
            <p className=" absolute text-white font-d-din-regular text-[36px]  top-[150px] left-[230px]">2%</p>
            <p className=" absolute text-white font-d-din-regular text-[36px] top-[270px] left-[180px]">1%</p>
            </div>
        </div>
       </div>

    </div>
  )
}
