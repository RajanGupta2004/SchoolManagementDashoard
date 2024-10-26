import React from 'react'

const Pagination = () => {
    return (
        <div className='flex items-center justify-between w-full p-2'>
            <button disabled className='bg-slate-200 rounded-lg px-4 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed'>Prev</button>
            <div className='flex items-center gap-2'>
                <button className='bg-sky-300 rounded-sm px-2'>1</button>
                <button>2</button>
                <button>3</button>
                ...
                <button>10</button>
            </div>
            <button className='bg-slate-200 rounded-lg px-4 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>

        </div>
    )
}

export default Pagination
