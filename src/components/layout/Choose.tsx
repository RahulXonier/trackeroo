import React from 'react'
import Secondarybtn from '../common/Secondarybtn'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { IoIosCloudDone } from 'react-icons/io'
import { FaClockRotateLeft } from 'react-icons/fa6'
import img from '../../assets/ChatGPT Image May 22, 2026, 05_43_14 PM.png'

const data=[
    {id:1,icon:<MdOutlineSecurity />,main:'Secure & Reliable'},
    {id:2,icon:<BsGraphUpArrow />,main:'Scalable Architecture'},
    {id:3,icon:<FaRegCheckCircle />,main:'Fast Onboarding'},
    {id:4,icon:<BiSupport />,main:'24/7 Support'},
    {id:5,icon:<IoIosCloudDone />,main:'Cloud Based'},
    {id:6,icon:<FaClockRotateLeft />,main:'Regular Updates'},
]

const Choose = () => {
  return (
    <div className='w-full min-h-[50vh] py-12'>
        <div className='w-7xl h-full flex justify-between mx-auto '>
        <div className='w-[45%] h-full'>
            <img src={img} alt='image' className='rounded-3xl'/>

        </div>
        <div className='w-[45%] h-full flex flex-col gap-4 py-12 justify-center'>
            <Secondarybtn value="Why Choose Us"/>
            <h2>Built for Modern Businesses</h2>
            <p>Our platform is designed to help teams collaborate, track performance, and grow faster.</p>
            <ul className='grid grid-cols-2 gap-4'>
                {
                    data.map((i)=>(
                        <li key={i.id} className='flex  items-center gap-2 '>
                            <div className='w-10 h-10 rounded-full bg-cyan-500 text-white text-lg flex justify-center items-center'>
{i.icon}
                            </div>
                            <p>
                            {i.main}
                            </p>
                        </li>
                    ))
                }
            </ul>

        </div>
        </div>

    </div>
  )
}

export default Choose