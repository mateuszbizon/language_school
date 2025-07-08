import ContactContent from '@/components/common/ContactContent'
import BuyForm from '@/components/forms/BuyForm'
import Container from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

function BuyCoursePage() {
  return (
    <>
        <header className='pt-section-padding'>
            <Container>
                <h1 className='heading1 text-center mb-10'>Zapisy</h1>
                <p className='text-center little-bigger-text font-medium max-w-[400px] mx-auto'>
                    Zapisy na zajęcia odbywają się poprzez formularz lub tradycyjny sposób. Wybierz ten który najbardziej do Ciebie pasuję :)
                </p>
            </Container>
        </header>
        <section className='py-section-padding'>
            <Container>
                <Tabs defaultValue="form">
                    <TabsList className='max-w-[400px] mx-auto'>
                        <TabsTrigger value="form">z formularzem</TabsTrigger>
                        <TabsTrigger value="no-form">bez formularza</TabsTrigger>
                    </TabsList>
                    <TabsContent value="form">
                        <Container className='px-0 max-w-[600px]'>
                            <div className='rounded-xl p-7 shadow-xl border space-y-10'>
                                <h2 className='heading3'>Formulasz zapisu</h2>
                                <BuyForm />
                            </div>
                        </Container>
                    </TabsContent>
                    <TabsContent value="no-form">
                        <ContactContent />
                    </TabsContent>
                </Tabs>
            </Container>
        </section>
    </>
  )
}

export default BuyCoursePage