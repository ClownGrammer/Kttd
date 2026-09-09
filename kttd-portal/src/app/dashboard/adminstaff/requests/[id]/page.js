"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";

const allProjects = {
  "SR-2024-089": {
    id: "SR-2024-089",
    title: "Patent Application for AI-Based Soil Monitoring",
    requestor: "Dr. Juan Dela Cruz",
    department: "College of Engineering",
    email: "jdelacruz@usep.edu.ph",
    type: "Patent",
    dateSubmitted: "Aug 14, 2024",
    priority: "High",
    status: "Ready to Forward",
    daysInQueue: 3,
    description:
      "Application for a patent covering an AI-based soil quality monitoring system that uses machine learning algorithms to analyze soil composition, moisture levels, and nutrient content in real-time. The system integrates with IoT sensors deployed across agricultural fields and provides predictive analytics for optimal crop management.",
    ipType: "Utility Patent",
    inventors: ["Dr. Juan Dela Cruz", "Engr. Maria Lopez", "Prof. Alex Tan"],
    relatedDisclosure: "DISC-2024-012",
    attachments: [
      { name: "Patent_Draft_v3.pdf", size: "2.4 MB", date: "Aug 14, 2024" },
      { name: "Prior_Art_Search_Results.pdf", size: "1.1 MB", date: "Aug 12, 2024" },
      { name: "Technical_Drawings.pdf", size: "4.7 MB", date: "Aug 13, 2024" },
      { name: "Inventor_Declarations.pdf", size: "890 KB", date: "Aug 14, 2024" },
    ],
    timeline: [
      { date: "Aug 14, 2024", action: "Request submitted", by: "Dr. Juan Dela Cruz", status: "completed" },
      { date: "Aug 15, 2024", action: "Assigned to Admin Staff", by: "System", status: "completed" },
      { date: "Aug 16, 2024", action: "Documents verified", by: "Admin Staff", status: "completed" },
      { date: "Aug 17, 2024", action: "Ready for deputy director review", by: "Admin Staff", status: "current" },
      { date: "Pending", action: "Deputy director endorsement", by: "—", status: "pending" },
      { date: "Pending", action: "Final decision", by: "—", status: "pending" },
    ],
    staffNotes: [
      {
        author: "Admin Staff",
        date: "Aug 16, 2024",
        note: "All required documents have been verified. Prior art search shows no conflicts. Ready for forwarding to VPRE.",
      },
    ],
  },
  "SR-2024-085": {
    id: "SR-2024-085",
    title: "Trademark Application for Smart Irrigation System",
    requestor: "Dr. Ana Reyes",
    department: "College of Agriculture",
    email: "areyes@usep.edu.ph",
    type: "Trademark",
    dateSubmitted: "Aug 10, 2024",
    priority: "Medium",
    status: "Needs Preparation",
    daysInQueue: 7,
    description:
      "Trademark registration for the 'HydroSmart' brand name and logo associated with the smart irrigation control system developed by the College of Agriculture research team.",
    ipType: "Trademark",
    inventors: ["Dr. Ana Reyes", "Dr. Pedro Garcia"],
    relatedDisclosure: "DISC-2024-008",
    attachments: [
      { name: "Trademark_Application.pdf", size: "1.2 MB", date: "Aug 10, 2024" },
      { name: "Logo_Design_Files.zip", size: "5.3 MB", date: "Aug 10, 2024" },
    ],
    timeline: [
      { date: "Aug 10, 2024", action: "Request submitted", by: "Dr. Ana Reyes", status: "completed" },
      { date: "Aug 11, 2024", action: "Assigned to Admin Staff", by: "System", status: "completed" },
      { date: "Aug 12, 2024", action: "Under preparation", by: "Admin Staff", status: "current" },
      { date: "Pending", action: "Documents verification", by: "—", status: "pending" },
      { date: "Pending", action: "Deputy director endorsement", by: "—", status: "pending" },
    ],
    staffNotes: [
      {
        author: "Admin Staff",
        date: "Aug 12, 2024",
        note: "Missing trademark classification details. Requested additional information from the applicant.",
      },
    ],
  },
};

