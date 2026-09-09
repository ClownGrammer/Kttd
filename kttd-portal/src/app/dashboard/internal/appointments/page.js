"use client";

import { useState } from "react";

const appointmentsData = [
  {
    id: "APT-2024-012",
    title: "Triage Meeting — Patent Application SR-2024-089",
    date: "Aug 22, 2024",
    time: "10:00 AM - 11:00 AM",
    location: "KTTD Conference Room A",
    with: "Dir. Maria Santos",
    status: "Confirmed",
    type: "Triage",
  },
  {
    id: "APT-2024-011",
    title: "IP Consultation — Bamboo Composite Material",
    date: "Aug 25, 2024",
    time: "2:00 PM - 3:00 PM",
    location: "Virtual (MS Teams)",
    with: "Atty. Ricardo Flores",
    status: "Pending",
    type: "Consultation",
  },
  {
    id: "APT-2024-010",
    title: "Document Review — Smart Irrigation Trademark",
    date: "Aug 28, 2024",
    time: "9:00 AM - 10:00 AM",
    location: "KTTD Office, Room 204",
    with: "Admin Staff",
    status: "Pending",
    type: "Review",
  },
];

const pastAppointments = [
  {
    id: "APT-2024-009",
    title: "Initial Assessment — Solar Panel Design TT",
    date: "Aug 05, 2024",
    time: "1:00 PM - 2:00 PM",
    with: "Dir. Maria Santos",
    status: "Completed",
    type: "Assessment",
  },
  {
    id: "APT-2024-008",
    title: "NDA Signing Ceremony — Research Software",
    date: "Jul 28, 2024",
    time: "3:00 PM - 4:00 PM",
    with: "Atty. Ricardo Flores",
    status: "Completed",
    type: "Legal",
  },
];

const typeColors = {
  Triage: "bg-maroon/10 text-maroon border-maroon/20",
  Consultation: "bg-blue-50 text-blue-700 border-blue-200",
  Review: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Assessment: "bg-purple-50 text-purple-700 border-purple-200",
  Legal: "bg-green-50 text-green-700 border-green-200",
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function AppointmentSchedulingPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const currentMonth = "August 2024";

  // Generate mini calendar days for August 2024
  const calendarDays = [];
  const startDay = 4; // August 2024 starts on Thursday (index 4)
  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= 31; i++) calendarDays.push(i);

  const appointmentDays = [5, 22, 25, 28]; // Days with appointments

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Appointment Scheduling</h2>
          <p className="text-sm text-gray-500 mt-1">
            Schedule, manage, and view your KTTD meetings and consultations.
          </p>
        </div>
        <button
          onClick={() => setShowRequestModal(!showRequestModal)}
          className="bg-maroon-dark hover:bg-maroon text-white text-sm font-semibold py-2.5 px-5 rounded-lg flex items-center transition-colors shadow-sm"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Request Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-bold text-sm text-gray-800">{currentMonth}</h3>
            <div className="flex gap-1">
              <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((d) => (
              <div key={d} className="text-center text-[10px] font-semibold text-gray-400 uppercase py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, i) => (
              <button
                key={i}
                onClick={() => day && setSelectedDate(day)}
                disabled={!day}
                className={`w-full aspect-square rounded-lg text-xs font-medium flex items-center justify-center relative transition-all ${
                  !day
                    ? ""
                    : selectedDate === day
                    ? "bg-maroon text-white shadow-sm"
                    : day === 17
                    ? "bg-gold/20 text-maroon-dark font-bold ring-2 ring-gold"
                    : appointmentDays.includes(day)
                    ? "bg-maroon/5 text-maroon hover:bg-maroon/10 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {day}
                {appointmentDays.includes(day) && selectedDate !== day && (
                  <span className="absolute bottom-1 w-1 h-1 bg-maroon rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-5 pt-4 border-t border-gray-100 flex flex-wrap gap-4 text-[10px] text-gray-500">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gold ring-1 ring-gold/30" />
              Today
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-maroon" />
              Has Appointment
            </div>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-sm text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Upcoming Appointments
              </h3>
              <span className="bg-maroon/10 text-maroon text-[10px] font-bold px-2 py-0.5 rounded-full">
                {appointmentsData.length} scheduled
              </span>
            </div>

            <div className="divide-y divide-gray-50">
              {appointmentsData.map((apt) => (
                <div key={apt.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      {/* Date badge */}
                      <div className="bg-maroon-dark text-white rounded-lg p-2.5 text-center min-w-[52px] shadow-sm">
                        <p className="text-[10px] font-semibold text-gold uppercase">
                          {apt.date.split(" ")[0]}
                        </p>
                        <p className="text-lg font-bold leading-none">
                          {apt.date.split(" ")[1].replace(",", "")}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-gray-800 mb-1">{apt.title}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {apt.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {apt.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            {apt.with}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${typeColors[apt.type]}`}>
                        {apt.type}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          apt.status === "Confirmed"
                            ? "bg-green-50 text-green-700"
                            : "bg-yellow-50 text-yellow-700"
                        }`}
                      >
                        {apt.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Appointments */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="p-4 border-b border-gray-100">
              <h3 className="font-bold text-sm text-gray-800 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Past Appointments
              </h3>
            </div>
            <div className="divide-y divide-gray-50">
              {pastAppointments.map((apt) => (
                <div key={apt.id} className="p-4 opacity-70 hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700">{apt.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                        <span>{apt.date}</span>
                        <span>{apt.time}</span>
                        <span>{apt.with}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${typeColors[apt.type]}`}>
                      {apt.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Request Appointment Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl w-full max-w-lg shadow-2xl overflow-hidden">
            <div className="bg-maroon-dark text-white p-5 flex justify-between items-center">
              <h3 className="font-bold text-sm">Request New Appointment</h3>
              <button onClick={() => setShowRequestModal(false)} className="text-white/70 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Purpose</label>
                <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors appearance-none cursor-pointer">
                  <option value="">Select purpose</option>
                  <option>Triage Meeting</option>
                  <option>IP Consultation</option>
                  <option>Document Review</option>
                  <option>Legal Signing</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Related Service Request</label>
                <select className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors appearance-none cursor-pointer">
                  <option value="">Select request (optional)</option>
                  <option>SR-2024-089 — AI-Based Soil Monitoring</option>
                  <option>SR-2024-085 — Smart Irrigation Trademark</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                  <input type="date" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferred Time</label>
                  <input type="time" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:border-gold transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Notes</label>
                <textarea rows={3} placeholder="Additional details or preferences..." className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-300 focus:border-gold transition-colors resize-none" />
              </div>
            </div>
            <div className="p-5 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button onClick={() => setShowRequestModal(false)} className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={() => setShowRequestModal(false)} className="px-5 py-2.5 text-sm font-semibold text-white bg-maroon hover:bg-maroon-dark rounded-lg transition-colors shadow-sm">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
