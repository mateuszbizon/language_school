import React from 'react'

function ImportantNumbers() {
  return (
    <div className='bg-secondary px-5 pb-5 grid grid-cols-2 lg:grid-cols-4 gap-5'>
        <div className='text-center'>
            <p className='font-semibold text-xl'>600+</p>
            <p>pozytywnych ocen</p>
        </div>
        <div className='text-center'>
            <p className='font-semibold text-xl'>400+</p>
            <p>zadowolonych klientów</p>
        </div>
        <div className='text-center'>
            <p className='font-semibold text-xl'>300+</p>
            <p>uczniów z wynikami powyżej 90% na egzaminach</p>
        </div>
        <div className='text-center'>
            <p className='font-semibold text-xl'>40 min</p>
            <p>darmowej lekcji próbnej</p>
        </div>
    </div>
  )
}

export default ImportantNumbers