import React from 'react'
import Container from '../ui/container'

type SubPageHeaderProps = {
    title: string
}

function SubPageHeader({ title }: SubPageHeaderProps) {
  return (
    <header className='py-section-padding'>
        <Container>
            <h1 className='heading1 text-center'>{title}</h1>
        </Container>
    </header>
  )
}

export default SubPageHeader