import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-2'>

            {/* search  */}
            <div className=' hidden md:flex items-center gap-1 bg-slate-100 rounded-full  border-2 px-2 py-1 '>
                <Image src='/search.png' alt='search' height={20} width={20} />
                <input type="text" placeholder='search...' className='focus:outline-none bg-slate-100 text-gray-500' />
            </div>
            {/* icons */}
            <div className='flex items-center gap-8 justify-end w-full '>
                <div className='bg-white rounded-full flex items-center cursor-pointer'>
                    <Image src="/message.png " height={25} width={25} alt='message' />
                </div>
                <div className='bg-white rounded-full flex items-center cursor-pointer relative'>
                    <Image src="/announcement.png " height={25} width={25} alt='message' />
                    <span className='bg-purple-600 text-white text-sm p-2 w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 left-6'>1</span>
                </div>
                <div className='flex flex-col leading-5 '>
                    <h2 className='font-medium'>Jhon Doe</h2>
                    <p className='text-[14px] text-slate-500'>admin</p>
                </div>
                <div className=''>
                    <Image src="/avatar.png" alt='avatar' height={30} width={30} className='rounded-full cursor-pointer' />
                </div>
            </div>

        </div>
    )
}

export default Navbar
