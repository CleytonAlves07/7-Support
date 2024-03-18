"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronsDown, PencilLine, Barcode, Settings, Package, SlidersHorizontal, Menu, Search } from 'lucide-react';

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRegisterOpen, setIsCadastrarOpen] = useState(false);
   const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRegister = () => {
    setIsCadastrarOpen(!isRegisterOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <aside className={`flex flex-col items-center justify-start w-16 h-screen bg-light-blue text-white overflow-hidden transition-all ${isMenuOpen ? 'w-64 transition-bg duration-500' : 'w-16 transition-bg duration-500'}`}>
      <div className="flex items-center mb-4">
        <button
          className="flex text-white hover:text-gray-100 focus:outline-none items-end"
          onClick={toggleMenu}
        >
          <Menu />
          {isMenuOpen ? <p className='transition-opacity ml-4 hover:text-gray-100'>Menu</p> : ''}
          
        </button>
      </div>

      <div className={`transition-opacity mb-2 w-full ${isMenuOpen ? 'opacity-100 transition-bg duration-500' : 'opacity-0 transition-bg duration-500'}`}>
        <button
          className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none hover:bg-white transition-bg duration-500"
          onClick={toggleRegister}
        >
          <div className="flex items-center">
            <PencilLine className="w-6 h-6"/>
            <span className='ml-4'>Cadastrar</span>
          </div>
          <p
            className={`h-5 w-5 ml-4 ${isRegisterOpen ? 'transform rotate-90 transition-bg duration-500' : 'transition-bg duration-500'}`}
          >
            <ChevronsDown />
          </p>
        </button>

        {isRegisterOpen && (
          <div>
            <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-500 hover:bg-white">
              <Link href="/admin/register/product" className='flex items-center gap-2 ml-8 hover:ml-6'>
                <Barcode className="w-6 h-6" />
                <span>Produto</span>
              </Link>
            </div>
            <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-500 hover:bg-white">
              <Link href="/admin/register/maintenance" className='flex items-center gap-2 ml-8 hover:ml-6'>
                <Settings className="w-6 h-6" />
                <span>Serviço</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className={`transition-opacity mb-2 w-full ${isMenuOpen ? 'opacity-100 transition-bg duration-500' : 'opacity-0 transition-bg duration-500'}`}>
        <button
          className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none hover:bg-white transition-bg duration-500"
          onClick={toggleSearch}
        >
          <div className="flex items-center">
            <Search className="w-6 h-6"/>
            <span className='ml-4'>Pesquisar</span>
          </div>
          <p
            className={`h-5 w-5 ml-4 ${isSearchOpen ? 'transform rotate-90 transition-bg duration-500' : 'transition-bg duration-500'}`}
          >
            <ChevronsDown />
          </p>
        </button>

        {isSearchOpen && (
          <div>
            <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-500 hover:bg-white">
              <Link href="/admin/search/product" className='flex items-center gap-2 ml-8 hover:ml-6'>
                <Barcode className="w-6 h-6" />
                <span>Produto</span>
              </Link>
            </div>
            <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-500 hover:bg-white">
              <Link href="/admin/search/maintenance" className='flex items-center gap-2 ml-8 hover:ml-6'>
                <Settings className="w-6 h-6" />
                <span>Serviço</span>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className={`transition-opacity w-full flex flex-col items-center justify-start ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
        <nav className='h-full w-full'>
          <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-300 hover:bg-white">
            <Link href="/orders" className='flex space-x-4'>
              <SlidersHorizontal className="w-6 h-6"/>
              <span>Em andamento</span>
            </Link>
          </div>
          <div className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none transition-bg duration-300 hover:bg-white">
            <Link href="/stock" className='flex space-x-4'>
              <Package className="w-6 h-6" />
              <span>Stock</span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}

