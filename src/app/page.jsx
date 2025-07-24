"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Calendar,
  Users,
  User,
  Map,
  Library,
  ShieldEllipsis,
  CableCar,
  Sofa,
  BrickWall,
  Github,
} from "lucide-react";
import Image from "next/image";

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
        rating: 150,
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

  const featuredProjects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "/project1.webp",
      description: "Modern e-commerce solution with advanced features",
      fullDescription:
        "A comprehensive e-commerce platform built for a growing retail business. The platform features a modern, responsive design with advanced product filtering, real-time inventory management, and seamless checkout experience. We implemented a custom CMS for easy product management and integrated multiple payment gateways for global reach.",
      duration: "4 months",
      teamSize: 5,
      clientName: "RetailMax Inc.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
      ],
      results: [
        "300% increase in online sales",
        "50% reduction in cart abandonment",
        "99.9% uptime achieved",
        "Mobile conversion rate improved by 180%",
      ],
      challenges: [
        "Complex inventory management across multiple warehouses",
        "Integration with legacy ERP system",
        "High-performance requirements for product catalog",
      ],
      solutions: [
        "Implemented real-time inventory sync with Redis caching",
        "Built custom API middleware for ERP integration",
        "Optimized database queries and implemented CDN for images",
      ],
      testimonial: {
        content:
          "The new platform exceeded our expectations. Sales have tripled and our customers love the seamless shopping experience.",
        author: "Sarah Mitchell",
        role: "CEO, RetailMax Inc.",
      },
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      image: "/project2.webp",
      description: "Secure and intuitive banking application",
      fullDescription:
        "A cutting-edge mobile banking application designed with security and user experience at its core. The app features biometric authentication, real-time transaction notifications, budget tracking, and seamless money transfers. Built with React Native for cross-platform compatibility and integrated with banking APIs for real-time data.",
      duration: "6 months",
      teamSize: 7,
      clientName: "SecureBank",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "AWS",
        "Plaid API",
        "Firebase",
      ],
      results: [
        "1M+ downloads in first 6 months",
        "4.8/5 app store rating",
        "60% increase in digital transactions",
        "40% reduction in customer service calls",
      ],
      challenges: [
        "Strict security and compliance requirements",
        "Complex integration with core banking systems",
        "Cross-platform performance optimization",
      ],
      solutions: [
        "Implemented end-to-end encryption and biometric security",
        "Built secure API gateway with rate limiting and monitoring",
        "Optimized app performance with native modules where needed",
      ],
      testimonial: {
        content:
          "Our customers are thrilled with the new app. It's intuitive, secure, and has significantly improved our digital banking experience.",
        author: "Michael Chen",
        role: "CTO, SecureBank",
      },
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      image: "/project3.webp",
      description: "Clean and functional dashboard interface",
      fullDescription:
        "A comprehensive SaaS dashboard redesign focused on improving user experience and data visualization. The project involved extensive user research, wireframing, and prototyping to create an intuitive interface that helps users make data-driven decisions quickly. Features include customizable widgets, advanced filtering, and real-time analytics.",
      duration: "3 months",
      teamSize: 4,
      clientName: "DataFlow Solutions",
      technologies: [
        "Figma",
        "React",
        "D3.js",
        "Chart.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
      results: [
        "45% increase in user engagement",
        "30% reduction in support tickets",
        "25% improvement in task completion rate",
        "90% positive user feedback",
      ],
      challenges: [
        "Complex data visualization requirements",
        "Multiple user roles with different needs",
        "Legacy system integration constraints",
      ],
      solutions: [
        "Created modular component system for flexible layouts",
        "Implemented role-based UI customization",
        "Designed progressive disclosure patterns for complex features",
      ],
      testimonial: {
        content:
          "The new dashboard has transformed how our users interact with their data. It's beautiful, functional, and incredibly user-friendly.",
        author: "Lisa Rodriguez",
        role: "Product Manager, DataFlow Solutions",
      },
    },
    {
      title: "Restaurant Website",
      category: "Web Development",
      image: "/project4.webp",
      description: "Appetizing website with online ordering system",
      fullDescription:
        "A mouth-watering restaurant website with integrated online ordering system. The site features an interactive menu, table reservation system, and seamless food delivery integration. We focused on creating an appetizing visual experience while ensuring fast loading times and mobile optimization for on-the-go customers.",
      duration: "2 months",
      teamSize: 3,
      clientName: "Bella Vista Restaurant",
      technologies: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "MySQL",
        "Square API",
        "Google Maps API",
      ],
      results: [
        "200% increase in online orders",
        "150% boost in table reservations",
        "35% increase in average order value",
        "95% customer satisfaction rate",
      ],
      challenges: [
        "Integration with existing POS system",
        "Real-time menu updates and inventory",
        "Peak hour performance optimization",
      ],
      solutions: [
        "Built custom POS integration with webhook synchronization",
        "Implemented real-time inventory management system",
        "Optimized server configuration and implemented caching",
      ],
      testimonial: {
        content:
          "Our online presence has never been stronger. The website perfectly captures our restaurant's atmosphere and the ordering system works flawlessly.",
        author: "Antonio Rossi",
        role: "Owner, Bella Vista Restaurant",
      },
    },
    {
      title: "Fitness App",
      category: "Mobile App",
      image: "/project5.webp",
      description: "Comprehensive fitness tracking application",
      fullDescription:
        "A comprehensive fitness tracking application that helps users achieve their health goals. The app includes workout planning, nutrition tracking, progress monitoring, and social features to keep users motivated. Built with a focus on user engagement and data accuracy, integrating with popular fitness devices and health platforms.",
      duration: "5 months",
      teamSize: 6,
      clientName: "FitLife Technologies",
      technologies: [
        "Flutter",
        "Firebase",
        "HealthKit",
        "Google Fit",
        "TensorFlow",
        "Node.js",
      ],
      results: [
        "500K+ active users",
        "4.7/5 app store rating",
        "80% user retention after 30 days",
        "Featured in App Store fitness category",
      ],
      challenges: [
        "Accurate fitness data tracking across devices",
        "Motivating long-term user engagement",
        "Complex workout plan customization",
      ],
      solutions: [
        "Integrated with multiple fitness APIs for comprehensive tracking",
        "Implemented gamification and social features",
        "Built AI-powered workout recommendation engine",
      ],
      testimonial: {
        content:
          "This app has revolutionized how our users approach fitness. The engagement rates are incredible and the feedback has been overwhelmingly positive.",
        author: "Jennifer Park",
        role: "Founder, FitLife Technologies",
      },
    },
    {
      title: "Corporate Rebrand",
      category: "Branding",
      image: "/project6.webp",
      description: "Complete brand identity transformation",
      fullDescription:
        "A complete corporate rebranding project that transformed a traditional manufacturing company into a modern, tech-forward organization. The project included logo design, brand guidelines, website redesign, marketing materials, and digital asset creation. We conducted extensive market research and stakeholder interviews to ensure the new brand resonated with target audiences.",
      duration: "4 months",
      teamSize: 5,
      clientName: "TechManufacturing Corp",
      technologies: [
        "Adobe Creative Suite",
        "Figma",
        "Brand Guidelines",
        "Print Design",
        "Web Design",
      ],
      results: [
        "40% increase in brand recognition",
        "25% improvement in lead quality",
        "60% increase in website engagement",
        "Successfully launched across 15 markets",
      ],
      challenges: [
        "Balancing traditional values with modern appeal",
        "Coordinating rebrand across multiple touchpoints",
        "Managing stakeholder expectations and feedback",
      ],
      solutions: [
        "Developed comprehensive brand strategy with clear positioning",
        "Created detailed brand guidelines and asset library",
        "Implemented phased rollout plan with stakeholder checkpoints",
      ],
      testimonial: {
        content:
          "The rebrand has completely transformed our market presence. We're now seen as an innovative leader in our industry, and it's reflected in our business growth.",
        author: "Robert Kim",
        role: "Marketing Director, TechManufacturing Corp",
      },
    },
  ];

  const allSkills = [
    // Frontend
    {
      name: "",
      icon: <Image
        src="/iocl.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      name: "",
      icon: <Image
        src="/nandolia.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-gray-100 text-gray-800",
    },
    {
      name: "JavaScript",
      icon: <Image
        src="/jindalrail.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      name: "HTML/CSS",
      icon: <Image
        src="/pgcil.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-orange-100 text-orange-800",
    },
    {
      name: "Tailwind CSS",
      icon: <Image
        src="/inox.png"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-cyan-100 text-cyan-800",
    },
    {
      name: "Node.js",
      icon: <Image
        src="/abb.webp"
        alt="Digital Agency Hero"
        width={500}
        height={500}
        className="relative max-w-full max-h-full"
      />,
      color: "bg-green-100 text-green-800",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <motion.section className="relative min-h-screen flex overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-32 lg:py-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-500 to-black opacity-90"></div>
        {/* <video autoplay="" muted="" loop="" playsinline="" class="h-full w-full object-cover brightness-50"><source src="/videos/hero-construction-background.mp4" type="video/mp4"></video> */}
        <div className="absolute inset-0 bg-[url('/hero1.png')] bg-cover bg-center mix-blend-overlay"></div>
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white">
                  View Our Work
                </Button>
              </motion.div>
            </motion.div>
            {/* <motion.div className="relative w-full flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-[2.5rem] blur-3xl opacity-20" />
              <Image
                src="/hero1.png"
                alt="Digital Agency Hero"
                width={500}
                height={500}
                className="relative rounded-[2.5rem] shadow-2xl"
              />
            </motion.div> */}
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
                label: "Projects Completed",
                description:
                  "Successfully delivered projects across various industries",
              },
              {
                number: counts.clients + ' %',
                label: "Client Satisfaction",
                description:
                  "Consistently high client satisfaction and retention rate",
              },
              {
                number: counts.experience,
                label: "Years Of Experience",
                description:
                  "Decades of experience driving results",
              },
              {
                number: counts.rating + ' %',
                label: "Average ROI",
                description: "Average return on investment for our clients",
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
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl hover:text-red-600 transition-all duration-300 border-0 cursor-pointer"
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
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
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
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {allSkills.slice(0, 12).map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 h-40 bg-white border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="relative w-full h-full flex items-center justify-center">
                  {skill.icon}
                </div>
              </div>
            ))}
          </motion.div>
          {/* <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/skills">View All Skills</Link>
          </Button>
        </div> */}
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
                avatar: "/user3.jpg",
              },
              {
                name: "Michael Chen",
                role: "Founder, GrowthCo",
                content:
                  "Professional, creative, and results-driven. They transformed our digital presence and helped us reach new heights.",
                rating: 5,
                avatar: "/user1.jpg",
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, InnovateLab",
                content:
                  "Outstanding work on our mobile app. The user experience is incredible and our customers love it.",
                rating: 5,
                avatar: "/user2.avif",
              },
            ].map((testimonial, index) => (
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
              >
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                    {selectedProject.category}
                  </Badge>
                </div>

                {/* Project Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      Duration: {selectedProject.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      Team Size: {selectedProject.teamSize}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      Client: {selectedProject.clientName}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Project Overview
                  </h3>
                  <p className="text-gray-600">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">
                            {solution}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">
                    Client Testimonial
                  </h3>
                  <blockquote className="text-gray-600 italic mb-4">
                    &quot;{selectedProject.testimonial.content}&quot;
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        {selectedProject.testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {selectedProject.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-50"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
