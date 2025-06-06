import HomePage from "./routes/homepage/homePage"
import ListPage from "./routes/listPage/listPage.jsx";
import  {Layout, RequireAuth } from "./routes/layout/layout.jsx"
import SinglePage from "./routes/singlePage/SinglePage.jsx";
import {
  createBrowserRouter,
  RouterProvider,

}from "react-router-dom"
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import Login from "./routes/login/login.jsx";
import Register from "./routes/register/registerPage.jsx";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage.jsx";
import NewPostPage from "./routes/newPostPage/newPostPage.jsx";
import { listPageLoader, singlePageLoader } from "./lib/loaders.js";
function App() {
   
    const router=createBrowserRouter([{
      path:"/",
      element: <Layout/>,
      children:[{
       path:"/",
       element:<HomePage/>
      },
      {
        path:"/list",
        element:<ListPage/>,
        loader:listPageLoader
      },
      {
        path:"/:id",
        element:<SinglePage/>,
        loader:singlePageLoader
      },
      {
       path:"/login",
      element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
    ]
    },
    {
        path:"/",
        element:<RequireAuth/>,
        children:[   {
        path:"/profile",
        element:<ProfilePage/>
      },
      {
        path:"/profile/update",
        element:<ProfileUpdatePage/>
      },
    {
        path:"/add",
        element:<NewPostPage/>
      }]
      }
  ]);
  return (

    <RouterProvider router={router}/>
  )
}

export default App