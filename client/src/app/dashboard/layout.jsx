import Sidebar from '@/component/dashboard/Sidbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex'>
                <Sidebar></Sidebar>
            <div className='w-[80%] mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default layout;