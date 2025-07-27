import React from 'react'
import VipCustomer from './Home/VipCustomer'
import BestService from './Home/BestService'
import WhatClientSay from './Home/WhatClientSay'
import ImageProject from './Home/ImageProject'
import Banner from './Home/Banner'
import About from './Home/About'
import Portfolio from './Home/Portfolio'
import ProjectMind from './Home/ProjectMind'

const Home = () => {
  return (
    <>
    <Banner/>
    {/* <About/> */}
    <VipCustomer/>
    {/* <BestService/> */}
    {/* <Portfolio/> */}
    <WhatClientSay/>
    <ImageProject/>
    <ProjectMind/>
    </>
  )
}

export default Home
