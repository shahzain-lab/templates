import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface Props {
  href?: string;
}

const ChildItem = ({ href }: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={href ? href : ""}>
            <NavigationMenuTrigger
              className={` text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500`}
            >
              Item One
            </NavigationMenuTrigger>
          </Link>
          {href && (
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ChildItem;
