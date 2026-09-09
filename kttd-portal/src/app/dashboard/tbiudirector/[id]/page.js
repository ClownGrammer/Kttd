"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";

const allIncubationRequests = {
  "INC-2024-003": {
    id: "INC-2024-003",
    title: "AI-Powered Agricultural Decision Support System (AgriBrain)",
    lead: "Dr. Juan Dela Cruz",
    team: "Smart Agri Lab",
    department: "College of Engineering / IT",
    email: "jdelacruz@usep.edu.ph",
    submittedDate: "Aug 14, 2024",
    stage: "Pre-Incubation",
    requestedGrant: "₱1,500,000",
    staffScore: "88/100",
    staffScores: {
      innovation: "27 / 30",
      market: "22 / 25",
      team: "23 / 25",
      readiness: "18 / 20",
    },
    staffLead: "Maria Santos (TBIU Staff Lead)",
    recommendedMentor: "Engr. Leo Valdes (IoT & Hardware)",
    recommendedSpace: "TBIU Lab Room 204 (AI & Computing)",
    staffRemarks:
      "Venture shows outstanding technical novelty with working hardware probes. High SDG alignment. Recommend full admission with ₱1,500,000 DOST-TBIU seed grant tranche.",
    executivePitch:
      "AgriBrain is an integrated IoT and AI predictive system that analyzes micro-climate, soil chemistry, and crop imagery to deliver hyper-localized pest warnings, fertilizer schedules, and harvest forecasts for high-value crops in Davao Region.",
    attachments: [
      { name: "AgriBrain_Business_Pitch_Deck.pdf", size: "3.8 MB" },
      { name: "TBIU_Staff_Evaluation_Rubric.pdf", size: "1.2 MB" },
      { name: "Budget_Breakdown_and_Milestones.xlsx", size: "750 KB" },
    ],
  },
};

export default function DirectorIncubationDetailPage({ params }) {
  const resolvedParams = use(params);
  const reqId = decodeURIComponent(resolvedParams.id);
  const data = allIncubationRequests[reqId] || allIncubationRequests["INC-2024-003"];

  const [approvedGrant, setApprovedGrant] = useState(1500000);
  const [isAdmitted, setIsAdmitted] = useState(false);
  const [directorNotes, setDirectorNotes] = useState(
    "Approved for Cohort 2024. Seed grant authorized for disbursement in three milestone tranches. Facility tenancy contract approved."
  );
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Back button */}
      <Link
        href="/dashboard/tbiudirector"
        className="inline-flex items-center text-xs font-bold text-purple-900 hover:text-purple-950 transition-colors"
      >
        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to TBIU Governance Overview (#23)
      </Link>

      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-bold text-purple-900 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
              {data.id}
            </span>
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              Page #24: Director Incubation Sign-Off
            </span>
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Staff Score: {data.staffScore}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {data.title}
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Founder: {data.lead} &middot; Team: {data.team} &middot; Submitted: {data.submittedDate}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {isAdmitted ? (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Admitted &amp; Funded (Resolution Issued)
            </span>
          ) : (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="bg-purple-900 hover:bg-purple-950 text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all"
            >
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Approve Admission &amp; Disburse Grant
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Application & Staff Evaluation Dossier */}
        <div className="lg:col-span-2 space-y-6">
          {/* Staff Scorecard */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-3">
              <svg className="w-4 h-4 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              TBIU Staff Evaluation Report
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Tech &amp; IP</span>
                <span className="text-sm font-bold text-purple-900">{data.staffScores.innovation}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Market Size</span>
                <span className="text-sm font-bold text-purple-900">{data.staffScores.market}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Team Commitment</span>
                <span className="text-sm font-bold text-purple-900">{data.staffScores.team}</span>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 font-bold uppercase block">Readiness</span>
                <span className="text-sm font-bold text-purple-900">{data.staffScores.readiness}</span>
              </div>
            </div>

            <div className="bg-purple-50/70 border border-purple-200 rounded-xl p-4">
              <p className="text-xs font-bold text-purple-950 mb-1">
                TBIU Staff Endorsement Remarks ({data.staffLead})
              </p>
              <p className="text-xs text-purple-900 leading-relaxed">
                {data.staffRemarks}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Assigned Mentor</span>
                <p className="font-bold text-gray-800 mt-0.5">{data.recommendedMentor}</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] text-gray-400 uppercase font-bold block">Allocated Lab Space</span>
                <p className="font-bold text-gray-800 mt-0.5">{data.recommendedSpace}</p>
              </div>
            </div>
          </div>

          {/* Business Pitch & Files */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-3">
              Application Dossier &amp; Supporting Files
            </h2>
            <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
              {data.executivePitch}
            </p>
            <div className="space-y-2 pt-2">
              {data.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 font-bold text-xs flex items-center justify-center">
                      DOC
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{file.name}</p>
                      <p className="text-[10px] text-gray-400">{file.size}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-purple-900 hover:underline">
                    View / Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Director Resolution & Seed Grant Authorization */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
              Seed Grant &amp; Admission Resolution
            </h2>

            {/* Grant Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">
                  Authorized Seed Grant Amount
                </label>
                <span className="text-sm font-black text-emerald-700">
                  ₱{approvedGrant.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="3000000"
                step="100000"
                value={approvedGrant}
                onChange={(e) => setApprovedGrant(Number(e.target.value))}
                className="w-full accent-purple-800"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>Min: ₱500K</span>
                <span>Requested: ₱1.5M</span>
                <span>Max: ₱3.0M</span>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                Director Approval Resolution Notes
              </label>
              <textarea
                rows={4}
                value={directorNotes}
                onChange={(e) => setDirectorNotes(e.target.value)}
                className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold transition-colors"
              />
            </div>

            <div className="border-2 border-dashed border-purple-300 rounded-xl p-4 text-center bg-purple-50/50">
              <div className="w-12 h-12 rounded-full bg-purple-900 text-gold mx-auto flex items-center justify-center font-bold mb-2">
                TBIU
              </div>
              <p className="text-xs font-bold text-gray-800">
                Official TBIU Cohort Admission Stamp
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Resolution ID: TBIU-RES-2024-003 &middot; Tranche 1 (40%) ready on contract signing.
              </p>
            </div>

            <button
              onClick={() => setShowConfirmModal(true)}
              className="w-full bg-purple-900 hover:bg-purple-950 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              Authorize Admission &amp; Issue Resolution
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-purple-950 text-white px-2 py-0.5 rounded">
                  Director Execution
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">
                  Authorize Admission: {data.id}
                </h3>
              </div>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl text-xs space-y-2 border border-purple-200">
              <p><strong>Venture:</strong> {data.title}</p>
              <p><strong>Founder:</strong> {data.lead}</p>
              <p><strong>Authorized Seed Grant:</strong> ₱{approvedGrant.toLocaleString()}</p>
              <p><strong>Facility:</strong> {data.recommendedSpace}</p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsAdmitted(true);
                  setShowConfirmModal(false);
                }}
                className="bg-purple-900 hover:bg-purple-950 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                Confirm Admission &amp; Issue Grant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
