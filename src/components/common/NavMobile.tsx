import React from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import { navItems } from '@/constants/navItems'
import Link from 'next/link'
import NavItemCard from '../cards/NavItemCard'

function NavMobile() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size={"icon"}>
                <Menu className='size-5' />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader className='hidden'>
                <SheetTitle>Mobile navigation</SheetTitle>
            </SheetHeader>
            <ul>
                {navItems.map(item => (
                    <li key={item.label}>
                        <NavItemCard item={item} />
                    </li>
                ))}
            </ul>
            <Button asChild>
                <Link href={"/zapisy"}>
                    Zapisz się
                </Link>
            </Button>
        </SheetContent>
    </Sheet>
  )
}

export default NavMobile