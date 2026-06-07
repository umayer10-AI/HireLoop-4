import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    if(!user){
        redirect(`/signin?redirect=jobs/${id}/apply`)
    }

    return (
        <div>
            apply
        </div>
    );
};

export default page;