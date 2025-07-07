import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { BOOK_APPLE } from '@/constants/images'

function Hero() {
  return (
    <header className='bg-secondary py-section-padding md:py-[calc(theme(padding.section-padding)*2)]'>
        <Container>
            <div className='grid lg:grid-cols-2'>
                <div className='space-y-8 text-center md:text-left max-w-[800px]'>
                    <h1 className='heading1'>Szkoła językowa <br />Otwórz się na <span>podróże</span></h1>
                    <p className='bigger-text'>
                        Szkoła językowa dzięki której zaczniesz swobodnie rozmawiać z każdym i to wszędzie.
                    </p>
                    <div>
                        <Button size={"lg"} asChild>
                            <Link href={"/zapisy"}>
                                Zapisz się już teraz
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <figure className='relative w-full aspect-square max-w-[300px]'>
                        <Image src={BOOK_APPLE.src} alt={BOOK_APPLE.alt} fill />
                    </figure>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero