import "../style/allfollows.scss";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";

const AllFollowers = () => {

  const navigate = useNavigate()

  const {users} = useUser()

  const followers = users?.filter(user => user.isFollow);
  

  return (
    <div className="all-followes-container">
      <div className="nav">
        <i className="ri-arrow-left-line" onClick={()=>{navigate(-1)}}></i>
        <h2>Followers</h2>
      </div>
      <div className="follows-content">
      {
        followers?.map((follower,index)=>{
          return (
            <div key={index} className="follows">
            <div className="user-detail">
                <img src={follower?.profileImage} alt="" />
                <p>{follower?.username}</p>
            </div>
            <button className="button button-primary">Follow</button>
        </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default AllFollowers;
