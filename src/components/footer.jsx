"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer className="bg-gray-500 text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}>
      <motion.div className="container mx-auto px-4 md:px-6 py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm"><Image
                  src="/company_logo.png"
                  alt="Havcon infrastructures"
                  width={600}
                  height={400}
                />
                </span>
              </div>
              <span className="text-black font-bold text-xl"><span className="text-red-500">Havcon</span> Infrastructures</span>
            </div>
            <p className="text-white max-w-sm">
              Creating infrastructure that drives growth. Our innovative construction solutions bring lasting value to every project
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-600 hover:bg-gray-800"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-600 hover:bg-gray-800"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-600 hover:bg-gray-800"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-red-400 hover:text-red-600 hover:bg-gray-800"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Structural Steel & Fabrication
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Piling Foundation Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Core and Shell Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Road and Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Turnkey Interior
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-red-400 transition-colors"
                >
                  Mass Excavation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-red-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-red-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3 text-white">
              <div className="flex items-start">
                <Mail className="lucide lucide-map-pin h-5 w-5 mr-3 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">havconinstrastructures@gmail.com</span>
              </div>
              <div className="flex items-start">
                <Phone className="lucide lucide-map-pin h-5 w-5 mr-3 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">+91 99981 54353</span>
              </div>
              <div className="flex items-start">
                <MapPin className="lucide lucide-map-pin h-5 w-5 mr-3 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">24, Santram Park Society, Nr. Harani Warasia Ring Road, Vadodara - 390019</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} Havcon Infrastructures. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </motion.div>
    </motion.footer>
  );
}
