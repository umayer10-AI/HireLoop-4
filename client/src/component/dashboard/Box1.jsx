import React from 'react';
import { FileText, Users, Zap, CheckCircle } from 'lucide-react';

const StatCard = ({ title, count, icon: Icon }) => (
  <div className="bg-[#1a1a1a] p-4 rounded-2xl border border-gray-800 w-full">
    <div className="bg-[#262626] w-10 h-10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-gray-400" size={24} />
    </div>
    <p className="text-gray-400 text-sm mb-1">{title}</p>
    <h3 className="text-white text-2xl font-semibold">{count}</h3>
  </div>
);

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
      <StatCard title="Total Job Posts" count="48" icon={FileText} />
      <StatCard title="Total Applicants" count="1,284" icon={Users} />
      <StatCard title="Active Jobs" count="18" icon={Zap} />
      <StatCard title="Jobs Closed" count="32" icon={CheckCircle} />
    </div>
  );
};

export default DashboardStats;