"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { X, Upload, Plus } from "lucide-react";
import { postCompanyData } from "@/lib/api/companies";

const RegisterCompanyModal = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const logo = watch("logo");

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_API}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (data.success) {
      return data.data.display_url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const onSubmit = async (data) => {
    try {
      setUploading(true);

      let imageUrl = "";

      if (data.logo?.[0]) {
        imageUrl = await uploadToImgBB(data.logo[0]);
      }

      const companyData = {
        companyName: data.companyName,
        industry: data.industry,
        website: data.website,
        location: data.location,
        employeeCount: data.employeeCount,
        description: data.description,
        logo: imageUrl,
        reqruiterId: user.id,
        status: 'pending'
      };

      console.log("Company Data:", companyData);
      await postCompanyData(companyData)

      reset();
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setUploading(false);
    }

      
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
      >
        <Plus size={16} />
        Register a company
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1a1a1a] text-white w-full max-w-lg rounded-xl p-6 shadow-2xl">

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-semibold">
                  Register New Company
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Enter your business details to start hiring.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="grid grid-cols-2 gap-4">

                {/* Company Name */}
                <div>
                  <label className="text-sm block mb-1">
                    Company Name
                  </label>
                  <input
                    {...register("companyName")}
                    type="text"
                    placeholder="Acme Corp"
                    className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="text-sm block mb-1">
                    Industry
                  </label>
                  <select
                    {...register("industry")}
                    className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700"
                  >
                    <option value="">Select</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                  </select>
                </div>

                {/* Website */}
                <div>
                  <label className="text-sm block mb-1">
                    Website
                  </label>
                  <input
                    {...register("website")}
                    type="text"
                    className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm block mb-1">
                    Location
                  </label>
                  <input
                    {...register("location")}
                    type="text"
                    className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700"
                  />
                </div>

                {/* Employee Count */}
                <div>
                  <label className="text-sm block mb-1">
                    Employee Count
                  </label>
                  <select
                    {...register("employeeCount")}
                    className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700"
                  >
                    <option value="">Select</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                {/* Logo Upload */}
                <div>
                  <label className="text-sm block mb-1">
                    Company Logo
                  </label>

                  <input
                    id="logo-upload"
                    {...register("logo")}
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />

                  <label
                    htmlFor="logo-upload"
                    className="border border-dashed border-gray-600 rounded-lg h-[110px] flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 overflow-hidden"
                  >
                    {logo?.[0] ? (
                      <img
                        src={URL.createObjectURL(logo[0])}
                        alt="preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <Upload size={22} />
                        <span className="text-xs text-gray-400 mt-2">
                          Click to upload image
                        </span>
                      </>
                    )}
                  </label>
                </div>

              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="text-sm block mb-1">
                  Description
                </label>

                <textarea
                  {...register("description")}
                  className="w-full bg-[#2a2a2a] p-3 rounded-lg border border-gray-700 h-24"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2 rounded-lg hover:bg-[#2a2a2a]"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={uploading}
                  className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-200"
                >
                  {uploading ? "Uploading..." : "Register Company"}
                </button>

              </div>

            </form>

          </div>
        </div>
      )}
    </>
  );
};

export default RegisterCompanyModal;