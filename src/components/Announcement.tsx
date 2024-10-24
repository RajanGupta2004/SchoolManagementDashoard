import Image from 'next/image'
import React from 'react'
const announcement = [
    {
        id: "1",
        title: "consectetur adipisicing elit",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?  consectetur adipisicing elit. "
    },
    {
        id: "2",
        title: "sit amet consectetu",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?  consectetur adipisicing elit.  consectetur adipisicing elit. "
    },
    {
        id: "2",
        title: "schoole picnice party",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?  consectetur adipisicing elit. "
    }
]

const Announcement = () => {
    return (
        <div className='flex flex-col gap-5 p-4 bg-white rounded-lg'>
            <div className='flex justify-between'>
                <h1 className='font-semibold'>Announcement</h1>
                <p className='text-[14px] font-semibold'>View All</p>
                {/* <Image src="/moreDark.png" alt='img' width={20} height={20} /> */}
            </div>

            {
                announcement.map((announcement) => (
                    <div className='border-y-2 gap-2 odd:bg-[#fef08a] even:bg-[#c084fc] p-2 rounded-xl'>
                        <div className='flex justify-between my-3'>
                            <h1 className='font-semibold'>{announcement.title}</h1>
                            <h1>{announcement.date}</h1>
                        </div>
                        <p>{announcement.description}</p>
                    </div>
                ))
            }


        </div>
    )
}

export default Announcement
