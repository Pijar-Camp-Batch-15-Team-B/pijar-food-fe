import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";

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
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
