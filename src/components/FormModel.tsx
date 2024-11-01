import Image from 'next/image'
import React from 'react'

const FormModel = ({ type, data, id, table }: {
    type: any,
    data?: any,
    id?: number,
    table: any
}) => {
    const bgcolor = type == "create" ? "bg-yellow-200" : type === "update" ? "bg-purple-200" : type == "delete" ? "bg-[#e17055]" : ""

    return (

        <>
            <button className={` w-8 h-8 rounded-full p-2 ${bgcolor}`}>
                <Image src={`/${type}.png`} width={16} height={16} alt='img' />
            </button>

        </>
    )
}

export default FormModel
