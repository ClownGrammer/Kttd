export default function ExternalDashboard() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Strategic Partnerships Banner */}
      <div className="bg-maroon-dark text-white rounded-xl p-8 relative overflow-hidden shadow-md">
        {/* Subtle background glow/gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

        <div className="relative z-10">
          <span className="inline-block bg-gold text-maroon-dark text-[10px] font-bold px-2 py-1 rounded mb-3 uppercase tracking-wider">
            External Partner Portal
          </span>
          <h2 className="text-3xl font-bold mb-3">Strategic Partnerships</h2>
          <p className="text-sm text-gray-200 max-w-2xl leading-relaxed">
            Driving innovation through collaborative excellence. Access your technology transfer resources, track project assessments, and manage your intellectual property portfolio in coordination with the University of Southeastern Philippines.
          </p>
        </div>
      </div>

      {/* Active External Service Requests */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-sm text-gray-800">Active External Service Requests</h3>
          <a href="#" className="text-xs text-maroon hover:text-maroon-dark font-medium flex items-center">
            View All Logs <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>

        <div className="p-6 pb-8">
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Tracking Number</p>
              <p className="text-sm font-bold text-gray-800">KTTD-2024-EP0892</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-1">Project Lead</p>
              <p className="text-sm font-bold text-gray-800">Dr. Elena Rodriguez</p>
              <p className="text-[10px] text-gray-400">Tech Ventures Corp.</p>
            </div>
          </div>

          <div className="relative flex justify-between items-center max-w-3xl mx-auto px-4">
            {/* Connecting Line */}
            <div className="absolute left-4 right-4 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 z-0"></div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-2/3 h-0.5 bg-maroon z-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 bg-maroon text-white rounded-full flex items-center justify-center border-4 border-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="absolute top-10 text-[9px] font-bold text-gray-800 uppercase tracking-wide">Database</p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 bg-maroon text-white rounded-full flex items-center justify-center border-4 border-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="absolute top-10 text-[9px] font-bold text-gray-800 uppercase tracking-wide">Settings</p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 bg-maroon text-white rounded-full flex items-center justify-center border-4 border-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <p className="absolute top-10 text-[9px] font-bold text-gray-800 uppercase tracking-wide">Launcher</p>
            </div>

            {/* Step 4 (Current) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-8 h-8 bg-white border-2 border-gray-300 text-gray-300 rounded-full flex items-center justify-center border-4 border-white">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
              <p className="absolute top-10 text-[9px] font-bold text-gray-400 uppercase tracking-wide">Pending</p>
            </div>
          </div>
        </div>

        {/* Next Milestone */}
        <div className="bg-gray-50 p-4 flex items-center border-t border-gray-100">
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Next Milestone</p>
            <p className="text-xs text-gray-800 font-medium">Appointment with Director: <span className="text-maroon">Oct 24, 2024 - 2:00 PM</span></p>
          </div>
        </div>
      </div>

      {/* Process Outputs & Manuals Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Process Outputs */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-sm text-gray-800">Process Outputs</h3>
          </div>
          <div className="p-4 space-y-3">
            {[
              { title: "Signed Deed of Assignment", subtitle: "Validated by Office of Legal Affairs", status: "download" },
              { title: "NDA Agreement", subtitle: "KTTD/NDA-2024-112", status: "download" },
              { title: "OVPRDE Clearance Form", subtitle: "Pending Signature", status: "pending" },
              { title: "Technology Disclosure", subtitle: "FINALIZED OCT 12", status: "download" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:border-maroon/30 transition-colors bg-gray-50/50">
                <div className="flex items-start">
                  <div className={`w-1 h-8 rounded mr-3 ${item.status === 'download' ? 'bg-maroon' : 'bg-gold'}`}></div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-800">{item.title}</h4>
                    <p className="text-[10px] text-gray-500 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
                {item.status === 'download' ? (
                  <button className="text-maroon hover:text-maroon-dark p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  </button>
                ) : (
                  <div className="text-gray-400 p-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* External Guidelines */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-bold text-sm text-gray-800">External Guidelines & IP Manuals</h3>
          </div>
          <div className="p-4 space-y-4">
            {/* Manual 1 */}
            <div className="border border-gray-100 rounded-xl p-4 flex hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-maroon-dark text-white flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Intellectual Property Manual</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">Comprehensive guide on patenting, copyright, and University IP protocols for external stakeholders.</p>
                <a href="#" className="text-xs font-bold text-maroon hover:text-maroon-dark flex items-center">
                  Read Manual <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>

            {/* Manual 2 */}
            <div className="border border-gray-100 rounded-xl p-4 flex hover:shadow-md transition-shadow bg-gray-50">
              <div className="w-12 h-12 rounded-lg bg-gold text-maroon-dark flex items-center justify-center flex-shrink-0 mr-4 shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-800 mb-1">Partnership Framework</h4>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">Standard operating procedures for industry-academic collaborations, and joint ventures.</p>
                <a href="#" className="text-xs font-bold text-maroon hover:text-maroon-dark flex items-center">
                  View Framework <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
