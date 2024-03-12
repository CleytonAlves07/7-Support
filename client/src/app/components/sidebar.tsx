"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronsDown, PencilLine, Barcode, Settings, Package, SlidersHorizontal, Menu } from 'lucide-react';

export default function Sidebar() {
  const [isCadastrarOpen, setIsCadastrarOpen] = useState(false);
  const [isProdutoServicoOpen, setIsProdutoServicoOpen] = useState(false);

  const toggleCadastrar = () => {
    setIsCadastrarOpen(!isCadastrarOpen);
  };

  const toggleProdutoServico = () => {
    setIsProdutoServicoOpen(!isProdutoServicoOpen);
  };

  return (
    <aside className={`flex flex-col items-center justify-start w-16 h-screen bg-light-blue text-white overflow-hidden transition-all ${isCadastrarOpen ? 'w-64 transition-bg duration-500' : 'w-16 transition-bg duration-500'}`}>
      <div className="flex items-center mb-4">
        <button
          className="flex text-white hover:text-gray-100 focus:outline-none items-end"
          onClick={toggleCadastrar}
        >
          <Menu />
          {isCadastrarOpen ? <p className='transition-opacity ml-4 hover:text-gray-100'>Menu</p> : ''}
          
        </button>
      </div>

      <div className={`transition-opacity mb-2 w-full ${isCadastrarOpen ? 'opacity-100 transition-bg duration-500' : 'opacity-0 transition-bg duration-500'}`}>
        <button
          className="flex items-center justify-between w-full px-6 py-2 text-gray-200 hover:text-gray-400 focus:outline-none hover:bg-white transition-bg duration-500"
          onClick={toggleProdutoServico}
        >
          <div className="flex items-center">
            <PencilLine className="w-6 h-6"/>
            <span className='ml-4'>Cadastrar</span>
          </div>
          <p
            className={`h-5 w-5 ml-4 ${isProdutoServicoOpen ? 'transform rotate-90 transition-bg duration-500' : 'transition-bg duration-500'}`}
          >
            <ChevronsDown />
          </p>
        </button>

        {isProdutoServicoOpen && (
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

      <div className={`transition-opacity w-full flex flex-col items-center justify-start ${isCadastrarOpen ? 'opacity-100' : 'opacity-0'}`}>
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

