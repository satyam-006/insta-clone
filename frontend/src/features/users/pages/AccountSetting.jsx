import React, { useRef } from "react";
import "../style/accountsetting.scss";
import Footer from "../../shared/components/Footer";

const AccountSetting = () => {
  const prfileImageRef = useRef(null);

  return (
    <div className="setting">
      <div className="setting-container">
        <div className="nav">
          <i class="ri-arrow-left-s-line"></i>
          <h2>Setting</h2>
        </div>
        <h1>Account Settings</h1>
        <form className="form">
          <div className="personal-info">
            <h3>Personal Information</h3>
            <p>Edit your personal information</p>
          </div>
          <div className="imgdiv">
            <img src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_rp_progressive&w=740&q=80" alt="" />
            <label className="button" htmlFor="profileImage">Upload An Image</label>
            <input
              type="file"
              ref={prfileImageRef}
              name="profileImage"
              id="profileImage"
            />
            <button className="button">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="usernem"
              placeholder="username"
              id="Username"
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
            <label htmlFor="bio">Bio</label>
            <textarea name="bio" id="bio"></textarea>
            <button className="button button-primary">Save changes</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default AccountSetting;
