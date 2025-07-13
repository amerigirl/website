import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navBarButtons = [
  {
    name: "Home",
    link: "/",
    component: Link,
  },
  {
    name: "About",
    link: "/aboutPage",
    component: Link,
  },
  {
    name: "Skills",
    link: "/skillsPage",
    component: Link,
  },
  {
    name: "Projects",
    link: "/projects",
    component: Link,
  },
  {
    name: "Contact",
    link: "#contact",
    component: HashLink,
  },
];

export default navBarButtons;