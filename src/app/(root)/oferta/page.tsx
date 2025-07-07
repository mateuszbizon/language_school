import FinalSection from '@/components/sections/FinalSection'
import Container from '@/components/ui/container'
import { ABC_BLOCKS, ATOM, BRAIN, CERTIFICATE, GLOBE, WHITE_BOARD } from '@/constants/images'
import Image from 'next/image'
import React from 'react'

function OfferPage() {
  return (
    <>
        <header className='pt-section-padding'>
            <Container>
                <h1 className='heading1 text-center'>Oferta</h1>
            </Container>
        </header>
        <section id='start' className='py-section-padding'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2 lg:order-0'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={ABC_BLOCKS.src} alt={ABC_BLOCKS.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Język na start</h2>
                        <p className='little-bigger-text'>
                            Rozbudzamy językową ciekawość najmłodszych poprzez zabawę, ruch i proste zwroty. Zajęcia prowadzone są w przyjaznej atmosferze, która wspiera naukę przez doświadczenie i gry edukacyjne.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla dzieci w wieku 6–12 lat</li>
                                <li>Dla rodziców, którzy chcą wprowadzić dziecko w świat języka obcego</li>
                                <li>Dla początkujących uczniów szkół podstawowych</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id='basic' className='py-section-padding bg-secondary/50'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={WHITE_BOARD.src} alt={WHITE_BOARD.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Język podstawowy</h2>
                        <p className='little-bigger-text'>
                            Program skupia się na przyswajaniu najważniejszych zwrotów, słownictwa i prostych struktur gramatycznych. Uczniowie uczą się mówić, pisać i rozumieć język w codziennych sytuacjach.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla młodzieży i dorosłych na poziomie A1–A2</li>
                                <li>Dla osób, które chcą rozpocząć naukę od podstaw</li>
                                <li>Dla tych, którzy potrzebują języka w podróży lub pracy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id='exam' className='py-section-padding'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2 lg:order-0'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={CERTIFICATE.src} alt={CERTIFICATE.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Przygotowanie na egzamin</h2>
                        <p className='little-bigger-text'>
                            Zajęcia skoncentrowane na strategiach egzaminacyjnych, typowych zadaniach oraz powtórce materiału. Kurs obejmuje przygotowanie do egzaminów takich jak ósmoklasisty, maturalny czy certyfikaty Cambridge.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla uczniów klas 8 i licealistów przygotowujących się do egzaminów</li>
                                <li>Dla dorosłych podchodzących do egzaminów językowych</li>
                                <li>Dla wszystkich, którzy chcą zdobyć międzynarodowy certyfikat językowy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id='medium' className='py-section-padding bg-secondary/50'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={ATOM.src} alt={ATOM.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Płynniejszy język</h2>
                        <p className='little-bigger-text'>
                            Kładziemy nacisk na konwersację, rozumienie ze słuchu i praktyczne zastosowanie języka. Uczniowie uczą się mówić swobodnie i z większą pewnością siebie.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla osób na poziomie B1–B2</li>
                                <li>Dla tych, którzy chcą rozwinąć umiejętność mówienia i słuchania</li>
                                <li>Dla osób, które znają podstawy, ale brakuje im płynności</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id='advanced' className='py-section-padding'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2 lg:order-0'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={BRAIN.src} alt={BRAIN.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Zaawansowany</h2>
                        <p className='little-bigger-text'>
                            Zajęcia obejmują skomplikowane struktury gramatyczne, idiomy, styl formalny i akademicki. Uczestnicy rozwijają umiejętność precyzyjnego i świadomego posługiwania się językiem.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla osób na poziomie C1–C2</li>
                                <li>Dla studentów, profesjonalistów i osób pracujących za granicą</li>
                                <li>Dla tych, którzy chcą mówić i pisać na poziomie native speakera</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section id='holiday' className='py-section-padding bg-secondary/50'>
            <Container>
                <div className='grid lg:grid-cols-2 gap-5 lg:gap-0'>
                    <div className='order-2'>
                        <figure className='relative w-full aspect-square max-w-[400px] mx-auto'>
                            <Image src={GLOBE.src} alt={GLOBE.alt} fill />
                        </figure>
                    </div>
                    <div className='space-y-10'>
                        <h2 className='heading2'>Wczasy</h2>
                        <p className='little-bigger-text'>
                            Intensywny, wakacyjny kurs łączący naukę języka z elementami kultury i dobrej zabawy. Idealny wybór, by odświeżyć wiedzę lub zrobić duży postęp w krótkim czasie.
                        </p>
                        <div className='space-y-3'>
                            <p className='little-bigger-text font-semibold'>Dla kogo:</p>
                            <ul className='space-y-5 list-disc list-inside'>
                                <li>Dla dzieci i młodzieży spędzających wakacje w mieście</li>
                                <li>Dla dorosłych chcących zrobić językowy „reset” lub przyspieszyć naukę</li>
                                <li>Dla wszystkich, którzy chcą połączyć naukę z letnią atmosferą i luzem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <FinalSection />
    </>
  )
}

export default OfferPage