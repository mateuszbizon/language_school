import ContactContent from '@/components/common/ContactContent'
import BuyForm from '@/components/forms/BuyForm'
import SubPageHeader from '@/components/sections/SubPageHeader'
import Container from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { Suspense } from 'react'

function BuyCoursePage() {
  return (
    <>
        <SubPageHeader title='Zapisy' />
        <section className='py-section-padding'>
            <Container>
                <p className='text-center little-bigger-text font-medium max-w-[400px] mx-auto mb-10'>
                    Zapisy na zajęcia odbywają się poprzez formularz lub tradycyjny sposób. Wybierz ten który najbardziej do Ciebie pasuję :)
                </p>
                <Tabs defaultValue="form">
                    <TabsList className='max-w-[400px] mx-auto'>
                        <TabsTrigger value="form">z formularzem</TabsTrigger>
                        <TabsTrigger value="no-form">bez formularza</TabsTrigger>
                    </TabsList>
                    <TabsContent value="form">
                        <Container className='px-0 max-w-[600px]'>
                            <div className='rounded-xl p-7 shadow-xl border space-y-10'>
                                <h2 className='heading3'>Formulasz zapisu</h2>
                                <Suspense>
                                    <BuyForm />
                                </Suspense>
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