'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu,X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export default function Header() {
    const[isMenuOpen,setIsMenuOpen] =useState(false)
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6}}
    >
      <div className="container mx-auto px-4 py-4">
        <div className='flex items-center justify-between'>
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/recentlg.png"
            alt="logo"
            width={60}
            height={60}
            priority
          />
        </Link>
        {/* DesktopNav */}
        <nav className=' hidden md:flex items-center space-x-8'>
         <Link href='/fleet' className='text-gray-700 hover:text-violet-900 transition-colors'>
          Fleet
         </Link>
         <Link href='/about' className='text-gray-700 hover:text-violet-900 transition-colors'>
          About
         </Link>
         <Link href='/safety' className='text-gray-700 hover:text-violet-900 transition-colors'>
          Safety
         </Link>
         <Link href='/blog' className='text-gray-700 hover:text-violet-900 transition-colors'>
          Blog
         </Link>
         <Link href='/contact' className='text-gray-700 hover:text-violet-900 transition-colors'>
          contact
         </Link>
         <Link href='/book'>
           <Button className='bg-violet-900 hover:bg-violet-700'>Book Now</Button>
         </Link>
        </nav>
        {/* mobileMenuBtn */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
      </div>
      {/* mobileNav */}
      {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4">
              <Link href="/fleet" className="text-gray-700 hover:text-violet-900 transition-colors">
                Fleet
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-violet-900 transition-colors">
                About
              </Link>
              <Link href="/safety" className="text-gray-700 hover:text-violet-900 transition-colors">
                Safety
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-violet-900 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-violet-900 transition-colors">
                Contact
              </Link>
              <Link href="/book">
                <Button className="bg-violet-900 hover:bg-blue-700 w-full">Book Now</Button>
              </Link>
            </div>
          </motion.nav>
      )}
      </div>
    </motion.header>
  );
}
