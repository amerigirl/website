import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ index: true, element: <HomeLayout /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
