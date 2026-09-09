"use client";

import { useState } from "react";
import Link from "next/link";
import ProcessOutputsCard from "../../../components/ProcessOutputsCard";

const directorForms = [
  { code: "—", title: "OVPRDE Clearance Form", category: "Clearance", status: "available" },
  { code: "FM-USeP-KTT-01", title: "Classroom Coursework Output Form", category: "Disclosure", status: "available" },
  { code: "—", title: "Signed Deed of Assignment", category: "Legal", status: "available" },
  { code: "FM-USeP-KTT-02", title: "Technology Disclosure Form", category: "Disclosure", status: "available" },
  { code: "FM-USeP-KTT-03", title: "Non-Disclosure Agreement (NDA)", category: "Legal", status: "available" },
  { code: "FM-USeP-KTT-04", title: "Triage Decision Criteria Form", category: "Evaluation", status: "available" },
  { code: "—", title: "Copyright Registry Enrollment Form", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-05", title: "Intellectual Property Rights Monitoring Form", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-06", title: "Quotation Form", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-07", title: "Statement of Account", category: "IPMU", status: "available" },
  { code: "FM-USeP-KTT-08", title: "Incubation Program Request Form", category: "Incubation", status: "available" },
  { code: "FM-USeP-KTT-09", title: "Notice of Admission to the Incubation Program", category: "Incubation", status: "available" },
  { code: "FM-USeP-KTT-10", title: "Incubation Milestone Checklist", category: "Monitoring", status: "available" },
  { code: "FM-USeP-KTT-11", title: "Incubation Clearance Certificate Form", category: "Clearance", status: "available" },
];

const directorEndorsementQueue = [
  {
    id: "SR-2024-089",
    title: "Patent Application: AI-Based Soil & Moisture Monitoring",
    requestor: "Dr. Juan Dela Cruz",
    department: "College of Engineering",
    type: "Patent",
    forwardedBy: "Maria Santos (Staff Lead)",
    endorsementOffice: "VPRE (Research & Extension)",
    dateForwarded: "Aug 16, 2024",
    priority: "High",
    status: "Pending Executive Signature",
    legalClearance: "Approved by Legal Office",
    link: "/dashboard/director/requests/SR-2024-089",
  },
  {
    id: "SR-2024-078",
    title: "Utility Model: HydroSmart Precision Irrigation Controller",
    requestor: "Engr. Mark Santos",
    department: "College of Engineering",
    type: "Utility Model",
    forwardedBy: "Maria Santos (Staff Lead)",
    endorsementOffice: "VPRDE (Research & Development)",
    dateForwarded: "Aug 15, 2024",
    priority: "High",
    status: "Pending Executive Signature",
    legalClearance: "Approved by Legal Office",
    link: "/dashboard/director/requests/SR-2024-078",
  },
  {
    id: "SR-2024-065",
    title: "Patent Prior Art Search — Bamboo Composite Structural Materials",
    requestor: "Dr. Roberto Lim",
    department: "College of Engineering",
    type: "Patent",
    forwardedBy: "Roberto Lim",
    endorsementOffice: "VPRE (Research & Extension)",
    dateForwarded: "Aug 12, 2024",
    priority: "Medium",
    status: "Pending Review",
    legalClearance: "In Review",
    link: "/dashboard/director/requests/SR-2024-065",
  },
  {
    id: "SR-2024-071",
    title: "Copyright Registration for USeP Research Analytics Suite",
    requestor: "Prof. Lisa Gomez",
    department: "College of Computing",
    type: "Copyright",
    forwardedBy: "Admin Staff",
    endorsementOffice: "VPAA (Academic Affairs)",
    dateForwarded: "Aug 10, 2024",
    priority: "Low",
    status: "Endorsed",
    legalClearance: "Approved",
    link: "/dashboard/director/requests/SR-2024-071",
  },
];

const priorityBadges = {
  High: "bg-red-50 text-red-600 border-red-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  Low: "bg-gray-100 text-gray-600 border-gray-200",
};

export default function DirectorOverviewPage() {
  const [queue, setQueue] = useState(directorEndorsementQueue);
  const [filterOffice, setFilterOffice] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [signingItem, setSigningItem] = useState(null);
  const [signSuccess, setSignSuccess] = useState(false);

  const filteredQueue = queue.filter((item) => {
    const matchesOffice =
      filterOffice === "All" || item.endorsementOffice.includes(filterOffice);
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.requestor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesOffice && matchesSearch;
  });

  const handleApproveSignature = (id) => {
    setQueue((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Endorsed & Signed" } : item
      )
    );
    setSigningItem(null);
    setSignSuccess(true);
    setTimeout(() => setSignSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Executive Welcome Banner */}
      <div className="bg-gradient-to-r from-maroon-dark via-maroon to-maroon-deeper text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold text-maroon-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                Executive Director &middot; Page #20
              </span>
              <span className="text-gray-300 text-xs">
                KTTD Governance &amp; Institutional Endorsement
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Director Overview &amp; Endorsement Dashboard
            </h1>
            <p className="text-sm text-gray-200 mt-1 max-w-2xl">
              Authorize institutional IP applications, execute technology transfer endorsements across Vice President offices (VPRE, VPRDE, VPAA), and oversee university innovation commercialization.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/dashboard/director/commercialization"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
            >
              Commercialization (#22)
            </Link>
            <Link
              href="/dashboard/tbiudirector"
              className="bg-gold hover:bg-gold-dark text-maroon-dark text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-colors"
            >
              TBIU Governance (#23)
            </Link>
          </div>
        </div>
      </div>

      {signSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center justify-between animate-slide-down">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">
              Official Endorsement and Digital Seal successfully applied! Requestor and IPOPHL routing notified.
            </span>
          </div>
          <button onClick={() => setSignSuccess(false)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">
            Dismiss
          </button>
        </div>
      )}

      {/* High-level Executive KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Pending Executive Endorsements", val: "3 Urgent", trend: "Action Required", color: "bg-maroon text-white", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
          { label: "Total Protected IP Assets", val: "48 Filings", trend: "+12% YoY Growth", color: "bg-gold text-maroon-dark", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
          { label: "Executed Licensing Agreements", val: "₱21.5M", trend: "5 Active Tech Deals", color: "bg-emerald-600 text-white", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Incubated Startups (TBIU)", val: "12 Ventures", trend: "3 Ready to Graduate", color: "bg-purple-600 text-white", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
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

      {/* Deputy Director / Office Portfolios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            office: "VPRE",
            fullName: "Vice President for Research & Extension",
            lead: "Dr. Maria Santos",
            pending: 2,
            filings: 24,
            color: "border-blue-500 bg-blue-50/40",
            badgeColor: "bg-blue-600 text-white",
          },
          {
            office: "VPRDE",
            fullName: "Vice President for R&D and Enterprise",
            lead: "Dr. Roberto Cruz",
            pending: 1,
            filings: 18,
            color: "border-emerald-500 bg-emerald-50/40",
            badgeColor: "bg-emerald-600 text-white",
          },
          {
            office: "VPAA",
            fullName: "Vice President for Academic Affairs",
            lead: "Dr. Patricia Mendoza",
            pending: 0,
            filings: 6,
            color: "border-purple-500 bg-purple-50/40",
            badgeColor: "bg-purple-600 text-white",
          },
        ].map((dept) => (
          <div key={dept.office} className={`p-5 rounded-2xl border ${dept.color} shadow-xs`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded ${dept.badgeColor}`}>
                {dept.office}
              </span>
              <span className="text-xs font-bold text-maroon">
                {dept.pending} Pending Endorsement
              </span>
            </div>
            <h3 className="text-sm font-bold text-gray-900">{dept.lead}</h3>
            <p className="text-[11px] text-gray-500 mb-3">{dept.fullName}</p>
            <div className="flex justify-between text-xs text-gray-600 border-t border-gray-200/60 pt-2.5">
              <span>Total Department IP Filings</span>
              <span className="font-bold text-gray-800">{dept.filings} Filings</span>
            </div>
          </div>
        ))}
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
            placeholder="Search service requests, applicants, or tracking IDs..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:border-gold transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", "VPRE", "VPRDE", "VPAA"].map((office) => (
            <button
              key={office}
              onClick={() => setFilterOffice(office)}
              className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors ${
                filterOffice === office
                  ? "bg-maroon text-white font-bold shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {office === "All" ? "All Offices" : `${office} Office`}
            </button>
          ))}
        </div>
      </div>

      {/* Director Endorsement Queue Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Executive Endorsement &amp; Signature Queue
            </h3>
            <p className="text-xs text-gray-400">
              Requests verified by Admin Staff requiring Director sign-off
            </p>
          </div>
          <span className="text-xs bg-gold text-maroon-dark font-bold px-3 py-1 rounded-full">
            {queue.filter((q) => q.status !== "Endorsed & Signed").length} ACTIVE
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Tracking ID &amp; Title</th>
                <th className="py-3.5 px-4">Lead Applicant</th>
                <th className="py-3.5 px-4">Endorsement Office</th>
                <th className="py-3.5 px-4">Forwarded By / Date</th>
                <th className="py-3.5 px-4">Legal Clearance</th>
                <th className="py-3.5 px-4">Priority / Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {filteredQueue.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-gray-400">
                    No requests currently pending director signature.
                  </td>
                </tr>
              ) : (
                filteredQueue.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-4 max-w-xs">
                      <Link
                        href={`/dashboard/director/requests/${encodeURIComponent(item.id)}`}
                        className="font-mono text-[11px] font-bold text-maroon hover:underline block"
                      >
                        {item.id}
                      </Link>
                      <p className="font-semibold text-gray-800 text-xs mt-0.5 line-clamp-2">
                        {item.title}
                      </p>
                      <span className="text-[10px] text-gray-400">{item.type}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="font-medium text-gray-800">{item.requestor}</p>
                      <p className="text-[10px] text-gray-400">{item.department}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-semibold text-gray-800 text-xs">{item.endorsementOffice}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <p className="text-gray-700 font-medium">{item.forwardedBy}</p>
                      <p className="text-[10px] text-gray-400">{item.dateForwarded}</p>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                        <svg className="w-3 h-3 mr-1 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item.legalClearance}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded border mb-1 ${priorityBadges[item.priority]}`}>
                        {item.priority}
                      </span>
                      <p className="text-[11px] font-bold text-gray-800">{item.status}</p>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1.5">
                      <Link
                        href={`/dashboard/director/requests/${encodeURIComponent(item.id)}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-[11px] font-bold px-2.5 py-1.5 rounded-lg transition-colors inline-block"
                      >
                        Review (#21)
                      </Link>
                      {item.status !== "Endorsed & Signed" && (
                        <button
                          onClick={() => setSigningItem(item)}
                          className="bg-maroon hover:bg-maroon-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm inline-block"
                        >
                          Sign &amp; Seal
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Digital Signature & Seal Modal */}
      {signingItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-maroon text-white px-2 py-0.5 rounded">
                  Director Digital Seal Authorization
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1.5">
                  Endorse {signingItem.id}
                </h3>
              </div>
              <button
                onClick={() => setSigningItem(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="text-xs bg-gray-50 p-4 rounded-xl space-y-2 border border-gray-200">
              <p><strong>Title:</strong> {signingItem.title}</p>
              <p><strong>Requestor:</strong> {signingItem.requestor} ({signingItem.department})</p>
              <p><strong>Endorsement Office:</strong> {signingItem.endorsementOffice}</p>
            </div>

            <div className="border-2 border-dashed border-gold/60 rounded-xl p-4 text-center bg-gold/5">
              <div className="w-12 h-12 rounded-full bg-gold/20 text-maroon mx-auto flex items-center justify-center font-bold mb-2">
                SEAL
              </div>
              <p className="text-xs font-bold text-gray-800">
                Official USeP-KTTD Institutional Endorsement Seal
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Digital signature token verified. Timestamp will be cryptographically appended.
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setSigningItem(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleApproveSignature(signingItem.id)}
                className="bg-maroon hover:bg-maroon-dark text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Apply Digital Seal &amp; Endorsement
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
