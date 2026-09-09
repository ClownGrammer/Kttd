"use client";

import { useState } from "react";
import Link from "next/link";

const incubationRequests = [
  {
    id: "INC-2024-003",
    title: "AI-Powered Agricultural Decision Support System",
    team: "Smart Agri Lab",
    lead: "Dr. Juan Dela Cruz",
    submitted: "Aug 10, 2024",
    status: "Under Review",
    stage: "Technical Assessment",
    description:
      "A machine learning platform that provides real-time crop management recommendations based on soil data, weather patterns, and historical yield data.",
    sdgs: ["Goal 2: Zero Hunger", "Goal 9: Industry, Innovation and Infrastructure"],
    duration: "18 months",
    fundingReq: "₱1,500,000",
  },
  {
    id: "INC-2024-002",
    title: "Biodegradable Packaging from Coconut Fiber",
    team: "Green Materials Research Group",
    lead: "Dr. Ana Rivera",
    submitted: "Jul 25, 2024",
    status: "Approved",
    stage: "Incubation Active",
    description:
      "Development of sustainable and biodegradable packaging materials derived from coconut husk fibers, providing alternatives to petroleum-based plastics.",
    sdgs: ["Goal 12: Responsible Consumption and Production", "Goal 13: Climate Action"],
    duration: "12 months",
    fundingReq: "₱800,000",
  },
  {
    id: "INC-2024-001",
    title: "IoT-Based Water Quality Monitoring for Aquaculture",
    team: "Marine Tech Innovation Lab",
    lead: "Dr. Pedro Mateo",
    submitted: "Jun 15, 2024",
    status: "In Incubation",
    stage: "Prototype Development",
    description:
      "An IoT sensor network for continuous monitoring of water quality parameters in fish ponds and marine enclosures.",
    sdgs: ["Goal 14: Life Below Water", "Goal 6: Clean Water and Sanitation"],
    duration: "24 months",
    fundingReq: "₱2,200,000",
  },
  {
    id: "INC-2023-008",
    title: "Telemedicine Platform for Rural Communities",
    team: "HealthTech USeP",
    lead: "Dr. Lisa Tan",
    submitted: "Dec 10, 2023",
    status: "Graduated",
    stage: "Commercialization",
    description:
      "A mobile-first telemedicine platform enabling remote consultations for underserved communities.",
    sdgs: ["Goal 3: Good Health and Well-being", "Goal 10: Reduced Inequality"],
    duration: "12 months",
    fundingReq: "₱950,000",
  },
];

const statusStyles = {
  "Under Review": "bg-yellow-50 text-yellow-700 border-yellow-200",
  Approved: "bg-green-50 text-green-700 border-green-200",
  "In Incubation": "bg-blue-50 text-blue-700 border-blue-200",
  Graduated: "bg-purple-50 text-purple-700 border-purple-200",
  Rejected: "bg-red-50 text-red-600 border-red-200",
};

export default function IncubationRequestsPage() {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered = incubationRequests.filter(
    (r) => filterStatus === "All" || r.status === filterStatus
  );

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Incubation Requests</h2>
          <p className="text-sm text-gray-500 mt-1">
            Submit and track technology incubation applications through the KTTD program.
          </p>
        </div>
        <Link
          href="/dashboard/internal/incubation/new"
          className="bg-gold hover:bg-gold-dark text-maroon-dark text-sm font-semibold py-2.5 px-5 rounded-lg flex items-center transition-colors shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Incubation Request
        </Link>
      </div>

      {/* Pipeline Summary */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Incubation Pipeline</h3>
        <div className="flex items-center gap-2">
          {[
            { label: "Submitted", count: 1, color: "bg-yellow-500" },
            { label: "Approved", count: 1, color: "bg-green-500" },
            { label: "In Incubation", count: 1, color: "bg-blue-500" },
            { label: "Graduated", count: 1, color: "bg-purple-500" },
          ].map((stage, i) => (
            <div key={stage.label} className="flex items-center flex-1">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                  <span className="text-xs font-semibold text-gray-700">{stage.label}</span>
                </div>
                <div className={`h-2 ${stage.color} rounded-full`} />
                <p className="text-lg font-bold text-gray-800 mt-1">{stage.count}</p>
              </div>
              {i < 3 && (
                <svg className="w-5 h-5 text-gray-300 mx-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {["All", "Under Review", "Approved", "In Incubation", "Graduated"].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterStatus === status
                ? "bg-maroon text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Request Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((req) => (
          <div
            key={req.id}
            className={`bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer ${
              selectedRequest === req.id ? "border-maroon ring-1 ring-maroon/20" : "border-gray-200"
            }`}
            onClick={() => setSelectedRequest(selectedRequest === req.id ? null : req.id)}
          >
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{req.id}</span>
                  <h4 className="text-sm font-bold text-gray-800 mt-1">{req.title}</h4>
                </div>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded border flex-shrink-0 ${statusStyles[req.status]}`}>
                  {req.status}
                </span>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">{req.description}</p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Team</span>
                  <p className="text-gray-700 font-medium">{req.team}</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Lead</span>
                  <p className="text-gray-700 font-medium">{req.lead}</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Duration</span>
                  <p className="text-gray-700 font-medium">{req.duration}</p>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase">Funding</span>
                  <p className="text-gray-700 font-medium">{req.fundingReq}</p>
                </div>
              </div>

              {/* SDGs */}
              <div className="mt-4 flex flex-wrap gap-1">
                {req.sdgs.map((sdg) => (
                  <span key={sdg} className="text-[9px] font-medium px-2 py-0.5 bg-gold/10 text-gold-dark rounded border border-gold/20">
                    {sdg}
                  </span>
                ))}
              </div>
            </div>

            {/* Expanded section */}
            {selectedRequest === req.id && (
              <div className="bg-gray-50 border-t border-gray-100 p-4 flex items-center justify-between">
                <span className="text-xs text-gray-500">
                  Submitted: <span className="font-semibold text-gray-700">{req.submitted}</span> · Stage:{" "}
                  <span className="font-semibold text-gray-700">{req.stage}</span>
                </span>
                <div className="flex gap-2">
                  <Link
                    href={`/dashboard/internal/incubation/edit`}
                    className="text-xs font-semibold text-maroon hover:text-maroon-dark transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Edit
                  </Link>
                  <button className="text-xs font-semibold text-gray-500 hover:text-gray-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
