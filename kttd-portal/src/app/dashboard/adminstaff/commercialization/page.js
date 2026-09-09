"use client";

import { useState } from "react";
import Link from "next/link";

const initialTechnologies = [
  {
    id: "TECH-2024-001",
    title: "AI-Powered Agricultural Soil & Moisture Monitoring",
    leadInventor: "Dr. Juan Dela Cruz",
    department: "College of Engineering",
    trl: 7,
    status: "Negotiation",
    potentialLicensee: "AgriTech Solutions Philippines Inc.",
    dealValue: "₱4,500,000",
    royaltyRate: "4.5% Net Sales",
    ipAsset: "Patent App (SR-2024-089)",
    lastUpdated: "Aug 16, 2024",
    stage: "Term Sheet Review",
    assignedStaff: "Maria Santos (Staff Lead)",
  },
  {
    id: "TECH-2024-002",
    title: "Biodegradable Packaging Derived from Coconut Husk Fibers",
    leadInventor: "Dr. Carmen Villanueva",
    department: "College of Agriculture",
    trl: 6,
    status: "Partner Matching",
    potentialLicensee: "EcoPack Manufacturing Corp.",
    dealValue: "₱3,200,000",
    royaltyRate: "3.8% Net Sales",
    ipAsset: "Patent (SR-2024-048)",
    lastUpdated: "Aug 12, 2024",
    stage: "Due Diligence",
    assignedStaff: "Roberto Lim",
  },
  {
    id: "TECH-2024-003",
    title: "HydroSmart Precision Irrigation Controller",
    leadInventor: "Engr. Mark Santos",
    department: "College of Engineering",
    trl: 8,
    status: "Ready for Endorsement",
    potentialLicensee: "Davao Smart Ag Innovations",
    dealValue: "₱6,000,000",
    royaltyRate: "5.0% Net Sales",
    ipAsset: "Utility Model (SR-2024-078)",
    lastUpdated: "Aug 15, 2024",
    stage: "Agreement Drafted",
    assignedStaff: "Maria Santos (Staff Lead)",
  },
  {
    id: "TECH-2023-014",
    title: "Solar-Powered Water Purification Station",
    leadInventor: "Dr. Elena Cruz",
    department: "College of Science",
    trl: 9,
    status: "Active License",
    potentialLicensee: "AquaPure Systems Mindanao",
    dealValue: "₱7,800,000",
    royaltyRate: "4.0% Net Sales",
    ipAsset: "Tech Transfer (SR-2024-058)",
    lastUpdated: "Jul 20, 2024",
    stage: "Monetized",
    assignedStaff: "Elena Cruz",
  },
];

const trlDescriptions = {
  1: "Basic principles observed",
  2: "Technology concept formulated",
  3: "Experimental proof of concept",
  4: "Technology validated in lab",
  5: "Technology validated in relevant environment",
  6: "Technology demonstrated in relevant environment",
  7: "System prototype demonstration in operational environment",
  8: "System complete and qualified",
  9: "Actual system proven in operational environment (Commercialized)",
};

const statusBadges = {
  "Partner Matching": "bg-blue-50 text-blue-700 border-blue-200",
  Negotiation: "bg-amber-50 text-amber-700 border-amber-200",
  "Ready for Endorsement": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Active License": "bg-green-50 text-green-700 border-green-200",
  "On Hold": "bg-gray-100 text-gray-700 border-gray-200",
};

