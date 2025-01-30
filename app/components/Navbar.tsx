import Image from 'next/image';
import portait from '../../public/portrait.png'

export default function Navbar() {
    return(
        <header className="bg-tea-green fixed w-full top-0 z-20">
            <div className="container mx-auto flex flex-wrap p-3 flex-row items-center">
                <a href="#home" className="title-font font-bold text-black hover:text-gray-700 mb-4 md:mb-0 text-2xl">
                    <Image className='rounded-full inline-block mr-2' src={portait} width={50} height={50} alt='me' />
                    <div className='inline-block'>
                        Andy Johnson
                    </div>
                </a>
                <nav className="md:ml-4 md:py-1 md:pl-4 flex flex-grow text-base justify-end">
                    <a href="#home" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        Home
                    </a>
                    <a href="#about" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        About
                    </a>
                    <a href="#projects" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        Projects
                    </a>
                    <a href="#contact" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}