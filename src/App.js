import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import LandingSection from "./Components/LandingSection.jsx";
import { Box } from "@mui/material";
import SkillsCardComponent from "./Components/CardSection/Cards/SkillsCardComponent.jsx";
import AboutCardComponent from "./Components/CardSection/Cards/AboutCardComponent.jsx";
import ProjectsCardComponent from "./Components/CardSection/Cards/ProjectsCardComponent.jsx";
import SectionTitle from "./Components/SectionTitle.jsx";
import ContactComponent from "./Components/ContactForm/ContactComponent.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <LandingSection /> }],
  },
]);

//     { path: "about", element: <AboutCardComponent /> },
//     { path: "skills", element: <SkillsCardComponent /> },
//     { path: "projects", element: <ProjectsCardComponent /> },
//     { path: "contact", element: <ContactComponent /> },

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// export default App;
// <Box>
//   <ThemeProvider theme={theme}>
//     <Navbar />
//     <LandingSection />
//     <Box sx={{ marginTop: "6rem" }}>
//       <SectionTitle
//        title={"How can I help?"}
//         subtitle="(Click a card to learn more)"
//       />
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexWrap: "wrap",
//           width: "100%",
//           gap: ".5rem",
//         }}
//       >
//         <AboutCardComponent />
//         <SkillsCardComponent />
//         <ProjectsCardComponent />
//       </Box>
//     </Box>

//     <ContactComponent />
//     <Footer />
//   </ThemeProvider>
// </Box>

//       <Box>
//     <ThemeProvider theme={theme}>
//       <Navbar />
//       <Box sx={{ marginTop: "6rem" }}>
//         <Outlet />
//       </Box>
//       <Footer />
//     </ThemeProvider>
//   </Box>
// );
// }
