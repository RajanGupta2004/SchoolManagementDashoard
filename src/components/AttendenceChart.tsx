'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'

const AttendenceChart = () => {
    const data = [
        {
            name: 'mon',
            absent: 4000,
            present: 2400,
        },
        {
            name: 'tue',
            absent: 3000,
            present: 1398,
        },
        {
            name: 'wed',
            absent: 2000,
            present: 9800,
        },
        {
            name: 'thr',
            absent: 2780,
            present: 3908,
        },
        {
            name: 'fri',
            absent: 1890,
            present: 4800,
        },

    ];
    return (
        <div className='shadow-xl rounded-lg h-full  w-full'>
            <div className='flex justify-between p-2'>
                <h1>Attendence</h1>
                <Image src="/moreDark.png" alt="img" width={30} height={30} />
            </div>
            <div className=' h-[90%]'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" axisLine={false} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="absent" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                        <Bar dataKey="present" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendenceChart
