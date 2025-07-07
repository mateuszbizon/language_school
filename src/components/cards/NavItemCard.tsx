"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavItem } from '@/types'
import { usePathname } from 'next/navigation'

type NavItemCardProps = {
    item: NavItem
}

function NavItemCard({ item }: NavItemCardProps) {
    const pathname = usePathname()
    const isLinkActive = pathname === item.href

  return (
    <Button variant={"link"} className={`w-full px-0 lg:w-auto lg:py-0 lg:px-6 ${isLinkActive && "text-foreground hover:text-foreground"}`} asChild>
        <Link href={item.href}>
            {item.label}
        </Link>
    </Button>
  )
}

export default NavItemCard