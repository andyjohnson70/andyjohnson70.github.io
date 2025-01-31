'use client';
import Image from 'next/image';
import portait from '../../public/portrait.png'
import menu from "../../public/menu.png";
import closeMenu from "../../public/delete.png";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return(
        <header className="bg-tea-green fixed w-full top-0 z-20">
            <div className="flex flex-wrap p-2 flex-row items-center place-content-between">
                <a href="#home" className="title-font font-bold text-black hover:text-gray-700 text-2xl">
                    <Image className='rounded-full inline-block mr-2' src={portait} width={50} height={50} alt='me' />
                    <div className='inline-block'>
                        Andy Johnson
                    </div>
                </a>
                <div className='sm:hidden justify-end' onClick={() => {setOpen(!open)}}>
                    <Image className={`m-2 ${ open ? 'hidden' : 'block' }`} src={menu} width={40} height={40} alt='menu' />
                    <Image className={`m-2 ${ open ? 'block' : 'hidden' }`} src={closeMenu} width={40} height={40} alt='menu' />
                </div>
                <div id="navbar-menu-small" className={`sm:hidden ${ open ? 'block' : 'hidden' } w-full transition-all ease-in-out delay-150 duration-300`}>
                    <ul>
                        <li className='border-t border-black text-right p-2'>
                            <a href="#home" className="text-black hover:text-gray-700 font-semibold" onClick={() => {setOpen(!open)}}>
                                Home
                            </a>
                        </li>
                        <li className='border-t border-black text-right p-2'>
                            <a href="#about" className="text-black hover:text-gray-700 font-semibold" onClick={() => {setOpen(!open)}}>
                                About
                            </a>
                        </li>
                        <li className='border-t border-black text-right p-2'>
                            <a href="#projects" className="text-black hover:text-gray-700 font-semibold" onClick={() => {setOpen(!open)}}>
                                Projects
                            </a>
                        </li>
                        <li className='border-t border-black text-right p-2'>
                            <a href="#contact" className="text-black hover:text-gray-700 font-semibold" onClick={() => {setOpen(!open)}}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className="max-sm:hidden sm:ml-4 sm:py-1 sm:pl-4 flex flex-grow text-base justify-end">
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