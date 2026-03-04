"use client"

import { Mail, Linkedin, MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-10">

      <h1 className="text-6xl font-bold mb-6 text-center">
        Rajinder Singh
      </h1>

      <p className="text-xl text-gray-300 text-center max-w-xl mb-8">
        Mechanical Engineering Student | Renewable Energy Enthusiast | CAD Designer
      </p>

      <div className="flex gap-4">

        <a href="mailto:rajansinghrajinder@gmail.com">
          <button className="bg-blue-600 px-6 py-3 rounded-xl flex gap-2 items-center">
            <Mail size={18}/> Email
          </button>
        </a>

        <a href="https://linkedin.com/in/RRajinder">
          <button className="border px-6 py-3 rounded-xl flex gap-2 items-center">
            <Linkedin size={18}/> LinkedIn
          </button>
        </a>

      </div>

      <div className="flex items-center gap-2 mt-6 text-gray-400">
        <MapPin size={16}/> Mohali, India
      </div>

    </main>
  )
}