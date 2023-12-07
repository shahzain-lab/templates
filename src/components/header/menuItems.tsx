import React from "react";
import Pages from "./sections/Pages";
import Services from "./sections/Services";

export interface IMenu {
  title: string;
  path?: string;
  tag?: string;
  newTab?: boolean;
  Section?: React.ReactNode;
}

export const MENU_ITEMS: IMenu[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Pages",
    tag: "New",
    newTab: false,
    Section: <Pages />,
  },
  {
    title: "Services",
    Section: <Services />,
  },
];

// [
//     {
//         Icon: IoMdContact,
//         title: "Contact us",
//         path: "/contactus"
//     },
//     {
//         Icon: GrGroup,
//         title: "About us",
//         path: "/aboutus"
//     },
// ]
