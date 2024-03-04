import Image from 'next/image';
import Link from 'next/link';
import { SocialIcons } from './components/socialIcons';

export default function Home() {
  return (
    <div className='bg-blue-100 min-h-screen min-w-screen flex flex-col justify-center items-center'>
      <div className="container mx-auto p-8 text-center mt-54 xl:mt-20 flex bg-slate-100 xl:w-2/3 w-full rounded-lg mb-20">
         <div className='flex flex-col w-full justify-center items-center'>
          <div className='flex xl:w-1/2 w-full'>
            <h1 className="text-3xl font-bold mb-4">
              Bem-vindo ao 7-Support: Sua Solução Exclusiva para Cuidar do Seu Veículo!
            </h1>
          </div>
          <div className='flex flex-col xl:w-2/3 w-full'>
            <p className="text-lg text-gray-500 text-justify">
              No 7-Support, estamos dedicados a proporcionar uma experiência excepcional no cuidado automotivo, tanto para clientes quanto para administradores. Nossa plataforma foi meticulosamente desenvolvida para aprimorar o processo de manutenção automotiva, oferecendo recursos robustos e intuitivos que garantem o melhor para o seu veículo.
            </p>
            <span className='flex justify-center items-center'>
              <SocialIcons />
            </span> 
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-4 relative xl:w-3/5 xl:bottom-20 mb-20 xl:top-4'>
        <div className='group'>
          <Link href='/login'>
          <Image
            src="/auto4.jpg"
            width={500}
            height={500}
            alt='Image home page'
            className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105 object-cover shadow-bottom'
          />
          <p className='mt-2 text-center font-semibold group-hover:text-yellow-300 text-white absolute pl-4 pb-2 xl:top-60 top-60 transition duration-300 transform group-hover:scale-105'>
            Serviços de Pintura e Funilaria
          </p>
          </Link>  
      </div>
        <div className='group'>
        <Link href='/login'>
        <Image
          src="/auto1.jpg"
          width={500}
          height={500}
          alt='Image home page'
          className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105 object-cover shadow-bottom'
        />
        <p className='xl:mt-2 text-center font-semibold group-hover:text-yellow-300 text-white absolute pl-4 pb-2 xl:top-52 top-80 mt-52  flex transition duration-300 transform group-hover:scale-105'>
          Personalização e Acessórios
        </p>
        </Link>    
      </div>
      <div className='group'>
        <Link href='/login'>
        <Image
          src="/auto2.jpg"
          width={500}
          height={500}
          alt='Image home page'
          className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105 object-cover shadow-bottom'
        />
        <p className='xl:mt-2 text-center font-semibold group-hover:text-yellow-300 text-white absolute pl-4 pb-2 xl:bottom-2 bottom-64 mb-4 transition duration-300 transform group-hover:scale-105 right-6 xl:left-56 left flex '>
          Serviços Elétricos
        </p>
        </Link>    
      </div>
      <div className='group'>
        <Link href='/login'>
        <Image
          src="/auto3.jpg"
          width={500}
          height={500}
          alt='Image home page'
          className='rounded-2xl max-w-sm transition duration-300 transform group-hover:scale-105 object-cover shadow-bottom'
        />
        <p className='mt-2 text-center font-semibold group-hover:text-yellow-300 text-white absolute pl-4 pb-2 bottom-2 transition duration-300 transform group-hover:scale-105'>
          Serviços Mecânicos Gerais
        </p>
        </Link>    
      </div>
      </div>
      <div className='container mx-auto p-8 text-center mt-10 mb-48 xl:mt-20 flex flex-col bg-slate-100 xl:w-2/3 w-full rounded-lg justify-center items-center'>
        <div className='flex flex-col w-full justify-center items-center'>
          <h1 className='text-3xl font-bold mb-4'>
            Solicite um orçamento agora
          </h1>
        </div>
        <div className='flex flex-col xl:w-2/3 w-full'>
          <p className="flex text-lg text-gray-500 text-justify ">
            Descubra a excelência no cuidado automotivo que você merece! Na 7-Support, oferecemos serviços personalizados para o seu veículo, proporcionando a máxima qualidade e atenção que ele merece. Não deixe a manutenção do seu carro para depois. Estamos aqui para oferecer um orçamento feito sob medida, garantindo que seu veículo receba a atenção especializada que ele precisa. Solicite seu orçamento agora e dê ao seu automóvel o tratamento que ele merece, com serviços que vão além das suas expectativas.
          </p>
        </div>
        <div>
          <Link href='/login'>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-6'>
            Solicite seu orçamento
          </button>
          </Link>
        </div>
      </div>
  </div>
);
}
