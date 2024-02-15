import Register from '@/app/components/register'
import Image from 'next/image'
import React from 'react'

export default function RegisterCustomer() {
  return (
    <>
      <div className='flex mx-auto bg-gray-100'>
        <div className='flex w-screen'>
        <div className='flex mx-auto justify-center items-center w-full'>
            <Register />
        </div>
        <div className='hidden md:flex h-screen w-full'>
          <Image
            src="/Login7Support.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className=' flex mx-auto h-full w-full'
          />
      </div>
    </div>
      </div>
    </>
  )
}
