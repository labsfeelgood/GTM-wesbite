import testimonial1 from "../../assets/landing/testimonial1.png"
import testimonial2 from "../../assets/landing/testimonial2.png"
import testimonial3 from "../../assets/landing/testimonial3.png"

import TestimonialCard from "./TestimonialCard"
const WhyGTM = () => {
  const testimonialCardInfo = [ 
    {
      key:1,
      image:testimonial1,
      heading:"MEMETICS",
      content:"Seamlessly integrates into gaming, AI betting, shopping, and staking, creating a comprehensive $GTM ecosystem"
    },
    {
      key:2,
      image:testimonial2,
      heading:"DOXXED DEV",
      content:"Led by a fully disclosed developer and backed by reputable blockchain agencies, $GTM prioritizes transparency and community engagement"
    },
    {
      key:3,
      image:testimonial3,
      heading:"LORE",
      content:"Embodies ELONS quest to explore Mars for survival and advancement, Elon's grand vision"
    },
  ]
  return (
    <div className=' h-[800px] bg-[#000000] border border-white'>\
    <h2 className=' uppercase text-white font-d-din-bold text-[75px]'>WHY $GTM</h2>
    <div className=" flex justify-around">
      {
        testimonialCardInfo.map((item)=>(
          <TestimonialCard 
          content={item.content}
          image={item.image}
          heading={item.heading}
          key={item.key}
          />
        ))
      }
    </div>
    </div>
  )
}

export default WhyGTM