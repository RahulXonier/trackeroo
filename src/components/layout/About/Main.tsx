import React from 'react'
import image from '../../../assets/about1.webp'
import HeadBtn from '../../common/headbtn'
import PrimaryBtn from '../../common/PrimaryBtn'
import Secondarybtn from '../../common/Secondarybtn'
import img1 from '../../../assets/about_bg.jpg'

const Main = () => {
  return (
    <div className='w-full min-h-[62vh]  py-20 relative bg-slate-100  '>
      
      {/* <div className='absolute right-[20%] top-[15%] h-100 w-100 rounded-full z-10 opacity-20 bg-linear-to-r from-cyan-600 to-emerald-400'></div> */}
      {/* <div className='absolute w-full h-full top-0 left-0'>
        <img src={img1} alt='bg' className='w-full h-full object-full'/>
      </div> */}

        <div className='max-w-7xl relative mx-auto h-full flex justify-between'>
         
        <div className='w-full h-full flex flex-col z-2 items-center bg-slate-200`  justify-center gap-6 '
       >
  
                {/* <HeadBtn value='About Us'/> */}
                <span className='text-xl font-medium text-gray-500'>About Trackeroo</span>
                <h1 className=' text-center'>Manage Business, Track Performance,<br/>
& Grow Smarter With {' '}
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
 Trakeroo.</span></h1>
                <div className='flex gap-6'>
                <PrimaryBtn value='Our Services'/>
                <Secondarybtn value='Contact Us'/>
                </div>
            
        </div>
     {/* <div className='w-[45%] h-full rounded-full overflow-hidden'>
        <img src={image} alt='about ' className='w-full h-full object-cover'/>
     </div> */}
     </div>
    </div>
  )
}

export default Main