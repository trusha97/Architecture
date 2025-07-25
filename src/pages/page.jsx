import React from 'react'
import VipCustomer from './Home/VipCustomer'
import BestService from './Home/BestService'
import WhatClientSay from './Home/WhatClientSay'
import ProjectMind from './Home/ProjectMind'
import ImageProject from './Home/ImageProject'
import Banner from './Home/Banner'

const Home = () => {
  return (
    <>
    <Banner/>
    <VipCustomer/>
    <ImageProject/>
    <ProjectMind/>
    <BestService/>
    <WhatClientSay/>
    </>
  )
}

export default Home
