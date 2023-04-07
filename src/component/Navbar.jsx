import React from 'react';
import { useEffect, useState } from 'react';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {
    let Links = [
        { name: 'Blog', link: '/blog' },
    ];
    const [isScrolled, setIsScrolled] = useState(false);
    let [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav
            className={`${isScrolled && 'shadow-xl border-black drop-shadow-lg  '
                } bg-gradient-to-r from-indigo-600  to-indigo-800 bg-indigo-600 shadow-none h-16 z-40 w-full sticky md:px-12 lg:px-20 text-white font-semibold top-0 items-center justify-around duration-700 transition-all ease-in justify-items-center`}
        >
            <div className="flex max-w-6xl mx-auto items-center place-items-center justify-between py-2 px-4">
                <div className="h-10 sm:h-12 cursor-pointer flex items-center ">
                    <a href="/" className="flex items-center justify-center">
                        Logo
                    </a>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className="text-lg absolute right-8 top-6 cursor-pointer items-center  font-bold md:hidden"
                >
                    {!open ? (
                        <VscThreeBars name="open" className="h-5 w-5" />
                    ) : (
                        <VscChromeClose name="menu" className="stroke-1 h-5 w-5" />
                    )}
                    {/* <FaBars name={open ? 'close' : 'menu'} /> */}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-indigo-300 md:bg-inherit md:bg-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[3.5rem]' : 'top-[-490px]'
                        }`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-base font-regular md:my-0 my-7">
                            <a href={link.link} className=" hover:text-gray-300 duration-500">
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <a href="/contact" className="mx-4" >
                        <button className="md:ml-4 px-2 py-1 md:px-2 font-semibold text-indigo-900 bg-white md:bg-blue text-dark-blue shadow-2xl rounded-lg  ">
                            Contact
                        </button>
                    </a>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
