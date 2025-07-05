import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronRight, ExternalLink } from 'lucide-react'

function Offer() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Nasza propozycja</h2>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Język na start</h3>
                        <p className='text-muted'>
                            Dla dzieci 6-12 lat
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#start"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Język podstawowy</h3>
                        <p className='text-muted'>
                            Angielski na poziomie A1/A2
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#basic"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Przygotowanie na egzamin</h3>
                        <p className='text-muted'>
                            Egzamin ósmoklasisty lub matura
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#exam"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Płyniejszy język</h3>
                        <p className='text-muted'>
                            Angielski na poziomie B1/B2
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#medium"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Zaawansowany</h3>
                        <p className='text-muted'>
                            Angielski na poziomie C1
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#advanced"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='bg-background rounded-2xl flex flex-col-reverse border overflow-hidden h-[250px]'>
                    <div className='bg-white p-5 space-y-3'>
                        <h3 className='bigger-text'>Wczasy!</h3>
                        <p className='text-muted'>
                            Potrzebny angielski tylko do podróży na wakacje
                        </p>
                        <div>
                            <Button variant={"link"} size={"link"} asChild>
                                <Link href={"/oferta#holiday"}>
                                    Zobacz więcej <ChevronRight />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10 md:mt-20 flex justify-center'>
                <Button asChild>
                    <Link href={"/oferta"}>
                        Zobacz ofertę <ExternalLink />
                    </Link>
                </Button>
            </div>
        </Container>
    </section>
  )
}

export default Offer