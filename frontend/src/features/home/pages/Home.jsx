import React from 'react'
import "../style/home.scss"
import LeftNav from '../components/LeftNav'
import Middle from './Middle'
import Follows from '../../users/pages/Follows'

const Home = () => {


  return (
    <main className='home-main'>
        <LeftNav/>
        <Middle/>
        <Follows/>
    </main>
  )
}

export default Home