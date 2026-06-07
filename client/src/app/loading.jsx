import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div className='flex items-center justify-center my-30'>
            <div className="flex flex-col items-center gap-3">
                <Spinner size="xl" color="danger"/>
                <span className="text-muted">Loading...</span>
            </div>
        </div>
    );
};

export default loading;