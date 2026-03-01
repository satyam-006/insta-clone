import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/Feed";
import CreatePost from "./features/posts/pages/CreatePost";
import Home from "./features/home/pages/Home";
import UserDeatails from "./features/users/pages/UserDeatails";
import AllFollows from "./features/users/pages/AllFollows";
import AccountSetting from "./features/users/pages/AccountSetting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/create-post",
    element:<CreatePost/>
  },
  {
    path:"/user/detailes/:userId",
    element:<UserDeatails/>
  }
  ,{
    path:"/user/follows/:userId",
    element:<AllFollows/>
  },
  {
    path:"/user/settings/:userId",
    element:<AccountSetting/>
  }
  
]);
