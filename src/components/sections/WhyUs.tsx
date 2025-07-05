import React from 'react'
import Container from '../ui/container'

function WhyUs() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Sprawdź co zyskujesz ucząc się z nami</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                <div className='space-y-5 p-8 rounded-2xl bg-secondary2/40'>
                    <h3 className='heading3'>Elastyczność</h3>
                    <p className='text-xl'>
                        Uczysz się skąd chcesz i kiedy chcesz. Harmonogram ustalasz pod siebie i uczysz się u siebie w domu lub u nas w biurze.
                    </p>
                </div>
                <div className='space-y-5 p-8 rounded-2xl bg-[#8CADE1]/70'>
                    <h3 className='heading3'>Praktyczne umiejętności</h3>
                    <p className='text-xl'>
                        Wykorzystasz język w codziennych sytuacjach czy w podróży, a native speakerzy będą rozumiani w naturalny sposób. 
                    </p>
                </div>
                <div className='space-y-5 p-8 rounded-2xl bg-secondary2/40'>
                    <h3 className='heading3'>Pewność siebie</h3>
                    <p className='text-xl'>
                        Przede wszystkim przełamiesz barierę jezykową, dzięki czemu będziesz rozmawiał swobodnie. 
                    </p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUs