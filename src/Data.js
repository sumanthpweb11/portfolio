import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";

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

export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
  { id: 4, name: "Marketing", value: "marketing" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
    tags: ["react", "express", "node", "mongodb"],
    url: ["https://www.google.com/"],
  },
  {
    id: 2,
    image: project2,
    value: "u",
    tags: ["react", "express", "node", "mongodb"],
    url: ["https://www.google.com/"],
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
    text: "28 Green Tower, street Name, New York, USA",
  },
  {
    id: 3,
    icon: <AiOutlineMail />,
    text: "sumanthpweb11@gmail.com",
  },
];
