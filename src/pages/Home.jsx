import React from 'react'
import Hero from '../components/herocomponents/Hero'
import ThisMonth from '../components/herocomponents/Thismonth'
import NewArrival from '../components/herocomponents/NewArrival'
import PopularAuthor from '../components/herocomponents/PopularAuthor'
import BestSellers from '../components/herocomponents/BestSellers'
import Technology from '../components/herocomponents/Technology'
import JoinUs from '../components/herocomponents/JoinUs'


const Home = () => {
  return (
    <>
    <Hero/>
    <ThisMonth/>
    <NewArrival/>
    <PopularAuthor/>
    <BestSellers/>
    <Technology/>
    <JoinUs/>
    </>
  )
}

export default Home