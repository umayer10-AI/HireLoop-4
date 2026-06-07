"use client";

import React, { useState } from "react";

const JobApply = ({ job, user }) => {
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const applicationData = {
      jobId: job?._id,
      jobTitle: job?.title,
      applicantName: user?.name,
      applicantEmail: user?.email,
      applicantPhone: user?.phone,
      coverLetter,
      appliedAt: new Date(),
    };

    console.log(applicationData);

    // API call here
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

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue={user?.phone || ""}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white"
            />
          </div>

          {/* Resume */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Resume / CV
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-300"
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

          {/* Job Info */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">
              Job Details
            </h3>

            <div className="space-y-1 text-gray-300">
              <p>
                <span className="font-medium">Position:</span> {job?.title}
              </p>

              <p>
                <span className="font-medium">Company:</span>{" "}
                {job?.companyName}
              </p>

              <p>
                <span className="font-medium">Location:</span>{" "}
                {job?.location}
              </p>

              <p>
                <span className="font-medium">Type:</span> {job?.jobType}
              </p>
            </div>
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