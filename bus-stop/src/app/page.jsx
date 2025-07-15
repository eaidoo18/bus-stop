 "use client"

 import React, { useRef } from 'react'
 import {motion,useTransform,useScroll,useInView} from 'framer-motion'
 import { Footer } from '@/components/footer'
 import Header from '@/components/header'
 import Hero from '@/components/hero'
 import {Card,CardContent, CardDescription, CardHeader, CardTitle }from '@/components/ui/card'
 import { Badge } from "@/components/ui/badge"
 import { Button } from '@/components/ui/button'
 import {Input} from '@/components/ui/input'
 import {Textarea} from '@/components/ui/textarea'
 import { Star,Phone,Mail,MapPin,Calendar } from 'lucide-react'
 import Link from "next/link"
 import Image from 'next/image';
 


const page = () => {
   const{ scrollYProgress} = useScroll();
   const servicesRef = useRef(null);
   const aboutRef = useRef(null);
   const contactRef = useRef(null)
  
  
   const servicesY = useTransform(scrollYProgress, [0.2, 0.6], ["100px", "-100px"]);
   const aboutY = useTransform(scrollYProgress, [0.2, 0.6], ["100px", "-100px"]);


   const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
   const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
   const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

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

const reviews = [
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
                      src={bus.image }
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

      {/* feature section */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional service with safety and comfort as our top priorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "/assets/shield.png",
                title: "Safety First",
                description: "All our buses undergo regular safety inspections and maintenance",
              },
              {
                icon:  "/assets/users.png",
                title: "Professional Drivers",
                description: "Experienced and licensed drivers with excellent safety records",
              },
              {
                icon:  "/assets/clock.png",
                title: "24/7 Service",
                description: "Round-the-clock availability for all your transportation needs",
              },
              {
                icon:  "/assets/route.png",
                title: "Flexible Routes",
                description: "Customizable routes and schedules to fit your specific requirements",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">

                  <Image
                  alt='image'
                  src={feature.icon}
                  width={30}
                  height={30}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

         {/* About us */}
      <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{ y: aboutY }}
              initial={{ opacity: 0, x: -50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">2 Years of Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2024, we've been providing reliable bus rental services across Accra. Our commitment to
                safety, comfort, and customer satisfaction has made us the preferred choice for schools, corporations,
                and event organizers.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">15+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">20+</div>
                  <div className="text-gray-600">Modern Buses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">99%</div>
                  <div className="text-gray-600">On-Time Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-violet-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                Learn More About Us
              </Button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/assets/aboutimg.jpg" alt="Our team" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* review section */}
       <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{review.content}"</p>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* contact section */}

<section id="contact" ref={contactRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Quote Today</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to book your bus rental? Contact us for a personalized quote
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-blue-400" />
                  <span className="text-lg">(059) 480-2739</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <span className="text-lg">info@busstop.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-blue-400" />
                  <span className="text-lg">Ashongman,Accra</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-6 w-6 text-blue-400" />
                  <span className="text-lg">Available 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isContactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Request a Quote</CardTitle>
                  <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input placeholder="Email Address" type="email" />
                    <Input placeholder="Phone Number" type="tel" />
                    <Input placeholder="Event Date" type="date" />
                    <Input placeholder="Number of Passengers" type="number" />
                    <Textarea placeholder="Additional Details" rows={4} />
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Quote Request</Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
     <Footer/>
    </div>
  )
}

export default page
