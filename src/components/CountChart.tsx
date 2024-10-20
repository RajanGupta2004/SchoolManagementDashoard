"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const CountChart = () => {
    const data = [

        {
            name: '50+',
            uv: 2.63,
            pv: 4800,
            fill: '#d0ed57',
        },
        {
            name: 'unknow',
            uv: 6.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ];



    return (
        <div className=' flex flex-col lg:flex-row h-full shadow-md '>
            <div className='rounded-xl p-2 w-full  '>
                <div className='flex items-center justify-between'>
                    <h1 className='font-semibold'>Students</h1>
                    <Image src="/moreDark.png" width={20} height={20} alt='img' />
                </div>
                <div className='w-full h-[75%] '>
                    <ResponsiveContainer >
                        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                            <RadialBar
                                // minAngle={15}
                                label={{ position: 'insideStart', fill: '#fff' }}
                                background
                                dataKey="uv"
                            />
                        </RadialBarChart>
                    </ResponsiveContainer>

                </div>
                <div className='flex justify-center gap-8'>
                    <div className=''>
                        <div className='bg-purple-400 w-6 h-6 rounded-full' />
                        <h1 className='text-sm'>1,4322</h1>
                        <h1 className='text-[10px]'>Boys 45%</h1>
                    </div>
                    <div className=''>
                        <div className='bg-yellow-400 w-6 h-6 rounded-full' />
                        <h1 className='text-sm'>1,4322</h1>
                        <h1 className='text-[10px]'>Boys 45%</h1>
                    </div>

                </div>
            </div>


        </div>


    )
}

export default CountChart






