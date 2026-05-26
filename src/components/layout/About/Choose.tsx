import HeadBtn from '../../common/headbtn'
import { LuShieldCheck } from 'react-icons/lu'
import { TbClockCheck, TbPuzzle } from 'react-icons/tb'
import { CiCloudOn } from 'react-icons/ci'
import { VscGraph } from 'react-icons/vsc'

const data = [
    {id:1,icon:<LuShieldCheck />,head:'Enterprise Grade Security', p:'Your data is safe and protected with industry-leading security.'},
    {id:2,icon:<TbClockCheck />,head:'24/7 Dedicated Support', p:'Our support team is always here to help you succeed.'},
    {id:3,icon:<CiCloudOn />,head:'99.9% Uptime', p:'Reliable performance you can count on, every time.'},
    {id:4,icon:<VscGraph />,head:'Powerful Insights', p:'Make smarter decisions with real-time data and reports.'},
    {id:5,icon:<TbPuzzle />,head:'Seamless Integrations', p:'Connect with your favorite tools and automate your workflow'},
]

const Choose = () => {
  return (

    <div className='w-full h-full py-20'>
        <div className='max-w-7xl h-full mx-auto justify-center items-center flex flex-col gap-6 '>

        <HeadBtn value='Why Choose US'/>
        <h2 className='text-center'>Everything You Need to Grow, <br/>
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>

        in One Platform </span></h2>

        <div className='w-full grid grid-cols-3 gap-4'>
           {data.map((i)=>{
            return(
                <div key={i.id} className='flex flex-col justify-center gap-4 w-[300px] h-[200px] bg-slate-50 items-center p-4 border border-slate-100 rounded-2xl'>
                    <div className='flex h-[25%]'>
                        <span className='text-xl p-2 border rounded-full border-cyan-500 bg-cyan-100 text-cyan-500 '>{i.icon}</span>
                    </div>
                     <div className='flex flex-col gap-2 items-center  h-[70%]'>
                             <h4 className='text-[15px] font-medium text-center text-slate-600'>{i.head}</h4>
                    <p className='text-center'>{i.p}</p>
                        </div>
                       
                   
                </div>
            )
           })}
        </div>

      </div> 
       </div>
  )
}

export default Choose