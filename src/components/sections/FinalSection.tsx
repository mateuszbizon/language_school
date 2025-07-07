import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function FinalSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center mb-10'>Nie czekaj więcej. Odbierz pierwszą lekcje próbną za <span className='bg-primary rounded-2xl p-2'>0 zł</span></h2>
            {/* <p className='mb-10 bigger-text text-center'>
                Pierwsza lekcja w naszej szkole jest <strong>darmowa</strong>. Sprawdź czy nasza szkoła jest dla Ciebie, nic przy tym nie tracąc na starcie.
            </p> */}
            <div className='flex justify-center'>
                <Button size={"lg"} className='px-7 sm:px-10' asChild>
                    <Link href={"/zapisy"}>
                        Odbierz pierwszą darmową lekcje
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default FinalSection