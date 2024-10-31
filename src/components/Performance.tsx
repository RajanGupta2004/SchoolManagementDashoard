"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 92, fill: "#C3BEFA" },
    { name: 'Group B', value: 8, fill: "#fef08a" },

];

const Performance = () => {
    return (
        <>
            <div className='bg-white p-4 rounded-md w-full  h-72 relative'>
                <div className='flex justify-between '>
                    <h1 className='text-lg font-semibold'>Performance</h1>
                    <Image src="/moreDark.png" alt='img' width={20} height={20} />
                </div>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            fill="#8884d8"

                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 text-center'>
                    <h1 className='font-bold text-lg'>9.8</h1>
                    <p className='text-sm text-slate-400'>lorem2</p>
                </div>
                <h1 className=' absolute  left-0 right-0 bottom-16 text-center mx-auto font-medium'>1st Semester && 2nd Semester</h1>

            </div>

        </>
    )
}

export default Performance
