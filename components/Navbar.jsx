"use client"
import { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { MdMenuOpen } from 'react-icons/md'

import NavLogo from '../public/assets/logo2.png'

const Navbar = () => {
    const [  open, setOpen ] = useState( false )
  return (
    <>
    <header className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
            <Link href="/" className='flex items-center'>
        <Image
            src={NavLogo}
            alt='logo'
            width={75}
            height={75}
            className='cursor-pointer'
          />
          <h1 className='text-3xl mt-5 font-extrabold text-cyan-500 hidden sm:block'>MEMO_FLOW</h1>
          </Link>
          <MdMenuOpen className="lg:hidden block h-10 w-10 cursor-pointer text-cyan-600 hover:text-cyan-400" onClick={() => setOpen(!open)} />
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-lg text-gray-600 lg:flex lg:justify-between">
                <li className="lg:px-5 py-2 hover:text-cyan-500 font-semibold">
                    <Link href="/">Home</Link>

                </li>
                <li className="lg:px-5 py-2 hover:text-cyan-500 font-semibold">
                    <Link href="/register">Register</Link>
                </li>
                <li className="py-2 px-4 lg:px-6 lg:py-2 bg-cyan-500 text-white rounded-xl hover:bg-cyan-400 font-semibold">
                    <Link href="/login">Login</Link>
                </li>
            </ul>
         </nav>
        </div>
    </header>

    </>
    
  )
}

export default Navbar