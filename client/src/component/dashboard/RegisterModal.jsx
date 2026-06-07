"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, X, MapPin, ChevronDown, Calendar, DollarSign, Briefcase, Gift } from "lucide-react";
import { postData } from "@/lib/action";
import { authClient } from "@/lib/auth-client";

export const AddJobs = ({company}) => {
  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log(user)
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const v = {
      ...data,
      status: "active",
      companyId: user.id
    }
    console.log(v);
    setIsOpen(false);
    reset();
    await postData(v)
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        <Plus size={16} />
        Add Job
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] w-full max-w-xl rounded-xl border border-gray-800 p-6 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold text-white">Register New Company</h2>
                <p className="text-gray-400 text-sm">Enter details to start hiring on HireLoop.</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Row 1: Company Name & Industry */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Company Name</label>
                  <input type="text" {...register("companyName", { required: true })} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Industry</label>
                  <select {...register("industry")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white appearance-none">
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Job Type & Salary Range */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Job Type</label>
                  <select {...register("jobType")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white">
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Salary Range</label>
                  <input type="text" placeholder="e.g. $50k - $80k" {...register("salaryRange")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white" />
                </div>
              </div>

              {/* Row 3: Deadline & Location */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Application Deadline</label>
                  <input type="date" {...register("deadline")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Location</label>
                  <input type="text" {...register("location")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white" />
                </div>
              </div>

              {/* Benefits & Description */}
              <div className="mt-4 space-y-4">
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Benefits (Optional)</label>
                  <input type="text" placeholder="e.g. Health Insurance, Remote Work" {...register("benefits")} className="w-full bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-gray-300">Brief Description</label>
                  <textarea {...register("description")} className="w-full h-20 bg-[#121212] border border-gray-700 rounded-lg p-2.5 text-sm text-white resize-none" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setIsOpen(false)} className="px-6 py-2 text-sm text-white hover:bg-gray-800 rounded-lg">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200">Register Company</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};