import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout.jsx";
import AboutPage from "./Components/AboutPage/AboutPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  { path: "/aboutPage", element: <AboutPage />},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
