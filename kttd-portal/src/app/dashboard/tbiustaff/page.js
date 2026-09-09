"use client";

import { useState } from "react";
import Link from "next/link";
import ProcessOutputsCard from "../../../components/ProcessOutputsCard";

const tbiuStaffForms = [
  { code: "FM-USeP-KTT-08", title: "Incubation Program Request Form", category: "Incubation", status: "available" },
  { code: "FM-USeP-KTT-09", title: "Notice of Admission to the Incubation Program", category: "Incubation", status: "available" },
  { code: "FM-USeP-KTT-10", title: "Incubation Milestone Checklist", category: "Monitoring", status: "available" },
  { code: "FM-USeP-KTT-11", title: "Incubation Clearance Certificate Form", category: "Clearance", status: "draft" },
];

const incubationQueue = [
  {
    id: "INC-2024-003",
    title: "AI-Powered Agricultural Decision Support System (AgriBrain)",
    applicant: "Dr. Juan Dela Cruz",
    teamName: "Smart Agri Lab",
    track: "AgriTech & AI",
    stage: "Pre-Incubation",
    status: "Needs Staff Review",
    fundingRequested: "₱1,500,000",
    mentorAssigned: "Engr. Leo Valdes",
    spaceAllocated: "TBIU Lab Room 204",
    submittedDate: "Aug 14, 2024",
    daysInQueue: 3,
    score: 88,
  },
  {
    id: "INC-2024-002",
    title: "Biodegradable Packaging from Coconut Fiber (CocoPlast)",
    applicant: "Dr. Ana Rivera",
    teamName: "Green Materials Group",
    track: "Circular Economy",
    stage: "Incubation Active",
    status: "Forwarded to Director",
    fundingRequested: "₱800,000",
    mentorAssigned: "Ms. Clara Santos",
    spaceAllocated: "TBIU Prototyping Bay 3",
    submittedDate: "Jul 25, 2024",
    daysInQueue: 0,
    score: 92,
  },
  {
    id: "INC-2024-001",
    title: "IoT-Based Water Quality Monitoring for Aquaculture",
    applicant: "Dr. Pedro Mateo",
    teamName: "Marine Tech Innovations",
    track: "Smart Aqua / IoT",
    stage: "Acceleration",
    status: "Under Review",
    fundingRequested: "₱2,200,000",
    mentorAssigned: "Dr. Manuel Gomez",
    spaceAllocated: "Wet Lab A",
    submittedDate: "Jun 15, 2024",
    daysInQueue: 7,
    score: 84,
  },
  {
    id: "INC-2023-008",
    title: "Telemedicine Platform for Rural Communities (USePCare)",
    applicant: "Prof. Lisa Gomez",
    teamName: "HealthTech USeP",
    track: "Digital Health",
    stage: "Graduated",
    status: "Graduated / Spin-off",
    fundingRequested: "₱950,000",
    mentorAssigned: "Dr. Roberto Cruz",
    spaceAllocated: "Alumni Incubation Hub",
    submittedDate: "Dec 10, 2023",
    daysInQueue: 0,
    score: 96,
  },
];

const stageStyles = {
  "Pre-Incubation": "bg-blue-50 text-blue-700 border-blue-200",
  "Incubation Active": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Acceleration: "bg-purple-50 text-purple-700 border-purple-200",
  Graduated: "bg-gray-100 text-gray-700 border-gray-200",
};

const statusDot = {
  "Needs Staff Review": "bg-orange-500",
  "Under Review": "bg-blue-500",
  "Forwarded to Director": "bg-purple-500",
  "Graduated / Spin-off": "bg-green-500",
};

