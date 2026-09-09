"use client";

import { useState } from "react";

/**
 * ProcessOutputsCard — Reusable component for displaying downloadable/trackable
 * process output forms on each portal dashboard.
 *
 * Props:
 *   forms: Array of { code, title, category, status } — the forms to display
 *   accentColor: string — tailwind color class for accent elements (default: "maroon")
 *   title: string — card title (default: "Process Outputs")
 *   subtitle: string — optional subtitle
 */

const statusConfig = {
  available: {
    label: "Available",
    dotClass: "bg-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  pending: {
    label: "Pending",
    dotClass: "bg-amber-400",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
  },
  draft: {
    label: "Draft",
    dotClass: "bg-blue-400",
    badgeClass: "bg-blue-50 text-blue-600 border-blue-200",
  },
};

const accentColors = {
  maroon: {
    headerBg: "bg-maroon",
    headerText: "text-white",
    accent: "text-maroon",
    accentHover: "hover:text-maroon-dark",
    barBg: "bg-maroon",
    downloadBg: "bg-maroon hover:bg-maroon-dark",
    badgeBg: "bg-gold",
    badgeText: "text-maroon-dark",
  },
  amber: {
    headerBg: "bg-amber-700",
    headerText: "text-white",
    accent: "text-amber-700",
    accentHover: "hover:text-amber-800",
    barBg: "bg-amber-600",
    downloadBg: "bg-amber-700 hover:bg-amber-800",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800",
  },
  purple: {
    headerBg: "bg-purple-800",
    headerText: "text-white",
    accent: "text-purple-700",
    accentHover: "hover:text-purple-800",
    barBg: "bg-purple-600",
    downloadBg: "bg-purple-700 hover:bg-purple-800",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800",
  },
  gold: {
    headerBg: "bg-maroon-dark",
    headerText: "text-white",
    accent: "text-gold-dark",
    accentHover: "hover:text-maroon",
    barBg: "bg-gold",
    downloadBg: "bg-maroon-dark hover:bg-maroon",
    badgeBg: "bg-gold",
    badgeText: "text-maroon-dark",
  },
  emerald: {
    headerBg: "bg-emerald-700",
    headerText: "text-white",
    accent: "text-emerald-700",
    accentHover: "hover:text-emerald-800",
    barBg: "bg-emerald-500",
    downloadBg: "bg-emerald-700 hover:bg-emerald-800",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800",
  },
};

export default function ProcessOutputsCard({
  forms = [],
  accentColor = "maroon",
  title = "Process Outputs",
  subtitle = "Official KTTD forms and documents",
}) {
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const colors = accentColors[accentColor] || accentColors.maroon;

  const categories = ["All", ...new Set(forms.map((f) => f.category))];

  const filteredForms = forms.filter((form) => {
    const matchesCategory =
      filterCategory === "All" || form.category === filterCategory;
    const matchesSearch =
      form.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      form.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Header */}
      <div
        className={`${colors.headerBg} ${colors.headerText} p-4 flex justify-between items-center`}
      >
        <div className="flex items-center">
          <svg
            className="w-5 h-5 mr-3 text-gold"
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
          <div>
            <h3 className="font-semibold text-sm">{title}</h3>
            <p className="text-[10px] text-white/70 mt-0.5">{subtitle}</p>
          </div>
        </div>
        <span
          className={`${colors.badgeBg} ${colors.badgeText} text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider`}
        >
          {forms.length} Forms
        </span>
      </div>

      {/* Filters */}
      <div className="p-3 border-b border-gray-100 bg-gray-50/80">
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
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
              placeholder="Search forms..."
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs text-gray-700 placeholder-gray-400 focus:border-gray-300 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`text-[10px] font-semibold px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  filterCategory === cat
                    ? `${colors.headerBg} text-white shadow-sm`
                    : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Forms List */}
      <div className="p-3 space-y-2 max-h-[400px] overflow-y-auto">
        {filteredForms.length === 0 ? (
          <div className="text-center py-8 text-gray-400 text-xs">
            No forms found matching your search.
          </div>
        ) : (
          filteredForms.map((form, i) => {
            const status = statusConfig[form.status] || statusConfig.available;
            return (
              <div
                key={i}
                className="flex justify-between items-center p-3 border border-gray-100 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all bg-gray-50/50 group"
              >
                <div className="flex items-start flex-1 min-w-0">
                  <div
                    className={`w-1 h-10 rounded-full mr-3 flex-shrink-0 ${
                      form.status === "available"
                        ? colors.barBg
                        : form.status === "pending"
                        ? "bg-amber-400"
                        : "bg-blue-400"
                    }`}
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-800 truncate">
                      {form.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-mono text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">
                        {form.code}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {form.category}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded text-[9px] font-semibold border ${status.badgeClass}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1 ${status.dotClass}`}
                    />
                    {status.label}
                  </span>

                  {/* Download / Pending Icon */}
                  {form.status === "available" ? (
                    <button
                      className={`${colors.accent} ${colors.accentHover} p-1.5 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer`}
                      title="Download Form"
                    >
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
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                      </svg>
                    </button>
                  ) : (
                    <div className="text-gray-300 p-1.5" title={status.label}>
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 px-4 py-3 bg-gray-50/50 flex justify-between items-center">
        <p className="text-[10px] text-gray-400">
          Showing {filteredForms.length} of {forms.length} forms
        </p>
        <button
          className={`text-[10px] font-bold ${colors.accent} ${colors.accentHover} flex items-center cursor-pointer`}
        >
          View All Forms
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
    </div>
  );
}
