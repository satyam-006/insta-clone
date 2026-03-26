import "../style/allfollows.scss";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router";

const AllFollowing = () => {

    const navigate = useNavigate()

  const {users} = useUser()

  const following = users?.filter(user => user.isFollower);
  

  return (
    <div className="all-followes-container">
      <div className="nav">
        <i className="ri-arrow-left-line" onClick={()=>{navigate(-1)}}></i>
        <h2>Following</h2>
      </div>
      <div className="follows-content">
      {
        following?.map((follower,index)=>{
          return (
            <div key={index} className="follows">
            <div className="user-detail">
                <img src={follower?.profileImage} alt="" />
                <p>{follower?.username}</p>
            </div>
            <button className="button button-primary">UnFollow</button>
        </div>
          )
        })
      }
      </div>
    </div>
  );
};

export default AllFollowing;
