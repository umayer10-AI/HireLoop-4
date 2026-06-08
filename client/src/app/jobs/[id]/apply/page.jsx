import { auth } from "@/lib/auth";
import { getApplicantsId } from "@/lib/api/applicants";
import { getJobsIdData } from "@/lib/jobData";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import JobApply from "./JobApply";
import Link from "next/link";

const page = async ({ params }) => {
  const { id } = await params;
  const job = await getJobsIdData(id);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    redirect(`/signin?redirect=jobs/${id}/apply`);
  }

  if (user.role !== "seeker") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-4">
        <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-3">
            Access Denied
          </h1>
          <p className="text-gray-400">
            Only job seekers are allowed to apply for jobs.
          </p>
        </div>
      </div>
    );
  }

  const applicants = await getApplicantsId(user?.id);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                Apply for {job?.jobTitle}
              </h1>
              <p className="text-gray-400 mt-2">
                Complete the application form below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl px-5 py-3 min-w-[180px]">
    <p className="text-sm text-gray-400">
      Previous Applications
    </p>
    <h2 className="text-3xl font-bold text-cyan-400">
      {applicants.length}
    </h2>
  </div>

  <Link
    href="/plans"
    className="flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 font-semibold text-white transition-all duration-300 shadow-lg shadow-cyan-500/20"
  >
    View Plans 🚀
  </Link>
</div>
          </div>
        </div>

        {/* Application Form */}
        <JobApply user={user} job={job} />
      </div>
    </div>
  );
};





export default page;