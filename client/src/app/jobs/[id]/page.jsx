import JobDetailsPage from '@/component/JobDetailsPage';
import { getJobsIdData } from '@/lib/jobData';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    // console.log(id)
    const job = await getJobsIdData(id);

    if (!job) {
    return (
      <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center text-white p-6 font-sans">
        <h2 className="text-2xl font-semibold text-neutral-400 mb-4">Job Not Found</h2>
        <Link href="/" className="px-5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm hover:bg-neutral-800 transition-all text-pink-400">
          Back to Dashboard
        </Link>
      </div>
    );
  }


    return (
        <div>
            <JobDetailsPage job={job}></JobDetailsPage>
        </div>
    );
};

export default page;