import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function PriceSection() {
  return (
    <section className='py-section-padding bg-[#3B608F] text-foreground-light overflow-hidden'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Cennik</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                <div className='rounded-2xl bg-white p-7 space-y-7 text-foreground'>
                    <div className='space-y-2'>
                        <p className='bigger-text'>Indywidualne</p>
                        <p className='text-muted'>1 osoba</p>
                    </div>
                    <p className='heading2'>70 zł</p>
                    <Button className='w-full' asChild>
                        <Link href={"/zapisy?option=option-single"}>
                            Zapisuję się
                        </Link>
                    </Button>
                    <ul className='space-y-5 list-inside list-disc'>
                        <li>Zajęcia dopasowane do Twoich potrzeb i tempa nauki</li>
                        <li>Cała uwaga lektora skupiona wyłącznie na Tobie</li>
                        <li>Możliwość wyboru terminów i godzin zajęć</li>
                        <li>Szybsze postępy dzięki indywidualnemu planowi nauki</li>
                        <li>Materiały dydaktyczne dobrane specjalnie dla Ciebie</li>
                    </ul>
                </div>
                <div className='rounded-2xl bg-white p-7 space-y-7 text-foreground'>
                    <div className='space-y-2'>
                        <p className='bigger-text'>Para</p>
                        <p className='text-muted'>2 osoby</p>
                    </div>
                    <p className='heading2'>50 zł</p>
                    <Button className='w-full' asChild>
                        <Link href={"/zapisy?option=option-pair"}>
                            Zapisuję się
                        </Link>
                    </Button>
                    <ul className='space-y-5 list-inside list-disc'>
                        <li>Ucz się razem z partnerem, znajomym lub członkiem rodziny</li>
                        <li>Program dostosowany do poziomu obojga uczestników</li>
                        <li>Kameralna atmosfera sprzyjająca wspólnej nauce</li>
                        <li>Elastyczne terminy ustalane indywidualnie</li>
                        <li>Oszczędność w porównaniu do dwóch osobnych kursów</li>
                    </ul>
                </div>
                <div className='rounded-2xl bg-white p-7 space-y-7 text-foreground relative'>
                    <span className='absolute -top-10 -right-8 p-5 rounded-full bg-primary text-foreground text-sm font-medium'>
                        Najczęściej <br /> wybierane
                    </span>
                    <div className='space-y-2'>
                        <p className='bigger-text'>Grupowe</p>
                        <p className='text-muted'>3 - 7 osób</p>
                    </div>
                    <p className='heading2'>45 zł</p>
                    <Button className='w-full' asChild>
                        <Link href={"/zapisy?option=option-group"}>
                            Zapisuję się
                        </Link>
                    </Button>
                    <ul className='space-y-5 list-inside list-disc'>
                        <li>Interaktywne zajęcia w małej, zaangażowanej grupie</li>
                        <li>Ćwiczenia w parach i zespołach dla lepszej komunikacji</li>
                        <li>Motywująca atmosfera wspólnego rozwoju</li>
                        <li>Atrakcyjna cena przy zachowaniu wysokiej jakości</li>
                        <li>Regularne podsumowania i testy postępów grupy</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PriceSection