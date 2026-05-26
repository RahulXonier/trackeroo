import React from 'react'
import HeadBtn from '../../common/headbtn'
import { TbTargetArrow } from 'react-icons/tb'
import { MdBusinessCenter, MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'
import { BiHappy } from 'react-icons/bi'
import { BsGlobe2, BsGraphUpArrow } from 'react-icons/bs'
import PurposeCard from '../../common/PurposeCard'

const data1 =[
    {id:1,icon:<TbTargetArrow />,head:'Our Mission',p:'To provide an all-in-one platform that simplifies the way business manage, track, and grow',color:'  bg-red-100 text-red-400 '},
    {id:2,icon:<MdOutlineRemoveRedEye />,head:"Our Vision",p:"To become the world's most trusted business management platform for every ambition team.",color:'b bg-blue-100 text-blue-400 '},
    {id:3,icon:<FaRegHeart />
,head:'Our Values',p:'We value simplicity, transparency, innovation, and our customers success above everything.',color:' bg-pink-100 text-pink-400 '},
]

const data2 =[
    {id:1,icon:<BiHappy />,count:10000, suffix:'+',head:'Happy Customers',color:' bg-amber-100 text-amber-400 '},
    {id:2,icon:<MdBusinessCenter />,count:50000, suffix:'+',head:'Businesses Managed',color:' bg-teal-100 text-teal-400 '},
    {id:3,icon:<BsGraphUpArrow />,count:99.9, suffix:'%',head:'System Update',color:' bg-green-100 text-green-400 '},
    {id:4,icon:<BsGlobe2 />,count:120, suffix:'+',head:'Countries Served',color:' bg-cyan-100 text-cyan-400 '},
]


const Purpose = () => {
  return (
    <div className='w-full min-h-[50vh] py-20'>
        <div className='max-w-7xl  flex flex-col gap-6 items-center mx-auto h-full'>
            <HeadBtn value='Our Purpose'/>
            <h2 className='text-center'>We're On a Mission to Simplify <br/> 
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>

            Business Management
            </span></h2>

            <p>Trackeroo was built to empower business of all sizes with smart tools, actionable insight, and exceptional support. </p>
            <div className='flex justify-between w-full'>
            {
                data1.map((i)=>{
                    return(
                        <PurposeCard key={i.id} id={i.id} icon={i.icon} head={i.head} p={i.p} color={i.color}/>
                    )
                })
            }
            </div>
            <div className='flex justify-between rounded-2xl bg-slate-100 py-10  w-full px-4'>
                {data2.map((i)=>{
                    return(
                        <PurposeCard key={i.id} icon={i.icon} count={i.count} suffix={i.suffix} head={i.head} id={i.id} color={i.color}/>
                    )
                })}
            </div>



        </div>

    </div>
  )
}

export default Purpose