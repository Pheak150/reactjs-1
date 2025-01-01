import React from 'react'
import Header from "../Components/Home/Header"
import Menu from "../Components/Home/Menu"
import Hero from "../Components/Home/Hero"
import Checkouts from '../Components/Checkout/checkouts'
import Breadcrumb from '../Components/Blog/Breadcrumb'
import Footer from "../Components/Home/Footer"


const Checkout = () => {
  return (
    <div>
    <Menu/>
    <Header/>
    {/*<Hero/>*/}
    <Breadcrumb/>
    <Checkouts/>
    <Footer/>

    </div>
  )
}

export default Checkout