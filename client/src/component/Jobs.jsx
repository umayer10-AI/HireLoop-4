'use client';

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

export default function Jobs({ initialJobs = [] }) {
  // State Management (Image 4257.jpg layout UI tracking)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);

  // Dynamic Categories extracting logic
  const categories = useMemo(() => {
    const unique = new Set(initialJobs.map(j => j.jobCategory).filter(Boolean));
    return ['All Categories', ...Array.from(unique)];
  }, [initialJobs]);

  // Dynamic Job Types tracking
  const jobTypes = useMemo(() => {
    const unique = new Set(initialJobs.map(j => j.jobType).filter(Boolean));
    return ['All Types', ...Array.from(unique)];
  }, [initialJobs]);

  // Pure JavaScript filtering process
  const filteredJobs = useMemo(() => {
    return initialJobs.filter((job) => {
      const matchText = 
        (job.jobTitle || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (job.companyName || '').toLowerCase().includes(searchQuery.toLowerCase());

      const matchType = selectedType === 'All Types' || (job.jobType || '').toLowerCase() === selectedType.toLowerCase();
      const matchCategory = selectedCategory === 'All Categories' || (job.jobCategory || '').toLowerCase() === selectedCategory.toLowerCase();
      const matchRemote = !isRemoteOnly || job.isRemote === true;

      return matchText && matchType && matchCategory && matchRemote;
    });
  }, [searchQuery, selectedType, selectedCategory, isRemoteOnly, initialJobs]);

  return (
    <div className="w-full max-w-[80%] mx-auto">
      
      {/* --- Image 4257.jpg Onujayi Filter UI Bar --- */}
      <div className="w-full mb-8 bg-[#121212]/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-800 shadow-2xl flex flex-wrap items-end gap-4">
        
        {/* Search Input Box */}
        <div className="flex-1 min-w-[240px]">
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Search Jobs</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 text-neutral-200 pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all text-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-neutral-500 absolute left-3.5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Dropdown: Job Type Selection */}
        <div className="w-full sm:w-48">
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Job Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-2.5 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm capitalize appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23a3a3a3\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>")', backgroundPosition: 'right 12px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
          >
            {jobTypes.map((type) => (
              <option key={type} value={type} className="bg-neutral-900 text-white capitalize">{type}</option>
            ))}
          </select>
        </div>

        {/* Dropdown: Category Selection */}
        <div className="w-full sm:w-56">
          <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 px-3 py-2.5 rounded-xl focus:outline-none focus:border-pink-500/50 text-sm capitalize appearance-none cursor-pointer"
            style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' height=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23a3a3a3\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>")', backgroundPosition: 'right 12px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-neutral-900 text-white capitalize">{cat}</option>
            ))}
          </select>
        </div>

        {/* Checkbox: Remote Flag Indicator */}
        <div className="flex items-center h-[44px] pb-1 pl-2">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={isRemoteOnly}
              onChange={(e) => setIsRemoteOnly(e.target.checked)}
              className="w-4 h-4 rounded accent-pink-500 bg-neutral-900 border-neutral-800 focus:ring-0 cursor-pointer"
            />
            <span className="text-sm font-medium text-neutral-300">Remote Only</span>
          </label>
        </div>

      </div>

      {/* --- Total Dynamic Data Counter Text --- */}
      <div className="mb-6 px-2">
        <p className="text-xs text-neutral-500 font-medium font-mono">
          Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
        </p>
      </div>

      {/* --- Jobs Card Container Grid UI Area (Server-safe Layout Rendering) --- */}
      <div className="grid grid-cols-4 items-stretch gap-6 w-full">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, index) => (
            <div 
              key={job.companyId || index} 
              className="w-full max-w-sm bg-[#121212] flex flex-col justify-between rounded-3xl p-6 text-white shadow-xl border border-neutral-800 transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl group"
            >
              <div>
                {/* Header: Company Logo & Category Badge */}
                <div className="flex justify-between items-start mb-4">
                  {job.companyLogo && (
                    <img 
                      src={job.companyLogo} 
                      alt={`${job.companyName} logo`} 
                      className="w-12 h-12 rounded-xl object-contain bg-neutral-900 border border-neutral-800 p-1.5"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <span className="text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-neutral-900/80 text-pink-400 border border-pink-500/10 capitalize">
                    {job.jobCategory || 'Engineering'}
                  </span>
                </div>

                {/* Job Title & Company Name */}
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-50 mb-1 line-clamp-1">
                  {job.jobTitle}
                </h2>
                <p className="text-sm text-neutral-400 mb-4 font-medium">
                  {job.companyName}
                </p>
                
                {/* Responsibilities / Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {job.responsibilities || job.requirements}
                </p>
                
                {/* Meta Badges (Location, Type, Salary) */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {job.location && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-300 border border-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </span>
                  )}

                  {job.jobType && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-300 border border-neutral-800 capitalize">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.jobType}
                    </span>
                  )}

                  {(job.minSalary || job.maxSalary) && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 text-xs font-medium text-neutral-300 border border-neutral-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.currency || '$'}{Number(job.minSalary).toLocaleString()} - {Number(job.maxSalary).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Action Link: Apply Section */}
              <div className="mt-auto border-t border-neutral-900 pt-4 flex justify-between items-center">
                <Link
                  href={`/jobs/${job._id}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors duration-200"
                >
                  Apply Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                
                {job.deadline && (
                  <span className="text-[11px] text-neutral-500">
                    Ends: {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                )}
              </div>

            </div>
          ))
        ) : (
          /* Empty Search Screen Result fallback */
          <div className="w-full text-center py-16 border border-dashed border-neutral-800 rounded-3xl bg-[#121212]/40">
            <p className="text-neutral-500 text-sm">No positions match your search filters.</p>
          </div>
        )}
      </div>

    </div>
  );
}