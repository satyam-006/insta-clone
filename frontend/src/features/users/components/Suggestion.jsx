import React from 'react'

const Suggestion = () => {
  return (
    <div className="follower suggestion">
      <h4>Suggestions for you</h4>
      <div className="follower-container">
        <div className="followee">
          <div className="followee-detail">
            <img src="https://plus.unsplash.com/premium_photo-1683121769247-7824fdc324de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <p>sam</p>
          </div>
          <button>Follow</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="https://images.unsplash.com/photo-1723179343134-634c9eadde39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D" alt="" />
            <p>sakira</p>
          </div>
          <button>Follow</button>
        </div>
        <div className="followee">
          <div className="followee-detail">
            <img src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=0ez7MLSYsOlKDghpVAUDMVf_gT5B_DfKmRNKqElOLUA=" alt="" />
            <p>priya</p>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Suggestion