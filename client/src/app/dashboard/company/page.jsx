import { MyCompanies } from '@/component/dashboard/Company';
import { HeaderSection } from '@/component/dashboard/CompanyHeader';
import { getCompanyData } from '@/lib/api/companies';
import { auth } from '@/lib/auth';
import { getUserSession } from '@/lib/session';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    // const user = await getUserSession()
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const data = await getCompanyData(user?.id)
    console.log(data)

    return (
        <div>
            <HeaderSection user={user}></HeaderSection>
            <MyCompanies data={data}></MyCompanies>
        </div>
    );
};

export default page;