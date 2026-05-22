import React from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { FaUserShield } from 'react-icons/fa'
import { LuMessageCircleMore } from 'react-icons/lu'
import { RiTeamFill } from 'react-icons/ri'
import { TbTargetArrow } from 'react-icons/tb'
import { VscGraph } from 'react-icons/vsc'
import Secondarybtn from '../common/Secondarybtn'

const card =[
    {id:'1',icon:<VscGraph />, head:'Smart Analytics',para:'Real time insight and advance report to help you make better decision.', color:"bg-purple-200 text-purple-600",},
    {id:'2',icon:<RiTeamFill />, head:'Team Management',para:'Manage your teams, roles and permission with ease and flexibility', color:"bg-blue-200 text-blue-600"},
    {id:'3',icon:<FaUserShield />, head:'Role Permissions',para:'Granular access controll ensures data security and accountability.', color:"bg-green-200 text-green-600"},
    {id:'4',icon:<LuMessageCircleMore />, head:'Communication Tools',para:'Stay connected with your teams and clients through smart communication.', color:"bg-pink-200 text-pink-600"},
    {id:'5',icon:<AiOutlineThunderbolt />, head:'Automation',para:' Automate repetitive tasks and focus on what really matters. ', color:"bg-red-200 text-red-600"},
    {id:'6',icon:<TbTargetArrow />, head:' Lead Tracking ',para:'Track leads, follow-ups, and conversions in one integrated pipeline.', color:"bg-amber-200 text-amber-600"},
]

const Features = () => {
  return (
    <div className='w-full py-12 min-h-[500px]'>
        <div className='w-7xl mx-auto flex gap-12 flex-col items-center'>
            <div className='flex flex-col gap-4 items-center'>
                
                <Secondarybtn value='Features'/>
            <h3 >Everything You Need To Grow</h3>
            <p>Poweful feature to designed to steamline your workflow and boost productivity</p>

            </div>
            <div className="flex gap-6 flex-wrap  justify-between w-full">
                {
                    card.map((item)=>{
                        return(
                            <div key={item.id}
                             className="flex gap-4 w-[380px] min-h-[100px] group  border border-slate-200 p-4 rounded-2xl ">
                                <div className='w-[30%] flex justify-center items-center'>
                                    <div className={`w-15 h-15 group-hover:scale-110  text-xl flex justify-center items-center rounded-full ${item.color}`}>{item.icon}</div>

                                </div>
                                
                                <div className='w-[65%] '>
                                    <h3 className='font-bold'>{item.head}</h3>
                                    <p className='mt-2'>{item.para}</p>

                                </div>

                            </div>

                        )
                    })
                }

            </div>
            
        </div>
    </div>
  )
}

export default Features