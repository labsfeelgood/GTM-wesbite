import Colonize from '../components/landing/Colonize'
import Ecosystem from '../components/landing/Ecosystem'
import Gateway from '../components/landing/Gateway'
import Partners from '../components/landing/Partners'
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
    </>
  )
}

export default Landing