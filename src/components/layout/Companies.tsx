import React, { useEffect, useRef } from 'react'
import icon1 from '../../assets/googlelogo.png'
import icon2 from '../../assets/hub.png'
import icon3 from '../../assets/slack-removebg-preview.png'
import icon4 from '../../assets/notion.png'
import icon5 from '../../assets/shopify.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const data =[  
    {id:'1',icon:icon1},
    {id:'2',icon:icon2},
    {id:'3',icon:icon3},
    {id:'4',icon:icon4},
    {id:'5',icon:icon5},
]

const Companies = () => {
    const companiesRef = useRef(null)
    useEffect(()=>{
        const cards = gsap.utils.toArray('.company-card')

        gsap.from(cards,{
            opacity:0,
            y:80,
            scale:0.8,
            duration:1,
            stagger:0.2,
            ease:'power3.out',

            scrollTrigger:{
                trigger: companiesRef.current,
                start:'top 80%',
            }
        })
    },[])
    

  return (
    <div

    ref={companiesRef}
    className='w-full min-h-[50px]  flex flex-col gap-6 py-12 justify-center items-center  '>
       <h3 className=''>Trusted by Fast-growing companies round the world</h3>
       <div className='flex justify-center gap-15 items-center '>
        {
            data.map((item)=>{
                return(
                    <div key={item.id} className='flex company-card justify-center items-center bg-white w-[100px] h-[100px]'>
                        <img src={item.icon} alt='icon w-full h-full object-full'/>
                </div>
                )
            })
       }

       </div>
       

    </div>
  )
}

export default Companies