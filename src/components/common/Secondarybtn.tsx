

const Secondarybtn = ({value}:{value: string}) => {
  return (
    <>
    <a href="#_" className="rounded-full px-6 py-3  relative group cursor-pointer border font-medium hover:border-green-400/25 border-slate-200 hover:bg-green-50 w-fit  ">
    <span className="relative text-gray-400  transition duration-300 group-hover:text-green-600 group- ease">{value}</span>
</a>
    </>
  )
}

export default Secondarybtn