"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Shield,
  Wifi,
  Coffee,
  Music,
  Star,
} from "lucide-react"

export default function BookNowPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    serviceType: "",
    busType: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: "",
    duration: "",
    additionalStops: "",
    specialRequests: "",
    customerInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
    },
    additionalServices: [],
    paymentMethod: "",
    cardInfo: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    },
  })

  const totalSteps = 5

  const busTypes = [
    {
      id: "luxury-coach",
      name: "Luxury Coach",
      capacity: "45-55 passengers",
      basePrice: 180,
      features: ["Premium leather seating", "WiFi & power outlets", "Entertainment system", "Restroom facilities"],
      image: "/assets/coach.png",
    },
    {
      id: "standard-charter",
      name: "Standard Charter Bus",
      capacity: "40-50 passengers",
      basePrice: 120,
      features: ["Comfortable seating", "Air conditioning", "PA system", "Storage space"],
      image: "/assets/Motorcoach.png",
    },
    {
      id: "mini-bus",
      name: "Mini Bus",
      capacity: "15-25 passengers",
      basePrice: 80,
      features: ["Compact size", "Easy boarding", "Air conditioning", "City-friendly"],
      image: "/assets/mvan.png",
    },
    {
      id: "party-bus",
      name: "Party Bus",
      capacity: "20-40 passengers",
      basePrice: 250,
      features: ["LED lighting system", "Premium sound system", "Bar area", "Dance floor"],
      image: "/assets/partybus.jpg",
    },
    {
      id: "school-bus",
      name: "School Bus",
      capacity: "35-70 passengers",
      basePrice: 60,
      features: ["High-back seats", "Safety equipment", "Large capacity", "Cost effective"],
      image: "/assets/schoolbus.png",
    },
    {
      id: "shuttle-bus",
      name: "Shuttle Bus",
      capacity: "12-20 passengers",
      basePrice: 70,
      features: ["Frequent service", "Easy access", "Luggage space", "ADA compliant"],
      image: "/assets/shuttle.png",
    },
  ]

  const steps = [
  { id: 1, label: "Service " },
  { id: 2, label: "Date & Time" },
  { id: 3, label: "Location" },
  { id: 4, label: "Contact" },
  { id: 5, label: "Confirmation" },
];
  const serviceTypes = [
    { id: "corporate", name: "Corporate Events", description: "Business meetings, conferences, team building" },
    { id: "wedding", name: "Wedding Transportation", description: "Bridal parties, guest transportation" },
    { id: "school", name: "School Trips", description: "Field trips, educational tours, sports events" },
    { id: "airport", name: "Airport Transfer", description: "Group airport transportation" },
    { id: "party", name: "Party & Events", description: "Celebrations, nights out, special occasions" },
    { id: "tour", name: "Tours & Sightseeing", description: "City tours, tourist groups" },
    { id: "other", name: "Other", description: "Custom transportation needs" },
  ]

  const additionalServices = [
    { id: "wifi", name: "Premium WiFi", price: 25, icon: Wifi },
    { id: "refreshments", name: "Refreshments Package", price: 50, icon: Coffee },
    { id: "entertainment", name: "Entertainment System", price: 35, icon: Music },
    { id: "photographer", name: "Professional Photography", price: 50, icon: Star },
    { id: "security", name: "Security Personnel", price: 100, icon: Shield },
  ]

  const calculateTotal = () => {
    const selectedBus = busTypes.find((bus) => bus.id === bookingData.busType)
    if (!selectedBus) return 0

    const hours = Number.parseInt(bookingData.duration) || 4
    const baseTotal = selectedBus.basePrice * hours

    const servicesTotal = bookingData.additionalServices.reduce((total, serviceId) => {
      const service = additionalServices.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)

    return baseTotal + servicesTotal
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleServiceToggle = (serviceId) => {
    setBookingData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(serviceId)
        ? prev.additionalServices.filter((id) => id !== serviceId)
        : [...prev.additionalServices, serviceId],
    }))
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Service</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        bookingData.serviceType === service.id ? "ring-2 ring-green-600 bg-blue-50" : ""
                      }`}
                      onClick={() => setBookingData((prev) => ({ ...prev, serviceType: service.id }))}
                    >
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Bus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {busTypes.map((bus) => (
                    <Card
                      key={bus.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                        bookingData.busType === bus.id ? "ring-2 ring-blue-600 bg-blue-50" : ""
                      }`}
                      onClick={() => setBookingData((prev) => ({ ...prev, busType: bus.id }))}
                    >
                      <div className="relative h-40 overflow-hidden rounded-t-lg">
                        <img
                          src={bus.image || "/placeholder.svg"}
                          alt={bus.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Badge className="bg-blue-600">₵{bus.basePrice}/hr</Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{bus.name}</h4>
                        <p className="text-blue-600 font-semibold mb-3">{bus.capacity}</p>
                        <div className="space-y-1">
                          {bus.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-600 mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Date & Time Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      Pickup Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date *</label>
                      <Input
                        type="date"
                        value={bookingData.pickupDate}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, pickupDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Time *</label>
                      <Input
                        type="time"
                        value={bookingData.pickupTime}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, pickupTime: e.target.value }))}
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      Return Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                      <Input
                        type="date"
                        value={bookingData.returnDate}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, returnDate: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Return Time</label>
                      <Input
                        type="time"
                        value={bookingData.returnTime}
                        onChange={(e) => setBookingData((prev) => ({ ...prev, returnTime: e.target.value }))}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (hours) *</label>
                  <Select
                    value={bookingData.duration}
                    onValueChange={(value) => setBookingData((prev) => ({ ...prev, duration: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2 hours</SelectItem>
                      <SelectItem value="4">4 hours</SelectItem>
                      <SelectItem value="6">6 hours</SelectItem>
                      <SelectItem value="8">8 hours</SelectItem>
                      <SelectItem value="10">10 hours</SelectItem>
                      <SelectItem value="12">12 hours</SelectItem>
                      <SelectItem value="custom">Custom duration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Passengers *</label>
                  <Input
                    type="number"
                    placeholder="Enter number of passengers"
                    value={bookingData.passengers}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, passengers: e.target.value }))}
                    min="1"
                    max="70"
                    required
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location & Trip Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Pickup Location *
                  </label>
                  <Input
                    placeholder="Enter pickup address"
                    value={bookingData.pickupLocation}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, pickupLocation: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline h-4 w-4 mr-1" />
                    Drop-off Location *
                  </label>
                  <Input
                    placeholder="Enter drop-off address"
                    value={bookingData.dropoffLocation}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, dropoffLocation: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Stops</label>
                  <Textarea
                    placeholder="List any additional stops or locations (optional)"
                    value={bookingData.additionalStops}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, additionalStops: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <Textarea
                    placeholder="Any special requirements, accessibility needs, or additional information"
                    value={bookingData.specialRequests}
                    onChange={(e) => setBookingData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                    rows={4}
                  />
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Additional Services</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={bookingData.additionalServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <label htmlFor={service.id} className="flex items-center space-x-2 text-sm cursor-pointer">
                          <service.icon className="h-4 w-4 text-blue-600" />
                          <span>{service.name}</span>
                          <Badge variant="outline" className="text-xs">
                            +₵{service.price}
                          </Badge>
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <Input
                    placeholder="John"
                    value={bookingData.customerInfo.firstName}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        customerInfo: { ...prev.customerInfo, firstName: e.target.value },
                      }))
                    }
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <Input
                    placeholder="Doe"
                    value={bookingData.customerInfo.lastName}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        customerInfo: { ...prev.customerInfo, lastName: e.target.value },
                      }))
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={bookingData.customerInfo.email}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: { ...prev.customerInfo, email: e.target.value },
                    }))
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={bookingData.customerInfo.phone}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: { ...prev.customerInfo, phone: e.target.value },
                    }))
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization (Optional)</label>
                <Input
                  placeholder="Company name"
                  value={bookingData.customerInfo.company}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: { ...prev.customerInfo, company: e.target.value },
                    }))
                  }
                />
              </div>

              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">
                        {serviceTypes.find((s) => s.id === bookingData.serviceType)?.name || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bus Type:</span>
                      <span className="font-medium">
                        {busTypes.find((b) => b.id === bookingData.busType)?.name || "Not selected"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{bookingData.pickupDate || "Not selected"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">{bookingData.duration} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Passengers:</span>
                      <span className="font-medium">{bookingData.passengers}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total:</span>
                      <span className="text-blue-600">₵{calculateTotal()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        )

      case 5:
        return (
          <motion.div
            key="step5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment & Confirmation</h3>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-green-900 mb-2">Booking Request Submitted!</h4>
                    <p className="text-green-700 mb-4">
                      Thank you for choosing Bus Stop. We've received your booking request and will contact you
                      within 2 hours to confirm availability and finalize payment details.
                    </p>
                    <div className="bg-white rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Booking Reference: #BR-2025-001</h5>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>
                          <strong>Service:</strong> {serviceTypes.find((s) => s.id === bookingData.serviceType)?.name}
                        </p>
                        <p>
                          <strong>Bus:</strong> {busTypes.find((b) => b.id === bookingData.busType)?.name}
                        </p>
                        <p>
                          <strong>Date:</strong> {bookingData.pickupDate} at {bookingData.pickupTime}
                        </p>
                        <p>
                          <strong>Estimated Total:</strong> ₵{calculateTotal()}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-green-600">
                      A confirmation email has been sent to {bookingData.customerInfo.email}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <span className="text-violet-600 font-bold text-sm">1</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Confirmation Call</h5>
                        <p className="text-sm text-gray-600">
                          We'll call you within 2 hours to confirm availability and details.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <span className="text-violet-600 font-bold text-sm">2</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Payment Processing</h5>
                        <p className="text-sm text-gray-600">
                          We'll process your deposit and send you a detailed invoice.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-100 rounded-full p-2">
                        <span className="text-violet-600 font-bold text-sm">3</span>
                      </div>
                      <div>
                        <h5 className="font-semibold">Service Day</h5>
                        <p className="text-sm text-gray-600">Your professional driver will arrive 15 minutes early.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center space-x-4">
                <Button variant="outline">Print Confirmation</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Book Another Trip</Button>
              </div>
            </div>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Bus Rental</h1>
            <p className="text-xl text-gray-600">Simple, fast, and secure booking process</p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">         
          <div className="relative flex justify-between items-center mb-6">
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 z-0" />
            <div
              className="absolute top-5 left-0 h-1 bg-violet-600 z-10 transition-all duration-500"
              style={{
                width: `${(currentStep - 1) / (steps.length - 1) * 100}%`,
              }}
            />

            {/* Step Circles */}
            {steps.map((step) => {
              const isCompleted = step.id < currentStep;
              const isActive = step.id === currentStep;

              return (
                <div key={step.id} className="relative z-20 flex flex-col items-center w-full">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                      isCompleted
                        ? "bg-violet-600 text-white border-violet-600"
                        : isActive
                        ? "bg-white text-violet-600 border-violet-600"
                        : "bg-white text-gray-400 border-gray-300"
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-5 h-5" /> : step.id}
                  </div>
                  <span className="mt-2 text-xs text-center w-20 text-gray-600">{step.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>


      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center gap-2 bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                      disabled={
                        (currentStep === 1 && (!bookingData.serviceType || !bookingData.busType)) ||
                        (currentStep === 2 &&
                          (!bookingData.pickupDate ||
                            !bookingData.pickupTime ||
                            !bookingData.duration ||
                            !bookingData.passengers)) ||
                        (currentStep === 3 && (!bookingData.pickupLocation || !bookingData.dropoffLocation)) ||
                        (currentStep === 4 &&
                          (!bookingData.customerInfo.firstName ||
                            !bookingData.customerInfo.lastName ||
                            !bookingData.customerInfo.email ||
                            !bookingData.customerInfo.phone))
                      }
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Complete Booking
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need Help with Your Booking?</h3>
            <p className="text-blue-100 mb-6">
              Our booking specialists are available 24/7 to assist you with your reservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="text-blue-600 border-white bg-white hover:bg-gray-100">
                Call (059) 480-2739
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Live Chat Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
