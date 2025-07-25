"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categories, featuredProjects } from "@/data/featuredProjects";
import ProjectDialog from "@/components/projectsDialog";

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter((project) => project.category === activeCategory);

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
            <motion.div className="relative space-y-8 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}>
              <Badge className="bg-red-600 hover:bg-red-800 text-white">Our Portfolio</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Our Latest Work
                & Success Stories
              </h1>
              <p className="text-xl font-bold max-w-4xl mx-auto">
                Explore our diverse portfolio of civil engineering projects, from industrial plants and commercial buildings to roads and utility infrastructure. See how we've helped clients across sectors achieve their development goals through innovative solutions and a commitment to quality and precision. Each project reflects our dedication to engineering excellence, timely execution, and long-term value
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Filter Tabs */}
      <motion.section className="py-8 border-b bg-white/50 backdrop-blur-sm sticky top-16 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}>
        <div className="px-4 md:px-20">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.div whileHover={{ y: -5, scale: 1.02 }}>
              <Button
                key={category}
                variant={category === activeCategory ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  category === activeCategory
                    ? "bg-red-600 hover:bg-red-700"
                    : "border-gray-300 hover:bg-gray-50"
                }
              >
                {category}
              </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Portfolio Grid */}
      <section className="py-10 lg:py-10">
        <div className="px-4 md:px-20">
          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, "_blank");
                      }}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-800 text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-red-500 group-hover:text-red-800 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-2">
                        Equipments:
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs bg-red-500 text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-xs bg-gray-100 text-gray-700"
                          >
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-sm text-gray-900 mb-2">
                        Key Results:
                      </h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 3).map((result, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-gray-600 flex items-center"
                          >
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-white bg-red-800 text-white hover:bg-red-600 hover:text-white"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-20 lg:py-32 bg-gradient-to-br from-red-500 to-gray-700"
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Let&apos;s discuss your project and see how we can help you
              achieve similar results for your business.
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
                className="border-white text-white bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 hover:text-white"
              >
                Download Portfolio PDF
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
