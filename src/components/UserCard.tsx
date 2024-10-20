import Image from 'next/image'
import React from 'react'

const UserCard = ({ type }: { type: string }) => {
    return (
        <div className='p-3 rounded-xl odd:bg-purple-400 even:bg-yellow-200 flex-1 gap-3'>
            <div className='flex justify-between gap-2'>
                <span className='px-2 py-1 bg-white text-green-600 text-[10px] rounded-lg'>12/12/2024</span>
                <Image src="/more.png" width={20} height={20} alt='img' />
            </div>
            <h1 className='text-black font-bold text-xl my-4'>1,333</h1>
            <h2 className='capitalize text-black'>{type}</h2>
        </div>
    )
}

export default UserCard
