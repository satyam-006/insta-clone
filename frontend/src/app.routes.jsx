import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/Feed";
import CreatePost from "./features/posts/pages/CreatePost";
import Home from "./features/home/pages/Home";
import UserDeatails from "./features/users/pages/UserDeatails";
import AllFollows from "./features/users/pages/AllFollows";
import AccountSetting from "./features/users/pages/AccountSetting";
import Protected from "./features/auth/components/Protected";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected><Home/></Protected>,
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
    element:<Protected><CreatePost/></Protected>
  },
  {
    path:"/user/detailes/:userId",
    element:<Protected><UserDeatails/></Protected>
  }
  ,{
    path:"/user/follows/:userId",
    element:<Protected><AllFollows/></Protected>
  },
  {
    path:"/user/settings/:userId",
    element:<Protected><AccountSetting/></Protected>
  },
  {
    path:"*",
    element:<h1>OOP'S</h1>
  }
  
]);
