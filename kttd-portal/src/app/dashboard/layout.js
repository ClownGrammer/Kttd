"use client";

import { useState } from "react";
import NewServiceRequestModal from "../../components/NewServiceRequestModal";

export default function DashboardLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-maroon text-white flex items-center justify-between px-6 py-4 shadow-md z-10 relative">
        <div className="flex items-center">
          <h1 className="text-gold font-bold text-xl tracking-wider">KTTD</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gold transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gold text-maroon-dark font-bold flex items-center justify-center text-sm border-2 border-white cursor-pointer">
            JD
          </div>
          <a href="/" className="text-sm font-semibold text-white hover:text-gold transition-colors ml-4 flex items-center border border-white/30 hover:border-gold px-3 py-1.5 rounded-lg">
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </a>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
          <div className="p-6">
            <h2 className="text-sm font-bold text-gray-800">Researcher Portal</h2>
            <p className="text-xs text-gray-500 mb-6">eiraFile Management</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-maroon-dark hover:bg-maroon text-white text-sm font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center transition-colors shadow-sm"
            >
              <span className="mr-2 text-lg">+</span> New Service Request
            </button>
          </div>
          
          <nav className="flex-1 px-4 space-y-1">
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-maroon-dark bg-red-50 rounded-lg border-l-4 border-maroon">
              <svg className="w-5 h-5 mr-3 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-maroon hover:bg-gray-50 rounded-lg transition-colors">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Pending
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-maroon hover:bg-gray-50 rounded-lg transition-colors">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              History
            </a>
            <a href="#" className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-maroon hover:bg-gray-50 rounded-lg transition-colors">
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50 flex flex-col">
          <div className="flex-1 p-6 sm:p-10">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="bg-maroon-deeper text-white text-xs py-4 px-6 flex justify-between items-center mt-auto">
            <div>
              <span className="text-gold font-bold">eiraFile</span> | University of Southeastern Philippines.
              <span className="ml-4 text-gray-300">© 2024 USeP. All rights reserved.</span>
            </div>
            <div className="flex space-x-6 text-gray-300">
              <a href="#" className="hover:text-gold transition-colors">Privacy</a>
              <a href="#" className="hover:text-gold transition-colors">Support</a>
              <a href="#" className="hover:text-gold transition-colors">Institutional Info</a>
            </div>
          </footer>
        </main>
      </div>

      {/* New Service Request Modal */}
      <NewServiceRequestModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
