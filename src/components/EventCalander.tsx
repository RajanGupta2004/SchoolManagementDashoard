"use client"
import Image from 'next/image';
import { title } from 'process';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
// Temporary data

const events = [
    {
        id: "1",
        title: "schoole picnice party",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?"
    },
    {
        id: "2",
        title: "sit amet consectetu",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?"
    },
    {
        id: "3",
        title: "schoole picnice party",
        date: "12:00 am",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nobis?"
    }
]


const EventCalander = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='w-full rounded-xl bg-white'>
            <Calendar onChange={onChange} value={value} className="w-[100%]" />
            <div className='flex flex-col gap-4 shadow-lg p-4 my-2'>
                <div className='flex justify-between '>
                    <h1 className='font-semibold'>Events</h1>
                    <Image src="/moreDark.png" alt='iage' width={20} height={20} />
                </div>
                {
                    events.map((event) => (
                        <div key={event.id} className='flex flex-col gap-4 border-y-2 border-y-purple-400-300 p-4'>
                            <div className='flex justify-between '>
                                <h2 className='text-sm font-bold'>{event.title}</h2>
                                <h2>{event.date}</h2>
                            </div>
                            <p className='text-[13px] text-slate-600'>{event.description}</p>

                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default EventCalander
