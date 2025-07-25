import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"; // Adjust based on your shadcn setup
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, User, CheckCircle, Github, ExternalLink } from "lucide-react";
import React from "react";
import Slider from "./slider";

export default function ProjectDialog({ selectedProject, setSelectedProject }) {
  if (!selectedProject) return null;

  return (
    <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="space-y-6">
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <Badge className="bg-red-600 hover:bg-red-800 text-white">
                  {selectedProject.category}
                </Badge>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
              </div>
            </div>
          </DialogHeader>

          {/* Project Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Slider />
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoItem icon={<Calendar className="h-4 w-4 text-red-500" />} label={`Duration: ${selectedProject.duration}`} />
            <InfoItem icon={<Users className="h-4 w-4 text-red-500" />} label={`Team Size: ${selectedProject.teamSize}`} />
            <InfoItem icon={<User className="h-4 w-4 text-red-500" />} label={`Client: ${selectedProject.clientName}`} />
          </div>

          {/* Description */}
          <Section title="Project Overview" content={selectedProject.fullDescription} />

          {/* Technologies */}
          <Section title="Equipments Used">
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-red-500 text-white">
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>

          {/* Results */}
          <Section title="Key Results">
            <ul className="space-y-2">
              {selectedProject.results.map((result, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-red-600" />
                  <span className="text-gray-600">{result}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Section title="Challenges">
              <ul className="space-y-2">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Section>
            <Section title="Solutions">
              <ul className="space-y-2">
                {selectedProject.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{solution}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Testimonial */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Client Testimonial</h3>
            <blockquote className="text-gray-600 italic mb-4">
              &quot;{selectedProject.testimonial.text}&quot;
            </blockquote>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-black rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">{selectedProject.testimonial.author}</div>
                <div className="text-sm text-gray-600">{selectedProject.testimonial.position}</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="bg-red-800 text-white hover:bg-red-600 hover:text-white">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Client Website
            </Button>
            {/* <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
              <Github className="h-4 w-4 mr-2" />
              View Source Code
            </Button> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function InfoItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

function Section({ title, content, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {content ? <p className="text-gray-600">{content}</p> : children}
    </div>
  );
}
