import React from 'react'
import Menu from "../Components/ShopGrid/Menu"
import Header from "../Components/Home/Header"
import Hero from "../Components/ShopGrid/Hero"
import Breadcrumb from '../Components/ShopDetail/Breadcrumb'
import Contactse from "../Components/Contacts/contactsec"
import Map from "../Components/Contacts/Map"
import Footer from "../Components/Home/Footer"
import ContactF from '../Components/Contacts/ContactF'

const Contacts = () => {
  return (
    <div>
        <Menu/>
        <Header/>
        <Hero/>
        <Breadcrumb/>
        <Contactse/>
        <Map/>
        <ContactF/>
        <Footer/>

    </div>
   
  )
}

export default Contacts