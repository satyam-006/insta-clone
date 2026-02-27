import React from 'react'
import "../style/leftnav.scss";
import User from './User';
import Navigation from './Navigation';
import Logout from '../../auth/components/Logout';

const LeftNav = () => {
  return (
    <div className='left-nav'>
        <div className="logo">
            <img src="https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/Instagram-Gradient-Logo-PNG.png?updatedAt=1772039432265" alt="" />
            <h2>Instagram</h2>
        </div>
        <User/>
        <Navigation/>
        <Logout/>
    </div>
  )
}

export default LeftNav