const companies = [
  { name: 'Google Inc.', info: 'Technology • Mountain View', jobs: '24 ACTIVE JOBS' },
  { name: 'Meta Platforms', info: 'Social Media • Menlo Park', jobs: '18 ACTIVE JOBS' },
  // ...
];

export const TopCompanies = () => (
  <div className="bg-[#1a1a1a] p-6 rounded-xl border border-gray-800">
    <div className="flex justify-between mb-6">
      <h2 className="text-xl font-semibold text-white">My Top Companies</h2>
      <button className="text-sm text-gray-400">View all</button>
    </div>
    <div className="space-y-6">
      {companies.map((c, i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-lg" />
            <div>
              <p className="font-semibold text-white">{c.name}</p>
              <p className="text-xs text-gray-500">{c.info}</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 font-bold">{c.jobs}</p>
        </div>
      ))}
    </div>
    <button className="w-full mt-8 py-2 border border-gray-700 rounded-lg text-white text-sm hover:bg-gray-800 transition">
      View All Companies
    </button>
  </div>
);