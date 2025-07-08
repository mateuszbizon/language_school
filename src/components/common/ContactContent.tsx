import React from 'react'
import Container from '../ui/container'
import { MailCheck, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { EMAIL, PHONE_NUMBER } from '@/constants'
import { Button } from '../ui/button'

function ContactContent() {
  return (
    <>
        <h2 className='heading2 text-center heading-margin-bottom'>Nasze dane kontaktowe</h2>
        <Container className='max-w-[800px] px-0'>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='p-7 rounded-2xl bg-background text-center space-y-10'>
                    <PhoneCall className='size-10 mx-auto' />
                    <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                        <Link href={`tel:${PHONE_NUMBER}`}>
                            <p>+48 {PHONE_NUMBER}</p>
                        </Link>
                    </Button>
                </div>
                <div className='p-7 rounded-2xl bg-background text-center space-y-10'>
                    <MailCheck className='size-10 mx-auto' />
                    <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                        <Link href={`mailto:${EMAIL}`}>
                            <p>{EMAIL}</p>
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </>
  )
}

export default ContactContent