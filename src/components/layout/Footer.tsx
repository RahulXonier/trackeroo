import { TfiFacebook } from 'react-icons/tfi'
import logo from '../../assets/trakeroo.webp'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BiLogoTelegram } from 'react-icons/bi'
import msg from '../../assets/message.png'
import icon1 from "../../assets/visa.png"
import icon2 from "../../assets/Mastercard.png"
import icon3 from "../../assets/paypal.png"
import icon4 from "../../assets/americanExpress.png"

const icon =[
    {id:1,icon:<TfiFacebook />},
    {id:2,icon:<FaTwitter />},
    {id:3,icon:<FaLinkedinIn />},
    {id:4,icon:<BsInstagram />},
]

const Footer = () => {
  return (
    <div className="w-full min-h-[50vh]  py-20 ">
        <div className=" w-full md:max-w-7xl py-10 px-5 rounded-2xl  mx-auto h-full bg-linear-to-t from-cyan-600 to-cyan-500">
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className="flex col-span-2 md:col-span-1 flex-col gap-8">
                <div className='h-20'><img src={logo} alt="trackeroo" className='h-full'/></div>
                <div><span className='text-white/60 text-sm'>Trackeroo is a modern platform  that helps you manage your business, track performance, and grow digitally</span></div>
                <div className=" flex gap-4 items-center">
                    {
                        icon.map((i)=>(<div key={i.id} className='flex h-12 w-12 rounded-full border border-gray-200  
                                justify-center items-center text-gray-200 text-xl'>{i.icon}</div>))
                    }

                </div>
            </div>
             <div className="ml-10 flex flex-col gap-6">
                <span className=' uppercase font-bold relative text-lg tracking-wide text-[#043264] '>Company
                <div className=' h-[2px] rounded-full absolute -bottom-1 left-0 w-10  bg-white/80'></div>

                </span>
                <ul className='flex flex-col gap-4 text-white/60'>
                    <li className='flex gap-2 items-center  font-medium text-sm'>About Us</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'>
                        Our Services</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'>
                        Case Studies</li>
                    <li className='flex gap-2 items-center font-medium text-sm'>Career</li>
                    <li className='flex gap-2 items-center font-medium text-sm'>Blog </li>
                    <li className='flex gap-2 items-center font-medium text-sm'>Contact Us</li>
                </ul>
            </div>
             <div className="flex flex-col gap-6">
                <span className=' uppercase font-bold text-lg relative tracking-wide text-[#043264]'>Quick Link
                <div className=' h-[2px] rounded-full absolute -bottom-1 left-0 w-10  bg-white/80'></div>
                </span>
                <ul className='flex flex-col gap-4 text-white/60'>
                    <li className='flex gap-2 items-center  font-medium text-sm'>Dashboard</li>
                    <li className='flex gap-2 items-center font-medium text-sm'>Pricing</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'>Features</li>
                    <li className='flex gap-2 items-center font-medium text-sm'> Integrations</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'>Help center</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'>Terms and Condition</li>
                </ul>
            </div>
             <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                <span className=' uppercase font-bold text-lg relative tracking-wide text-[#043264]'>News Letter
                <div className=' h-[2px] rounded-full absolute -bottom-1 left-0 w-10  bg-white/80'></div>

                </span>

                <span className='text-white/60 text-sm'>Subscribe  to our newsletter and get latest Update and Offer. </span>
                <div className='flex gap-4 justify-between shadow-white/30 shadow-[0_0_10px]  rounded-xl '>
                    <input placeholder='Enter Your Mail' className='text-white/60 w-full outline-0 p-4' />
                    <button className='text-3xl bg-cyan-600 text-white flex justify-center items-center w-fit px-5 rounded-xl rounded-l-lg'><BiLogoTelegram/></button>
                </div>

            </div>
            </div>
            <div className='w-full h-[1px] bg-slate-300 mt-15'></div>
            <div className='flex flex-wrap gap-5 justify-between mt-5 items-center'>
              <span className='text-white/60'>  © 2026 Trackeroo. All rights reserved.</span>
                <ul className='flex text-white/60 items-center'>
                    <li className='  px-4  '>Privacy Policy</li>
                    <li className=' border-l px-4  '>Terms of use</li>
                    <li className=' border-l px-4  '>Refund Policy</li>
                    <li className=' border-l px-4  '>Sitemap</li>
                    </ul>
            
                    <ul className='flex gap-2 '>
                        <li className='h-[40px] w-[70px] bg-white rounded-sm'><img src={icon1} alt='icon' className='h-full w-full object-fill'/></li>
                        <li className='h-[40px] w-[70px] bg-white rounded-sm'><img src={icon2} alt='icon' className='h-full w-full object-fill'/></li>
                        <li className='h-[40px] w-[70px] bg-white rounded-sm'> <img src={icon3} alt='icon' className='h-full w-full object-fill'/></li>
                        <li className='h-[40px] w-[70px] bg-white rounded-sm'><img src={icon4} alt='icon' className='h-full w-full rounded-sm object-fill'/></li>
                    </ul>
            
            </div>
        </div>


    </div>
  )
}

export default Footer