import React from 'react'

const Table = ({ colums, renderRow, data }: { colums: { header: string, accessor: string, className: string }[], renderRow: any, data: any }) => {

    return (
        <table className='w-full mt-5 p-4'>
            <thead>
                <tr>
                    {
                        colums.map((colums: { header: string, accessor: string, className: string }) => (
                            <th key={colums.accessor} className={colums.className}>{colums.header}</th>
                        ))
                    }

                </tr>
            </thead>
            <tbody>
                {
                    data.map((item: any) => (
                        renderRow(item)
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
