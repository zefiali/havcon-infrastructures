"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldUser,
  ArrowRight,
  Lightbulb,
  Building2,
  ShieldCheck
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <motion.section className="relative py-10 lg:py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="mx-auto px-4 md:px-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-red-600 to-black opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/banner_3.jpg')] bg-cover bg-center mix-blend-overlay"></div>
            <motion.div className="relative space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-4 text-white">
                <Badge className="bg-red-600 hover:bg-red-800">About Us</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">  
                  We&apos;re Passionate About
                  Crafting Resilient Infrastructure             
                </h1>
                <br/>
                <p className="text-xl font-bold max-w-4xl mx-auto">
                  Havcon Infrastructures, founded in 2022 by visionary Civil Engineer Mr. Saurin Shah, is an ISO 9001:2015 Certified Company committed to excellence in civil engineering. With over a decade of industry experience, the company delivers high-quality, timely, and cost-effective industrial projects, consistently exceeding client expectations with precision and dedication
                </p>
              </div>
            </motion.div>
            {/* <motion.div className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
              <Image
                src="/about-us-new.jpg"
                alt="About Us"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl object-fill"
              />
            </motion.div> */}
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="mx-auto px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Mission and Vision</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Integrated Transformative Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to delivering top-tier civil engineering solutions with integrity and innovation. From infrastructure and commercial projects to sustainable construction, our team ensures quality, precision, and professionalism. We build lasting relationships through trust, collaboration, and results that consistently exceed expectations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section className="py-10 lg:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="mx-auto px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Values</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What Drives Us Forward
            </h2>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {[
              {
                icon: ShieldUser,
                title: "Safety First",
                description:
                  "We prioritize the well-being of our workers and environments through proactive, industry-compliant safety measures.",
              },
              {
                icon: Lightbulb,
                title: "Innovative Solutions",
                description:
                  "We apply smart, forward-thinking engineering to overcome complex challenges with efficiency and creativity.",
              },
              {
                icon: Building2,
                title: "Structural Integrity",
                description:
                  "We build with unwavering strength and precision, ensuring your structures stand the test of time.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Assurance",
                description:
                  "Every project is built to exceed expectations through rigorous standards and constant quality checks.",
              },
            ].map((value, index) => (
              <Card  
                key={index}              
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-black rounded-2xl flex items-center justify-center mx-auto">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="mx-auto px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Team</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of civil engineers, accountants, and site helpers brings extensive experience and unique insights to every project, ensuring technical precision, financial accuracy, and hands-on execution at every stage.
            </p>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {[
              {
                name: "Alex Johnson",
                role: "CEO & Founder",
                image: "/user1.jpg",
                bio: "10+ years in digital strategy and business development",
              },
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: "/user2.avif",
                bio: "Award-winning designer with expertise in UX/UI",
              },
              {
                name: "Mike Rodriguez",
                role: "Lead Developer",
                image: "/user1.jpg",
                bio: "Full-stack developer specializing in modern web technologies",
              },
              {
                name: "Emily Davis",
                role: "Marketing Strategist",
                image: "/user3.jpg",
                bio: "Digital marketing expert with proven ROI track record",
              },
              {
                name: "David Kim",
                role: "Mobile Developer",
                image: "/user1.jpg",
                bio: "iOS and Android specialist with 50+ apps published",
              },
              {
                name: "Lisa Thompson",
                role: "Project Manager",
                image: "/user2.avif",
                bio: "Agile certified PM ensuring projects deliver on time",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-red-500 to-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-8 text-white">
            <motion.div className="text-center space-y-8 text-white"
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Work Together?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Let&apos;s discuss your project and see how our team can help
                bring your vision to life.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              >
                <Link href="/contact" className="flex items-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
