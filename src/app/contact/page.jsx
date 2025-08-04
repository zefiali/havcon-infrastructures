"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className=" px-4 md:px-20">
          <motion.div className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Get In Touch</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s
              <span className="bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
                {" "}
                Start Building Something{" "}
              </span>
              Amazing
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to elevate your project? Connect with our civil engineering experts 
              to turn your vision into a lasting, high-performance reality
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form & Info */}
      <motion.section className="py-10 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
            {/* Contact Form */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Send us a message</h2>
                    <p className="text-gray-600">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium"
                        >
                          First Name
                        </label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium"
                        >
                          Last Name
                        </label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone (Optional)
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select a service</option>
                        <option>Structural Steel & Fabrication</option>
                        <option>Piling Foundation Construction</option>
                        <option>Core and Shell Construction</option>
                        <option>Road and Infrastructure</option>
                        <option>Turnkey Interior</option>
                        <option>Mass Excavation</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-sm font-medium">
                        Project Budget
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Select budget range (in Lakhs)</option>
                        <option>₹2,00,000 - ₹10,00,000</option>
                        <option>₹10,00,000 - ₹25,00,000</option>
                        <option>₹25,00,000 - ₹50,00,000</option>
                        <option>₹50,00,000 - ₹1,00,00,000</option>
                        <option>₹1,00,00,000 +</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full border-white bg-red-800 text-white hover:bg-red-600 hover:text-white py-5">
                      Send Message
                      <Send className=" h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <p className="text-gray-600">
                  We&apos;re here to help you succeed. Reach out to us through
                  any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-gray-600">havconinstrastructures@gmail.com</p>
                        <p className="text-sm text-gray-500">
                          We&apos;ll respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-gray-600">+91 99981 54353</p>
                        <p className="text-sm text-gray-500">
                          Mon-Sat, 9AM-7PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Visit Us</h3>
                        <p className="text-gray-600">
                          24, Santram Park Society,
                          <br />
                          Nr. Harani Warasia Ring Road,
                          <br/>
                          Vadodara - 390019
                        </p>
                        <p className="text-sm text-gray-500">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Live Chat</h3>
                        <p className="text-gray-600">
                          Available on our website
                        </p>
                        <p className="text-sm text-gray-500">
                          Mon-Sat, 9AM-7PM IST
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 bg-gradient-to-br from-red-500 to-black text-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <h3 className="font-semibold">Free Consultation</h3>
                    </div>
                    <p className="text-blue-100">
                      Schedule a free 30-minute consultation to discuss your
                      project and get expert advice.
                    </p>
                    <Button className="border-white bg-red-600 text-white hover:bg-red-400 hover:text-white">
                      Book Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
