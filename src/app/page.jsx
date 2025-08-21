"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Map,
  Library,
  ShieldEllipsis,
  CableCar,
  Sofa,
  BrickWall,
} from "lucide-react";
import Image from "next/image";
import { featuredProjects } from "@/data/featuredProjects";
import ProjectDialog from "@/components/projectsDialog";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    rating: 0,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = {
        experience: 15,
        projects: 25,
        clients: 98,
        rating: 2,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounts({
          experience: Math.floor(targets.experience * progress),
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          rating: Number((targets.rating * progress).toFixed(1)),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const clientLogos = [
    // Frontend
    {
      name: "",
      icon: <Image
        src="/client_logos/Aiedan_logo.png"
        alt="Aiedan Industries"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "",
      icon: <Image
        src="/client_logos/graphene_logo.png"
        alt="Graphene Conposites"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "JavaScript",
      icon: <Image
        src="/client_logos/KP_Human.png"
        alt="KP Human Development"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "HTML/CSS",
      icon: <Image
        src="/client_logos/KP_Energy.jpg"
        alt="KP Group"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Tailwind CSS",
      icon: <Image
        src="/client_logos/NandoliaFood.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-cyan-100 text-cyan-800",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home_page_video.mov"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"></div>
        <div className="relative mx-auto px-4 md:px-20">
          <div className="flex gap-16 items-center justify-between max-lg:flex-col">
            <motion.div className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="max-w-3xl">
                <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  <span className="text-white bg-clip-text text-transparent">
                    Engineered to Perform, Constructed to Last
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-bold mb-8 max-w-3xl mx-auto leading-relaxed text-white">
                  Transforming infrastructure with innovative engineering, smart design, and strategic planning
                </p>
              </div>
              <motion.div
                className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 hover:text-white px-8">
                    <Link href="/contact">Start Your Project</Link>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white">
                  <Link href="/portfolio">
                  View Our Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section ref={sectionRef} className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Impact</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Numbers That Matter
            </h2>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {[
              {
                number: counts.projects + ' +',
                label: "Projects Successfully Completed Across India",
                description:
                  "Including RCC buildings, industrial sheds, roads, drainage systems, and turnkey developments.",
              },
              {
                number: counts.clients + ' %',
                label: "On-Time Project Delivery Rate",
                description:
                  "Demonstrating our commitment to deadlines, quality standards, and client satisfaction.",
              },
              {
                number: counts.experience,
                label: "Years of Civil Engineering Excellence",
                description:
                  "Providing comprehensive construction solutions across industrial, institutional, and residential sectors since 2012.",
              },
              {
                number: counts.rating + ' Lakh Sq.M',
                label: "Build Structures",
                description: "Covering industrial buildings, commercial complexes, institutional facilities, and infrastructure works.",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-red-600">
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold">{stat.label}</h3>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section className="py-10 lg:py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">
              Our Services
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Infrastructure Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Engineering excellence tailored to complex industrial construction challenges
            </p>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
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
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-red-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Work</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recent work and see how we&apos;ve helped
              businesses achieve their digital goals.
            </p>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl text-red-500 hover:text-red-800 transition-all duration-300 border-0 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Client Grid */}
      <motion.section className="py-10 lg:py-10 bg-gradient-to-br from-gray-50 to-slate-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Clients</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our landmark clients are the foundation of our success — industry leaders who value precision, quality, and timely delivery.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {clientLogos.slice(0, 12).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <div
                key={index}
                className="flex flex-col items-center p-8 h-40 bg-white border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative w-full h-full flex items-center justify-center">
                  {skill.icon}
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section className="py-10 lg:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <Badge className="bg-red-600 hover:bg-red-800 text-white">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Hear from our satisfied clients about their experience working with
              us
            </p>
          </motion.div>
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart",
                content:
                  "The team delivered an exceptional website that exceeded our expectations. Our conversion rate increased by 150% within the first month.",
                rating: 5,
                avatar: "./ProjectImgs/team_photo/dummy_avatar.jpg",
              },
              {
                name: "Michael Chen",
                role: "Founder, GrowthCo",
                content:
                  "Professional, creative, and results-driven. They transformed our digital presence and helped us reach new heights.",
                rating: 5,
                avatar: "./ProjectImgs/team_photo/dummy_avatar.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, InnovateLab",
                content:
                  "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                rating: 5,
                avatar: "./ProjectImgs/team_photo/dummy_avatar.jpg",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center space-x-3">
                      <figure className="w-12 h-12">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full w-full h-full object-cover"
                        />
                      </figure>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
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
          <motion.div className="text-center space-y-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss your project and create something amazing
              together. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 hover:text-white"
              > <Link href="/contact">
                Get Free Consultation
                </Link>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              > <Link href={`tel:${+919998154353}`}>
                Call Us Now
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <ProjectDialog selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
    </div>
  );
}
