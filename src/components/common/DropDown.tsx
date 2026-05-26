import React from 'react'

const DropDown = ({title,items}) => {
    console.log(items)
  return (
    <div className='flex flex-col gap-4'>
        <span className='w-fit text-sm text-gray-600'>{title}</span>
        <ul className="flex flex-col gap-2 text-sm font-medium tracking-normal">
        {
            items.map((i)=>{
                return(
                        <li  key={i.id}
                        className="hover:bg-slate-100 px-3 py-2 rounded-lg text-slate-400 hover:text-blue-500 text-sm whitespace-nowrap">
                        {i.head}
                        </li>
                )
            })
        }
        </ul>

    </div>
  )
}

export default DropDown