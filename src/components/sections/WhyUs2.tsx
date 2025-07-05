import React from 'react'
import Container from '../ui/container'
import { BookOpenCheck, CalendarClock, GraduationCap, Laptop, Mic, SmilePlus, UserCheck } from 'lucide-react'

function WhyUs2() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom lg:mb-30'>Dbamy o unikalne podejście</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-x-20 md:gap-y-40'>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <GraduationCap className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Lektorzy z pasją do nauczania</h3>
                    <p className='lg:text-xl'>
                        Nasi nauczyciele to nie tylko profesjonaliści, ale także entuzjaści, którzy motywują do działania.
                    </p>
                </div>
                <div className='flex flex-col gap-5 items-center text-center lg:-translate-y-10'>
                    <Mic className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Nauka przez mówienie</h3>
                    <p className='lg:text-xl'>
                        Kładziemy nacisk na komunikację, abyś od początku mówił swobodnie i bez barier.
                    </p>
                </div>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <UserCheck className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Indywidualne podejście do każdego ucznia</h3>
                    <p className='lg:text-xl'>
                        Zajęcia dopasowujemy do Twoich celów, tempa i stylu nauki, bo każdy uczy się inaczej.
                    </p>
                </div>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <Laptop className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Nowoczesne metody dydaktyczne</h3>
                    <p className='lg:text-xl'>
                        Korzystamy z interaktywnych narzędzi i sprawdzonych technik, by nauka była efektywna i ciekawa.
                    </p>
                </div>
                <div className='flex flex-col gap-5 items-center text-center lg:-translate-y-10'>
                    <CalendarClock className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Zajęcia wtedy, kiedy chcesz</h3>
                    <p className='lg:text-xl'>
                        Elastyczny grafik pozwala uczyć się w dogodnym czasie — nawet wieczorem lub w weekend.
                    </p>
                </div>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <SmilePlus className='size-20 md:size-30 text-primary' />
                    <h3 className='bigger-text font-semibold'>Przyjazna atmosfera sprzyjająca rozwojowi</h3>
                    <p className='lg:text-xl'>
                        Tworzymy przestrzeń, w której czujesz się swobodnie i chętnie wracasz na kolejne lekcje.
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUs2