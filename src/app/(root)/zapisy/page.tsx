import Container from '@/components/ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

function BuyCoursePage() {
  return (
    <>
        <header className='pt-section-padding'>
            <Container>
                <h1 className='heading1 text-center'>Zapisy</h1>
            </Container>
        </header>
        <section className='py-section-padding'>
            <Container>
                <Tabs defaultValue="form" className="max-w-[400px] mx-auto">
                    <TabsList>
                        <TabsTrigger value="form">z formularzem</TabsTrigger>
                        <TabsTrigger value="no-form">bez formularza</TabsTrigger>
                    </TabsList>
                    <TabsContent value="form">form</TabsContent>
                    <TabsContent value="no-form">kontakt</TabsContent>
                </Tabs>
            </Container>
        </section>
    </>
  )
}

export default BuyCoursePage