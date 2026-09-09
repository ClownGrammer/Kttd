"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";

const incubationData = {
  "INC-2024-003": {
    id: "INC-2024-003",
    title: "AI-Powered Agricultural Decision Support System (AgriBrain)",
    lead: "Dr. Juan Dela Cruz",
    team: "Smart Agri Lab",
    department: "College of Engineering / IT",
    email: "jdelacruz@usep.edu.ph",
    phone: "+63 917 123 4567",
    submitted: "Aug 14, 2024",
    status: "Needs Staff Review",
    stage: "Pre-Incubation",
    fundingReq: "₱1,500,000",
    summary:
      "AgriBrain is an integrated IoT and AI predictive system that analyzes micro-climate, soil chemistry, and crop imagery to deliver hyper-localized pest warnings, fertilizer schedules, and harvest forecasts for high-value crops in Davao Region.",
    problemStatement:
      "Smallholder farmers lose 35-40% of their seasonal yield to unpredicted blight and improper fertilization schedules due to lack of localized agronomist support.",
    solution:
      "Edge-AI soil probes combined with a low-bandwidth mobile app that runs offline LLM inferences for indigenous crop varieties.",
    sdgs: [
      "SDG 2: Zero Hunger",
      "SDG 9: Industry, Innovation & Infrastructure",
      "SDG 12: Responsible Consumption & Production",
    ],
    teamMembers: [
      { name: "Dr. Juan Dela Cruz", role: "Project Lead & AI Specialist" },
      { name: "Engr. Maria Lopez", role: "Hardware & IoT Engineer" },
      { name: "Prof. Alex Tan", role: "Agronomy Research Lead" },
    ],
    requestedResources: [
      "Dedicated desk at TBIU Lab Room 204",
      "Access to USeP High Performance Computing (HPC) Cluster",
      "Electronics prototyping equipment & 3D printers",
      "Mentorship in Intellectual Property valuation & business modeling",
    ],
    attachments: [
      { name: "AgriBrain_Business_Pitch_Deck.pdf", size: "3.8 MB" },
      { name: "Technical_Architecture_Diagram.pdf", size: "1.4 MB" },
      { name: "Market_Validation_Surveys.xlsx", size: "820 KB" },
    ],
  },
};

