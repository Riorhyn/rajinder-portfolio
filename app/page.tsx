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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-2xl w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X />
            </button>
            <h3 className="text-2xl font-bold mb-6">Send Me an Email</h3>
            <form
              action="mailto:rajansinghrajinder@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded-lg bg-gray-800 border border-gray-700" />
              <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded-lg bg-gray-800 border border-gray-700" />
              <textarea name="message" placeholder="Your Message" rows="4" required className="p-3 rounded-lg bg-gray-800 border border-gray-700"></textarea>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Send Email</Button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center py-20 px-6">
        <motion.h1 initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Rajinder Singh
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Jr. Engineer – Quality Assurance | Mechanical Engineering Student | Renewable Energy & Automation Enthusiast
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="mailto:rajansinghrajinder@gmail.com">
            <Button className="rounded-2xl flex gap-2 bg-blue-600 hover:bg-blue-700"><Mail size={18}/> Email Me</Button>
          </a>
          <a href="https://linkedin.com/in/RRajinder" target="_blank">
            <Button variant="outline" className="rounded-2xl flex gap-2 border-gray-500"><Linkedin size={18}/> LinkedIn</Button>
          </a>
          <a href="/Rajinder_Singh_CV.pdf" download>
            <Button variant="outline" className="rounded-2xl flex gap-2 border-gray-500"><Download size={18}/> Download CV</Button>
          </a>
        </div>
        <div className="flex justify-center items-center gap-2 mt-6 text-gray-400">
          <MapPin size={16}/> Mohali, India
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="rounded-2xl bg-gray-800 border border-gray-700 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold">B.E. Mechanical Engineering</h3>
              <p className="text-gray-400">Chandigarh University, Mohali</p>
              <p className="text-gray-400">2022 – 2026 (Expected)</p>
              <p className="text-green-400 mt-2">CGPA: 6.9 / 10</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-gray-800 border border-gray-700 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold">Higher Secondary (Class XII)</h3>
              <p className="text-gray-400">Kendriya Vidyalaya, Mohali</p>
              <p className="text-gray-400">2021 – 2022</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        <Card className="rounded-2xl bg-gray-800 border border-gray-700 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4"><Briefcase className="text-blue-400"/><h3 className="text-2xl font-semibold">Jr. Engineer – Quality Assurance</h3></div>
            <p className="text-gray-400 mb-4">Gilard Electronics Pvt. Ltd. | Dec 2025 – Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>BOM preparation, functional study & engineering data entry.</li>
              <li>Dimensional comparison reports & process capability studies.</li>
              <li>Tool trials & initial process control setup.</li>
              <li>PPAP documentation & coordination with design/tool room/vendors.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Award className="text-cyan-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.org}</p>
                    <p className="text-green-400 text-sm">Grade: {cert.grade}</p>
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
            <Card key={index} className="rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-xl">
              <img src={project.image} alt={project.title} className="h-56 w-full object-cover" />
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.desc}</p>
                <Button className="rounded-xl flex gap-2">View Details <ExternalLink size={16}/></Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-900 to-cyan-900">
        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-200 mb-8">Open to research collaborations, internships, and graduate opportunities.</p>
        <Button onClick={() => setShowContact(true)} className="rounded-2xl px-8 py-6 text-lg bg-white text-black hover:bg-gray-200">Contact Me</Button>
      </section>

      <footer className="text-center py-8 text-gray-500 bg-black">
        © {new Date().getFullYear()} Rajinder Singh | Mechanical Engineering Portfolio
      </footer>
    </div>
  );
}
