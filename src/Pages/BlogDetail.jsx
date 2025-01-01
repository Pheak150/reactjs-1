import React from 'react'
import Header from "../Components/Home/Header"
import Menu from "../Components/Home/Menu"
import Hero from "../Components/ShopGrid/Hero"
import Blogdetail from "../Components/BlogDetail/blogdetailhero"
import Blogsection from '../Components/BlogDetail/blogsection'
import Relatedetail from '../Components/BlogDetail/Relatedetail'
import Footer from "../Components/Home/Footer"

const BlogDetail = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <Hero/>
        {/*<Blogdetail/>*/}
        <Blogsection/>
        <Relatedetail/>
        <Footer/>


    </div>
  )
}

export default BlogDetail