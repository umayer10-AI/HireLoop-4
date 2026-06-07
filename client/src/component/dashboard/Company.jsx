import React from 'react';
import { MapPin, Users, Globe } from 'lucide-react';

export const MyCompanies = ({ data }) => {
  console.log(data);

  // Data jodi ekhono load na hoy ba undefined thake, tar safe-guard
  if (!data || Object.keys(data).length === 0) {
    return (
      <div className="p-6 text-gray-500 text-center bg-[#1a1a1a] rounded-xl border border-gray-800 max-w-sm mx-auto">
        No company data available.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
        <div>
          {/* Header Section (Logo, Name, Status) */}
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-3">
              {/* Logo handling: Image thakle image dekhabe, nahole Name er first letter */}
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold overflow-hidden border border-gray-700 shrink-0">
                {data?.logo ? (
                  <img src={data.logo} alt={data.companyName} className="w-full h-full object-cover" />
                ) : (
                  data?.companyName ? data.companyName[0].toUpperCase() : 'C'
                )}
              </div>
              <div>
                <h3 className="text-white font-semibold line-clamp-1">{data?.companyName || 'N/A'}</h3>
                <p className="text-gray-500 text-sm capitalize">{data?.industry || 'No Industry Specified'}</p>
              </div>
            </div>

            {/* Status Badge */}
            <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border rounded shrink-0 ${
              data?.status === 'Approved' 
                ? 'text-green-400 border-green-900 bg-green-900/20' 
                : 'text-amber-400 border-amber-900 bg-amber-900/20'
            }`}>
              {data?.status || 'Pending'}
            </span>
          </div>

          {/* Description Section */}
          <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px]">
            {data?.description || 'No description provided for this company.'}
          </p>
        </div>

        {/* Footer Metrics */}
        <div className="border-t border-gray-800 pt-4 space-y-3">
          <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
            <div className="flex items-center gap-1.5 min-w-[100px]">
              <MapPin size={14} className="text-gray-600" /> 
              <span className="line-clamp-1">{data?.location || 'Remote'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-gray-600" /> 
              <span>{data?.employeeCount || '0-10'} employees</span>
            </div>
          </div>
          
          {/* Website Link */}
          {data?.website && (
            <a 
              href={data.website.startsWith('http') ? data.website : `https://${data.website}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-xs transition-colors group mt-1"
            >
              <Globe size={14} className="group-hover:rotate-12 transition-transform" /> 
              <span className="underline">{data?.website}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};