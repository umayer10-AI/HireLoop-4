import DashboardStats from '@/component/dashboard/Box1';
import { RecentApplications } from '@/component/dashboard/Box2';
import { TopCompanies } from '@/component/dashboard/Box3';
import { AddJobs, CompanyRegistrationModal } from '@/component/dashboard/RegisterModal';
import { getLoggedReqruiter } from '@/lib/api/companies';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user
    console.log(user)

    const company = await getLoggedReqruiter()
    console.log(company)

    return (
        <div>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl'>Welcome back, {user?.name}</h2>
                <AddJobs company={company}></AddJobs>
            </div>
            <DashboardStats></DashboardStats>
            <div className='grid grid-cols-3 gap-10'>
                <div className='col-span-2'>
                    <RecentApplications></RecentApplications>
                </div>
                <TopCompanies></TopCompanies>
            </div>
        </div>
    );
};

export default page;