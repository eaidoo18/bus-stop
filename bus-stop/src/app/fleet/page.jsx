"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Wifi, Snowflake, Music, Coffee, Shield, Star } from "lucide-react"
import Image from "next/image"

export default function FleetPage() {
  const buses = [
    {
      id: 1,
      name: "Executive Luxury Coach",
      category: "Luxury",
      capacity: "45-55 passengers",
      image: "/assets/coach.png",
      features: [
        "Premium leather seating",
        "WiFi & power outlets",
        "Entertainment system",
        "Climate control",
        "Restroom facilities",
        "Luggage compartments",
      ],
      amenities: [
        { icon: Wifi, name: "Free WiFi" },
        { icon: Snowflake, name: "AC/Heating" },
        { icon: Music, name: "Entertainment" },
        { icon: Coffee, name: "Refreshments" },
      ],
      price: "From  ₵150/hour",
      description: "Perfect for corporate events, long-distance travel, and VIP transportation.",
      specifications: {
        length: "45 feet",
        width: "8.5 feet",
        height: "12.5 feet",
        engine: "Cummins ISX 450HP",
        transmission: "Allison B500R",
      },
    },
    {
      id: 2,
      name: "Standard Charter Bus",
      category: "Standard",
      capacity: "40-50 passengers",
      image: "/assets/Motorcoach.png",
      features: [
        "Comfortable seating",
        "Air conditioning",
        "PA system",
        "Tinted windows",
        "Storage space",
        "Safety equipment",
      ],
      amenities: [
        { icon: Snowflake, name: "AC/Heating" },
        { icon: Music, name: "PA System" },
        { icon: Shield, name: "Safety First" },
      ],
      price: "From  ₵120/hour",
      description: "Ideal for school trips, church groups, and medium-distance travel.",
      specifications: {
        length: "40 feet",
        width: "8.5 feet",
        height: "12 feet",
        engine: "Caterpillar C7 350HP",
        transmission: "Allison B400R",
      },
    },
    {
      id: 3,
      name: "Mini Bus",
      category: "Compact",
      capacity: "15-25 passengers",
      image: "/assets/mvan.png",
      features: [
        "Comfortable seating",
        "Air conditioning",
        "Easy boarding",
        "Compact size",
        "Fuel efficient",
        "City-friendly",
      ],
      amenities: [
        { icon: Snowflake, name: "AC/Heating" },
        { icon: Users, name: "Small Groups" },
      ],
      price: "From  ₵80/hour",
      description: "Perfect for small groups, airport transfers, and city tours.",
      specifications: {
        length: "25 feet",
        width: "8 feet",
        height: "10 feet",
        engine: "Ford V10 6.8L",
        transmission: "Ford 5R110W",
      },
    },
    {
      id: 4,
      name: "Party Bus",
      category: "Entertainment",
      capacity: "20-40 passengers",
      image: "/assets/partybus.jpg",
      features: [
        "LED lighting system",
        "Premium sound system",
        "Bar area",
        "Dance floor",
        "Leather seating",
        "Entertainment center",
      ],
      amenities: [
        { icon: Music, name: "Sound System" },
        { icon: Star, name: "LED Lights" },
        { icon: Coffee, name: "Bar Area" },
      ],
      price: "From ₵250/hour",
      description: "Ultimate party experience for weddings, proms, and celebrations.",
      specifications: {
        length: "35 feet",
        width: "8.5 feet",
        height: "11 feet",
        engine: "Caterpillar C7 300HP",
        transmission: "Allison 3000HS",
      },
    },
    {
      id: 5,
      name: "School Bus",
      category: "Educational",
      capacity: "35-70 passengers",
      image: "/assets/schoolbus.png",
      features: [
        "High-back seats",
        "Safety equipment",
        "Emergency exits",
        "Wheelchair accessible",
        "GPS tracking",
        "Two-way radio",
      ],
      amenities: [
        { icon: Shield, name: "Safety First" },
        { icon: Users, name: "Large Capacity" },
      ],
      price: "From  ₵60/hour",
      description: "Safe and reliable transportation for educational trips and events.",
      specifications: {
        length: "35-40 feet",
        width: "8 feet",
        height: "10.5 feet",
        engine: "Cummins ISB 260HP",
        transmission: "Allison 2500HS",
      },
    },
    {
      id: 6,
      name: "Shuttle Bus",
      category: "Shuttle",
      capacity: "12-20 passengers",
      image: "/assets/shuttle.png",
      features: [
        "Frequent service",
        "Easy access",
        "Comfortable seating",
        "Air conditioning",
        "Luggage space",
        "ADA compliant",
      ],
      amenities: [
        { icon: Snowflake, name: "AC/Heating" },
        { icon: Users, name: "Regular Service" },
      ],
      price: "From  ₵70/hour",
      description: "Convenient shuttle service for hotels, airports, and events.",
      specifications: {
        length: "22 feet",
        width: "7.5 feet",
        height: "9.5 feet",
        engine: "Ford V8 6.2L",
        transmission: "Ford 6R140",
      },
    },
  ]

  const categories = ["All", "Luxury", "Standard", "Compact", "Entertainment", "Educational", "Shuttle"];

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Fleet</h1>
            <p className="text-xl md:text-2xl text-blue-100">Modern, well-maintained buses for every occasion</p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Bus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate shuttle services to luxury coaches, we have the right vehicle for your transportation needs.
              All our buses undergo regular maintenance and safety inspections.
            </p>
          </motion.div>

          

          {/* Bus Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buses.map((bus, index) => (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden rounded-t-lg">
                    <Image src={bus.image || "/placeholder.svg"} alt={bus.name} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sky-600">{bus.category}</Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{bus.name}</CardTitle>
                        <CardDescription className="text-sky-600 font-semibold text-lg">
                          {bus.capacity}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-sky-600">{bus.price}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{bus.description}</p>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {bus.amenities.map((amenity) => (
                        <div key={amenity.name} className="flex items-center gap-1 text-sm text-gray-600">
                          <amenity.icon className="h-4 w-4" />
                          <span>{amenity.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <div className="grid grid-cols-2 gap-1 text-sm text-gray-600">
                        {bus.features.map((feature) => (
                          <div key={feature} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-sky-600 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>Length: {bus.specifications.length}</div>
                        <div>Width: {bus.specifications.width}</div>
                        <div>Height: {bus.specifications.height}</div>
                        <div>Engine: {bus.specifications.engine}</div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1 bg-sky-600 hover:bg-sky-500">Book Now</Button>
                      <Button variant="outline" className="flex-1 bg-transparent">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Maintenance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Safety & Maintenance</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every bus in our fleet undergoes rigorous maintenance schedules and safety inspections. We exceed
                industry standards to ensure your safety and comfort.
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
                  src="/assets/maintenance.jpg"
                  alt="Bus maintenance"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Book Your Bus?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized quote based on your specific needs and travel requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="text-blue-600 border-white bg-white hover:bg-gray-100">
                Get Quote Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
