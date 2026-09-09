"use client";

import { useState } from "react";
import Link from "next/link";

const directorCohortQueue = [
  {
    id: "INC-2024-003",
    title: "AI-Powered Agricultural Decision Support System (AgriBrain)",
    lead: "Dr. Juan Dela Cruz",
    team: "Smart Agri Lab",
    staffScore: "88/100 (Recommended)",
    staffEvaluator: "TBIU Staff Lead",
    seedGrantProposed: "₱1,500,000",
    spaceAllocated: "TBIU Lab Room 204",
    status: "Pending Director Endorsement",
    submitted: "Aug 14, 2024",
    link: "/dashboard/tbiudirector/INC-2024-003",
  },
  {
    id: "INC-2024-002",
    title: "Biodegradable Packaging from Coconut Fiber (CocoPlast)",
    lead: "Dr. Ana Rivera",
    team: "Green Materials Group",
    staffScore: "92/100 (Recommended)",
    staffEvaluator: "TBIU Staff Lead",
    seedGrantProposed: "₱800,000",
    spaceAllocated: "Prototyping Bay 3",
    status: "Approved & Funded",
    submitted: "Jul 25, 2024",
    link: "/dashboard/tbiudirector/INC-2024-002",
  },
  {
    id: "INC-2024-001",
    title: "IoT-Based Water Quality Monitoring for Aquaculture",
    lead: "Dr. Pedro Mateo",
    team: "Marine Tech Innovations",
    staffScore: "84/100 (Recommended)",
    staffEvaluator: "TBIU Staff Lead",
    seedGrantProposed: "₱2,200,000",
    spaceAllocated: "Wet Lab Room A",
    status: "Pending Director Endorsement",
    submitted: "Jun 15, 2024",
    link: "/dashboard/tbiudirector/INC-2024-001",
  },
];

export default function TbiuDirectorGovernancePage() {
  const [cohortQueue, setCohortQueue] = useState(directorCohortQueue);
  const [approvingItem, setApprovingItem] = useState(null);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleApproveAdmission = (id) => {
    setCohortQueue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Approved & Funded" } : item
      )
    );
    setApprovingItem(null);
    setSuccessMsg(true);
    setTimeout(() => setSuccessMsg(false), 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-800 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold text-maroon-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                TBIU Director &middot; Page #23
              </span>
              <span className="text-purple-200 text-xs">
                Technology Business Incubation Unit Governance
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Incubator Governance &amp; Seed Grant Allocation
            </h1>
            <p className="text-sm text-purple-100 mt-1 max-w-2xl">
              Authorize startup cohort admissions, disburse innovation seed grants, sign facility tenancy contracts, and endorse venture graduation into corporate spin-offs.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/tbiudirector/INC-2024-003"
              className="bg-gold hover:bg-gold-dark text-maroon-dark text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              Open Director Decision Portal (#24)
            </Link>
          </div>
        </div>
      </div>

      {successMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center justify-between animate-slide-down">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">
              Venture admission endorsed and Seed Grant authorized! Tenancy contract issued to founder.
            </span>
          </div>
          <button onClick={() => setSuccessMsg(false)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">
            Dismiss
          </button>
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Active Incubatee Ventures", val: "12 Teams", trend: "3 Cohorts", color: "bg-purple-700 text-white", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { label: "Disbursed Seed Grants", val: "₱9.8M", trend: "DOST-TBIU Subsidized", color: "bg-gold text-maroon-dark", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Incubator Lab Occupancy", val: "85%", trend: "17/20 Spaces", color: "bg-maroon text-white", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
          { label: "Graduated Spin-Offs", val: "8 Startups", trend: "Corporate Registered", color: "bg-emerald-600 text-white", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${kpi.color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={kpi.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {kpi.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{kpi.val}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{kpi.label}</p>
          </div>
        ))}
      </div>

      {/* Cohort Admissions Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Venture Admission &amp; Grant Approval Backlog
            </h3>
            <p className="text-xs text-gray-400">
              Evaluated by TBIU Staff awaiting Director executive resolution
            </p>
          </div>
          <span className="text-xs bg-purple-700 text-white font-bold px-3 py-1 rounded-full">
            {cohortQueue.filter((q) => q.status !== "Approved & Funded").length} PENDING
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Application ID &amp; Venture</th>
                <th className="py-3.5 px-4">Founder / Team</th>
                <th className="py-3.5 px-4">TBIU Staff Score</th>
                <th className="py-3.5 px-4">Proposed Seed Grant</th>
                <th className="py-3.5 px-4">Facility Allocation</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {cohortQueue.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-4 max-w-xs">
                    <Link
                      href={`/dashboard/tbiudirector/${encodeURIComponent(item.id)}`}
                      className="font-mono text-[11px] font-bold text-purple-900 hover:underline block"
                    >
                      {item.id}
                    </Link>
                    <p className="font-semibold text-gray-800 text-xs mt-0.5 line-clamp-2">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-gray-400">Submitted: {item.submitted}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-medium text-gray-800">{item.lead}</p>
                    <p className="text-[10px] text-gray-400">{item.team}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {item.staffScore}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-emerald-700">{item.seedGrantProposed}</p>
                    <span className="text-[10px] text-gray-400">Innovation Fund</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-medium text-gray-700">{item.spaceAllocated}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                        item.status === "Approved & Funded"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-purple-50 text-purple-800 border-purple-200"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-1.5">
                    <Link
                      href={`/dashboard/tbiudirector/${encodeURIComponent(item.id)}`}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors inline-block"
                    >
                      Inspect (#24)
                    </Link>
                    {item.status !== "Approved & Funded" && (
                      <button
                        onClick={() => setApprovingItem(item)}
                        className="bg-purple-700 hover:bg-purple-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm inline-block"
                      >
                        Approve Admission
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Director Admission Modal */}
      {approvingItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-purple-900 text-white px-2 py-0.5 rounded">
                  TBIU Director Resolution
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">
                  Authorize Cohort Admission: {approvingItem.id}
                </h3>
              </div>
              <button
                onClick={() => setApprovingItem(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl text-xs space-y-2 border border-purple-200">
              <p><strong>Venture Title:</strong> {approvingItem.title}</p>
              <p><strong>Founder:</strong> {approvingItem.lead} ({approvingItem.team})</p>
              <p><strong>Staff Evaluation:</strong> {approvingItem.staffScore}</p>
              <p><strong>Authorized Seed Grant:</strong> {approvingItem.seedGrantProposed}</p>
              <p><strong>Assigned Facility:</strong> {approvingItem.spaceAllocated}</p>
            </div>

            <p className="text-xs text-gray-600">
              I hereby approve the formal admission of this venture into the USeP Technology Business Incubation program and authorize the disbursement of the initial innovation seed grant.
            </p>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setApprovingItem(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApproveAdmission(approvingItem.id)}
                className="bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                Confirm Admission &amp; Grant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
