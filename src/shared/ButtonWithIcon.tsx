import React from 'react'
import { Button, TSize, TVariant } from './Button'

interface ButtonWithIconProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    Icon: React.ReactNode
    placement?: "left" | "right"
    variant?: TVariant
    size?: TSize
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
    ({ children, className, Icon, placement="left", ...props }) => {
  return (
    <Button {...props}>
        {placement === 'left' && (
            <span className="mr-1">{Icon}</span>
        )}
        {children}
        {placement === 'right' && (
            <span className="ml-1">{Icon}</span>
        )}
    </Button>
   )
 }
)

Button.displayName = "ButtonWithIcon"

export default ButtonWithIcon 