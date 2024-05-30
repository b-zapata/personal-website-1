import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Experience",
    newTab: false,
    path: "/experience",
  },
  {
    id: 2.1,
    title: "Projects",
    newTab: false,
    path: "/projects",
  },
  {
    id: 2.3,
    title: "Education",
    newTab: false,
    path: "/education",
  },
  {
    id: 2.5,
    title: "Interests",
    newTab: false,
    path: "/interests",
  },
  {
    id: 2.7,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 3,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog Grid",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Sign In",
        newTab: false,
        path: "/auth/signin",
      },
      {
        id: 35,
        title: "Sign Up",
        newTab: false,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/support",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;
