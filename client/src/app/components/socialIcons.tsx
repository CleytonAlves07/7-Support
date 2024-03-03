import { Github, Linkedin } from 'lucide-react';

export function SocialIcons() {
  return (
    <div className='flex space-x-8 mt-4'>
      <a href="http://www.linkedin.com/in/cleyton-alves/" 
      target="_blank"
      className='text-gray-200 p-2 rounded-full bg-blue-600 transition duration-300 transform hover:scale-105 hover:bg-blue-500'
      >
        <Linkedin />
      </a>
      <a href="http://github.com/CleytonAlves07" 
      target="_blank"
      className='text-gray-200 p-2 rounded-full bg-blue-600 transition duration-300 transform hover:scale-105 hover:bg-blue-500'
      >
        <Github />
      </a>
    </div>

  )
}