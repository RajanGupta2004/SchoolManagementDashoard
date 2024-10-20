import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='p-4 flex flex-col md:flex-row gap-2'>
            {/* left side */}
            <div className='flex gap-4 flex-wrap  md:w-full text-slate-500 p-4 w-full' >
                <UserCard type='student' />
                <UserCard type='admin' />
                <UserCard type='parents' />
                <UserCard type='stuff' />

            </div>
            {/* right side  */}
            <div className=' w-1/3'>
                right side

            </div>
        </div>
    )
}

export default AdminPage
