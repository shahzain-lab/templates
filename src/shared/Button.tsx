'use client'
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useTheme } from "@/lib/context/ThemeContext"

export type TVariant =  "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "green" | "orange" | "gray" | "light"
export type TSize =  "default" | "sm" | "lg" | "icon"

const buttonVariants = cva(
    "inline-flex items-center uppercase justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
    {
      variants: {
        variant: {
          default: "bg-primary-main text-slate-50",
          green: "bg-green-main text-slate-50",
          gray: "bg-gray-main text-slate-50",
          orange: "bg-orange-main text-slate-50",
          light: "bg-light-main text-slate-50",
          destructive: "bg-red-500 text-slate-50",
          outline:
            "border border-slate-200 bg-white",
          secondary:
            "bg-slate-100 text-slate-900 ",
          ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
          link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  )

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    const { theme } = useTheme()
    const _variant = variant ? variant : theme;
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant: _variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
