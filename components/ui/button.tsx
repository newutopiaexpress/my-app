import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "shadow-xl hover:shadow-lg shadow-stone-800/20 hover:shadow-stone-800/40 bg-gradient-to-bl from-stone-900 to-stone-600 text-stone-200 hover:bg-gradient-to-bl hover:from-stone-800 hover:to-stone-500",
        circle: "shadow-sm shadow-stone-800/20 hover:shadow-stone-800/40 bg-stone-800 text-stone-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-stone-300 bg-transparent hover:bg-stone-100 shadow-none hover:shadow-md",
        secondary:
          "bg-gradient-to-br from-stone-300 to-fuchsia-300 hover:bg-gradient-to-br hover:from-stone-200 hover:to-fuchsia-200 text-stone-600 shadow-lg shadow-stone-800/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        project:
          "border-0  bg-transparent hover:bg-white shadow-none hover:shadow-lg",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 bg-transparent px-3",
        lg: "h-14 pl-9 pr-9 rounded-full",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