export default function TbiuStaffDashboardPage() {
  const [filterStage, setFilterStage] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQueue = incubationQueue.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.applicant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.teamName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = filterStage === "All" || item.stage === filterStage;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold text-maroon-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                TBIU Staff Portal &middot; Page #18
              </span>
              <span className="text-amber-200 text-xs">
                Technology Business Incubation Unit
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Incubation Program &amp; Cohort Management
            </h1>
            <p className="text-sm text-amber-100 mt-1 max-w-2xl">
              Manage startup applications, evaluate founder milestones, allocate incubation lab spaces, assign industry mentors, and endorse ventures to the TBIU Director.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/tbiustaff/INC-2024-003"
              className="bg-gold hover:bg-gold-dark text-maroon-dark text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
            >
              Open Evaluation Rubric (#19)
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Incubatees", val: "12 Ventures", sub: "3 Cohorts", color: "bg-amber-600 text-white", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { label: "Pending Evaluations", val: "3 Applications", sub: "Action Required", color: "bg-orange-500 text-white", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
          { label: "Space Utilization", val: "85%", sub: "17/20 Spaces Occupied", color: "bg-maroon text-white", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
          { label: "Graduated Spin-Offs", val: "8 Startups", sub: "₱14.5M Revenue Generated", color: "bg-emerald-600 text-white", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${stat.color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {stat.sub}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.val}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Incubation Cohort Stage Tracker */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <h3 className="text-sm font-bold text-gray-800 mb-4">
          TBIU Incubation Pipeline Lifecycle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { stage: "Pre-Incubation", desc: "Idea validation, PoC, customer discovery", count: "4 Teams", color: "border-blue-500 bg-blue-50/50" },
            { stage: "Incubation Active", desc: "Product dev, MVP prototyping, mentorship", count: "5 Teams", color: "border-emerald-500 bg-emerald-50/50" },
            { stage: "Acceleration", desc: "Market traction, angel pitching, seed grant", count: "3 Teams", color: "border-purple-500 bg-purple-50/50" },
            { stage: "Graduation / Spin-off", desc: "Corporate registration, commercial licensing", count: "8 Startups", color: "border-gold bg-gold/10" },
          ].map((st, idx) => (
            <div key={idx} className={`p-4 rounded-xl border-l-4 ${st.color} border shadow-xs`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-gray-800">{st.stage}</span>
                <span className="text-xs font-bold text-maroon bg-white px-2 py-0.5 rounded border border-gray-200">
                  {st.count}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-1">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search incubation request, founder, or team..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:border-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "Pre-Incubation", "Incubation Active", "Acceleration", "Graduated"].map((stage) => (
            <button
              key={stage}
              onClick={() => setFilterStage(stage)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filterStage === stage
                  ? "bg-amber-700 text-white font-bold shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* Incubation Queue Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Request ID &amp; Venture</th>
                <th className="py-3.5 px-4">Lead Applicant</th>
                <th className="py-3.5 px-4">Cohort Stage</th>
                <th className="py-3.5 px-4">Funding Requested</th>
                <th className="py-3.5 px-4">Assigned Mentor &amp; Space</th>
                <th className="py-3.5 px-4">Status &amp; Score</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredQueue.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    No incubation applications found.
                  </td>
                </tr>
              ) : (
                filteredQueue.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4 max-w-xs">
                      <Link
                        href={`/dashboard/tbiustaff/${encodeURIComponent(item.id)}`}
                        className="font-mono text-[11px] font-bold text-maroon hover:underline block"
                      >
                        {item.id}
                      </Link>
                      <p className="font-semibold text-gray-800 text-xs mt-0.5 line-clamp-2">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-gray-400 font-medium">
                        Team: {item.teamName} &middot; {item.track}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-medium text-gray-800">{item.applicant}</p>
                      <p className="text-[10px] text-gray-400">{item.submittedDate}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                          stageStyles[item.stage] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {item.stage}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-gray-900">{item.fundingRequested}</p>
                      <span className="text-[10px] text-gray-400">Seed Grant</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-semibold text-gray-700">{item.mentorAssigned}</p>
                      <p className="text-[10px] text-gray-400">{item.spaceAllocated}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className={`w-2 h-2 rounded-full ${statusDot[item.status] || "bg-gray-400"}`} />
                        <span className="font-semibold text-gray-700 text-[11px]">{item.status}</span>
                      </div>
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-bold border border-amber-200">
                        Score: {item.score}/100
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/dashboard/tbiustaff/${encodeURIComponent(item.id)}`}
                        className="bg-amber-700 hover:bg-amber-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm inline-block"
                      >
                        Evaluate &amp; Forward
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Process Outputs */}
      <ProcessOutputsCard
        forms={tbiuStaffForms}
        accentColor="amber"
        title="Process Outputs"
        subtitle="TBIU & TTU incubation forms and documents"
      />
    </div>
  );
}
