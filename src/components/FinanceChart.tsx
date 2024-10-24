'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinanceChart = () => {
    const data = [
        {
            name: 'Feb',
            income: 4000,
            expense: 2400,
        },
        {
            name: 'Mar',
            uv: 3000,
            expense: 1398,
        },
        {
            name: 'Apr',
            income: 2000,
            expense: 9800,
        },
        {
            name: 'May',
            income: 2780,
            expense: 3908,
        },
        {
            name: 'June',
            income: 1890,
            expense: 4800,
        },
        {
            name: 'July',
            income: 2390,
            expense: 3800,
        },
        {
            name: 'Aug',
            income: 3490,
            expense: 4300,
        },
    ];
    return (
        <div className='bg-white rounded-lg shadow-lg w-full h-full p-3'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export default FinanceChart