export default function StaffIncubationDetailPage({ params }) {
  const resolvedParams = use(params);
  const reqId = decodeURIComponent(resolvedParams.id);
  const data = incubationData[reqId] || incubationData["INC-2024-003"];

  // Rubric Scores
  const [techScore, setTechScore] = useState(27); // max 30
  const [marketScore, setMarketScore] = useState(22); // max 25
  const [teamScore, setTeamScore] = useState(23); // max 25
  const [readinessScore, setReadinessScore] = useState(18); // max 20

  const totalScore = techScore + marketScore + teamScore + readinessScore;

  const [selectedMentor, setSelectedMentor] = useState("Engr. Leo Valdes");
  const [selectedSpace, setSelectedSpace] = useState("TBIU Lab Room 204");
  const [staffComments, setStaffComments] = useState(
    "The applicant team demonstrates strong technical capability and has a working prototype. SDG alignment is verified. Recommend admission into the 2024 Incubation Cohort with an initial grant endorsement of ₱1,500,000."
  );

  const [showForwardModal, setShowForwardModal] = useState(false);
  const [forwarded, setForwarded] = useState(false);

  const handleForward = () => {
    setShowForwardModal(false);
    setForwarded(true);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Back button */}
      <Link
        href="/dashboard/tbiustaff"
        className="inline-flex items-center text-xs font-bold text-amber-800 hover:text-amber-900 transition-colors"
      >
        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to TBIU Staff Incubation Management (#18)
      </Link>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              {data.id}
            </span>
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              Page #19: Staff Evaluation Rubric
            </span>
            <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              {data.stage}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Applicant: {data.lead} &middot; Team: {data.team} &middot; Submitted: {data.submitted}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {forwarded ? (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Forwarded to TBIU Director (#23)
            </span>
          ) : (
            <button
              onClick={() => setShowForwardModal(true)}
              className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Forward to TBIU Director
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Application Dossier */}
        <div className="lg:col-span-2 space-y-6">
          {/* Executive Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-3">
              <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Venture Overview &amp; Problem-Solution Fit
            </h2>

            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                Executive Pitch
              </p>
              <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                {data.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Problem Addressed
                </p>
                <p className="text-xs text-gray-700 bg-red-50/50 p-3 rounded-xl border border-red-100">
                  {data.problemStatement}
                </p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Proposed Solution
                </p>
                <p className="text-xs text-gray-700 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100">
                  {data.solution}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                UN Sustainable Development Goals (SDG Alignment)
              </p>
              <div className="flex flex-wrap gap-2">
                {data.sdgs.map((sdg, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-lg"
                  >
                    {sdg}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Team and Resources */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-3">
              <svg className="w-4 h-4 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Founding Team &amp; Incubation Facility Requirements
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  Key Team Members
                </p>
                <div className="space-y-2">
                  {data.teamMembers.map((m, i) => (
                    <div key={i} className="p-2.5 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-maroon text-gold font-bold text-xs flex items-center justify-center">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">{m.name}</p>
                        <p className="text-[10px] text-gray-400">{m.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                  Requested Incubation Resources
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {data.requestedResources.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 bg-gray-50 p-2 rounded-lg border border-gray-100">
                      <span className="text-amber-700 font-bold">•</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Staff Evaluation Rubric & Allocation Form */}
        <div className="space-y-6">
          {/* Rubric Score Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-3">
              <h2 className="text-sm font-bold text-gray-900">
                Staff Scoring Rubric
              </h2>
              <span className="text-xs font-black text-amber-800 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                Total: {totalScore}/100
              </span>
            </div>

            {/* Rubric Criteria Sliders */}
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between text-gray-700 font-medium mb-1">
                  <span>1. Tech Innovation &amp; IP Novelty</span>
                  <span className="font-bold text-amber-800">{techScore} / 30</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={techScore}
                  onChange={(e) => setTechScore(Number(e.target.value))}
                  className="w-full accent-amber-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-gray-700 font-medium mb-1">
                  <span>2. Market Size &amp; Commercial Viability</span>
                  <span className="font-bold text-amber-800">{marketScore} / 25</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={marketScore}
                  onChange={(e) => setMarketScore(Number(e.target.value))}
                  className="w-full accent-amber-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-gray-700 font-medium mb-1">
                  <span>3. Team Capability &amp; Commitment</span>
                  <span className="font-bold text-amber-800">{teamScore} / 25</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="25"
                  value={teamScore}
                  onChange={(e) => setTeamScore(Number(e.target.value))}
                  className="w-full accent-amber-700"
                />
              </div>

              <div>
                <div className="flex justify-between text-gray-700 font-medium mb-1">
                  <span>4. Incubation Readiness &amp; SDGs</span>
                  <span className="font-bold text-amber-800">{readinessScore} / 20</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={readinessScore}
                  onChange={(e) => setReadinessScore(Number(e.target.value))}
                  className="w-full accent-amber-700"
                />
              </div>
            </div>

            {/* Allocation Form */}
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Assign Lead Mentor
                </label>
                <select
                  value={selectedMentor}
                  onChange={(e) => setSelectedMentor(e.target.value)}
                  className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <option>Engr. Leo Valdes (IoT &amp; Hardware)</option>
                  <option>Ms. Clara Santos (Agri-Business &amp; Finance)</option>
                  <option>Dr. Roberto Cruz (IP Strategy)</option>
                  <option>Dr. Manuel Gomez (AI &amp; Software)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Assign Incubation Lab Space
                </label>
                <select
                  value={selectedSpace}
                  onChange={(e) => setSelectedSpace(e.target.value)}
                  className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl"
                >
                  <option>TBIU Lab Room 204 (Computing &amp; AI)</option>
                  <option>TBIU Prototyping Bay 3</option>
                  <option>Wet Lab Room A (Agri / Bio)</option>
                  <option>Coworking Hot Desk #12</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                  Staff Recommendation Notes
                </label>
                <textarea
                  rows={3}
                  value={staffComments}
                  onChange={(e) => setStaffComments(e.target.value)}
                  className="w-full text-xs p-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Forward Modal */}
      {showForwardModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                  Forward to TBIU Director (#23)
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-0.5">
                  Confirm Evaluation &amp; Grant Endorsement
                </h3>
              </div>
              <button
                onClick={() => setShowForwardModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="bg-amber-50 p-4 rounded-xl text-xs space-y-2 border border-amber-200">
              <p className="font-bold text-amber-900">Summary of Staff Recommendation:</p>
              <p className="text-gray-700">&bull; <strong>Rubric Score:</strong> {totalScore}/100</p>
              <p className="text-gray-700">&bull; <strong>Assigned Mentor:</strong> {selectedMentor}</p>
              <p className="text-gray-700">&bull; <strong>Assigned Facility:</strong> {selectedSpace}</p>
              <p className="text-gray-700">&bull; <strong>Recommended Seed Grant:</strong> {data.fundingReq}</p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setShowForwardModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleForward}
                className="bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                Confirm &amp; Forward to TBIU Director
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
