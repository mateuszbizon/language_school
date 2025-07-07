import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Instagram } from 'lucide-react'
import { navItems } from '@/constants/navItems'
import { EMAIL, PHONE_NUMBER } from '@/constants'

function Footer() {
  return (
    <footer className='pt-section-padding pb-10 bg-foreground text-white'>
        <Container>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-20'>
                <div className='space-y-3 text-center md:text-left'>
                    <p className='text-xl font-medium'>Szkoła językowa</p>
                    <p className='text-lg'>
                        <em>
                            Szkoła językowa dzięki której zaczniesz swobodnie rozmawiać z każdym i to wszędzie.
                        </em>
                    </p>
                </div>

                <nav className='space-y-7 text-center md:text-left'>
                    <p className='text-xl font-medium'>Nawigacja</p>
                    <ul className='space-y-5'>
                        {navItems.map(item => (
                            <li key={item.label}>
                                <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='space-y-7 text-center lg:text-left'>
                    <p className='text-xl font-medium'>Dane kontaktowe</p>
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>Zadzwoń do nas</p>
                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                            <Link href={`tel:${PHONE_NUMBER}`}>
                                <p>{PHONE_NUMBER}</p>
                            </Link>
                        </Button>
                    </div>
                    {/* <div className='space-y-2'>
                        <p className='text-lg font-medium'>Adres salonu</p>
                        <p className='font-medium'>{LOCATION}</p>
                    </div> */}
                    <div className='space-y-2'>
                        <p className='text-lg font-medium'>Adres e-mail</p>
                        <Button className='text-white hover:text-white/70' size={"link"} variant={"link"} asChild>
                            <Link href={`tel:${EMAIL}`}>
                                <p>{EMAIL}</p>
                            </Link>
                        </Button>
                    </div>
                    <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                        <Button className='size-11' size={"icon"} asChild>
                            <Link href={"https://www.instagram.com/"} target='_blank' title='Instagram'>
                                <span className='sr-only'>instagram</span>
                                <Instagram className='size-6' />
                            </Link>
                        </Button>
                        {/* <Button className='size-11' size={"icon"} asChild>
                            <Link href={"https://www.facebook.com/"} target='_blank' title='Facebook'>
                                <span className='sr-only'>facebook</span>
                                <Facebook className='size-6' />
                            </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex justify-between items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Szkoła językowa</span>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer