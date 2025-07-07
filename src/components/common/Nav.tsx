import { navItems } from '@/constants/navItems'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import NavMobile from './NavMobile'

function Nav() {
  return (
    <nav className='px-5 flex justify-between items-center fixed top-0 w-full h-nav-height z-30 bg-background-light'>
        <span className='font-medium'>Szkoła językowa</span>
        <ul className='hidden lg:flex items-center'>
            {navItems.map(item => (
                <li key={item.label}>
                    <Button variant={"link"} className='py-0' asChild>
                        <Link href={item.href}>
                            {item.label}
                        </Link>
                    </Button>
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