const deputyDirectors = [
  { name: "Dr. Maria Santos", role: "VPRE", avatar: "MS", color: "bg-blue-500", pendingCount: 4 },
  { name: "Dr. Roberto Cruz", role: "VPRDE", avatar: "RC", color: "bg-emerald-500", pendingCount: 2 },
  { name: "Dr. Patricia Mendoza", role: "VPAA", avatar: "PM", color: "bg-purple-500", pendingCount: 1 },
];

const statusStyles = {
  "Needs Preparation": "bg-orange-50 text-orange-700 border-orange-200",
  "Under Review": "bg-blue-50 text-blue-700 border-blue-200",
  "Ready to Forward": "bg-emerald-50 text-emerald-700 border-emerald-200",
  Forwarded: "bg-green-50 text-green-700 border-green-200",
  Returned: "bg-red-50 text-red-600 border-red-200",
};

const priorityStyles = {
  High: "bg-red-50 text-red-600 border-red-200",
  Medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Low: "bg-gray-100 text-gray-600 border-gray-200",
};

export default function ServiceRequestDetailPage({ params }) {
  const resolvedParams = use(params);
  const projectId = decodeURIComponent(resolvedParams.id);
  const project = allProjects[projectId] || allProjects["SR-2024-089"];

  const [staffNote, setStaffNote] = useState("");
  const [showForwardModal, setShowForwardModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);
  const [returnReason, setReturnReason] = useState("");

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Back Navigation */}
      <Link
        href="/dashboard/adminstaff"
        className="inline-flex items-center text-sm text-gray-500 hover:text-maroon transition-colors font-medium"
      >
        <svg
          className="w-4 h-4 mr-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Admin Staff Hub
      </Link>

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {project.id}
            </span>
            <span
              className={`text-[10px] font-medium px-2.5 py-0.5 rounded border ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
            <span
              className={`text-[10px] font-medium px-2.5 py-0.5 rounded border ${priorityStyles[project.priority]}`}
            >
              {project.priority} Priority
            </span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-gray-500">
            {project.type} &middot; Filed {project.dateSubmitted} &middot;{" "}
            {project.daysInQueue > 0
              ? `${project.daysInQueue} days in queue`
              : "Processed"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {project.status === "Ready to Forward" && (
            <button
              onClick={() => setShowForwardModal(true)}
              className="bg-maroon-dark hover:bg-maroon text-white text-sm font-semibold py-2.5 px-5 rounded-lg flex items-center transition-colors shadow-sm"
            >
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
              Forward to Deputy Director
            </button>
          )}
          <button
            onClick={() => setShowReturnModal(true)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-lg flex items-center border border-gray-300 transition-colors"
          >
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
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
            Return to Requestor
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Project Description */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Project Description
              </h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-5 pt-5 border-t border-gray-100">
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    IP Type
                  </p>
                  <p className="text-xs font-medium text-gray-700">
                    {project.ipType}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    Related Disclosure
                  </p>
                  <p className="text-xs font-medium text-maroon">
                    {project.relatedDisclosure}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                    Inventors / Authors
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.inventors.map((inv) => (
                      <span
                        key={inv}
                        className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-lg font-medium"
                      >
                        {inv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Attachments */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                Attachments ({project.attachments.length})
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {project.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-700">
                        {file.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {file.size} &middot; {file.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-maroon hover:text-maroon-dark text-xs font-semibold transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Staff Notes */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Staff Notes &amp; Recommendations
              </h3>
            </div>
            <div className="p-5">
              {/* Existing notes */}
              {project.staffNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="bg-gold-light/30 border border-gold-light rounded-lg p-4 mb-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-700">
                      {note.author}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      {note.date}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {note.note}
                  </p>
                </div>
              ))}

              {/* Add note */}
              <div className="mt-4">
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Add Staff Note
                </label>
                <textarea
                  value={staffNote}
                  onChange={(e) => setStaffNote(e.target.value)}
                  placeholder="Add your review notes, recommendations, or comments..."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:border-gold transition-colors resize-none"
                />
                <div className="flex justify-end mt-2">
                  <button className="bg-maroon hover:bg-maroon-dark text-white text-xs font-semibold py-2 px-4 rounded-lg transition-colors">
                    Save Note
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Requestor Info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800">
                Requestor Information
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-maroon rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {project.requestor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800">
                    {project.requestor}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {project.department}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-xs text-maroon font-medium">
                  {project.email}
                </p>
              </div>
            </div>
          </div>

          {/* Processing Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800">
                Processing Timeline
              </h3>
            </div>
            <div className="p-4">
              <div className="relative">
                {project.timeline.map((step, idx) => (
                  <div key={idx} className="flex gap-3 mb-4 last:mb-0">
                    {/* Timeline line and dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                          step.status === "completed"
                            ? "bg-maroon border-maroon"
                            : step.status === "current"
                            ? "bg-gold border-gold animate-pulse-glow"
                            : "bg-white border-gray-300"
                        }`}
                      />
                      {idx < project.timeline.length - 1 && (
                        <div
                          className={`w-0.5 flex-1 mt-1 ${
                            step.status === "completed"
                              ? "bg-maroon"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-4">
                      <p
                        className={`text-xs font-medium ${
                          step.status === "current"
                            ? "text-maroon-dark font-bold"
                            : step.status === "completed"
                            ? "text-gray-700"
                            : "text-gray-400"
                        }`}
                      >
                        {step.action}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {step.date} &middot; {step.by}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <h3 className="font-bold text-sm text-gray-800">
                Quick Actions
              </h3>
            </div>
            <div className="p-4 space-y-2">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 text-xs font-medium text-gray-700">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
                Print Summary
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 text-xs font-medium text-gray-700">
                <svg
                  className="w-4 h-4 text-gray-400"
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
                Download All Files
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 text-xs font-medium text-gray-700">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email Requestor
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forward Modal */}
      {showForwardModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slide-down overflow-hidden">
            <div className="bg-maroon text-white p-5">
              <h3 className="font-bold text-sm flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold"
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
                Forward to Deputy Director
              </h3>
              <p className="text-[10px] text-gray-300 mt-1">
                Select a deputy director to forward {project.id} for endorsement
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Select Deputy Director
                </label>
                <div className="space-y-2">
                  {deputyDirectors.map((dd) => (
                    <button
                      key={dd.name}
                      onClick={() => setSelectedDirector(dd.name)}
                      className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all text-left border-2 ${
                        selectedDirector === dd.name
                          ? "border-maroon bg-red-50"
                          : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div
                        className={`w-10 h-10 ${dd.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {dd.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-800">
                          {dd.name}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {dd.role} &middot; {dd.pendingCount} pending items
                        </p>
                      </div>
                      {selectedDirector === dd.name && (
                        <svg
                          className="w-5 h-5 text-maroon"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Endorsement Comments (Optional)
                </label>
                <textarea
                  placeholder="Add your recommendation or comments for the deputy director..."
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:border-gold transition-colors resize-none"
                />
              </div>
            </div>
            <div className="p-5 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button
                onClick={() => {
                  setShowForwardModal(false);
                  setSelectedDirector(null);
                }}
                className="text-sm font-semibold text-gray-500 hover:text-gray-700 px-4 py-2 transition-colors"
              >
                Cancel
              </button>
              <button
                disabled={!selectedDirector}
                className={`text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors ${
                  selectedDirector
                    ? "bg-maroon-dark hover:bg-maroon text-white shadow-sm"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                Forward Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Return Modal */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slide-down overflow-hidden">
            <div className="bg-gray-800 text-white p-5">
              <h3 className="font-bold text-sm flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-orange-400"
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
                Return to Requestor
              </h3>
              <p className="text-[10px] text-gray-300 mt-1">
                Return {project.id} to {project.requestor} with feedback
              </p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Return Reason
                </label>
                <select
                  value={returnReason}
                  onChange={(e) => setReturnReason(e.target.value)}
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:border-gold transition-colors"
                >
                  <option value="">Select a reason...</option>
                  <option value="incomplete">Incomplete Documentation</option>
                  <option value="revision">Requires Revision</option>
                  <option value="additional">Additional Information Needed</option>
                  <option value="clarification">Clarification Required</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2 block">
                  Detailed Feedback
                </label>
                <textarea
                  placeholder="Provide detailed feedback for the requestor..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:border-gold transition-colors resize-none"
                />
              </div>
            </div>
            <div className="p-5 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
              <button
                onClick={() => {
                  setShowReturnModal(false);
                  setReturnReason("");
                }}
                className="text-sm font-semibold text-gray-500 hover:text-gray-700 px-4 py-2 transition-colors"
              >
                Cancel
              </button>
              <button className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold py-2.5 px-5 rounded-lg transition-colors shadow-sm">
                Return Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
