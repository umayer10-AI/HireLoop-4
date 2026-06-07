import { companyJobs } from "@/lib/api/jobs";
import { auth } from "@/lib/auth";
import { Eye, SquarePen, Trash2 } from "lucide-react";
import { headers } from "next/headers";


export const RecentApplications = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user
  console.log(user)
  
  const applications = await companyJobs(user.id);
  console.log(applications)

  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
      <div className="flex justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          Recent Applications
        </h2>
        <button className="text-sm text-gray-400">View all</button>
      </div>

      <div className="grid grid-cols-5 text-gray-500 text-sm mb-4">
        <span>Candidate Name</span>
        <span>Role</span>
        <span>Date Applied</span>
        <span>Experience</span>
        <span>Status</span>
      </div>

      {applications.map((app, i) => (
        <div
  key={app._id || i}
  className="grid grid-cols-6 items-center py-4 border-t border-gray-800 text-white"
>
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-gray-700" />
    <span className="font-medium">{app.companyName}</span>
  </div>

  <span>{app.jobType}</span>
  <span>{app.deadline}</span>
  <span>{app.industry}</span>

  <span
    className={`px-3 py-1 rounded-full text-xs w-fit ${
      app.color || "bg-gray-700 text-gray-300"
    }`}
  >
    {app.status}
  </span>

  <div className="flex items-center gap-3">
    <button
      className="p-2 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
      title="Details"
    >
      <Eye size={18} />
    </button>

    <button
      className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition"
      title="Edit"
    >
      <SquarePen size={18} />
    </button>

    <button
      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
      title="Delete"
    >
      <Trash2 size={18} />
    </button>
  </div>
</div>
      ))}
    </div>
  );
};