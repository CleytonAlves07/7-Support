"use client"
import SearchMaintenance from '@/app/components/searchMaintenance';
import Sidebar from '@/app/components/sidebar';


export default function AdminSearchMaintenance() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return (
    <>
      <div className="flex">
        <Sidebar />
      <main className="flex-grow p-4">  
        <SearchMaintenance />
      </main>
    </div>
    </>
   
  )
}
