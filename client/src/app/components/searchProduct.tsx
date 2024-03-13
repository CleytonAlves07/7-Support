import { Search } from 'lucide-react';
import React, { useState } from 'react';

export default function SearchProduct() {
  const [formData, setFormData] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [searchedProduct, setSearchedProduct] = useState([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData(e.target.value);
  }

  function resetForm() {
    setFormData('');
  }

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  async function handleSubmit(e: React.SyntheticEvent) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await fetch(`${BACKEND_URL}/admin/search/product?query=${formData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setLoading(false);
      setMessage(data.message);
      
      if (data) {
        setSearchedProduct(data);
        resetForm();
      }
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h1 className='flex justify-center items-center font-bold text-gray-400 text-2xl mt-6 mb-8'>
          Pesquisar Produto
        </h1>
        <div className="max-w-md mx-auto mt-4 relative ">
          <div className='relative'>
            <input 
              type="text" 
              name="search" 
              id="search"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-500 
              text-gray-900 text-sm rounded-lg focus:ring-1 focus:outline-none 
              focus:ring-blue-500 block w-full p-2.5 pr-10 "
              required
              placeholder="Digite o nome do produto" />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-3 py-2 text-white bg-blue-500 rounded-r-md focus:outline-none"
            >
              <Search />
            </button>
          </div>
          
          {searchedProduct && (
            <div className="grid grid-cols-1  gap-4">
              {searchedProduct.map((product: any) => (
                <div key={product.product} className="p-4 bg-gray-100 rounded-md">
                  <p>Nome: {product.product}</p>
                  <p>Descrição: {product.description}</p>
                  <p>Valor: R${product.value}</p>
                </div>
              ))}
            </div>
          )}
        <div className='mb-8 h-12 text-xl'>
        {!message ? (
          <p className='flex justify-center mt-4 text-red-600'>{ message }</p>
        ) : (
          <p className='flex justify-center mt-4 text-teal-600'>{message}</p>
        )}
      </div>
        </div>
      </form>
    </div>
  );
}