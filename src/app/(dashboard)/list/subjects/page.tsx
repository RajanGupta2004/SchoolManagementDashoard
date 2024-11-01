import FormModel from '@/components/FormModel'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TableSearch from '@/components/TableSearch'
import { parentsData, role, studentsData, subjectsData, teachersData } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const colums = [
    {
        header: "Subject Name",
        accessor: "subject",
        className: "text-start "

    },
    {
        header: "Teacher",
        accessor: "teacher name",
        className: "hidden md:block text-start"

    },
    {
        header: "Actions",
        accessor: "actions",
        className: ""

    },
]


interface Subjects {
    id: number,
    name: string,
    teachers: string[],

}

const SubjectsListPage = () => {


    const renderRow = (item: Subjects) => {
        return (
            <tr key={item.id} className=' border-b-2  text-sm my- hover:bg-purple-100 odd:bg-slate-50'>

                <td className=' flex items-center p-4 gap-4 text-sm text-gray-700 '>{item.name}</td>
                <td className=' hidden md:table-cell text-sm text-gray-700 '>{item.teachers.join(" ,")}</td>
                <td className='  text-sm text-gray-700  flex items-center justify-center gap-4'>

                    {role === "admin" &&
                        <>
                            <FormModel type="update" table="subject" data={item} />
                            <FormModel type="delete" table="subject" id={item.id} />
                        </>


                    }
                </td>
            </tr>
        )
    }
    return (
        <div className='p-2 rounded-md bg-white  mx-2 mt-0 '>
            <div className='flex items-center justify-between'>
                <h1 className=' hidden md:block text-lg font-semibold'>All Subjects </h1>
                <div className='w-full md:w-auto md:flex md:items-center gap-3  '>
                    <TableSearch />
                    <div className='p-1 flex items-end justify-self-end  gap-3'>
                        <button className='bg-yellow-200 w-8 h-8 rounded-full p-2'><Image src='/filter.png' alt="img" width={20} height={20} className='' /></button>
                        <button className='bg-yellow-200 w-8 h-8 rounded-full p-2'><Image src='/sort.png' alt="img" width={20} height={20} className='' /></button>
                        {
                            role == "admin" &&
                            <FormModel type="create" table="subject" />
                        }
                    </div>
                </div>
            </div>
            {/* table  */}
            <div className='w-full  '>
                <Table colums={colums} renderRow={renderRow} data={subjectsData} />

            </div>

            {/* pagiantion  */}
            <Pagination />

        </div>
    )
}

export default SubjectsListPage
