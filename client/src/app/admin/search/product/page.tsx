"use client"

import SearchProduct from '@/app/components/searchProduct';
import Sidebar from '@/app/components/sidebar';


export default function AdminSearchProduct() {
  return (
    <>
      <div className="flex">
        <Sidebar />
      <main className="flex-grow p-4">  
        <SearchProduct />
      </main>
    </div>
    </>
  )
}
