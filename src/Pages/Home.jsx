import React from 'react'
import Hero from '../Components/Hero'
import Card from '../Components/Card'
import Famliy from '../Components/Famliy'
import Labour from '../Components/Labour'
import FAQ from '../Components/FAQ'

const Home = () => {
  return (
    <div className='bg-white'>
    <Hero />
    <Card />
    <Famliy />
    <Labour/>
    <FAQ/>
    </div>
  )
}

export default Home
