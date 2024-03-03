import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-blue-100 min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <div className="container mx-auto p-8 text-center max-w-md mt-54 xl:mt-20 flex">
         <div className='flex flex-col w-full'>
          <h1 className="text-3xl font-bold mb-4">
            Bem-vindo ao 7-Support: Sua Solução Exclusiva para Cuidar do Seu Veículo!
          </h1>
          <p className="text-lg text-gray-500 text-justify">
            No 7-Support, estamos dedicados a proporcionar uma experiência excepcional no cuidado automotivo, tanto para clientes quanto para administradores. Nossa plataforma foi meticulosamente desenvolvida para aprimorar o processo de manutenção automotiva, oferecendo recursos robustos e intuitivos que garantem o melhor para o seu veículo.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
        <div className='group'>
          <Image
            src="/auto1.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105'
          />
          <p className='mt-2 text-center font-semibold group-hover:text-blue-500'>
            Serviço 1
          </p>
        </div>
        <div className='group'>
          <Image
            src="/auto2.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105'
          />
          <p className='mt-2 text-center font-semibold group-hover:text-blue-500'>
            Serviço 2
          </p>
        </div>
        <div className='group'>
          <Image
            src="/auto3.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105'
          />
          <p className='mt-2 text-center font-semibold group-hover:text-blue-500'>
            Serviço 3
          </p>
        </div>
        <div className='group'>
          <Image
            src="/auto4.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105'
          />
          <p className='mt-2 text-center font-semibold group-hover:text-blue-500'>
            Serviço 4
          </p>
        </div>
      </div>
    </div>
  );
}
