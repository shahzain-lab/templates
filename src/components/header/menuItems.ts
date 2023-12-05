import { IoMdContact } from "react-icons/io";
import { GrGroup } from "react-icons/gr";

export const MENU_ITEMS = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "Pages",
        tag: "New",
        newTab: false,
        children: [
            {
                Icon: IoMdContact,
                title: "Contact us",
                path: "/contactus"
            },
            {
                Icon: GrGroup,
                title: "About us",
                path: "/aboutus"
            },
        ]
    },
    {
        title: "Services",
        children: [
            {
                title: "Web Development",
                path: "/Services"
            },
            {
                title: "Web Design",
                path: "/Services",
                tag: "Popular"
            }
        ]
    }
]