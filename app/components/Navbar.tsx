

export default function Navbar() {
    return(
        <header className="bg-tea-green fixed w-full top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="#about" className="title-font font-bold text-black hover:text-gray-700 mb-4 md:mb-0 text-2xl">
                    Andy Johnson
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        Projects
                    </a>
                    <a href="#skills" className="mr-5 text-black hover:text-gray-700 font-semibold">
                        Skills
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-black hover:text-gray-700 font-semibold mt-4 md:mt-0">
                    Hire Me
                </a>
            </div>
        </header>
    );
}