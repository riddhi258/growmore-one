import React from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Famliy from '../Components/Famliy'
import Labour from '../Components/Labour'
import Process from '../Components/Process'
import FAQ from '../Components/FAQ'
import BlogSection from '../Components/BlogSection'
import Member from '../Components/Member'
import Testimonials from '../Components/testimonials'
const Home = () => {
  return (
    <div className='bg-white'>
    <Hero />
    <Card />
    <Famliy />
    <Process/>
    <Member/>
    <Labour/>
    <BlogSection/>
    <Testimonials/>
    <FAQ/>
    </div>
  )
}

export default Home
 