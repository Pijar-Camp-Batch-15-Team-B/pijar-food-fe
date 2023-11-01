import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddRecipe from "./pages/AddRecipe";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/detail",
    element: <Detail/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/add-recipe",
    element: <AddRecipe/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
