"use client";

import { useState } from "react";
import Link from "next/link";
import ProcessOutputsCard from "../../../components/ProcessOutputsCard";

const adminStaffForms = [
  { code: "—", title: "OVPRDE Clearance Form", category: "Clearance", status: "available" },
  { code: "FM-USeP-KTT-01", title: "Classroom Coursework Output Form", category: "Disclosure", status: "available" },
  { code: "—", title: "Signed Deed of Assignment", category: "Legal", status: "available" },
  { code: "FM-USeP-KTT-02", title: "Technology Disclosure Form", category: "Disclosure", status: "available" },
  { code: "FM-USeP-KTT-03", title: "Non-Disclosure Agreement (NDA)", category: "Legal", status: "available" },
  { code: "FM-USeP-KTT-04", title: "Triage Decision Criteria Form", category: "Evaluation", status: "available" },
  { code: "—", title: "Copyright Registry Enrollment Form", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-05", title: "Intellectual Property Rights Monitoring Form", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-06", title: "Quotation Form", category: "IPMU", status: "draft" },
  { code: "FM-USeP-KTT-07", title: "Statement of Account", category: "IPMU", status: "pending" },
];

const pendingProjects = [
  {
    id: "SR-2024-089",
    title: "Patent Application for AI-Based Soil Monitoring",
    requestor: "Dr. Juan Dela Cruz",
    department: "College of Engineering",
    type: "Patent",
    dateSubmitted: "Aug 14, 2024",
    priority: "High",
    status: "Ready to Forward",
    daysInQueue: 3,
  },
  {
    id: "SR-2024-085",
    title: "Trademark Application for Smart Irrigation System",
    requestor: "Dr. Ana Reyes",
    department: "College of Agriculture",
    type: "Trademark",
    dateSubmitted: "Aug 10, 2024",
    priority: "Medium",
    status: "Needs Preparation",
    daysInQueue: 7,
  },
  {
    id: "SR-2024-078",
    title: "Utility Model for Hydro-Smart Controller",
    requestor: "Engr. Mark Santos",
    department: "College of Engineering",
    type: "Utility Model",
    dateSubmitted: "Jul 28, 2024",
    priority: "High",
    status: "Under Review",
    daysInQueue: 12,
  },
  {
    id: "SR-2024-071",
    title: "Copyright Registration for Research Software",
    requestor: "Prof. Lisa Gomez",
    department: "College of Computing",
    type: "Copyright",
    dateSubmitted: "Jul 15, 2024",
    priority: "Low",
    status: "Forwarded",
    daysInQueue: 0,
    forwardedTo: "Dr. Maria Santos",
  },
  {
    id: "SR-2024-065",
    title: "Patent Prior Art Search — Bamboo Composite",
    requestor: "Dr. Roberto Lim",
    department: "College of Engineering",
    type: "Patent",
    dateSubmitted: "Jul 01, 2024",
    priority: "Medium",
    status: "Ready to Forward",
    daysInQueue: 5,
  },
  {
    id: "SR-2024-058",
    title: "Technology Transfer Agreement — Solar Panel Design",
    requestor: "Dr. Elena Cruz",
    department: "College of Science",
    type: "Tech Transfer",
    dateSubmitted: "Jun 20, 2024",
    priority: "High",
    status: "Returned",
    daysInQueue: 0,
    returnReason: "Incomplete documentation",
  },
  {
    id: "SR-2024-052",
    title: "Industrial Design for Portable Water Purifier",
    requestor: "Engr. Paolo Rivera",
    department: "College of Engineering",
    type: "Industrial Design",
    dateSubmitted: "Jun 15, 2024",
    priority: "Medium",
    status: "Under Review",
    daysInQueue: 8,
  },
  {
    id: "SR-2024-048",
    title: "Biodegradable Packaging from Coconut Fiber",
    requestor: "Dr. Carmen Villanueva",
    department: "College of Agriculture",
    type: "Patent",
    dateSubmitted: "Jun 10, 2024",
    priority: "High",
    status: "Needs Preparation",
    daysInQueue: 14,
  },
];

