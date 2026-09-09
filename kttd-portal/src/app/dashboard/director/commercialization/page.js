"use client";

import { useState } from "react";
import Link from "next/link";

const directorDeals = [
  {
    id: "TTA-2024-009",
    title: "Technology Transfer & Exclusive Licensing: Solar Water Purification",
    licensee: "AquaPure Systems Mindanao Corp.",
    inventorLead: "Dr. Elena Cruz",
    type: "Exclusive Commercial License",
    totalDealValue: "₱7,800,000",
    upfrontFee: "₱1,200,000",
    royaltyRate: "4.0% Annual Gross Revenue",
    inventorShare: "₱4,680,000 (60%)",
    universityFund: "₱3,120,000 (40%)",
    status: "Pending Director Signature",
    dateSubmitted: "Aug 15, 2024",
  },
  {
    id: "TTA-2024-008",
    title: "Non-Exclusive Licensing: HydroSmart Precision Irrigation Controller",
    licensee: "Davao Smart Ag Innovations",
    inventorLead: "Engr. Mark Santos",
    type: "Non-Exclusive License",
    totalDealValue: "₱6,000,000",
    upfrontFee: "₱800,000",
    royaltyRate: "5.0% Net Sales",
    inventorShare: "₱3,600,000 (60%)",
    universityFund: "₱2,400,000 (40%)",
    status: "Pending Director Signature",
    dateSubmitted: "Aug 12, 2024",
  },
  {
    id: "TTA-2023-014",
    title: "University Spin-Off Equity & IP Agreement: USePCare Telemedicine",
    licensee: "MedLink Solutions PH (USeP Spin-Off)",
    inventorLead: "Dr. Lisa Tan",
    type: "University Spin-Off Agreement",
    totalDealValue: "₱8,500,000",
    upfrontFee: "₱1,500,000 + 10% Equity",
    royaltyRate: "3.5% Net Revenue",
    inventorShare: "₱5,100,000 (60%)",
    universityFund: "₱3,400,000 (40%)",
    status: "Executed & Active",
    dateSubmitted: "Dec 10, 2023",
  },
];

