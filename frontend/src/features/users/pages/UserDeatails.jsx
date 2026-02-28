import React from "react";
import "../style/userdetail.scss";

const UserDeatails = () => {
  return (
    <div className="user-detail-page">
      <div className="user-top-nav">
        <div className="logo">
          <img
            src="https://ik.imagekit.io/zzkwwuvz9/insta-ui-images/Instagram-Gradient-Logo-PNG.png?updatedAt=1772039432265"
            alt=""
          />
          <div></div>
          <h1>Instagram</h1>
        </div>
        <input type="text" placeholder="Search" />
        <div className="iconsss">
          <i class="ri-compass-line"></i>
          <i class="ri-heart-line"></i>
          <i class="ri-user-3-line"></i>
        </div>
      </div>
      <div className="user-profile-detail">
        <div className="user-img-wrapper">
          <div></div>
          <img
            src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="profile-content">
          <div className="username">
            <h2>jordan</h2>
            <button>Follow</button>
          </div>
          <div className="user-stats">
            <p>
              1048 <span> posts</span>
            </p>
            <p>
              13.2k <span> followers</span>
            </p>
            <p>
              33 <span> following</span>
            </p>
          </div>
          <p className="bio">Lorem ipsum dolor sit amet. lorem</p>
        </div>
      </div>
      <div className="user-posts">
        <div className="post">
          <div className="post-wrapper"></div>
          <div className="post-like-comment-count">
            <div>
              <p>
                <i class="ri-poker-hearts-fill"></i>
                <span> 2000</span>
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>
                <span> 30</span>
              </p>
            </div>
          </div>
          <img
            src="https://plus.unsplash.com/premium_vector-1721569648469-97f6c6017148?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="post">
          <div className="post-wrapper"></div>
          <div className="post-like-comment-count">
            <div>
              <p>
                <i class="ri-poker-hearts-fill"></i>
                <span> 2000</span>
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>
                <span> 30</span>
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1692356573087-00b545ac4694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div className="post">
          <div className="post-wrapper"></div>
          <div className="post-like-comment-count">
            <div>
              <p>
                <i class="ri-poker-hearts-fill"></i>
                <span> 2000</span>
              </p>
              <p>
                <i class="ri-chat-3-fill"></i>
                <span> 30</span>
              </p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1772090042075-6336af674f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UserDeatails;
