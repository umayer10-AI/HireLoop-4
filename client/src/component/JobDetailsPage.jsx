import Link from 'next/link';
import React from 'react';

const JobDetailsPage = ({job}) => {
  console.log(job)
    return (
        <div>
            <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12 font-sans flex justify-center items-start">
      <div className="w-full max-w-4xl bg-[#121212] rounded-3xl p-6 md:p-10 border border-neutral-800 shadow-2xl">
        
        {/* Back Button Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider hover:text-white transition-colors mb-8 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>

        {/* Top Header Section: Profile Banner & Corporate Identity */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-neutral-900 pb-8 mb-8">
          <div className="flex items-start gap-5">
            {job.companyLogo && (
              <img 
                src={job.companyLogo} 
                alt={`${job.companyName} logo`} 
                className="w-16 h-16 rounded-2xl object-contain bg-neutral-900 border border-neutral-800 p-2"
              />
            )}
            <div>
              <span className="text-[11px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-neutral-900 text-pink-400 border border-pink-500/10 mb-2 inline-block capitalize">
                {job.jobCategory || 'Engineering'}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-50 mb-1">
                {job.jobTitle}
              </h1>
              <p className="text-base text-neutral-400 font-medium">
                {job.companyName}
              </p>
            </div>
          </div>

          {/* Quick Metrics Badge Group */}
          <div className="flex flex-wrap gap-2 sm:self-center">
            {job.isRemote && (
              <span className="px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-semibold uppercase tracking-wider">
                Remote
              </span>
            )}
            <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-semibold uppercase tracking-wider capitalize">
              {job.jobType}
            </span>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Block: Deep Job Specifications (Responsibilities, Requirements) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Responsibilities Section */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-pink-500 rounded-full"></span>
                Job Responsibilities
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                {job.responsibilities || 'No specific responsibilities listed for this profile.'}
              </p>
            </div>

            {/* 2. Requirements Section */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-100 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-pink-500 rounded-full"></span>
                Requirements & Skills
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                {job.requirements || 'Experience in core technologies mentioned in description.'}
              </p>
            </div>

            {/* 3. Benefits Section */}
            {job.benefits && (
              <div>
                <h3 className="text-lg font-semibold text-neutral-100 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-pink-500 rounded-full"></span>
                  Perks & Benefits
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed whitespace-pre-line">
                  {job.benefits}
                </p>
              </div>
            )}
          </div>

          {/* Right Sidebar Block: Meta Meta Details card */}
          <div className="space-y-4">
            <div className="bg-neutral-900/60 border border-neutral-900 rounded-2xl p-5 space-y-4">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest border-b border-neutral-800/60 pb-2">
                Job Overview
              </h4>
              
              {/* Location Metric */}
              <div>
                <p className="text-xs text-neutral-500">Location</p>
                <p className="text-sm font-medium text-neutral-200">{job.location || 'Not Specified'}</p>
              </div>

              {/* Salary Range Metric */}
              <div>
                <p className="text-xs text-neutral-500">Salary Package</p>
                <p className="text-sm font-medium text-neutral-200">
                  {job.currency || '$'}{Number(job.minSalary).toLocaleString()} - {Number(job.maxSalary).toLocaleString()}
                </p>
              </div>

              {/* Deadline Metric */}
              {job.deadline && (
                <div>
                  <p className="text-xs text-neutral-500">Application Deadline</p>
                  <p className="text-sm font-medium text-pink-400">
                    {new Date(job.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              )}

              {/* Position Status */}
              <div>
                <p className="text-xs text-neutral-500">Status</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 mt-0.5 capitalize">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  {job.status || 'Active'}
                </span>
              </div>
            </div>

            {/* Submission External Trigger Action Button */}
            <Link
              href={`/jobs/${job._id}/apply`}
              rel="noopener noreferrer"
              className="w-full bg-neutral-100 hover:bg-white text-gray-950 font-semibold text-center text-sm py-3.5 px-4 rounded-xl block transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]"
            >
              Submit Application
            </Link>
          </div>

        </div>

      </div>
    </div>
        </div>
    );
};

export default JobDetailsPage;