import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function Hero() {
  return (
    <header className='bg-secondary py-section-padding md:py-[calc(theme(padding.section-padding)*2)]'>
        <Container>
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
        </Container>
    </header>
  )
}

export default Hero