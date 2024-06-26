import React from 'react';
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTablePage = async ({ sortOrder }: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name)

    return (
        <div className='block'>
            <table className='table table-bordered dark:text-white'>
                <thead>
                    <tr className='text-lg'>
                        <td>
                            <Link href='/demo/table?sortOrder=name'>Name</Link>
                        </td>
                        <td>
                            <Link href='/demo/table?sortOrder=email'>Email</Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user => <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default UserTablePage