import React from 'react'
import "../style/middle.scss"
import TopNav from '../components/TopNav'
import Stories from '../components/Stories'
import Feed from '../../posts/pages/Feed'

const Middle = () => {
  return (
    <div className='middle'>
        <TopNav/>
        <Stories/>
        <Feed/>
    </div>
  )
}

export default Middle