import { Github, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-gray-50'>
      <div className='p-6 bg-gray mx-auto relative z-10 overflow-hidden border border-b-0 border-gray-200'>
        <div className='flex flex-col items-center gap-4 text-center'>
          <Link href='/'>
            {/* <LogoType className='h-7 text-gray-800' /> */}
          </Link>
          <p className='max-w-md text-sm text-gray-500'>
            A fun project that turned out much better than I expected :D
          </p>
          <p className='text-sm leading-5 text-gray-400'>
            © {new Date().getFullYear()} FreeDomBlog Application
          </p>
          <div className='flex items-center space-x-3'>
            <a
              href='https://x.com/@its_ashu04'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Twitter</span>
              <Twitter className='h-4 w-4 text-gray-600 transition-colors group-hover:text-black' />
            </a>
            <a
              href='https://github.com/ashudevcodes'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Github</span>
              <Github className='h-4 w-4 text-gray-600 transition-colors group-hover:text-black' />
            </a>

            <a
              href='https://www.instagram.com/ashishprasad__'
              target='_blank'
              rel='noreferrer'
              className='group rounded-full border border-gray-200 p-2 transition-colors hover:bg-gray-100'>
              <span className='sr-only'>Instagram</span>
              <Instagram className='h-4 w-4 text-gray-600 transition-colors group-hover:text-[#ff0000]' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer