'use client'
import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between flex-wrap bg-slate-900 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <div className="rounded-full bg-white text-center">
                </div>

                <Link href="/">
                    <span className="font-semibold text-xl tracking-tight">Elprogramadorgt Blog</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? `block` : `hidden`} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Home
                    </Link>
                    <Link href="/blog" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Blog
                    </Link>
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        About
                    </Link>
                    {/* <Link href="/sugerencias" className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4">
                        Sugerencias
                    </Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;