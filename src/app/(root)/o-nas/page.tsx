import FinalSection from '@/components/sections/FinalSection'
import WhyUs from '@/components/sections/WhyUs'
import Container from '@/components/ui/container'
import React from 'react'

function AboutPage() {
  return (
    <>
        <header className='py-section-padding'>
            <Container>
                <h1 className='heading1 text-center'>O nas</h1>
            </Container>
        </header>
        <section className='py-section-padding'>
            <Container>
                <div className='grid md:grid-cols-2 gap-10 md:gap-5'>
                    <div>
                        <h2 className='heading2'>Kim jesteśmy?</h2>
                    </div>
                    <div className='little-bigger-text font-medium space-y-5'>
                        <p>
                            Jesteśmy szkołą językową stworzoną z pasji do nauczania i komunikacji. Nasz zespół składa się z doświadczonych lektorów i edukatorów, którzy wierzą, że nauka języka to nie tylko zdobywanie wiedzy, ale także otwieranie się na świat.
                        </p>
                        <p>
                            Każdego dnia wspieramy dzieci, młodzież i dorosłych w rozwijaniu ich językowych umiejętności, pomagając im budować pewność siebie i osiągać realne cele.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        <section className='py-section-padding bg-secondary/50'>
            <Container>
                <div className='grid md:grid-cols-2 gap-10 md:gap-5'>
                    <div className='md:order-2 md:text-center'>
                        <h2 className='heading2'>Nasza misja</h2>
                    </div>
                    <div className='little-bigger-text font-medium space-y-5'>
                        <p>
                            Wierzymy, że język to narzędzie, które daje wolność – dlatego naszym celem jest umożliwienie każdemu swobodnego porozumiewania się po angielsku, niezależnie od wieku czy wcześniejszych doświadczeń. 
                        </p>
                        <p>
                            Chcemy, aby nasi kursanci nie tylko przyswajali słownictwo i gramatykę, ale również potrafili zrozumieć i wyrazić siebie w różnych sytuacjach życiowych – w pracy, podróży czy w rozmowie z przyjacielem.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
        <WhyUs />
        <FinalSection />
    </>
  )
}

export default AboutPage