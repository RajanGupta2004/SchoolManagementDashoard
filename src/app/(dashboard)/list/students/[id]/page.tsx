import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalander'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleStudentPage = () => {
    return (
        <div className='flex-1 flex flex-col xl:flex-row  gap-3 bg-gray-50 m-2'>
            {/* left */}
            <div className=' w-full lg:w-full xl:w-2/3 '>
                {/* top */}
                <div className=' flex flex-col md:flex-row lg:w-full  '>
                    <div className='bg-sky-200 flex-1 p-2 rounded-lg flex items-center gap-1 '>
                        <div className='w-1/3 '>
                            <img src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1200" alt='img' width={100} height={100} className='w-24 h-24 rounded-full object-cover' />
                        </div>
                        <div className='w-2/3 flex flex-col gap-2  '>
                            <h1 className='text-lg font-semibold'>Jhone Doe</h1>
                            <p className='text-slate-600 text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                            <div className='flex items-center gap-1 md:gap-3 flex-wrap   '>
                                <div className=' flex flex-col gap-2'>
                                    <div className=' w-full md:w-1/3  flex items-center gap-3  '>
                                        <Image src="/blood.png" alt='img' width={20} height={20} />
                                        <span className='text-sm text-slate-700'>A+</span>
                                    </div>
                                    <div className='w-full md:w-1/3   flex items-center gap-3'>
                                        <Image src="/date.png" alt='img' width={20} height={20} />
                                        <span className='text-sm text-slate-700'>Janaury2024</span>
                                    </div>
                                </div>
                                <div className=' flex flex-col gap-2'>
                                    <div className='w-full md:w-1/3 flex items-center gap-3'>
                                        <Image src="/mail.png" alt='img' width={20} height={20} />
                                        <span className='text-sm text-slate-700'>raj@gmail.com</span>
                                    </div>
                                    <div className='w-full md:w-1/3 flex items-center gap-3'>
                                        <Image src="/phone.png" alt='img' width={20} height={20} />
                                        <span className='text-sm text-slate-700'>+12345678</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 md:flex items-center justify-around flex-wrap gap-3'>
                        <div className='flex gap-3 bg-white shadow-md p-4 rounded-md w-[40%]'>
                            <div className='w-6 h-6'>
                                <img src="/singleAttendance.png" alt='img' />
                            </div>
                            <div>
                                <h1 className='font-semibold text-md'>90%</h1>
                                <p className='text-sm '>Attendence</p>
                            </div>
                        </div>
                        <div className='flex gap-3 bg-white shadow-md p-4 rounded-md w-[40%]'>
                            <div>
                                <img src="/singleBranch.png" alt='img' width={30} height={30} />
                            </div>
                            <div>
                                <h1 className='font-semibold text-md'>6th</h1>
                                <p className='text-sm '>Grade</p>
                            </div>
                        </div>
                        <div className='flex gap-3 bg-white shadow-md p-4 rounded-md w-[40%]'>
                            <div>
                                <img src="/singleLesson.png" alt='img' width={30} height={30} />

                            </div>
                            <div>
                                <h1 className='font-semibold text-md'>18th</h1>
                                <p className='text-sm '>Lessons</p>
                            </div>
                        </div>
                        <div className='flex gap-3 bg-white shadow-md p-4 rounded-md w-[40%]'>
                            <div>
                                <img src="/singleClass.png" alt='img' width={30} height={30} />

                            </div>
                            <div>
                                <h1 className='font-semibold text-md'>6A</h1>
                                <p className='text-sm '>class</p>
                            </div>
                        </div>
                    </div>

                </div>


                {/* bottom */}
                <div className='bg-white p-4 shadow-md mt-4 h-[800px] rounded-xl'>
                    <h1 className='font-semibold text-lg'>Teacher`s schedule</h1>
                    <BigCalendar />
                </div>
            </div>

            {/* right */}
            <div className=' w-full  xl:w-1/3 flex flex-col gap-4  '>
                <div className='flex flex-col   p-4 justify-center bg-white rounded-md '>
                    <h1 className='text-xl font-semibold my-2'>Shortcuts</h1>
                    <div className='flex  gap-2 flex-wrap'>
                        <Link href="" className='bg-pink-200 px-3 py-2 rounded text-sm '>Teachers`s class</Link>
                        <Link href="" className='bg-yellow-200 px-3 py-2 rounded text-sm'> Teacher`s students</Link>
                        <Link href="" className='bg-pink-200 px-3 py-2 rounded text-sm'>Teachers`s Lessons</Link>
                        <Link href="" className='bg-pink-200 px-3 py-2 rounded text-sm'>Teachers`s Exams</Link>
                        <Link href="" className='bg-yellow-200 px-3 py-2 rounded text-sm'> Teacher`s Assignement</Link>
                    </div>
                </div>
                <Performance />
                <Announcement />
            </div>

        </div>
    )
}

export default SingleStudentPage
