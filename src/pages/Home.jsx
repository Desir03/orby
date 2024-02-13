import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Sales from '../components/Sales'
import Newriv from '../components/Newriv'
import Basic from '../components/Basic'
import Spcial from '../components/Spcial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <Banner/>
    <Sales/>
    <Newriv/>
    <Basic/>
    <Spcial/>
    <Footer/>
    </>
  )
}

export default Home