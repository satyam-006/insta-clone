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
            <img src="" alt="" />
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
              id="username"
            />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="email" />
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
