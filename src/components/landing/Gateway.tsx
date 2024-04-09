import gatewayImage from "../../assets/landing/1.png" 
import Button from "./Button"
import Navbar from "./Navbar"
const Gateway = () => {
  return (
    <div className="relative h-screen">
        {/* adding background images */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gatewayImage})` }}
      ></div>
      
      <Navbar/>
      <Button/>
    </div>
  )
}

export default Gateway