export default function DirectorCommercializationPage() {
  const [deals, setDeals] = useState(directorDeals);
  const [activeDeal, setActiveDeal] = useState(null);
  const [dealSuccess, setDealSuccess] = useState(false);

  const handleSignDeal = (dealId) => {
    setDeals((prev) =>
      prev.map((d) => (d.id === dealId ? { ...d, status: "Executed & Active" } : d))
    );
    setActiveDeal(null);
    setDealSuccess(true);
    setTimeout(() => setDealSuccess(false), 4000);
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Banner */}
      <div className="bg-gradient-to-r from-maroon-dark via-maroon to-maroon-deeper text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-gold text-maroon-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded">
                Executive Director &middot; Page #22
              </span>
              <span className="text-gray-300 text-xs">
                Commercialization Governance &amp; Technology Licensing
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              Technology Transfer &amp; Commercialization Governance
            </h1>
            <p className="text-sm text-gray-200 mt-1 max-w-2xl">
              Authorize high-value licensing contracts, approve university spin-off equity structures, and monitor royalty distribution pursuant to RA 10055.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/director"
              className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2.5 rounded-lg border border-white/20 transition-colors"
            >
              Back to Director Overview (#20)
            </Link>
          </div>
        </div>
      </div>

      {dealSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center justify-between animate-slide-down">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-semibold">
              Technology Transfer Agreement authorized and digitally sealed! Transferred to accounting and legal archives.
            </span>
          </div>
          <button onClick={() => setDealSuccess(false)} className="text-emerald-700 hover:text-emerald-900 text-xs font-bold">
            Dismiss
          </button>
        </div>
      )}

      {/* Financial KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Commercial Portfolio", val: "₱22.3M", trend: "3 Active Agreements", color: "bg-maroon text-white", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
          { label: "Inventor Royalty Pool", val: "₱13.38M", trend: "60% Statutory Share", color: "bg-gold text-maroon-dark", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
          { label: "University Research Fund", val: "₱8.92M", trend: "40% Institutional Share", color: "bg-emerald-600 text-white", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
          { label: "Active Spin-Off Ventures", val: "2 Enterprises", trend: "Equity Holding Active", color: "bg-purple-600 text-white", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${item.color}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                {item.trend}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{item.val}</p>
            <p className="text-xs text-gray-500 font-medium mt-0.5">{item.label}</p>
          </div>
        ))}
      </div>

      {/* RA 10055 Statutory Distribution Chart */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Philippine Tech Transfer Act (RA 10055) Royalty Allocation Framework
            </h3>
            <p className="text-xs text-gray-400">
              Mandatory revenue sharing formula applied to all USeP commercialization proceeds
            </p>
          </div>
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            Compliant
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 bg-maroon/5 border border-maroon/20 rounded-xl">
            <span className="text-2xl font-black text-maroon block mb-1">60%</span>
            <p className="font-bold text-gray-800">Lead Inventors &amp; Researchers</p>
            <p className="text-gray-500 mt-1">
              Directly disbursed to faculty and student innovators named on the intellectual property disclosure.
            </p>
          </div>
          <div className="p-4 bg-gold/10 border border-gold/30 rounded-xl">
            <span className="text-2xl font-black text-maroon block mb-1">20%</span>
            <p className="font-bold text-gray-800">Originating Academic College</p>
            <p className="text-gray-500 mt-1">
              Allocated to the department / college laboratory enhancement fund.
            </p>
          </div>
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl">
            <span className="text-2xl font-black text-emerald-700 block mb-1">20%</span>
            <p className="font-bold text-gray-800">University KTTD Revolving Fund</p>
            <p className="text-gray-500 mt-1">
              Reinvested in patent filing subsidies and incubator operations.
            </p>
          </div>
        </div>
      </div>

      {/* Licensing Agreements Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-sm font-bold text-gray-800">
              Technology Transfer Agreements (TTA) Sign-Off Queue
            </h3>
            <p className="text-xs text-gray-400">
              Agreements negotiated by Admin Staff requiring Director executive authorization
            </p>
          </div>
          <span className="text-xs bg-maroon text-white font-bold px-3 py-1 rounded-full">
            {deals.filter((d) => d.status !== "Executed & Active").length} PENDING
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <th className="py-3.5 px-4">Agreement ID &amp; Technology</th>
                <th className="py-3.5 px-4">Commercial Partner</th>
                <th className="py-3.5 px-4">Contract Type</th>
                <th className="py-3.5 px-4">Deal Value / Royalties</th>
                <th className="py-3.5 px-4">Inventor Share (60%)</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              {deals.map((deal) => (
                <tr key={deal.id} className="hover:bg-gray-50/80 transition-colors">
                  <td className="py-3.5 px-4 max-w-xs">
                    <span className="font-mono text-[11px] font-bold text-maroon block">
                      {deal.id}
                    </span>
                    <p className="font-semibold text-gray-800 text-xs mt-0.5 line-clamp-2">
                      {deal.title}
                    </p>
                    <span className="text-[10px] text-gray-400">Lead: {deal.inventorLead}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-semibold text-gray-800">{deal.licensee}</p>
                    <p className="text-[10px] text-gray-400">{deal.dateSubmitted}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-gray-700 bg-gray-100 px-2 py-0.5 rounded text-[10px]">
                      {deal.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-emerald-700">{deal.totalDealValue}</p>
                    <p className="text-[10px] text-gray-500 font-medium">{deal.royaltyRate}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-maroon">{deal.inventorShare}</p>
                    <p className="text-[10px] text-gray-400">USeP: {deal.universityFund}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                        deal.status === "Executed & Active"
                          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                          : "bg-amber-50 text-amber-800 border-amber-200"
                      }`}
                    >
                      {deal.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    {deal.status !== "Executed & Active" ? (
                      <button
                        onClick={() => setActiveDeal(deal)}
                        className="bg-maroon hover:bg-maroon-dark text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        Authorize &amp; Sign
                      </button>
                    ) : (
                      <span className="text-[11px] font-semibold text-emerald-700">
                        Active Agreement
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contract Sign-Off Modal */}
      {activeDeal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-100 animate-slide-down space-y-4">
            <div className="flex justify-between items-start border-b border-gray-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-maroon text-white px-2 py-0.5 rounded">
                  Director Contract Execution
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">
                  Authorize {activeDeal.id}
                </h3>
              </div>
              <button
                onClick={() => setActiveDeal(null)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                &times;
              </button>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl text-xs space-y-2 border border-gray-200">
              <p><strong>Technology:</strong> {activeDeal.title}</p>
              <p><strong>Licensee:</strong> {activeDeal.licensee}</p>
              <p><strong>Total Value:</strong> {activeDeal.totalDealValue} ({activeDeal.royaltyRate})</p>
              <p><strong>Inventor Allocation (60%):</strong> {activeDeal.inventorShare}</p>
              <p><strong>University Research Allocation (40%):</strong> {activeDeal.universityFund}</p>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              I hereby authorize the execution of this Technology Transfer Agreement on behalf of the University of Southeastern Philippines, subject to annual commercial audits and compliance monitoring.
            </p>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                onClick={() => setActiveDeal(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleSignDeal(activeDeal.id)}
                className="bg-maroon hover:bg-maroon-dark text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 shadow-sm"
              >
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Sign Agreement &amp; Authorize TTA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
