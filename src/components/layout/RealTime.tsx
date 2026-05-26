import React from 'react'
import dashboard from '../../assets/dashboard ss.png'
import { FaCheckCircle } from 'react-icons/fa'
import Secondarybtn from '../common/Secondarybtn'
import side from '../../assets/side.webp'
import SideCards from '../common/SideCards'
import { BsGraphUp, BsGraphUpArrow } from 'react-icons/bs'
import { VscGraph, VscGraphLine } from 'react-icons/vsc'
import { MdOutlineAdd } from 'react-icons/md'
import bg from '../../assets/17973908-removebg-preview.png'
import HeadBtn from '../common/headbtn'
import PrimaryBtn from '../common/PrimaryBtn'


const data =[
  {id:1,head:'Total Leads',sign:<MdOutlineAdd />,num:55163,num2:12.5,suf:'',prefix:'%',p:'this month',gra:<BsGraphUpArrow />,prop:'absolute -top-10 left-0 rounded-2xl',gcolor:'text-green-400'},
  {id:2,head:'Revenue',num:100,sign:<MdOutlineAdd />,num2:10,hesuf:'$',prefix:'%',p:'this month',gra:<VscGraphLine />,prop:'absolute -top-10 right-0 rounded-2xl',gcolor:'text-amber-400'},
  {id:3,head:'Conversion Rate',sign:<MdOutlineAdd />,num:54,hpre:'%',num2:4,suf:'',prefix:'%',p:'this month',prop:'absolute bottom-[70px] left-0 rounded-2xl',gra:<VscGraph />,gcolor:'text-red-400'},
  {id:4,head:'Active User',num:78,sign:<MdOutlineAdd />,num2:15,suf:'',prefix:'%',p:'this month',prop:'absolute bottom-[70px] right-0 rounded-2xl',gra:<BsGraphUp />,gcolor:'text-blue-400'},
]

const RealTime = () => {

  return (
    <div
    className="w-full px-6 lg:px-0  min-h-[80vh] relative py-20 bg-slate-50   bg-cover bg-center">
      <div
    className="absolute inset-0 bg-cover bg-center opacity-20 "
    // style={{ backgroundImage: `url(${bg})` }}
  ></div>

         

        <div className='max-w-7xl  relative h-full mx-auto  flex flex-wrap  items-center justify-between'>
          <div className=' w-full lg:w-[35%] h-full  rounded-2xl p-4 bg-slate-50  '>
            <div className='flex flex-col h-full justify-center gap-6'>

              <HeadBtn value='Dashboard Overview' />
            <h2> 
              Real-Time Insights,{' '}
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
               Smarter Decisions
               </span></h2>
            <p>Get a complete overview of your business performance with beautiful analytics and easy-to-understand repets.</p>
            <ul className='text-sm flex flex-col gap-4 justify-center '>
             <li className='flex  gap-4 text-slate-500'><FaCheckCircle  className='text-cyan-600'/>Track performance in real-time</li> 
             <li className='flex gap-4 items-center text-slate-500'><FaCheckCircle className='text-cyan-600' /> Monitor team activity </li>
             <li className='flex gap-4 items-center text-slate-500'><FaCheckCircle  className='text-cyan-600'/> Analyze revenue and conversion</li>
             <li className='flex gap-4 items-center text-slate-500'><FaCheckCircle  className='text-cyan-600'/> Export reports instantly </li>
            </ul>
            <PrimaryBtn value='Explore Dashboard ' />
            </div>

          </div>
          <div className='w-full lg:w-[60%] relative h-full flex items-center justify-center '>
            
            {data.map((item)=>{
              return(
                 <SideCards key={item.id} sign={item.sign} hpre={item.hpre} hesuf={item.hesuf} head={item.head} num={item.num} num2={item.num2} suf={item.suf} prefix={item.prefix} p={item.p} prop={item.prop} gcolor={item.gcolor} gra={item.gra} />
              )     
})
            }         
            <div className='w-150 rounded-3xl shadow-[0_0_5px_#00000010] hover:shadow-[0_0_15px_#00000025] transition-all duration-400'>
            <img src={dashboard} alt='dashboard' className='object-cover rounded-3xl '/>

            </div>
          </div>

        </div>

    </div>
  )
}

export default RealTime