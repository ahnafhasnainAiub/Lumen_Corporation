import React from 'react'
import OurProductDetails from '../OurProductDetails/OurProductDetails'
import OurMisson from '../OurMission/OurMission'
import OurVison from '../OurVision/OurVision'
import AnimatedBanner from '../AnimatedBanner/AnimatedBanner'
import Banner from '../Banner/Banner'

function Home() {
  return (
    <div>
      <Banner/>
      <OurProductDetails/>
      <OurMisson/>
      <OurVison/>
      <AnimatedBanner/>

    </div>
  )
}

export default Home