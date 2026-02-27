import React from 'react'
import LeftNav from '../components/LeftNav'
import Middle from './Middle'
import Follows from '../../users/pages/Follows'

const Home = () => {
  return (
    <main>
        <LeftNav/>
        <Middle/>
        <Follows/>
    </main>
  )
}

export default Home