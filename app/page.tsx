"use client";
import React, { useState } from "react";

import { motion } from "framer-motion";

import { Card, CardContent } from "./components/ui/card";

import { Button } from "./components/ui/button";

import { Mail, Linkedin, MapPin, ExternalLink, Download, Briefcase, Award, X } from "lucide-react";



export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);

  const projects = [
    {
      title: "Dual-Axis Solar Tracking System",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      desc: "Hybrid solar system integrating photovoltaic panels, reflectors & Arduino-based dual axis tracking. Patent under process.",
    },
    {
      title: "Voice-Controlled Air Purifier",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
      desc: "Smart HEPA + UV-C air purification system integrated with microcontroller & voice automation.",
    },
    {
      title: "Portable Automated Ventilator",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b",
      desc: "Low-cost AMBU bag based ventilator with sensor-based control logic for emergency healthcare.",
    },
    {
      title: "Arduino Smart Robotic Car",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
      desc: "Autonomous robotic platform with ultrasonic sensors, Bluetooth & obstacle detection.",
    },
  ];

  const certifications = [
    { title: "Computational Fluid Mechanics – Airflow Around a Spoiler", org: "Coursera", grade: "100%" },
    { title: "Machine Design Part I", org: "Georgia Institute of Technology", grade: "97.5%" },
    { title: "FEM – Linear & Nonlinear Analysis", org: "Coursera", grade: "100%" },
    { title: "Innovate with ANSYS Simulation Tools", org: "Coursera", grade: "100%" },
    { title: "Electric Vehicles and Mobility", org: "École Nationale des Ponts et Chaussées", grade: "97.6%" },
    { title: "Computer Aided Design", org: "IIT Guwahati", grade: "86.28%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative">

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-700"
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-6">Send Me an Email</h3>
            <form
              action="mailto:rajansinghrajinder@gmail.com"
              method="GET"
              className="flex flex-col gap-4"
            >
              <input type="text" name="subject" placeholder="Your Name / Subject" required className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" />
              <textarea name="body" placeholder="Your Message" rows={4} required className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 w-full">Open Email Client</Button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-24 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Rajinder Singh
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Jr. Engineer – Quality Assurance | Mechanical Engineering Student | Renewable Energy & Automation Enthusiast
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <form action="mailto:rajansinghrajinder@gmail.com"></form>
          <a href="mailto:rajansinghrajinder@gmail.com">
    <Button className="rounded-2xl flex gap-2 bg-blue-600 hover:bg-blue-700">
      <Mail size={18}/> Email Me
    </Button>
  </a>
          <a href="https://www.linkedin.com/in/RRajinder" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-500 hover:bg-gray-800 bg-transparent px-4 py-2 inline-flex items-center gap-2 transition-colors">
            <Linkedin size={18}/> LinkedIn
          </a>
          <a href="/Rajinder_Singh_CV.pdf" target="_blank">
  <Button className="rounded-2xl flex gap-2 border border-gray-500">
    <Download size={18}/> Download CV
  </Button>

          </a>
        </div>
        
        <div className="flex justify-center items-center gap-2 mt-8 text-gray-400">
          <MapPin size={16}/> Mohali, India
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl bg-gray-800/50 border-gray-700 shadow-xl overflow-hidden">
            <CardContent>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">B.E. Mechanical Engineering</h3>
              <p className="text-blue-400 mt-1">Chandigarh University, Mohali</p>
              <p className="text-gray-400 text-sm">2022 – 2026 (Expected)</p>
              <div className="mt-4 inline-block bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                CGPA: 6.9 / 10
              </div>
            </div>
          </CardContent>
          </Card>
          <Card className="rounded-2xl bg-gray-800/50 border-gray-700 shadow-xl overflow-hidden">
            <CardContent>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">Higher Secondary (Class XII)</h3>
              <p className="text-blue-400 mt-1">Kendriya Vidyalaya, Mohali</p>
              <p className="text-gray-400 text-sm">2021 – 2022</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <Card className="rounded-2xl bg-gray-800/50 border-gray-700 shadow-xl overflow-hidden">
          <CardContent>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-400"/>
              <h3 className="text-2xl font-semibold text-white">Jr. Engineer – Quality Assurance</h3>
            </div>
            <p className="text-blue-400 mb-4 font-medium">Gilard Electronics Pvt. Ltd. | Dec 2025 – Present</p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li>BOM preparation, functional study & engineering data entry.</li>
              <li>Dimensional comparison reports & process capability studies.</li>
              <li>Tool trials & initial process control setup.</li>
              <li>PPAP documentation & coordination with design/tool room/vendors.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-800/40 border-gray-700 rounded-2xl hover:border-blue-500/50 transition-colors">
              <CardContent>
                <div className="p-6 flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg">
                    <Award className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white leading-tight mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.org}</p>
                    <p className="text-green-400 text-xs font-bold mt-2 uppercase tracking-wider">Grade: {cert.grade}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card key={index} className="rounded-2xl overflow-hidden bg-gray-800/50 border-gray-700 shadow-xl group hover:border-blue-500/50 transition-all">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <CardContent>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">{project.desc}</p>
                  <Button className="rounded-xl flex gap-2 w-full sm:w-auto bg-gray-700 hover:bg-gray-600">
                    View Details <ExternalLink size={16}/>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-6 my-16 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-blue-600 opacity-90 transition-opacity"></div>
        <div className="relative text-center py-20 px-6 z-10 bg-gradient-to-r from-blue-700 to-cyan-700">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">
            I am open to research collaborations, internships, and full-time graduate opportunities.
          </p>
          <Button 
            onClick={() => setShowContact(true)} 
            className="rounded-full px-10 py-7 text-lg bg-white text-blue-900 hover:bg-gray-100 font-bold transition-transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <footer className="text-center py-12 text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Rajinder Singh</p>
        <p className="text-xs mt-2 uppercase tracking-widest">Mechanical Engineering Portfolio</p>
      </footer>
    </div>
  );
}