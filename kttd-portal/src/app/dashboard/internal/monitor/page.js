"use client";

import { useState } from "react";

const requestsData = [
  {
    id: "SR-2024-089",
    title: "Patent Application for AI-Based Soil Monitoring",
    type: "Patent",
    dateFiled: "Aug 14, 2024",
    status: "In Progress",
    stage: "Admin Review",
    priority: "High",
  },
  {
    id: "SR-2024-085",
    title: "Trademark Application for Smart Irrigation System",
    type: "Trademark",
    dateFiled: "Aug 10, 2024",
    status: "Pending Review",
    stage: "Submission",
    priority: "Medium",
  },
  {
    id: "SR-2024-078",
    title: "Utility Model for Hydro-Smart Controller",
    type: "Utility Model",
    dateFiled: "Jul 28, 2024",
    status: "In Progress",
    stage: "Generation",
    priority: "High",
  },
  {
    id: "SR-2024-071",
    title: "Copyright Registration for Research Software",
    type: "Copyright",
    dateFiled: "Jul 15, 2024",
    status: "Completed",
    stage: "Decision",
    priority: "Low",
  },
  {
    id: "SR-2024-065",
    title: "Patent Prior Art Search - Bamboo Composite",
    type: "Patent",
    dateFiled: "Jul 01, 2024",
    status: "Completed",
    stage: "Decision",
    priority: "Medium",
  },
  {
    id: "SR-2024-058",
    title: "Technology Transfer Agreement - Solar Panel Design",
    type: "Tech Transfer",
    dateFiled: "Jun 20, 2024",
    status: "Rejected",
    stage: "Decision",
    priority: "Low",
  },
];

const statusStyles = {
  "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
  "Pending Review": "bg-yellow-50 text-yellow-700 border-yellow-200",
  Completed: "bg-green-50 text-green-700 border-green-200",
  Rejected: "bg-red-50 text-red-600 border-red-200",
};

const priorityStyles = {
  High: "bg-red-50 text-red-600",
  Medium: "bg-yellow-50 text-yellow-700",
  Low: "bg-gray-100 text-gray-600",
};

export default function MonitorRequestsPage() {
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRequests = requestsData.filter((req) => {
    const matchesStatus =
      filterStatus === "All" || req.status === filterStatus;
    const matchesSearch =
      req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const statusCounts = {
    All: requestsData.length,
    "In Progress": requestsData.filter((r) => r.status === "In Progress")
      .length,
    "Pending Review": requestsData.filter((r) => r.status === "Pending Review")
      .length,
    Completed: requestsData.filter((r) => r.status === "Completed").length,
    Rejected: requestsData.filter((r) => r.status === "Rejected").length,
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Monitor Requests
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Track and manage all your service requests in one place.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg flex items-center border border-gray-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Requests", value: statusCounts.All, color: "bg-maroon", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
          { label: "In Progress", value: statusCounts["In Progress"], color: "bg-blue-500", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
          { label: "Pending", value: statusCounts["Pending Review"], color: "bg-yellow-500", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Completed", value: statusCounts.Completed, color: "bg-green-500", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-9 h-9 ${stat.color} rounded-lg flex items-center justify-center`}>
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title or request ID..."
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
                {status}{" "}
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

      {/* Requests Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4">Request ID</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Type</th>
                <th className="py-3 px-4">Date Filed</th>
                <th className="py-3 px-4">Stage</th>
                <th className="py-3 px-4">Priority</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredRequests.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center">
                    <svg className="w-12 h-12 text-gray-200 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-400 font-medium">No requests found</p>
                    <p className="text-xs text-gray-300 mt-1">Try adjusting your search or filters</p>
                  </td>
                </tr>
              ) : (
                filteredRequests.map((req, idx) => (
                  <tr key={req.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${idx === filteredRequests.length - 1 ? "border-b-0" : ""}`}>
                    <td className="py-3 px-4 text-maroon font-semibold text-xs">{req.id}</td>
                    <td className="py-3 px-4 text-gray-800 font-medium whitespace-nowrap max-w-[250px] truncate">{req.title}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{req.type}</td>
                    <td className="py-3 px-4 text-gray-500 text-xs">{req.dateFiled}</td>
                    <td className="py-3 px-4 text-xs font-medium text-gray-600">{req.stage}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${priorityStyles[req.priority]}`}>
                        {req.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium border ${statusStyles[req.status]}`}>
                        {req.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-maroon hover:text-maroon-dark text-xs font-semibold mr-3">
                        View
                      </button>
                      <button className="text-gray-400 hover:text-gray-600 text-xs font-semibold">
                        Track
                      </button>
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
            Showing <span className="font-semibold text-gray-700">{filteredRequests.length}</span> of{" "}
            <span className="font-semibold text-gray-700">{requestsData.length}</span> requests
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1 text-xs font-medium text-white bg-maroon rounded">1</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 rounded transition-colors">2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
