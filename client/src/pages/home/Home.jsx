import React from 'react'
import classes from './home.module.css'
import Navbar from '../../components/navbar/Navbar'
import FeaturedBlogs from '../../components/featuredBlogs/FeaturedBlogs'

import Categories from '../../components/categories/Categories'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedBlogs/>
      <Categories />
      {/* <Newsletter/> */}
      <Footer/>
    </div>
  )
}

export default Home


