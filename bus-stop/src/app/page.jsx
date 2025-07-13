 "use client"

 import React, { useRef } from 'react'
 import {motion,useTransform,useScroll,useInView} from 'framer-motion'
 import { Footer } from '@/components/footer'
 import Header from '@/components/header'
 import Hero from '@/components/hero'
 import {Card,CardContent, CardDescription, CardHeader, CardTitle }from '@/components/ui/card'
 import { Badge } from "@/components/ui/badge"
 import { Button } from '@/components/ui/button'
 import Link from "next/link"
 import Image from 'next/image';
 


const page = () => {
   const{ scrollYProgress} = useScroll();
  const servicesRef = useRef(null);
  
  const servicesY = useTransform(scrollYProgress, [0.2, 0.6], ["100px", "-100px"]);

   const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });


  const busTypes = [
    {
      name: "Luxury Coach",
      capacity: "45-55 passengers",
      features: ["WiFi", "AC", "Reclining Seats", "Entertainment System"],
      image: "/assets/coach.png",
      price: "From ₵150/hour",
    },
    {
      name: "Mini Bus",
      capacity: "15-25 passengers",
      features: ["AC", "Comfortable Seating", "Storage Space"],
      image: "/assets/mvan.png",
      price: "From ₵80/hour",
    },
    {
      name: "School Bus",
      capacity: "35-70 passengers",
      features: ["Safety First", "Large Capacity", "Cost Effective"],
      image: "/assets/schoolbus.png",
      price: "From ₵60/hour",
    },
    {
      name: "Airport Shuttle",
      capacity: "12-15 passengers",
      features: ["AC", "Comfortable Seating", "Storage Space"],
      image: "/assets/shuttle.png",
      price: "From ₵120/hour",
    },
  ]

const testimonials = [
    {
      name: "Paul Boateng",
      role: "Event Coordinator",
      content:
        "Excellent service! The bus was clean, comfortable, and the driver was professional. Highly recommend for corporate events.",
      rating: 5,
    },
    {
      name: "Susan Appiah",
      role: "Wedding Planner",
      content:
        "Perfect for our wedding transportation needs. The luxury coach made our guests feel special. Will definitely use again!",
      rating: 5,
    },
    {
      name: "Idris Adams",
      role: "School Administrator",
      content:
        "Reliable and safe transportation for our school trips. The drivers are experienced and the buses are well-maintained.",
      rating: 5,
    },
  ]  

  return (
    <div className='min-h-screen bg-white'>
      <Header/>
      <Hero/>
       {/* services */}
      <section id="services" ref={servicesRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            style={{ y: servicesY }}
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse fleet of well-maintained buses for any occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {busTypes.map((bus, index) => (
              <motion.div
                key={bus.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={bus.image || "/placeholder.svg"}
                      alt={bus.name}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{bus.name}</CardTitle>
                    <CardDescription className="text-sky-600 font-semibold">{bus.capacity}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {bus.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-lg font-bold text-sky-600">{bus.price}</div>
                      <Button className="w-full bg-violet-900 hover:bg-violet-700">
                        <Link href="/book">Book Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  )
}

export default page
