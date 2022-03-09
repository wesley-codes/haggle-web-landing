import React from 'react'
import SellBanner from '../components/Banner/SellBanner'
import ShoeBanner from '../components/Banner/ShoeBanner.'
import Boost from '../components/Boost/Boost'
import Stock from '../components/Boost/Stock up/Stock'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const SellPage = () => {
  return (
   <>
   <Header/>
      <SellBanner />
      <Boost />
      <ShoeBanner />
      <Stock />
      <Footer/>
   </>
  )
}

export default SellPage