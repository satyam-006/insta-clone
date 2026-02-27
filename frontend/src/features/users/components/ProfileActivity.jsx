import React from 'react'
import "../style/profileactivity.scss"

const ProfileActivity = () => {
  return (
    <div className='profile-activity'>
      <h4>Profile Activity</h4>
      <div className="card">
        <div className="images">
          <img src="" alt="" />
        </div>
        <h1>23.4k <span>Follower</span></h1>
        <p>Active now on your profile</p>
      </div>
    </div>
  )
}

export default ProfileActivity