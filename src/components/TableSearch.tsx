import Image from 'next/image'
import React from 'react'

const TableSearch = () => {
    return (
        <div className=' w-full flex gap-2 md:flex items-center gap-1 bg-slate-100 rounded-full  border-2 px-2 py-1 '>
            <Image src='/search.png' alt='search' height={20} width={20} />
            <input type="text" placeholder='search...' className='focus:outline-none bg-slate-100 text-gray-500' />
        </div>
    )
}

export default TableSearch
