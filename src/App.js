import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./Components/LandingPage/HomeLayout.jsx";
import AboutPage from "./Components/AboutPage/AboutPage.jsx";
import SkillsPage from "./Components/SkillsPage/SkillsPage.jsx";
import GithubLandingPage from "./Components/Github/GithubLandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  { path: "/aboutPage", element: <AboutPage /> },
  { path: "/skillsPage", element: <SkillsPage /> },
  { path: "/projects", element: <GithubLandingPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
