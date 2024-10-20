import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import Image from 'next/image'
import React from 'react'

const AdminPage = () => {
    return (
        <div className='p-4 flex flex-col md:flex-row gap-2'>
            {/* left side */}
            <div className='w-full md:w-2/3'>
                <div className='flex gap-4 flex-wrap  md:w-full text-slate-500 p-4 w-full' >
                    <UserCard type='student' />
                    <UserCard type='admin' />
                    <UserCard type='parents' />
                    <UserCard type='stuff' />
                </div>

                {/* middle chart  */}
                <div className='flex flex-col lg:flex-row '>
                    <div className='w-full lg:w-1/3 h-[450px] '>
                        <CountChart />
                    </div>

                    <div className='w-full lg:w-2/3 h-[450px] bg-yellow-400 '></div>

                </div>

                {/* bottom chart  */}
                <div></div>

            </div>


            {/* right side  */}
            <div className=' w-1/3'>
                right side

            </div>
        </div>
    )
}

export default AdminPage
