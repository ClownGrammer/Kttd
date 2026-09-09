"use client";

import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: "COM-2024-001",
    title: "AI-Powered Agricultural Decision Support System",
    trl: 7,
    market: "Agricultural Technology",
    potentialRevenue: "₱5,000,000/yr",
    status: "Market Assessment",
    partner: "AgriTech Corp.",
    progress: 45,
  },
  {
    id: "COM-2024-002",
    title: "Biodegradable Packaging from Coconut Fiber",
    trl: 6,
    market: "Sustainable Packaging",
    potentialRevenue: "₱3,200,000/yr",
    status: "IP Protection",
    partner: "EcoPack Industries",
    progress: 30,
  },
  {
    id: "COM-2023-005",
    title: "Telemedicine Platform for Rural Communities",
    trl: 9,
    market: "Health Technology",
    potentialRevenue: "₱8,500,000/yr",
    status: "Licensed",
    partner: "MedLink Solutions",
    progress: 100,
  },
];

const roadmapSteps = [
  { label: "IP Protection", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { label: "Market Assessment", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { label: "Partner Matching", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { label: "License / Transfer", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
  { label: "Revenue", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
];

const statusColors = {
  "IP Protection": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "Market Assessment": "bg-blue-50 text-blue-700 border-blue-200",
  "Partner Matching": "bg-purple-50 text-purple-700 border-purple-200",
  Licensed: "bg-green-50 text-green-700 border-green-200",
};

export default function CommercializationPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Commercialization</h2>
          <p className="text-sm text-gray-500 mt-1">
            Track the commercialization journey of your innovations from IP protection to market revenue.
          </p>
        </div>
      </div>

      {/* Commercialization Roadmap */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-6">Commercialization Roadmap</h3>
        <div className="flex items-center justify-between max-w-3xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute left-8 right-8 top-6 h-0.5 bg-gray-200 z-0" />

          {roadmapSteps.map((step, i) => (
            <div key={step.label} className="relative z-10 flex flex-col items-center">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border-2 ${
                i <= 1 ? "bg-maroon text-white border-maroon" : "bg-white text-gray-400 border-gray-200"
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                </svg>
              </div>
              <p className={`text-[10px] font-bold mt-3 text-center max-w-[80px] ${
                i <= 1 ? "text-maroon-dark" : "text-gray-400"
              }`}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Active Projects", value: "3", color: "bg-maroon", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { label: "Licensed", value: "1", color: "bg-green-500", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Partners", value: "3", color: "bg-blue-500", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
          { label: "Est. Revenue", value: "₱16.7M", color: "bg-gold", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-9 h-9 ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
              </svg>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Projects */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-sm text-gray-800 flex items-center">
            <svg className="w-4 h-4 mr-2 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Commercialization Projects
          </h3>
        </div>

        <div className="divide-y divide-gray-50">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-5 hover:bg-gray-50 transition-colors cursor-pointer ${
                selectedProject === project.id ? "bg-gray-50" : ""
              }`}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {project.id}
                    </span>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-2">
                    {project.title}
                  </h4>

                  {/* TRL Level */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] text-gray-500 font-semibold uppercase">TRL {project.trl}</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                        <div
                          key={level}
                          className={`w-4 h-1.5 rounded-full ${
                            level <= project.trl ? "bg-maroon" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Market</span>
                      <p className="text-gray-700 font-medium">{project.market}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Partner</span>
                      <p className="text-gray-700 font-medium">{project.partner}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-semibold uppercase">Est. Revenue</span>
                      <p className="text-gray-700 font-bold">{project.potentialRevenue}</p>
                    </div>
                  </div>
                </div>

                {/* Progress circle */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative w-14 h-14">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        fill="none"
                      />
                      <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke={project.progress === 100 ? "#22c55e" : "#800000"}
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray={`${(project.progress / 100) * 150.8} 150.8`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-700">
                      {project.progress}%
                    </span>
                  </div>
                  <p className="text-[9px] text-gray-400 mt-1 font-semibold">PROGRESS</p>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Next milestone: Partner agreement review
                      </span>
                    </div>
                    <Link
                      href="#"
                      className="text-xs font-semibold text-maroon hover:text-maroon-dark flex items-center gap-1"
                    >
                      View Full Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Resources Banner */}
      <div className="bg-maroon-dark text-white rounded-xl p-6 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Commercialization Resources</h3>
          <p className="text-xs text-gray-300 max-w-2xl leading-relaxed mb-5">
            Access templates, guides, and frameworks to help navigate the technology transfer and commercialization process with industry partners.
          </p>
          <div className="flex space-x-3">
            <button className="bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs py-2 px-4 rounded transition-colors shadow-sm">
              Licensing Templates
            </button>
            <button className="bg-transparent hover:bg-maroon-deeper border border-gray-400 text-white font-semibold text-xs py-2 px-4 rounded transition-colors">
              Market Assessment Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
