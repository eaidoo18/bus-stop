"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const milestones = [
    { year: "1998", event: "Company Founded", description: "Started with just 5 buses and a vision" },
    { year: "2005", event: "Fleet Expansion", description: "Grew to 25 buses serving the tri-state area" },
    { year: "2012", event: "Safety Certification", description: "Achieved highest safety ratings and certifications" },
    { year: "2018", event: "Technology Integration", description: "Launched online booking and GPS tracking" },
    { year: "2024", event: "50+ Bus Fleet", description: "Now serving customers nationwide with modern fleet" },
  ]

  const team = [
    {
      name: "James Afful",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Allotey",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
     
    },
    {
      name: "Andrew Boateng",
      role: "Safety Director",
      image: "/placeholder.svg?height=300&width=300",
     
    },
    {
      name: "Enoch Aidoo",
      role: "Web Developer",
      image: "/placeholder.svg?height=300&width=300",
   
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-sky-700 to-sky-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About  Us </h1>
            <p className="text-xl md:text-2xl text-blue-100">2+ years of excellence in transportation services</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2023 , Bus Stop began as a small family business with just five buses
                and a commitment to safe, reliable transportation. What started as a local service has grown into one of
                the region's most trusted bus rental companies.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission has always been simple: provide safe, comfortable, and dependable transportation while
                delivering exceptional customer service. Today, we operate a modern fleet of over 50 buses and serve
                customers across multiple states.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're proud to be a family-owned business that treats every customer like family, ensuring your
                transportation needs are met with professionalism and care.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/assets/aboutimage.jpeg"
                  alt="Company history"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The dedicated professionals behind our success</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-blue-600 border-white bg-white hover:bg-gray-100">
                Get a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
