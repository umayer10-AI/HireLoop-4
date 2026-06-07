"use client";

import { submitApplication } from "@/lib/api/companies";
import React, { useState } from "react";

const JobApply = ({ job, user }) => {
  const [coverLetter, setCoverLetter] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const applicationData = {
      jobId: job?.companyId,
      jobTitle: job?.jobTitle,
      companyName: job?.companyName,
      applicantName: user?.name,
      applicantEmail: user?.email,
      applicantId: user?.id,
      portfolioLink,
      resumeLink,
      coverLetter,
      appliedAt: new Date(),
    };

    console.log(applicationData);

    await submitApplication(applicationData)
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Apply for {job?.title}
        </h2>

        <p className="text-gray-400 mb-8">
          Complete the form below to submit your application.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={user?.name || ""}
              readOnly
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Portfolio Link (GitHub / Website / Behance)
            </label>
            <input
              type="url"
              value={portfolioLink}
              onChange={(e) => setPortfolioLink(e.target.value)}
              placeholder="https://your-portfolio.com"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          {/* Resume Link */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Resume Link (Google Drive / URL)
            </label>
            <input
              type="url"
              value={resumeLink}
              onChange={(e) => setResumeLink(e.target.value)}
              placeholder="https://drive.google.com/..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Cover Letter
            </label>
            <textarea
              rows={6}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Write why you are a good fit for this role..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;