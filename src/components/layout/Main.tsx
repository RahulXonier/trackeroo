import { BsStars } from 'react-icons/bs'
import dashboard from '../../assets/dashboard ss.png'
import Secondarybtn from '../common/Secondarybtn'
import PrimaryBtn from '../common/PrimaryBtn'
import bg from "../../assets/shape-1.png"
import acc from "../../assets/03-1.png"
import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import BlurScreen from '../common/BlurScreen'




const Main = () => {


    const cardRef = useRef(null)
    const containerRef = useRef(null)



useEffect(()=>{

    gsap.fromTo('.box',{
        x:-20,

    },{
        x:50,
        duration : 2,
        repeat:-1,
        ease:'none',
        yoyo:true,
    });

    gsap.fromTo(
        cardRef.current,
        {
            x:100,
            opacity:0.7,

        },
        {
            x:0,
            opacity:1,
            duration:2,
            ease:'back.out(1.7)'
        }

    );
     gsap.fromTo(
        containerRef.current,
        {
            x:-100,
            opacity:0.7,

        },
        {
            x:0,
            opacity:1,
            duration:2,
            ease:'back.out(1.7)'
        }

    )
},[])
  return (
     <div className='w-full min-h-[80vh] py-20 relative px-4 '>

        {/* <BlurScreen /> */}
        <div className='absolute hidden md:block  h-172 w-125 z-0 right-0 rounded-l-full bg-linear-150 from-[#1ba2c3] to-[#2ca679]'></div>
        
        <div className='absolute hidden md:block  top-0 z-0 text-cyan-400 text-[300px]  w-[700px] opacity-35   left-0 blur-[1px]'>
            <img src={bg} alt='icon' className='w-full h-full object-cover'/>
        </div>
        
        <div className='max-w-7xl mx-auto  h-full grid grid-cols-1 gap-10 lg:grid-cols-5 justify-between  pt-16 '>
            <div
              ref={containerRef}
            className=' flex flex-col gap-6 justify-center  z-1 lg:col-span-2'
            >
                <span className='py-2 px-6 rounded-3xl w-fit border border-teal-200 center utext  bg-green-50'> 
                    <BsStars className='text-amber-300 ' />
                    <span className='bg-gradient-to-r from-[#1ba2c3] to-[#2ca679] bg-clip-text text-transparent '>All-In-One CRM Platform
                        </span></span>
                <h1>
                    Manage Leads, Role, Teams & Sales In One{' '}
                    <span className='bg-linear-to-r from-[#1ba2c3] to-[#2ca679] bg-clip-text text-transparent'> Smart CRM</span> 

                </h1>
                <p className='text-p'>Powerful analytics, role management, lead tracking, and team collaboration built for modern businesses.</p>
                <div className='flex gap-4'>
                   
                    <PrimaryBtn value='Start Free Trail' event=''/>
                    <Secondarybtn value='Book a Demo'/>
                  

                </div>
            </div>
            <div 
               ref={cardRef}
            className=' relative max-h-[550px] z-2  rounded-3xl  lg:col-span-3 '>
                
         <div className={`absolute  bottom-[40px] z-0 rounded-2xl overflow-hidden left-[-50px] shadow-[0px_0px_12px_#00000020] hover:shadow-[0px_0px_18px_#00000025] box`}
               >
            <img src={acc} alt='icon' className='w-full h-full object-cover'/>
        </div>
                <img src={dashboard} alt='image' className=' z-1 h-full w-full  rounded-3xl object-cover lg:object-fill shadow-[0px_0px_12px_#00000020] hover:shadow-[0px_0px_18px_#00000025] '/>

            </div>

        </div>
    </div>
  )
}

export default Main