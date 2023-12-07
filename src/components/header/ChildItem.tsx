import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { IMenu } from "./menuItems";
import { cn } from "@/lib/utils";

interface Props {
  menu: IMenu;
}

const navigationMenuTriggerStyle = cn(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

const ChildItem = ({ menu }: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className={navigationMenuTriggerStyle}>
          {menu?.path ? (
            <Link href={menu?.path}>{menu.title}</Link>
          ) : (
            <NavigationMenuTrigger
              className={` text-white bg-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500`}
            >
              {menu.title}
            </NavigationMenuTrigger>
          )}

          {menu?.Section && (
            <NavigationMenuContent>{menu?.Section}</NavigationMenuContent>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ChildItem;
