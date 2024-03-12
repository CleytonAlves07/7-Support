"use client"
import Sidebar from '../components/sidebar';


export default function AdminHome() {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }
  return (
    <>
     <>
      <div className="flex">
      <Sidebar />
          <main className="flex-grow p-4">
            <div className="max-w-md mx-auto">
              <div className="relative z-0 w-full mb-5 group">
                <h1 className='flex justify-center items-center font-bold text-gray-400 text-2xl mt-6 mb-8'>Pesquisar Serviço</h1>
                <input 
                  type="text" 
                  name="search" 
                  id="search"
                  onChange={handleChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                <label
                  htmlFor="search"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Pesquisar
                </label>

              </div>
              
            </div>
      </main>
    </div>
    </>
    </>
  )
}
