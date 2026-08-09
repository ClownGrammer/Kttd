import { useState } from 'react';

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
  "Goal 17: Partnerships to achieve the Goal"
];

export default function NewServiceRequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    classification: '',
    title: '',
    sdgs: [],
    scope: ''
  });

  const handleSdgToggle = (goal) => {
    setFormData(prev => {
      const isSelected = prev.sdgs.includes(goal);
      if (isSelected) {
        return { ...prev, sdgs: prev.sdgs.filter(g => g !== goal) };
      } else {
        return { ...prev, sdgs: [...prev.sdgs, goal] };
      }
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-50 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl border-4 border-maroon-dark/20 overflow-hidden relative">
        
        {/* Floating Header Tab */}
        <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-semibold px-4 py-1.5 flex items-center rounded-br-lg z-20">
          <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Internal Service Request
        </div>

        {/* Modal Header */}
        <div className="bg-maroon-dark text-white p-4 pt-8 shrink-0">
          <h2 className="text-xl font-bold tracking-wider ml-2">KTTD</h2>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          
          {/* Section 1 */}
          <div className="bg-white rounded-lg border border-maroon-dark/10 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-maroon-dark mb-5">1. Basic Information</h3>
            
            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 mb-3">Requestor Classification</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div 
                  onClick={() => setFormData({ ...formData, classification: 'internal' })}
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${formData.classification === 'internal' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-maroon'}`}
                >
                  <div className="font-bold text-sm text-maroon-dark">Internal Researcher</div>
                  <div className="text-[10px] text-gray-500 mt-1">USeP Regular Faculty or Staff</div>
                </div>
                <div 
                  onClick={() => setFormData({ ...formData, classification: 'internal_funded' })}
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${formData.classification === 'internal_funded' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-maroon'}`}
                >
                  <div className="font-bold text-sm text-maroon-dark">Internal (Funded) Researcher</div>
                  <div className="text-[10px] text-gray-500 mt-1">External-funded research at USeP</div>
                </div>
                <div 
                  onClick={() => setFormData({ ...formData, classification: 'external' })}
                  className={`border-2 rounded-lg p-3 cursor-pointer transition-colors ${formData.classification === 'external' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-maroon'}`}
                >
                  <div className="font-bold text-sm text-maroon-dark">External Researcher</div>
                  <div className="text-[10px] text-gray-500 mt-1">Researchers or inventors outside the University</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-gray-700 mb-2">Title of the Innovation/Technology</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter formal title" 
                className="w-full border border-gray-200 rounded p-2.5 text-sm focus:border-maroon focus:outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-maroon-dark mb-1">Sustainable Development Goals (SDGs) Alignment</label>
              <p className="text-[10px] text-gray-500 mb-2">Select the UN Sustainable Development Goals that align with this research/innovation.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-60 overflow-y-auto border border-gray-200 rounded p-3 bg-gray-50">
                {sdgList.map((goal, idx) => (
                  <label key={idx} className="flex items-start space-x-2 cursor-pointer p-1.5 hover:bg-white rounded transition-colors">
                    <input 
                      type="checkbox" 
                      className="mt-0.5 rounded border-gray-300 text-maroon focus:ring-maroon" 
                      checked={formData.sdgs.includes(goal)}
                      onChange={() => handleSdgToggle(goal)}
                    />
                    <span className="text-xs text-gray-700">{goal}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg border border-maroon-dark/10 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-maroon-dark mb-5">2. Project Details</h3>
            
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-3">Project Scope</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setFormData({ ...formData, scope: 'academic_thesis' })}
                  className={`border-2 rounded-lg p-4 cursor-pointer flex items-center justify-between transition-colors ${formData.scope === 'academic_thesis' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-maroon'}`}
                >
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-maroon mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                    <div>
                      <div className="font-bold text-sm text-gray-800">Academic Thesis</div>
                      <div className="text-[10px] text-gray-500">Undergraduate or Graduate study</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${formData.scope === 'academic_thesis' ? 'bg-maroon border-maroon' : 'border-gray-300'}`}></div>
                </div>
                <div 
                  onClick={() => setFormData({ ...formData, scope: 'institutional_research' })}
                  className={`border-2 rounded-lg p-4 cursor-pointer flex items-center justify-between transition-colors ${formData.scope === 'institutional_research' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-maroon'}`}
                >
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-maroon mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    <div>
                      <div className="font-bold text-sm text-gray-800">Institutional Research</div>
                      <div className="text-[10px] text-gray-500">University-led R&D project</div>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border ${formData.scope === 'institutional_research' ? 'bg-maroon border-maroon' : 'border-gray-300'}`}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg border border-maroon-dark/10 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-maroon-dark mb-1">3. Document Upload</h3>
            <p className="text-[10px] text-gray-500 mb-4">Please provide the following required forms for triage assessment.</p>
            
            <div className="space-y-3">
              <div className="border border-dashed border-maroon bg-maroon/5 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-maroon mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <div className="font-bold text-xs text-maroon-dark">Technology Disclosure Form (FM-USeP-KTT-02)</div>
                    <div className="text-[10px] text-gray-500">Critical documentation for triage</div>
                  </div>
                </div>
                <button className="bg-maroon-dark hover:bg-maroon text-white text-[10px] font-bold py-1.5 px-4 rounded transition-colors shadow-sm">
                  Upload File
                </button>
              </div>

              <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                  <div>
                    <div className="font-bold text-xs text-gray-800">Signed Deed of Assignment</div>
                    <div className="text-[10px] text-gray-500">Legal transfer of intellectual property</div>
                  </div>
                </div>
                <button className="bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 text-[10px] font-bold py-1.5 px-4 rounded transition-colors">
                  Upload File
                </button>
              </div>

              <div className="border border-gray-200 bg-gray-50 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  <div>
                    <div className="font-bold text-xs text-gray-800">Non-Disclosure Agreement (FM-USeP-KTT-03)</div>
                    <div className="text-[10px] text-gray-500">Signed by all project members</div>
                  </div>
                </div>
                <button className="bg-white hover:bg-gray-100 text-gray-600 border border-gray-300 text-[10px] font-bold py-1.5 px-4 rounded transition-colors">
                  Upload File
                </button>
              </div>
            </div>

            <div className="mt-6 bg-red-50 rounded-lg p-4 flex items-start border border-red-100">
              <svg className="w-5 h-5 text-red-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div>
                <div className="text-xs font-bold text-maroon-dark mb-1">System Process Note</div>
                <div className="text-[10px] text-red-800/80 leading-relaxed">
                  Upon clicking &apos;Submit Request&apos;, the system will generate a tracking number and alert the KTTD admin staff to review your documents. If the criteria are met, your request will be relayed to deputy directors for triage.
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-4">
            <button 
              onClick={onClose}
              className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 font-bold text-xs py-2.5 px-8 rounded-lg transition-colors"
            >
              Back
            </button>
            <button 
              onClick={() => {
                console.log("Form Data:", formData);
                onClose();
              }}
              className="bg-gold hover:bg-gold-dark text-maroon-dark font-bold text-sm py-2.5 px-8 rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Submit Request
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-200/50 p-4 shrink-0 flex justify-between items-center text-gray-400">
          <div>
            <div className="font-bold text-sm text-gray-700">eInvFile</div>
            <div className="text-[9px]">© 2024 University of Southeastern Philippines. All rights reserved.</div>
          </div>
          <div className="flex space-x-4 text-[9px] underline">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Contact Us</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}

