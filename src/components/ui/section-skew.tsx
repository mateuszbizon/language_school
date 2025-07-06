import { cn } from '@/lib/utils'
import React, { ComponentProps } from 'react'

type SectionSkewProps = ComponentProps<"div">

function SectionSkew({ className, ...props }: SectionSkewProps) {
  return (
    <div className={cn("absolute -bottom-10 h-[80px] left-0 right-0 bg-background-light skew-y-2", className)} {...props}>

    </div>
  )
}

export default SectionSkew