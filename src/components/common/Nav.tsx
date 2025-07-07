import { navItems } from '@/constants/navItems'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import NavMobile from './NavMobile'
import NavItemCard from '../cards/NavItemCard'

function Nav() {
  return (
    <nav className='px-5 flex justify-between items-center fixed top-0 w-full h-nav-height z-30 bg-background-light'>
        <Link href={"/"} title='Strona główna'>
            <span className='font-medium'>Szkoła językowa</span>
        </Link>
        <ul className='hidden lg:flex items-center'>
            {navItems.map(item => (
                <li key={item.label}>
                    <NavItemCard item={item} />
                </li>
            ))}
        </ul>
        <div>
            <div className='hidden lg:block'>
                <Button asChild>
                    <Link href={"/zapisy"}>
                        Zapisz się
                    </Link>
                </Button>
            </div>
            <div className='lg:hidden'>
                <NavMobile />
            </div>
        </div>
    </nav>
  )
}

export default Nav