"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EditIncubationRequestPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: "AI-Powered Agricultural Decision Support System",
    description:
      "A machine learning platform that provides real-time crop management recommendations based on soil data, weather patterns, and historical yield data.",
    team: "Smart Agri Lab",
    lead: "Dr. Juan Dela Cruz",
    email: "jdelacruz@usep.edu.ph",
    duration: "18",
    fundingAmount: "1500000",
    objectives:
      "1. Develop a predictive model for crop yield optimization\n2. Create a mobile interface for farmer accessibility\n3. Integrate IoT soil sensors for real-time data collection\n4. Pilot test in 3 partner farm sites in Davao Region",
    methodology:
      "The project will employ an Agile development approach with iterative sprints. Phase 1 focuses on data collection and model training. Phase 2 involves mobile app development. Phase 3 covers field testing and validation.",
    expectedOutcomes:
      "- Functional ML model with 85%+ accuracy\n- Mobile application deployed on Android/iOS\n- At least 50 farmer-users during pilot\n- 2 peer-reviewed publications",
    sdgs: [
      "Goal 2: Zero Hunger",
      "Goal 9: Industry, Innovation and Infrastructure",
    ],
    scope: "institutional_research",
  });

  const sdgList = [
    "Goal 1: No Poverty",
    "Goal 2: Zero Hunger",
    "Goal 3: Good Health and Well-being",
    "Goal 4: Quality Education",
    "Goal 5: Gender Equality",
    "Goal 6: Clean Water and Sanitation",
    "Goal 7: Affordable and Clean Energy",
    "Goal 8: Decent Work and Economic Growth",
    "Goal 9: Industry, Innovation and Infrastructure",
    "Goal 10: Reduced Inequality",
    "Goal 11: Sustainable Cities and Communities",
    "Goal 12: Responsible Consumption and Production",
    "Goal 13: Climate Action",
    "Goal 14: Life Below Water",
    "Goal 15: Life on Land",
    "Goal 16: Peace and Justice Strong Institutions",
    "Goal 17: Partnerships to achieve the Goal",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSdgToggle = (goal) => {
    setFormData((prev) => ({
      ...prev,
      sdgs: prev.sdgs.includes(goal)
        ? prev.sdgs.filter((g) => g !== goal)
        : [...prev.sdgs, goal],
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
    router.push("/dashboard/internal/incubation");
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <Link href="/dashboard/internal/incubation" className="hover:text-maroon transition-colors">
            Incubation Requests
          </Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-600 font-medium">Edit Request</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Edit Incubation Request
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              INC-2024-003 · Last saved Aug 14, 2024
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
              Under Review
            </span>
          </div>
        </div>
      </div>

      {/* Form Sections */}
      <div className="space-y-6">
        {/* Section 1: Basic Information */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
            <h3 className="text-sm font-bold text-gray-800 flex items-center">
              <span className="w-6 h-6 bg-maroon text-white rounded-md flex items-center justify-center text-xs font-bold mr-2">1</span>
              Basic Information
            </h3>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Research Team / Lab
                </label>
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Project Lead
                </label>
                <input
                  type="text"
                  name="lead"
                  value={formData.lead}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Duration (Months)
                </label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Requested Funding (₱)
              </label>
              <input
                type="number"
                name="fundingAmount"
                value={formData.fundingAmount}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Project Details */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
            <h3 className="text-sm font-bold text-gray-800 flex items-center">
              <span className="w-6 h-6 bg-maroon text-white rounded-md flex items-center justify-center text-xs font-bold mr-2">2</span>
              Project Details
            </h3>
          </div>
          <div className="p-6 space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Objectives
              </label>
              <textarea
                name="objectives"
                value={formData.objectives}
                onChange={handleChange}
                rows={4}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors resize-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Methodology
              </label>
              <textarea
                name="methodology"
                value={formData.methodology}
                onChange={handleChange}
                rows={3}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Expected Outcomes
              </label>
              <textarea
                name="expectedOutcomes"
                value={formData.expectedOutcomes}
                onChange={handleChange}
                rows={4}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors resize-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Section 3: SDG Alignment */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
            <h3 className="text-sm font-bold text-gray-800 flex items-center">
              <span className="w-6 h-6 bg-maroon text-white rounded-md flex items-center justify-center text-xs font-bold mr-2">3</span>
              SDG Alignment
            </h3>
          </div>
          <div className="p-6">
            <p className="text-xs text-gray-500 mb-4">
              Select the UN Sustainable Development Goals this project aligns with.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-3 bg-gray-50">
              {sdgList.map((goal) => (
                <label key={goal} className="flex items-start space-x-2 cursor-pointer p-1.5 hover:bg-white rounded transition-colors">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded border-gray-300 text-maroon accent-maroon"
                    checked={formData.sdgs.includes(goal)}
                    onChange={() => handleSdgToggle(goal)}
                  />
                  <span className="text-xs text-gray-700">{goal}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Supporting Documents */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
            <h3 className="text-sm font-bold text-gray-800 flex items-center">
              <span className="w-6 h-6 bg-maroon text-white rounded-md flex items-center justify-center text-xs font-bold mr-2">4</span>
              Supporting Documents
            </h3>
          </div>
          <div className="p-6 space-y-3">
            {/* Existing document */}
            <div className="border border-green-200 bg-green-50/50 rounded-lg p-3 flex justify-between items-center">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-bold text-xs text-gray-800">Project Proposal Document.pdf</div>
                  <div className="text-[10px] text-gray-500">Uploaded Aug 10, 2024 · 2.4 MB</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-maroon hover:text-maroon-dark p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <button className="text-red-400 hover:text-red-600 p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Upload area */}
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-maroon/30 transition-colors cursor-pointer">
              <svg className="w-8 h-8 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-500 font-medium">Drop files here or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-2 pb-6">
        <Link
          href="/dashboard/internal/incubation"
          className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            Save Draft
          </button>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="px-6 py-2.5 text-sm font-semibold text-white bg-maroon hover:bg-maroon-dark rounded-lg transition-all shadow-sm hover:shadow-md disabled:opacity-70 flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
