import { auth } from '@/lib/auth';
import { getJobsIdData } from '@/lib/jobData';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
import JobApply from './JobApply';

const page = async ({params}) => {

    const {id} = await params
    const job = await getJobsIdData(id);

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    console.log(user)
    if(!user){
        redirect(`/signin?redirect=jobs/${id}/apply`)
    }
    if(user.role !== 'seeker'){
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <h1 className='text-4xl font-bold'>Obly job seeker allowed</h1>
            </div>
        )
    }

    return (
        <div>
            apply
            <JobApply user={user} job={job}></JobApply>
        </div>
    );
};

export default page;