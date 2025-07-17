"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(059) 480-2739", "(020) 141-8181"],
      description: "Call us 24/7 for immediate assistance.",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@busstop.com", "bookings@busstop.com"],
      description: "We respond within 2 hours.",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Ashongman", "City, Accra"],
      description: "Visit our facility and fleet.",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Emergency Service", "Office: Mon-Fri 8AM-6PM"],
      description: "Always here when you need us.",
    },
  ]

  const offices = [
    {
      name: "Main Office",
      address: "123 Transport Avenue, City, State 12345",
      phone: "info@busstop.com",
      email: "info@busstop.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
    },
    {
      name: "Accra Branch",
      address: "West Legon",
      phone: "(050) 849-9305",
      email: "acc@busrentalpro.com",
      hours: "Mon-Fri: 8AM-5PM",
    },
    {
      name: "Kumasi Branch",
      address: "216 Ofori kuragu avenue",
      phone: "(059) 480-2739",
      email: "kumasi@busstop.com",
      hours: "Mon-Fri: 8AM-5PM",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r  from-sky-700 to-sky-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100">Get in touch for quotes, bookings, or any questions</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-600 font-semibold">
                        {detail}
                      </p>
                    ))}
                    <p className="text-gray-600 text-sm mt-2">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input type="email" placeholder="john@example.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input type="tel" placeholder="(555) 123-4567" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="corporate">Corporate Events</SelectItem>
                            <SelectItem value="wedding">Wedding Transportation</SelectItem>
                            <SelectItem value="school">School Trips</SelectItem>
                            <SelectItem value="airport">Airport Transfer</SelectItem>
                            <SelectItem value="party">Party Bus</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers</label>
                        <Input type="number" placeholder="25" min="1" max="70" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Time</label>
                        <Input type="time" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                      <Input placeholder="123 Main Street, City, State" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                      <Input placeholder="456 Event Avenue, City, State" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Additional Details</label>
                      <Textarea
                        placeholder="Please provide any additional information about your transportation needs..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    Quick Quote Request
                  </CardTitle>
                  <CardDescription>Get an instant estimate for your bus rental needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bus Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select bus type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="luxury">Luxury Coach (45-55 passengers)</SelectItem>
                          <SelectItem value="standard">Standard Charter (40-50 passengers)</SelectItem>
                          <SelectItem value="mini">Mini Bus (15-25 passengers)</SelectItem>
                          <SelectItem value="party">Party Bus (20-40 passengers)</SelectItem>
                          <SelectItem value="school">School Bus (35-70 passengers)</SelectItem>
                          <SelectItem value="shuttle">Shuttle Bus (12-20 passengers)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                        <Input type="date" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Hours" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2">2 hours</SelectItem>
                            <SelectItem value="4">4 hours</SelectItem>
                            <SelectItem value="6">6 hours</SelectItem>
                            <SelectItem value="8">8 hours</SelectItem>
                            <SelectItem value="full">Full day</SelectItem>
                            <SelectItem value="multi">Multiple days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Distance (miles)</label>
                      <Input type="number" placeholder="50" />
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700">Get Instant Quote</Button>
                  </form>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Immediate Assistance?</h3>
                  <p className="text-gray-600 mb-4">Our 24/7 emergency line is always available</p>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Phone className="h-5 w-5 mr-2" />
                    Call Emergency Line
                  </Button>
                  
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our convenient locations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{office.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">{office.email}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <span className="text-gray-600">{office.hours}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-transparent" variant="outline">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
