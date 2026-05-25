import React from 'react'

const HeadBtn = ({value}) => {
  return (
    <>
    <a href="#_" className="rounded-full px-4 py-2  relative group cursor-pointer text-sm border font-medium hover:border-green-400/25 border-slate-200 hover:bg-green-50 w-fit  ">
    <span className="relative text-gray-400  transition duration-300 group-hover:text-green-600 group- ease">{value}</span>
</a>

    </>
  )
}

export default HeadBtn