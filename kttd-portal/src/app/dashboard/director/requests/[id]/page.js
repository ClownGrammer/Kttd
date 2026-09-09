"use client";

import { useState } from "react";
import Link from "next/link";
import { use } from "react";

const allRequests = {
  "SR-2024-089": {
    id: "SR-2024-089",
    title: "Patent Application: AI-Based Soil & Moisture Monitoring",
    requestor: "Dr. Juan Dela Cruz",
    department: "College of Engineering",
    email: "jdelacruz@usep.edu.ph",
    type: "Invention Patent",
    dateSubmitted: "Aug 14, 2024",
    forwardedBy: "Maria Santos (Staff Lead)",
    endorsementOffice: "VPRE (Research & Extension)",
    dateForwarded: "Aug 16, 2024",
    priority: "High",
    status: "Pending Executive Signature",
    description:
      "A comprehensive patent application for an IoT and AI-driven soil condition analyzer with predictive agricultural algorithms. Verified and endorsed by Admin Staff with clean prior art search.",
    inventors: ["Dr. Juan Dela Cruz", "Engr. Maria Lopez", "Prof. Alex Tan"],
    staffRecommendation:
      "Admin Staff has verified all technical drawings, claims, and inventor assignment agreements. Legal clearance has been obtained. Recommend immediate approval for IPOPHL electronic submission.",
    legalClearance: "CLEARED - USeP Legal Office Resolution #2024-042",
    attachments: [
      { name: "Patent_Specification_Claims_v3.pdf", size: "3.2 MB" },
      { name: "Prior_Art_Search_Report.pdf", size: "1.8 MB" },
      { name: "Legal_Clearance_Resolution.pdf", size: "950 KB" },
      { name: "Inventor_Assignment_Deed.pdf", size: "640 KB" },
    ],
  },
};

export default function DirectorServiceRequestDetailPage({ params }) {
  const resolvedParams = use(params);
  const reqId = decodeURIComponent(resolvedParams.id);
  const request = allRequests[reqId] || allRequests["SR-2024-089"];

  const [endorsed, setEndorsed] = useState(false);
  const [directorNotes, setDirectorNotes] = useState(
    "Approved and endorsed on behalf of the Knowledge and Technology Transfer Division. Forwarded for University President signature and IPOPHL statutory filing."
  );
  const [showSignModal, setShowSignModal] = useState(false);
  const [showReturnModal, setShowReturnModal] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Back button */}
      <Link
        href="/dashboard/director"
        className="inline-flex items-center text-xs font-bold text-maroon hover:text-maroon-dark transition-colors"
      >
        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Director Overview (#20)
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-bold text-maroon bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
              {request.id}
            </span>
            <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
              Page #21: Director Sign-Off
            </span>
            <span className="text-[11px] font-bold text-gold-dark bg-gold/15 px-2 py-0.5 rounded border border-gold/30">
              {request.endorsementOffice}
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            {request.title}
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Requestor: {request.requestor} &middot; Forwarded by {request.forwardedBy} on {request.dateForwarded}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setShowReturnModal(true)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold px-4 py-2.5 rounded-lg border border-gray-300 transition-colors"
          >
            Return with Notes
          </button>
          {endorsed ? (
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-2.5 rounded-lg flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Officially Endorsed &amp; Sealed
            </span>
          ) : (
            <button
              onClick={() => setShowSignModal(true)}
              className="bg-maroon hover:bg-maroon-dark text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all"
            >
              <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Execute Director Endorsement
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Columns: Application & Endorsement Dossier */}
        <div className="lg:col-span-2 space-y-6">
          {/* Executive Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-800 flex items-center gap-2 border-b border-gray-100 pb-3">
              <svg className="w-4 h-4 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Staff Endorsement &amp; Legal Verification
            </h2>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-bold text-emerald-900">
                  Legal Clearance Validated
                </span>
              </div>
              <p className="text-xs text-emerald-800 font-mono">
                {request.legalClearance}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                Admin Staff Recommendation Note
              </p>
              <p className="text-xs text-gray-700 bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                {request.staffRecommendation}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-1">
                Technology Description
              </p>
              <p className="text-xs text-gray-700 leading-relaxed bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                {request.description}
              </p>
            </div>

            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                Recognized Inventors / Patent Assignees
              </p>
              <div className="flex flex-wrap gap-2">
                {request.inventors.map((inv, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 text-gray-800 font-semibold px-3 py-1 rounded-lg border border-gray-200"
                  >
                    {inv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Attached Files */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-3">
            <h2 className="text-sm font-bold text-gray-800 border-b border-gray-100 pb-3">
              Official Legal &amp; Technical Documents ({request.attachments.length})
            </h2>
            <div className="space-y-2">
              {request.attachments.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center">
                      PDF
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">{file.name}</p>
                      <p className="text-[10px] text-gray-400">{file.size}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-maroon hover:underline">
                    View / Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Official Endorsement Execution */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
              Executive Endorsement Resolution
            </h2>

            <div>
              <label className="block text-[11px] font-bold text-gray-600 uppercase tracking-wider mb-1">
                Director Decision Notes
              </label>
              <textarea
                rows={4}
                value={directorNotes}
                onChange={(e) => setDirectorNotes(e.target.value)}
                className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-gold transition-colors"
              />
            </div>

            <div className="border-2 border-dashed border-gold/60 rounded-xl p-4 text-center bg-gold/5">
              <div className="w-12 h-12 rounded-full bg-gold/20 text-maroon mx-auto flex items-center justify-center font-bold mb-2">
                SEAL
              </div>
              <p className="text-xs font-bold text-gray-800">
                USeP KTTD Executive Seal
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Ready to be stamped with certificate resolution ID KTTD-RES-2024-089.
              </p>
            </div>

            <button
              onClick={() => setShowSignModal(true)}
              className="w-full bg-maroon hover:bg-maroon-dark text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              Authorize &amp; Sign Endorsement
            </button>
          </div>
        </div>
      </div>

      {/* Signature Confirmation Modal */}
      {showSignModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-maroon text-white px-2 py-0.5 rounded">
                  Director Execution
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">
                  Authorize {request.id} for IPOPHL Submission
                </h3>
              </div>
              <button
                onClick={() => setShowSignModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              By authorizing this endorsement, you certify on behalf of the University of Southeastern Philippines that this intellectual property filing complies with University IP policy and the Philippine Technology Transfer Act.
            </p>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setShowSignModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setEndorsed(true);
                  setShowSignModal(false);
                }}
                className="bg-maroon hover:bg-maroon-dark text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                Confirm Endorsement &amp; Apply Seal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Return Modal */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900">
                Return Request to Admin Staff
              </h3>
              <button
                onClick={() => setShowReturnModal(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">
                Reason for Return / Clarification
              </label>
              <textarea
                rows={3}
                placeholder="Specify clarifications or missing documents..."
                className="w-full text-xs p-3 bg-gray-50 border border-gray-200 rounded-xl"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setShowReturnModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowReturnModal(false)}
                className="bg-gray-800 text-white text-xs font-bold px-4 py-2 rounded-lg"
              >
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
