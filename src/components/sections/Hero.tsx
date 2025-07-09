"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { BOOK_APPLE } from '@/constants/images'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FlipWords } from '../ui/flip-words'

function Hero() {
    useGSAP(() => {
        gsap.fromTo(".text-animate", {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            duration: 1
        })
        gsap.fromTo(".fade", {
            opacity: 0
        }, {
            opacity: 1,
            delay: 0.8,
            duration: 2
        })
    }, [])

  return (
    <header className='bg-secondary py-section-padding md:py-[calc(theme(padding.section-padding)*2)] overflow-hidden'>
        <Container>
            <div className='grid lg:grid-cols-2'>
                <div className='space-y-8 text-center md:text-left '>
                    <h1 className='text-animate heading1'>Szkoła językowa <br />Otwórz się na <br className='md:hidden' /> <FlipWords words={["języki", "świat", "podróże"]} className='text-primary2' /></h1>
                    <p className='text-animate bigger-text'>
                        Szkoła językowa dzięki której zaczniesz swobodnie rozmawiać z każdym i to wszędzie.
                    </p>
                    <div className='fade'>
                        <Button size={"lg"} asChild>
                            <Link href={"/zapisy"}>
                                Zapisz się już teraz
                            </Link>
                        </Button>
                    </div>
                </div>

                <div className='fade flex justify-center'>
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