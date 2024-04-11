import BuyGTM from '../components/landing/BuyGTM'
import Colonize from '../components/landing/Colonize'
import Ecosystem from '../components/landing/Ecosystem'
import Gateway from '../components/landing/Gateway'
import HowItWorks from '../components/landing/HowItWorks'
import Partners from '../components/landing/Partners'
import { TaxAndTreasury } from '../components/landing/TaxAndTreasury'
import WhatIsIt from '../components/landing/WhatIsIt'
import WhyGTM from '../components/landing/WhyGTM'

const Landing = () => {
  return (<>
    <Gateway/>
    <Colonize/>
    <WhatIsIt/>
    <WhyGTM/>
    <Partners/>
    <Ecosystem/>
    <BuyGTM/>
    <TaxAndTreasury/>
    <HowItWorks/>
    </>
  )
}

export default Landing