"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  CheckCircle,
  CableCar,
  Library,
  ShieldEllipsis,
  Map,
  Sofa,
  BrickWall,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
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
              <div className="text-white space-y-4">
                <Badge className="bg-red-600 hover:bg-red-800">Our Services</Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"> 
                  Our Infrastructure Expertise
                  for Your Business
                </h1>
                <p className="text-xl font-bold max-w-4xl mx-auto">
                  {/* Engineering excellence tailored to complex industrial construction challenges */}
                  We deliver engineering excellence by providing innovative and tailor-made civil engineering solutions that address the most demanding challenges in industrial construction. Our approach combines advanced technologies, meticulous planning, and industry expertise to ensure each project is executed with precision, efficiency, and long-term reliability
                </p>
              </div>
            </motion.div>
            {/* <motion.div className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>             
              <Image
                src="/culture4.jpg"
                alt="Services"
                width={600}
                height={400}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div> */}
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section className="py-10 lg:py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="grid gap-12 lg:gap-16">
            {[
              {
                icon: CableCar,
                title: "Structural Steel & Fabrication",
                description:
                  "Structural steel fabrication involves transforming raw steel into precision components like beams and columns through cutting, shaping, and assembly. The process follows industry standards (AISC, IS 800, Eurocode) and includes quality checks to ensure durable, load-bearing structures.",
                features: [
                  "Shop drawings and engineering support",
                  "Fabrication of beams, columns, trusses",
                  "On-site erection and installation",
                  "Surface treatment and specialised painting",
                ],
                image: "/service1.jpg",
                technologies: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                ],
              },
              {
                icon: Library,
                title: "Piling Foundation Construction",
                description:
                  "Piling foundation construction is a deep foundation method that uses long, slender columns—usually made of steel, concrete, or wood—driven deep into the ground to support structures. It transfers structural loads from weak surface soils to stronger, stable layers of soil or rock found deeper below.",
                features: [
                  "Specialized piling for complex ground conditions.",
                  "Advanced machinery for precise pile installation.",
                  "Soil stabilization and anchoring solutions.",
                  "Focus on precision and environmental safety.",
                ],
                image: "/service2.webp",
                technologies: [
                  "React Native",
                  "Flutter",
                  "Swift",
                  "Kotlin",
                  "Firebase",
                ],
              },
              {
                icon: ShieldEllipsis,
                title: "Core and Shell Construction",
                description:
                  "Core and shell construction is the initial phase of a building project, involving the structural framework—foundation, slabs, beams, exterior walls, and roof. It forms the outer shell while leaving interiors unfinished for tenant-specific customization. Ideal for commercial and industrial projects, it combines flexibility with strong structural integrity.",
                features: [
                  "Specialized in core and shell civil works",
                  "Deliver strong, sustainable structural frameworks",
                  "Ideal for high-rises, commercial, and industrial units"
                ],
                image: "/service3.jpg",
                technologies: [
                  "Figma",
                  "Adobe XD",
                  "Sketch",
                  "InVision",
                  "Principle",
                ],
              },
              {
                icon: Map,
                title: "Road and Infrastructure",
                description:
                  "Road Infrastructure Services encompass the end-to-end development and maintenance of road networks vital to transportation, logistics, and regional connectivity. These services span the full project lifecycle — from initial planning and design to construction, upgrades, and ongoing maintenance.",
                features: [
                  "PQC/RCC road construction and repair", 
                  "Pavement, walkway, and hardscape development", 
                  "Drainage and stormwater management systems",
                  "Earthworks and precise site grading",
                ],
                image: "/service4.webp",
                technologies: [
                  "Google Ads",
                  "Facebook Ads",
                  "Google Analytics",
                  "SEMrush",
                  "Mailchimp",
                ],
              },
              {
                icon: Sofa,
                title: "Turnkey Interior",
                description:
                  "Turnkey interior solutions offer an end-to-end service where a single contractor manages every aspect of the interior design project — from initial planning and design to execution and furnishing. This streamlined approach allows clients to simply hand over the responsibility and receive a fully completed, move-in-ready space.",
                features: [
                  "MEP, finishes, and furnishings handled",
                  "Tailored for offices, retail, hospitality",
                  "Space planning and civil works included",
                ],
                image: "/service5.jpg",
                technologies: [
                  "Shopify",
                  "WooCommerce",
                  "Stripe",
                  "PayPal",
                  "Magento",
                ],
              },
              {
                icon: BrickWall,
                title: "Mass Excavation",
                description:
                  "Excavation involves the removal of soil, rock, or other materials from a site to prepare it for foundations or underground services. This process continues until the required depth is achieved—typically where the soil offers sufficient Safe Bearing Capacity (SBC) to support structural loads.",
                features: [
                  "Rock breaking and trenching",
                  "Bulk earthworks and mass excavation",
                  "Site preparation and grading",
                  "Soil stabilization and compaction",
                ],
                image: "/service6.webp",
                technologies: [
                  "Google Analytics",
                  "Mixpanel",
                  "Hotjar",
                  "Tableau",
                  "Power BI",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-xl text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="lucide lucide-map-pin h-5 w-5 mr-3 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-3xl opacity-20" />
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="relative rounded-3xl shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section className="py-20 lg:py-20 bg-gradient-to-br from-gray-50 to-slate-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Process</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Havcon Infrastructures, our construction process is designed to ensure precision, transparency, and excellence at every stage. From initial planning to final handover, we follow a structured and collaborative approach to deliver on time, on budget, and to the highest standards.
            </p>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {[
              {
                step: "01",
                title: "Consult & Plan",
                description:
                  "We understand your requirements and set a clear project roadmap.",
              },
              {
                step: "02",
                title: "Site & Feasibility",
                description:
                  "Analyze site conditions to ensure technical and legal readiness.",
              },
              {
                step: "03",
                title: "Design & Approval",
                description:
                  "Develop functional, sustainable designs with necessary approvals.",
              },
              {
                step: "04",
                title: "Procurement",
                description:
                  "Source materials and allocate skilled resources efficiently.",
              },
              {
                step: "05",
                title: "Execute & Monitor",
                description:
                  "Deliver quality construction with constant supervision and safety checks.",
              },
              {
                step: "06",
                title: "Inspect & Handover",
                description:
                  "Final checks, client walkthrough, and on-time project delivery.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-red-600">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-20 lg:py-20 bg-gradient-to-br from-red-500 to-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center space-y-8 text-white"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss your project requirements and create a custom
              solution that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 hover:text-white"
              >
                <Link href="/contact" className="flex items-center">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
