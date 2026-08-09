export default function InternalDashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Welcome, Dr. Juan Dela Cruz</h2>
          <p className="text-sm text-gray-500 mt-1 max-w-2xl">
            Manage university intellectual property disclosures, and track internally funded research compliance from your centralized academic dashboard.
          </p>
        </div>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold py-2 px-4 rounded-lg flex items-center border border-gray-300 transition-colors">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Generate Report
        </button>
      </div>

      {/* Active Service Request Tracker */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-maroon text-white p-4 flex justify-between items-center">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            <h3 className="font-semibold text-sm">Active Service Request: SR-2024-089</h3>
          </div>
          <span className="bg-gold text-maroon-dark text-xs font-bold px-3 py-1 rounded-full">IN PROGRESS</span>
        </div>
        
        <div className="p-8 pb-10">
          <div className="relative flex justify-between items-center max-w-4xl mx-auto">
            {/* Connecting Line */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2/3 h-1 bg-maroon z-0"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-maroon text-white rounded-xl flex items-center justify-center shadow-md border-4 border-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div className="absolute top-14 text-center mt-2">
                <p className="text-xs font-bold text-gray-800">Submission</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-maroon text-white rounded-xl flex items-center justify-center shadow-md border-4 border-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div className="absolute top-14 text-center mt-2">
                <p className="text-xs font-bold text-gray-800">Generation</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
            </div>

            {/* Step 3 (Active) */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-14 h-14 bg-white border-2 border-gold rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(212,168,67,0.3)] border-4 border-white">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center text-maroon-dark">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
              </div>
              <div className="absolute top-16 text-center mt-2">
                <p className="text-xs font-bold text-maroon-dark">Admin Review</p>
                <p className="text-xs text-gold-dark font-medium">Processing</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-white border-2 border-gray-200 text-gray-400 rounded-xl flex items-center justify-center border-4 border-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <div className="absolute top-14 text-center mt-2">
                <p className="text-xs font-bold text-gray-400">Decision</p>
                <p className="text-xs text-gray-400">Pending</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Work Section for Requestors */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-sm text-gray-800 flex items-center">
            <svg className="w-4 h-4 mr-2 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            My Pending Requests
          </h3>
          <a href="#" className="text-xs text-maroon hover:text-maroon-dark font-medium flex items-center">
            View All <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-full">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                <th className="py-3 px-4">Request ID</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Date Filed</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-gray-500 font-medium text-xs">REQ-2024-041</td>
                <td className="py-3 px-4 text-gray-800 font-medium whitespace-nowrap">Trademark Application for Smart Irrigation</td>
                <td className="py-3 px-4 text-gray-500 text-xs">Aug 14, 2024</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-yellow-50 text-yellow-700 border border-yellow-200">
                    Pending Review
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-maroon hover:text-maroon-dark text-xs font-semibold">Track</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-gray-500 font-medium text-xs">REQ-2024-039</td>
                <td className="py-3 px-4 text-gray-800 font-medium whitespace-nowrap">Patent Prior Art Search</td>
                <td className="py-3 px-4 text-gray-500 text-xs">Aug 01, 2024</td>
                <td className="py-3 px-4">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                    In Progress
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="text-maroon hover:text-maroon-dark text-xs font-semibold">Track</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Disclosures Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-sm text-gray-800 flex items-center">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              Disclosures
            </h3>
            <a href="#" className="text-xs text-maroon hover:text-maroon-dark font-medium flex items-center">
              View All <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="p-0">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4">Submitted</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800 font-medium">AI-Based Soil Quality Monitoring System</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">Aug 12, 2024</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                      Approved
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800 font-medium">Sustainable Bamboo Composite Material</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">Jul 28, 2024</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      In Review
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-gray-800 font-medium">Hydro-Smart Irrigation Controller</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">Jun 10, 2024</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 border border-gray-200">
                      Closed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Internal Funded Projects */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm p-4">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 text-maroon mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              <div>
                <h3 className="font-bold text-sm text-gray-800">Internal Funded Projects</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Compliance & Utilization Tracking</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
            </button>
          </div>
          
          <div className="space-y-5">
            {/* Project 1 */}
            <div>
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h4 className="text-xs font-bold text-gray-800">USeP Smart Campus Connectivity Project</h4>
                  <p className="text-[10px] text-gray-500">ID: USeP-IP-2024-001</p>
                </div>
              </div>
              <div className="mt-2 mb-1 flex justify-between text-[10px] font-semibold">
                <span className="text-gray-500 uppercase tracking-wider">Fund Utilization</span>
                <span className="text-gray-800">P650,000 / P1,000,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div className="bg-maroon h-1.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="text-[9px] font-bold px-2 py-0.5 bg-yellow-50 text-yellow-700 border border-yellow-200 rounded">DRAFT FOR COST</span>
                <span className="text-[9px] font-bold px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 rounded">REPORT DUE: 4/5</span>
              </div>
            </div>
            
            <hr className="border-gray-100" />
            
            {/* Project 2 */}
            <div>
              <div className="flex justify-between items-end mb-1">
                <div>
                  <h4 className="text-xs font-bold text-gray-800">Renewable Energy Micro-Grid Phase 2</h4>
                  <p className="text-[10px] text-gray-500">ID: USeP-IP-2023-016</p>
                </div>
              </div>
              <div className="mt-2 mb-1 flex justify-between text-[10px] font-semibold">
                <span className="text-gray-500 uppercase tracking-wider">Fund Utilization</span>
                <span className="text-gray-800">P400,000 / P400,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Innovation Banner */}
      <div className="bg-maroon-dark text-white rounded-xl p-6 relative overflow-hidden shadow-md">
        {/* Abstract pattern background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
        
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Innovation for the Future</h3>
          <p className="text-xs text-gray-200 max-w-2xl leading-relaxed mb-5">
            USeP is dedicated to harmonizing local research into global solutions. Access our resources under for technology commercialization guides, IP policies, and institutional templates.
          </p>
          <div className="flex space-x-3">
            <button className="bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-xs py-2 px-4 rounded transition-colors shadow-sm">
              Explore Resources
            </button>
            <button className="bg-transparent hover:bg-maroon-deeper border border-gray-400 text-white font-semibold text-xs py-2 px-4 rounded transition-colors">
              IP Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
