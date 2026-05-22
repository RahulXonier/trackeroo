import React from 'react'
import icon1 from '../../assets/googlelogo.png'
import icon2 from '../../assets/hub.png'
import icon3 from '../../assets/slack-removebg-preview.png'
import icon4 from '../../assets/notion.png'
import icon5 from '../../assets/shopify.png'


const data =[  
    {id:'1',icon:icon1},
    {id:'2',icon:icon2},
    {id:'3',icon:icon3},
    {id:'4',icon:icon4},
    {id:'5',icon:icon5},
]

const Companies = () => {
  return (
    <div className='w-full min-h-[50px]  flex flex-col gap-6 py-12 justify-center items-center  '>
       <h3 className=''>Trusted by Fast-growing companies round the world</h3>
       <div className='flex justify-center gap-15 items-center '>
        {
            data.map((item)=>{
                return(
                    <div key={item.id} className='flex  justify-center items-center bg-white w-[100px] h-[100px]'>
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