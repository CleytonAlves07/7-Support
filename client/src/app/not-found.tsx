'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex bg-gray-200 md:bg-gray-100 '>
      <div className='flex flex-col md:flex-row-reverse justify-between max-w-6xl mx-auto w-screen'>
        <div className=' flex flex-col justify-center items-center w-full mt-10 mb-16'>
        <h1 className='text-2xl font-semibold text-gray-500 tracking-widest'>404 - Page not found</h1>
        <p className='text-gray-400 mt-6 mb-6 text-center tracking-widest'>Sorry, but the page you were looking for could not be found.</p>
          <button
            onClick={() => router.push('/')}
            className=' bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg mt-4'
          >
            Back to homepage
          </button>
      </div>
        <div className='flex h-screen w-screen'>
          <Image
            src="/notFound.jpg"
            width={500}
            height={500}
            alt='Imagem page not fount - erro 404'
            className=' flex mx-auto h-full w-full'
          />
      </div>
      </div>
    </div>
  )
}
