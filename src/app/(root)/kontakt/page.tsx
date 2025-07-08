import Contact from '@/components/sections/Contact'
import Container from '@/components/ui/container'
import React from 'react'

function ContactPage() {
  return (
    <>
        <header className='pt-section-padding'>
            <Container>
                <h1 className='heading1 text-center'>Kontakt</h1>
            </Container>
        </header>
        <Contact />
    </>
  )
}

export default ContactPage