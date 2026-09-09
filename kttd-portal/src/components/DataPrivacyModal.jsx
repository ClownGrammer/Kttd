"use client";

import { useState } from "react";

export default function DataPrivacyModal({ isOpen, onClose, onAgree }) {
  const [isChecked, setIsChecked] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in-up">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header with USeP Bar */}
        <div className="bg-maroon text-white px-6 py-3.5 flex items-center justify-between border-b-2 border-gold">
          <div className="flex items-center gap-3">
            <span className="font-black text-2xl tracking-wider text-white">
              USeP
            </span>
            <span className="w-px h-5 bg-white/30"></span>
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              Policy &middot; Data Privacy Notice
            </span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white text-xl font-bold p-1 leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          )}
        </div>

        {/* Brand Banner */}
        <div className="bg-gray-50 px-6 py-3.5 border-b border-gray-200 flex items-center justify-center gap-3">
          <div className="w-7 h-7 rounded bg-gold/20 flex items-center justify-center text-maroon font-black text-sm">
            e
          </div>
          <div className="text-center">
            <span className="text-base font-bold text-gray-800 tracking-wide">
              einvfile
            </span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider block font-medium">
              Invention Electronic Filing System &middot; KTTD
            </span>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-gray-700 leading-relaxed">
          {/* Statement with DPO Badge */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* DPO/DPS Badge Graphic */}
            <div className="flex-shrink-0 mx-auto sm:mx-0 w-28 p-3 rounded-2xl bg-gray-50 border-2 border-dashed border-gray-300 text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-4 border-blue-600 bg-white flex flex-col items-center justify-center text-blue-900 shadow-sm mb-1.5">
                <span className="text-[8px] font-black uppercase leading-none">DPO / DPS</span>
                <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[8px] font-mono text-gray-500 font-bold">NPC REG. 2024</span>
              <span className="text-[7px] text-gray-400">RA 10173 COMPLIANT</span>
            </div>

            {/* Privacy Statement Text */}
            <div className="space-y-2 flex-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-maroon">
                IPOPHL &amp; USeP Privacy Statement
              </h3>
              <p className="text-justify text-[11px] text-gray-600">
                By submitting your application, request, or document to us, manually or electronically, and/or ticking the box signifying your agreement to the processing and disclosure of personal data, you hereby give your consent for the University of Southeastern Philippines (USeP) Knowledge and Technology Transfer Division (KTTD) and IPOPHL to collect, record, store, organize, modify, use, share, retain, erase, and/or otherwise process all data received from you in accordance with Republic Act No. 10173 (Data Privacy Act of 2012).
              </p>
              <p className="text-justify text-[11px] text-gray-600">
                The personal information and sensitive personal information collected may be used in relation to the processing of the application, request, or movement, and other functions or activities of the University and IPOPHL, including documentation, communication or notification, public disclosure or posting, publication, incorporation in the processing system, office reporting or presentation, research, sharing to partner institutions, both locally and internationally, profiling for customization, process improvement, delivery of services and other office projects or programs, and for all other legitimate purposes in accordance with the USeP Data Privacy Policy.
              </p>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Disclaimer and Signature */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">
              Disclaimer and Signature
            </h4>
            <p className="text-[11px] text-gray-600 text-justify bg-gray-50 p-3.5 rounded-xl border border-gray-200">
              I certify under pain of perjury that all information I have indicated herein are true and correct to the best of my knowledge and belief, and that my signature appearing herein is genuine and authentic. I likewise understand that the processing of this application is subject to pertinent provisions of the implementing rules and regulations of the IP Code Philippines.
            </p>
          </div>

          {/* Explicit Consent Checkbox */}
          <label className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 text-maroon accent-maroon"
            />
            <span className="text-[11px] text-gray-800 font-medium">
              I have read, understood, and agree to the Data Privacy Statement and Perjury Disclaimer.
            </span>
          </label>
        </div>

        {/* Action Button Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-center items-center">
          <button
            type="button"
            disabled={!isChecked}
            onClick={() => {
              if (onAgree) onAgree();
            }}
            className="w-full sm:w-64 bg-gold hover:bg-gold-dark text-maroon-dark font-black text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all shadow-md hover:shadow-gold/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] text-center"
          >
            AGREE
          </button>
        </div>
      </div>
    </div>
  );
}
