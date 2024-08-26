import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        orange:
          "pt-1 pb-1 pl-4 pr-4 mr-0 rounded-full border-transparent bg-orange-400 hover:bg-amber-500/90 text-stone-100 shadow-md",
        orangeblack:
          "pt-0 pb-1 pl-4 pr-4 mr-0 rounded-full border-transparent hover:bg-stone-800 bg-orange-500 text-orange-200 hover:text-stone-800 shadow-xl shadow-orange-900/30",
        rose:
          "pt-0 pb-1 pl-4 pr-4 mr-0 rounded-full border-transparent bg-rose-500 hover:bg-rose-500/90 text-stone-100 shadow-md",
        green:
          "pt-0 pb-1 pl-4 pr-4 mr-0 rounded-full border-transparent bg-emerald-500 text-yellow-100 shadow-md",
        voice:
          "pt-0 pb-1 pl-4 pr-4 mr-0 rounded-full border-transparent bg-amber-500 text-stone-100 shadow-md",
        secondary:
          "shadow-lg shadow-fuchsia-600/50 rounded-full border-0 bg-gradient-to-br from-fuchsia-400 to-purple-600 hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-500 text-slate-200",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "rounded-full border opacity-75 hover:opacity-100 border-stone-400 text-stone-400 bg-transparent",
        male:
          "pl-2 pr-2 pt-1 pb-1 rounded-full border-transparent bg-sky-400 text-slate-100 hover:bg-sky-500",
        female:
          "pl-2 pr-2 pt-1 pb-1 rounded-full border-transparent bg-fuchsia-400 text-slate-100 hover:bg-fuchsia-500",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
