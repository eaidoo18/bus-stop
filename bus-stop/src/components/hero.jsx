"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from './ui/button'
import Link from "next/link"
import Image from 'next/image';


function Hero() {
      const{ scrollYProgress} = useScroll();
      const heroRef = useRef(null);
 
      const heroY = useTransform(scrollYProgress, [0,1],['0%','50%']);
      const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    
    <div>


    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image src="/assets/cbg.jpg" alt="Bus fleet" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
          style={{ opacity: heroOpacity }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium Bus Rental Services.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Safe, comfortable, and reliable transportation for all your needs
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/book">
              <Button size="lg" className="bg-violet-900 hover:bg-violet-700 text-lg px-8 py-3">
                Book Now
              </Button>
            </Link>
            <Link href="/fleet">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-3 bg-transparent"
              >
                View Fleet
              </Button>
            </Link>
          </motion.div>

          
        </motion.div>
      </section>
      
    </div>
  )
}

export default Hero;
