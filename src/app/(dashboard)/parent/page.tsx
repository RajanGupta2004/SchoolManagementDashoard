"use client"
import Announcement from '@/components/Announcement'
import BigCalander from '@/components/BigCalander'
import EventCalander from '@/components/EventCalander'
import React from 'react'




const ParentPage = () => {
    return (
        <div className='p-4 flex flex-col lg:flex-row gap-2'>
            {/* left */}
            <div className=' w-full lg:w-2/3  bg-white shadow-sm'>
                <h1 className='text-xl font-bold'>Shedule</h1>
                <BigCalander />



            </div>
            {/* right  */}
            <div className=' lg:w-1/3 w-full flex flex-col gap-4 h-screen'>

                {/* <EventCalander /> */}
                <Announcement />

            </div>

        </div>
    )
}

export default ParentPage
