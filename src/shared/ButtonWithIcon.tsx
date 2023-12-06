"use client";
import React from "react";
import { Button, TSize, TVariant } from "./Button";

interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  Icon: React.ReactNode;
  placement?: "left" | "right";
  variant?: TVariant;
  size?: TSize;
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ children, Icon, placement = "left", ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        {placement === "left" && <span className="mr-1">{Icon}</span>}
        {children}
        {placement === "right" && <span className="ml-1">{Icon}</span>}
      </Button>
    );
  },
);

ButtonWithIcon.displayName = "ButtonWithIcon";

export default ButtonWithIcon;
