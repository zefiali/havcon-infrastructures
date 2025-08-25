"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Equipment", href: "/equipments" },
    { name: "Projects", href: "/portfolio" },
    { name: "Unit Convertor", href: "/unitconvertor" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">
              <Image
                src="/company_logo.png"
                alt="Havcon infrastructures"
                width={600}
                height={400}
              />
              </span>
            </div>
            <span className="font-bold text-xl">
              <span className="text-red-800">Havcon</span> Infrastructures
              <p className="text-xs text-red-600 font-semibold">ISO 9001:2015 Certified Company</p>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-red-600 hover:bg-gray-200 rounded-lg p-4 hover:text-red-800 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              > <Link href={`tel:${+919998154353}`}>
                Call Us Now
                </Link>
              </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-red-600 hover:bg-gray-200 rounded-lg p-1 hover:text-red-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              > <Link href={`tel:${+919998154353}`}>
                Call Us Now
                </Link>
              </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
