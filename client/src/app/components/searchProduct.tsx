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
        <div className="max-w-md mx-auto mt-4">
          <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="Digite o nome do produto"
            required
          />
          <button
            disabled={loading}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-8"
          >
            {loading ? 'Procurando...' : 'Procurar Produto'}
          </button>
          {searchedProduct && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {searchedProduct.map((product: any) => (
                <div key={product.product} className="p-4 bg-gray-100 rounded-md">
                  <p>Nome: {product.product}</p>
                  <p>Descrição: {product.description}</p>
                  <p>Valor: R${product.value}</p>
                </div>
              ))}
            </div>
          )}
          <div className='mb-8 h-12'>
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
