import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { role, studentsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const colums = [
    {
        header: "Info",
        accessor: "info",
        className: "text-start "

    },
    {
        header: "Student ID",
        accessor: "student id",
        className: "hidden md:table-cell"

    },
    {
        header: "Grade",
        accessor: "grade",
        className: "hidden md:table-cell"

    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell"

    },
    {
        header: "Phone",
        accessor: "phone",
        className: "hidden md:table-cell"

    },
    {
        header: "Address",
        accessor: "address",
        className: "hidden md:table-cell"

    },
    {
        header: "Actions",
        accessor: "actions",
        className: ""

    },
]


interface Students {
    id: number,
    photo: string,
    name: string,
    email: string,
    studentId: string,
    grade: number,
    class: string,
    phone: string,
    address: string

}

const StudentsListPage = () => {


    const renderRow = (item: Students) => {
        return (
            <tr key={item.id} className=' border-b-2 text-sm hover:bg-purple-100 odd:bg-slate-50'>
                <td className='flex items-center gap-4 p-4'>
                    <img src={item.photo} alt='img' className='w-[40px] h-[40px] rounded-full ' />
                    <div>
                        <p className='text-sm text-gray-500'>{item.name}</p>
                        <p className='text-[14px] text-gray-500'>{item?.class}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell text-sm text-gray-700 text-center'>{item.studentId}</td>
                <td className='hidden md:table-cell text-sm text-gray-700 text-center'>{item.grade}</td>
                <td className='hidden md:table-cell text-sm text-gray-700 text-center'>{item.phone}</td>
                <td className='hidden md:table-cell text-sm text-gray-700 text-center'>{item.address}</td>
                <td className='  text-sm text-gray-700  flex items-center justify-center gap-4'>
                    <Link href="">
                        <button className='rounded-full w-[20px] h-[20px]'>
                            <Image src="/view.png" alt='img' width={20} height={20} />
                        </button>
                    </Link>
                    {role === "admin" && <button>
                        <Image src="/delete.png" alt='img' width={20} height={20} />
                    </button>}
                </td>
            </tr>
        )
    }
    return (
        <div className='p-2 rounded-md bg-white  mx-2 mt-0 '>
            <div className='flex items-center justify-between'>
                <h1 className=' hidden md:block text-lg font-semibold'>All Students </h1>
                <div className='w-full md:w-auto md:flex md:items-center gap-3  '>
                    <TableSearch />
                    <div className='p-1 flex items-end justify-self-end  gap-3'>
                        <button className='bg-yellow-200 w-8 h-8 rounded-full p-2'><Image src='/filter.png' alt="img" width={20} height={20} className='' /></button>
                        <button className='bg-yellow-200 w-8 h-8 rounded-full p-2'><Image src='/sort.png' alt="img" width={20} height={20} className='' /></button>
                        <button className='bg-yellow-200 w-8 h-8 rounded-full p-2'><Image src='/plus.png' alt="img" width={20} height={20} className='' /></button>
                    </div>
                </div>
            </div>
            {/* table  */}
            <div className='w-full  '>
                <Table colums={colums} renderRow={renderRow} data={studentsData} />

            </div>

            {/* pagiantion  */}
            <Pagination />

        </div>
    )
}

export default StudentsListPage
