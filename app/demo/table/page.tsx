import React from 'react';
import UserTablePage from './userTable';
import { BacktoDemoButtom } from '../BacktoDemoButtom';
import { Suspense } from 'react';

interface Props {
    searchParams: {
        sortOrder: string;
    };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
    return (
        <div className='mx-12 py-12 px-2'>
            <BacktoDemoButtom />

            <h1>Table Demo(Click Name and Email to sort data)</h1>
            {/* <button className='btn btn-neutral btn-wide my-3'>New User</button> */}
            <Suspense fallback={<p>loading data...</p>}>
                <UserTablePage sortOrder={sortOrder} />
            </Suspense>
            <p className=' italic text-gray-400 my-4'> * table data come from: https://jsonplaceholder.typicode.com/users </p>
        </div>
    )
}

export default UserPage