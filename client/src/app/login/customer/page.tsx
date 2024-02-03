import Login from '@/app/components/login'
import Image from 'next/image'
import React from 'react'

export default function LoginCustomer() {
  return (
    <div className='flex mx-auto bg-blue-100'>
        <div className='flex flex-row-reverse w-screen'>
        <div className='flex mx-auto justify-center items-center w-full'>
            <Login />
        </div>
        <div className='flex h-screen w-full'>
          <Image
            src="/Login_Customer.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className=' flex mx-auto h-full w-full'
          />
      </div>
    </div>
      </div>
  )
}
