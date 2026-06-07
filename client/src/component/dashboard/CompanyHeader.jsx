import React from 'react';
import { Plus } from 'lucide-react';
import { CompanyRegistrationModal } from './RegisterModal';
import RegisterCompanyModal from './CompanyRegistration';

export const HeaderSection = ({user}) => {
  return (
    <div className="flex justify-between items-center py-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">My Companies</h1>
        <p className="text-gray-400 text-sm mt-1">
          Manage your registered companies and their verification states.
        </p>
      </div>
      
      {/* <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
        <Plus size={16} />
        Register a company
      </button> */}
      {/* <CompanyRegistrationModal></CompanyRegistrationModal> */}
      <RegisterCompanyModal user={user}></RegisterCompanyModal>
    </div>
  );
};