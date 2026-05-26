import React, { useEffect, useRef } from 'react'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { FaUserShield } from 'react-icons/fa'
import { LuMessageCircleMore } from 'react-icons/lu'
import { RiTeamFill } from 'react-icons/ri'
import { TbTargetArrow } from 'react-icons/tb'
import { VscGraph } from 'react-icons/vsc'
import Secondarybtn from '../common/Secondarybtn'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeadBtn from '../common/headbtn'

gsap.registerPlugin(ScrollTrigger)


const card =[
    {id:'1',icon:<VscGraph />, head:'Smart Analytics',para:'Real time insight and advance report to help you make better decision.', color:"bg-purple-200 text-purple-600",circle:'bg-purple-100'},
    {id:'2',icon:<RiTeamFill />, head:'Team Management',para:'Manage your teams, roles and permission with ease and flexibility', color:"bg-blue-200 text-blue-600",circle:'bg-blue-100'},
    {id:'3',icon:<FaUserShield />, head:'Role Permissions',para:'Granular access controll ensures data security and accountability.', color:"bg-green-200 text-green-600",circle:'bg-green-100'},
    {id:'4',icon:<LuMessageCircleMore />, head:'Communication Tools',para:'Stay connected with your teams and clients through smart communication.', color:"bg-pink-200 text-pink-600",circle:'bg-pink-100'},
    {id:'5',icon:<AiOutlineThunderbolt />, head:'Automation',para:' Automate repetitive tasks and focus on what really matters. ', color:"bg-red-200 text-red-600",circle:'bg-red-100'},
    {id:'6',icon:<TbTargetArrow />, head:' Lead Tracking ',para:'Track leads, follow-ups, and conversions in one integrated pipeline.', color:"bg-amber-200 text-amber-600",circle:'bg-amber-100'},
]

const Features = () => {
    const featureRef = useRef(null)
    useEffect(()=>{
      const card = gsap.utils.toArray('.cards')

      gsap.from(card,{
         x:80,
         opacity:0,
         stagger:0.2,
         duration:1,
         ease:'power3.inOut',
         scrollTrigger:{
            trigger: featureRef.current,
            start:'top 80%'
         }
      })

    })
  return (
    <div 
    ref={featureRef}

     className='w-full px-6 text-center  py-20 min-h-[500px]'>
        <div className='max-w-7xl mx-auto flex gap-12 flex-col items-center'>
            <div className='flex flex-col gap-4 items-center'>
                
                <HeadBtn value='Features'/>
            <h2 >Everything You{' '}
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
                 Need To Grow
                 </span></h2>
            <p className='text-center'>Powerful feature to designed to streamline your workflow and boost productivity</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  text-start mx-auto px-12 lg:px-6  gap-6  w-full">
                {
                    card.map((item)=>{
                        return(
                            <div key={item.id}
                             className="flex cards gap-4 max-w-[380px] min-h-[100px] relative group  border border-slate-200 p-4 rounded-2xl overflow-hidden ">
                                <div className={`absolute top-0 right-0 w-20 h-20 z-1 rounded-bl-full opacity-40 group-hover:h-30 group-hover:w-30 anime-trans ${item.circle} `} />
                                <div className='w-[30%] flex justify-center items-center'>
                                    <div className={`w-15 h-15 group-hover:scale-110  text-xl flex justify-center anime-trans items-center rounded-full ${item.color}`}>{item.icon}</div>

                                </div>
                                
                                <div className='w-[65%] z-2 '>
                                    <span className='font-bold text-[20px]'>{item.head}</span>
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