const recentActivity = [
  {
    action: "Forwarded",
    project: "SR-2024-071",
    title: "Copyright Registration for Research Software",
    to: "Dr. Maria Santos — VPRE",
    time: "2 hours ago",
    icon: "forward",
  },
  {
    action: "Returned",
    project: "SR-2024-058",
    title: "Technology Transfer Agreement — Solar Panel Design",
    to: "Dr. Elena Cruz",
    time: "5 hours ago",
    icon: "return",
  },
  {
    action: "Approved",
    project: "SR-2024-044",
    title: "Trademark for BioFertilizer Product Line",
    to: "Dr. Roberto Cruz — VPRDE",
    time: "1 day ago",
    icon: "approved",
  },
  {
    action: "Forwarded",
    project: "SR-2024-040",
    title: "Utility Model for Smart Greenhouse System",
    to: "Dr. Maria Santos — VPRE",
    time: "2 days ago",
    icon: "forward",
  },
];

const deputyDirectors = [
  {
    name: "Dr. Maria Santos",
    role: "VPRE",
    pendingCount: 4,
    avatar: "MS",
    color: "bg-blue-500",
  },
  {
    name: "Dr. Roberto Cruz",
    role: "VPRDE",
    pendingCount: 2,
    avatar: "RC",
    color: "bg-emerald-500",
  },
  {
    name: "Dr. Patricia Mendoza",
    role: "VPAA",
    pendingCount: 1,
    avatar: "PM",
    color: "bg-purple-500",
  },
];

const statusStyles = {
  "Needs Preparation": "bg-orange-50 text-orange-700 border-orange-200",
  "Under Review": "bg-blue-50 text-blue-700 border-blue-200",
  "Ready to Forward": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Forwarded: "bg-green-50 text-green-700 border-green-200",
  Returned: "bg-red-50 text-red-600 border-red-200",
};

const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-yellow-50 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

const statusDot = {
  "Needs Preparation": "bg-orange-400",
  "Under Review": "bg-blue-400",
  "Ready to Forward": "bg-emerald-400",
  Forwarded: "bg-green-400",
  Returned: "bg-red-400",
};

