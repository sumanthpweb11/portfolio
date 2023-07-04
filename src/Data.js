import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },

  {
    id: 3,
    text: "Contact",
    href: "contact",
  },
];

export const projects = [
  {
    id: 1,
    image: p1,
    title: "Mern Resume Maker",
    tags: ["react", "express", "node", "mongodb"],
    url: ["https://mern-resumemaker-app.onrender.com"],
  },
  {
    id: 2,
    image: p2,
    title: "Mern Movie Reviews",
    tags: ["react", "express", "node", "mongodb"],
    url: ["https://mern-movie-reviews.onrender.com"],
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "8828392584",
  },
  {
    id: 2,
    icon: <HiOutlineLocationMarker />,
    text: "Malad East, Mumbai, 400097,India",
  },
  {
    id: 3,
    icon: <AiOutlineMail />,
    text: "sumanthpweb11@gmail.com",
  },
];
