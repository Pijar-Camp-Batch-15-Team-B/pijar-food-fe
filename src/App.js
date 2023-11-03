import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";
import Profile from "./pages/Profile";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/detail/:id",
    element: <Detail/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/add-recipe",
    element: <AddRecipe/>
  },
  {
    path: "/profile",
    element: <Profile/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