export default function AdminStaffHubPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [forwardingId, setForwardingId] = useState(null);

  const filteredProjects = pendingProjects.filter((proj) => {
    const matchesStatus =
      filterStatus === "All" || proj.status === filterStatus;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.requestor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusCounts = {
    All: pendingProjects.length,
    "Needs Preparation": pendingProjects.filter(
      (p) => p.status === "Needs Preparation"
    ).length,
    "Under Review": pendingProjects.filter((p) => p.status === "Under Review")
      .length,
    "Ready to Forward": pendingProjects.filter(
      (p) => p.status === "Ready to Forward"
    ).length,
    Forwarded: pendingProjects.filter((p) => p.status === "Forwarded").length,
    Returned: pendingProjects.filter((p) => p.status === "Returned").length,
  };

  const summaryStats = [
    {
      label: "Total Pending",
      value: pendingProjects.filter(
        (p) => !["Forwarded", "Returned"].includes(p.status)
      ).length,
      color: "bg-maroon",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      trend: "+2 this week",
    },
    {
      label: "Awaiting Staff Review",
      value: statusCounts["Needs Preparation"] + statusCounts["Under Review"],
      color: "bg-orange-500",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      trend: "3 urgent",
    },
    {
      label: "Ready for Deputy Director",
      value: statusCounts["Ready to Forward"],
      color: "bg-emerald-500",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      trend: "Action needed",
    },
    {
      label: "Forwarded / Approved",
      value: statusCounts["Forwarded"],
      color: "bg-green-600",
      icon: "M5 13l4 4L19 7",
      trend: "1 approved today",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Admin Staff Hub
          </h2>
          <p className="text-sm text-gray-500 mt-1 max-w-2xl">
            Manage pending service requests and forward approved projects to
            deputy directors for endorsement and final approval.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-maroon-dark hover:bg-maroon text-white text-sm font-semibold py-2.5 px-5 rounded-lg flex items-center transition-colors shadow-sm">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Forward Selected
          </button>
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-lg flex items-center border border-gray-300 transition-colors">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={stat.icon}
                  />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {stat.trend}
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500 font-medium mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Pending Projects Queue Header */}
      <div className="bg-maroon text-white rounded-xl p-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center">
          <svg
            className="w-5 h-5 text-gold mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <div>
            <h3 className="font-semibold text-sm">
              Pending Projects Queue
            </h3>
            <p className="text-[10px] text-gray-300 mt-0.5">
              Projects requiring staff action before deputy director endorsement
            </p>
          </div>
        </div>
        <span className="bg-gold text-maroon-dark text-xs font-bold px-3 py-1 rounded-full">
          {
            pendingProjects.filter(
              (p) => !["Forwarded", "Returned"].includes(p.status)
            ).length
          }{" "}
          ACTIVE
        </span>
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, ID, or requestor..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:border-gold transition-colors"
            />
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  filterStatus === status
                    ? "bg-maroon text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status === "All" ? "All" : status}{" "}
                <span
                  className={`ml-1 ${
                    filterStatus === status ? "text-white/70" : "text-gray-400"
                  }`}
                >
                  ({count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4">Project ID</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Requestor</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Date Submitted</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Queue</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={9} className="py-12 text-center">
                    <svg
                      className="w-12 h-12 text-gray-200 mx-auto mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-sm text-gray-400 font-medium">
                      No projects found
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      Try adjusting your search or filters
                    </p>
                  </td>
                </tr>
              ) : (
                filteredProjects.map((proj, idx) => (
                  <tr
                    key={proj.id}
                    className={`border-b border-gray-50 hover:bg-gray-50/80 transition-colors ${
                      idx === filteredProjects.length - 1 ? "border-b-0" : ""
                    } ${proj.daysInQueue > 10 ? "bg-red-50/30" : ""}`}
                  >
                    <td className="py-3.5 px-4">
                      <Link
                        href={`/dashboard/adminstaff/requests/${encodeURIComponent(proj.id)}`}
                        className="text-maroon font-semibold text-xs hover:text-maroon-dark transition-colors"
                      >
                        {proj.id}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-gray-800 font-medium whitespace-nowrap max-w-[220px] truncate">
                      {proj.title}
                    </td>
                    <td className="py-3.5 px-4">
                      <div>
                        <p className="text-gray-700 text-xs font-medium">
                          {proj.requestor}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {proj.department}
                        </p>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-500 text-xs">
                      {proj.type}
                    </td>
                    <td className="py-3.5 px-4 text-gray-500 text-xs">
                      {proj.dateSubmitted}
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${priorityStyles[proj.priority]}`}
                      >
                        {proj.priority === "High" && (
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        {proj.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-medium border ${statusStyles[proj.status]}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-1.5 ${statusDot[proj.status]}`}
                        />
                        {proj.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {proj.daysInQueue > 0 ? (
                        <span
                          className={`text-xs font-medium ${
                            proj.daysInQueue > 10
                              ? "text-red-500"
                              : proj.daysInQueue > 5
                              ? "text-orange-500"
                              : "text-gray-500"
                          }`}
                        >
                          {proj.daysInQueue}d
                        </span>
                      ) : (
                        <span className="text-xs text-gray-300">&mdash;</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2 relative">
                        <Link
                          href={`/dashboard/adminstaff/requests/${encodeURIComponent(proj.id)}`}
                          className="text-maroon hover:text-maroon-dark text-xs font-semibold transition-colors"
                        >
                          Review
                        </Link>
                        {proj.status === "Ready to Forward" && (
                          <button
                            onClick={() =>
                              setForwardingId(
                                forwardingId === proj.id ? null : proj.id
                              )
                            }
                            className="bg-maroon hover:bg-maroon-dark text-white text-[10px] font-bold px-2.5 py-1 rounded transition-colors"
                          >
                            Forward
                          </button>
                        )}
                        {proj.status === "Needs Preparation" && (
                          <button className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded transition-colors">
                            Prepare
                          </button>
                        )}

                        {/* Forward dropdown */}
                        {forwardingId === proj.id && (
                          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-3 z-20 w-64 animate-slide-down">
                            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider mb-2">
                              Select Deputy Director
                            </p>
                            {deputyDirectors.map((dd) => (
                              <button
                                key={dd.name}
                                onClick={() => setForwardingId(null)}
                                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left"
                              >
                                <div
                                  className={`w-8 h-8 ${dd.color} rounded-full flex items-center justify-center text-white text-[10px] font-bold`}
                                >
                                  {dd.avatar}
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-gray-700">
                                    {dd.name}
                                  </p>
                                  <p className="text-[10px] text-gray-400">
                                    {dd.role} &middot; {dd.pendingCount} pending
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="bg-gray-50 border-t border-gray-100 px-4 py-3 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">
              {pendingProjects.length}
            </span>{" "}
            projects
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-xs font-medium text-white bg-maroon rounded">
              1
            </button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 rounded transition-colors">
              2
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Activity Feed + Deputy Director Queue */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Feed */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-sm text-gray-800 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-maroon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Recent Activity
            </h3>
            <button className="text-xs text-maroon hover:text-maroon-dark font-medium flex items-center">
              View All{" "}
              <svg
                className="w-3 h-3 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActivity.map((activity, idx) => (
              <div
                key={idx}
                className="p-4 hover:bg-gray-50/50 transition-colors flex items-start gap-3"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                    activity.icon === "forward"
                      ? "bg-blue-50 text-blue-500"
                      : activity.icon === "return"
                      ? "bg-red-50 text-red-500"
                      : "bg-green-50 text-green-500"
                  }`}
                >
                  {activity.icon === "forward" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  )}
                  {activity.icon === "return" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  )}
                  {activity.icon === "approved" && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        activity.action === "Forwarded"
                          ? "text-blue-600"
                          : activity.action === "Returned"
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {activity.action}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {activity.project}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-gray-700 truncate">
                    {activity.title}
                  </p>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    {activity.action === "Returned" ? "Returned to" : "To"}{" "}
                    {activity.to} &middot; {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deputy Director Queue */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-bold text-sm text-gray-800 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Deputy Director Queue
            </h3>
            <p className="text-[10px] text-gray-400 mt-1">
              Current pending items per deputy director
            </p>
          </div>
          <div className="p-4 space-y-4">
            {deputyDirectors.map((dd) => (
              <div
                key={dd.name}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`w-10 h-10 ${dd.color} rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm`}
                >
                  {dd.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-gray-800">
                    {dd.name}
                  </p>
                  <p className="text-[10px] text-gray-400">{dd.role}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`text-lg font-bold ${
                      dd.pendingCount > 3 ? "text-red-500" : "text-gray-700"
                    }`}
                  >
                    {dd.pendingCount}
                  </span>
                  <p className="text-[9px] text-gray-400 font-medium uppercase">
                    Pending
                  </p>
                </div>
              </div>
            ))}

            {/* Total */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-gray-600">
                  Total Pending
                </span>
                <span className="text-lg font-bold text-maroon">
                  {deputyDirectors.reduce((a, b) => a + b.pendingCount, 0)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Outputs */}
      <ProcessOutputsCard
        forms={adminStaffForms}
        accentColor="maroon"
        title="Process Outputs"
        subtitle="KTTD & IPMU official forms and documents"
      />

      {/* Quick Actions Banner */}
      <div className="bg-maroon-dark text-white rounded-xl p-6 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold opacity-5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Staff Resources</h3>
          <p className="text-xs text-gray-300 max-w-2xl leading-relaxed mb-5">
            Access standard operating procedures, endorsement templates, and
            routing guidelines for processing service requests to deputy
            directors.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs py-2 px-4 rounded transition-colors shadow-sm">
              SOP Document
            </button>
            <button className="bg-transparent hover:bg-maroon-deeper border border-gray-400 text-white font-semibold text-xs py-2 px-4 rounded transition-colors">
              Endorsement Template
            </button>
            <button className="bg-transparent hover:bg-maroon-deeper border border-gray-400 text-white font-semibold text-xs py-2 px-4 rounded transition-colors">
              Routing Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