export default function StaffCommercializationPage() {
  const [technologies, setTechnologies] = useState(initialTechnologies);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [activeModalTech, setActiveModalTech] = useState(null);
  const [forwardSuccess, setForwardSuccess] = useState(false);

  const filteredTechs = technologies.filter((tech) => {
    const matchesSearch =
      tech.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.leadInventor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.potentialLicensee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || tech.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleForwardToDirector = (techId) => {
    setTechnologies((prev) =>
      prev.map((t) =>
        t.id === techId ? { ...t, status: "Forwarded to Director" } : t
      )
    );
    setActiveModalTech(null);
    setForwardSuccess(true);
    setTimeout(() => setForwardSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-maroon-dark to-maroon text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold text-maroon-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                Staff Portal &middot; Page #17
              </span>
              <span className="text-gray-300 text-xs">
                Technology Transfer &amp; Commercialization Operations
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Commercialization Pipeline Management
            </h1>
            <p className="text-sm text-gray-200 mt-1 max-w-2xl">
              Track Technology Readiness Levels (TRL), manage industry partner negotiations, draft licensing terms, and forward qualified deals for Director endorsement.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/adminstaff"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
            >
              Back to Staff Hub
            </Link>
          </div>
        </div>
      </div>

      {forwardSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center justify-between animate-slide-down">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">
              Commercialization deal forwarded successfully to the Director for executive endorsement!
            </span>
          </div>
          <button onClick={() => setForwardSuccess(false)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">
            Dismiss
          </button>
        </div>
      )}

      {/* KPI Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Tech Pipeline", val: "14", trend: "+3 this month", color: "bg-maroon text-white", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
          { label: "High TRL (7-9)", val: "6", trend: "Market Ready", color: "bg-gold text-maroon-dark", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "In Active Negotiation", val: "4", trend: "₱18.2M Potential", color: "bg-amber-600 text-white", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
          { label: "Annual Licensing Royalties", val: "₱7.8M", trend: "Active Cash Flow", color: "bg-emerald-600 text-white", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${item.color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {item.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{item.val}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Commercialization TRL Pipeline Overview */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Technology Readiness Level (TRL 1–9) Distribution
            </h3>
            <p className="text-xs text-gray-400">
              Standard DOST-compatible technology maturity assessment scale
            </p>
          </div>
          <span className="text-xs bg-gold/20 text-maroon font-bold px-2.5 py-1 rounded">
            Average TRL: 6.8
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2 text-center pt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((lvl) => {
            const count = technologies.filter((t) => t.trl === lvl).length;
            const isHigh = lvl >= 7;
            return (
              <div
                key={lvl}
                className={`p-3 rounded-xl border transition-all ${
                  isHigh
                    ? "bg-maroon/5 border-maroon/20 hover:border-maroon"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <span
                  className={`inline-block w-6 h-6 rounded-full text-xs font-bold leading-6 mb-1 ${
                    isHigh ? "bg-maroon text-gold" : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {lvl}
                </span>
                <p className="text-[10px] font-bold text-gray-700">TRL {lvl}</p>
                <p className="text-xs font-black text-maroon mt-1">
                  {count} {count === 1 ? "Tech" : "Techs"}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search technology, inventor, or licensee..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:border-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Negotiation", "Partner Matching", "Ready for Endorsement", "Active License"].map((st) => (
            <button
              key={st}
              onClick={() => setSelectedStatus(st)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                selectedStatus === st
                  ? "bg-maroon text-white font-bold shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Technologies Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Tech ID &amp; Title</th>
                <th className="py-3.5 px-4">Lead Inventor</th>
                <th className="py-3.5 px-4">TRL Level</th>
                <th className="py-3.5 px-4">Industry Partner</th>
                <th className="py-3.5 px-4">Deal Value / Royalty</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredTechs.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    No commercialization records match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredTechs.map((tech) => (
                  <tr key={tech.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4 max-w-xs">
                      <span className="font-mono text-[11px] font-bold text-maroon block">
                        {tech.id}
                      </span>
                      <p className="font-semibold text-gray-800 text-xs mt-0.5 line-clamp-2">
                        {tech.title}
                      </p>
                      <span className="text-[10px] text-gray-400 font-mono">
                        {tech.ipAsset}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-medium text-gray-800">{tech.leadInventor}</p>
                      <p className="text-[10px] text-gray-400">{tech.department}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-md bg-maroon text-gold font-bold text-xs flex items-center justify-center">
                          {tech.trl}
                        </span>
                        <div className="text-[10px] text-gray-500 max-w-[130px] leading-tight">
                          {trlDescriptions[tech.trl]}
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-gray-700">{tech.potentialLicensee}</p>
                      <span className="text-[10px] text-gray-400">Stage: {tech.stage}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-emerald-700">{tech.dealValue}</p>
                      <p className="text-[10px] text-gray-500 font-medium">{tech.royaltyRate}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                          statusBadges[tech.status] || "bg-gray-100 text-gray-700 border-gray-200"
                        }`}
                      >
                        {tech.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setActiveModalTech(tech)}
                        className="bg-maroon hover:bg-maroon-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        Manage Deal
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deal Management Modal */}
      {activeModalTech && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">
                  {activeModalTech.id} &middot; Commercialization Review
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-0.5">
                  {activeModalTech.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalTech(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs bg-gray-50 p-4 rounded-xl border border-gray-200">
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Inventor / Department</span>
                <p className="font-semibold text-gray-800">{activeModalTech.leadInventor}</p>
                <p className="text-gray-500 text-[10px]">{activeModalTech.department}</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Commercial Partner</span>
                <p className="font-semibold text-gray-800">{activeModalTech.potentialLicensee}</p>
                <p className="text-gray-500 text-[10px]">Negotiation Stage: {activeModalTech.stage}</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Technology Readiness (TRL)</span>
                <p className="font-bold text-maroon">TRL {activeModalTech.trl} - System Validated</p>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold">Proposed Deal Structure</span>
                <p className="font-bold text-emerald-700">{activeModalTech.dealValue} ({activeModalTech.royaltyRate})</p>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                Staff Endorsement Notes &amp; Term Sheet Verification
              </label>
              <textarea
                rows={3}
                defaultValue="The commercialization term sheet has been verified in compliance with Republic Act 10055 (Philippine Technology Transfer Act of 2009). Ready for Director endorsement and contract execution."
                className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold transition-colors"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setActiveModalTech(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleForwardToDirector(activeModalTech.id)}
                className="bg-maroon hover:bg-maroon-dark text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Forward to Director for Endorsement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
