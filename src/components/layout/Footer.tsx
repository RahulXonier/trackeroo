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
    <div className="w-full min-h-[50vh] bg-linear-to-b from-slate-100 to-cyan-600 py-30 ">
        <div className=" w-full md:w-7xl p-4  mx-auto h-full ">
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className="flex col-span-2 md:col-span-1 flex-col gap-8">
                <div className='h-20'><img src={logo} alt="trackeroo" className='h-full'/></div>
                <div><p>Trackeroo is a modern platform  that helps you manage your business,track performance, and grow digitally</p></div>
                <div className=" flex gap-4 items-center">
                    {
                        icon.map((i)=>(<div key={i.id} className='flex h-12 w-12 rounded-full border border-gray-200  
                                justify-center items-center text-gray-200 text-xl'>{i.icon}</div>))
                    }

                </div>
            </div>
             <div className="ml-10">
                <h3 className='mb-3 uppercase tracking-wide'>Company</h3>
                <ul className='flex flex-col gap-4'>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg' />About Us</li>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Our Services</li>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Case Studies</li>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Career</li>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Blog </li>
                    <li className='flex gap-2 items-center text-slate-500 font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Contact Us</li>
                </ul>
            </div>
             <div className="">
                <h3 className='mb-3 uppercase tracking-wide'>Quick Link</h3>
                <ul className='flex flex-col gap-4 text-slate-500'>
                    <li className='flex gap-2 items-center  font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Dashboard</li>
                    <li className='flex gap-2 items-center font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Pricing</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Features</li>
                    <li className='flex gap-2 items-center font-medium text-sm'> <MdKeyboardArrowRight className='text-lg'/>Integrations</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Help center</li>
                    <li className='flex gap-2 items-center  font-medium text-sm'><MdKeyboardArrowRight className='text-lg'/>Terms and Condition</li>
                </ul>
            </div>
             <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                <h3 className='mb-3 uppercase tracking-wide'>News Letter</h3>
                <p>Subscribe  to our newsletter and get latest Update and Offer. </p>
                <div className='flex  shadow-[0_0_10px_rgb(0,0,0,0.2)]   rounded-xl '>
                    <input placeholder='Enter Your Mail' className=' outline-0 p-4'/>
                    <button className='text-3xl bg-cyan-500 text-white flex justify-center items-center w-full rounded-xl rounded-l-lg'><BiLogoTelegram/></button>
                </div>

            </div>
            </div>
            <div className='w-full h-[1px] bg-slate-300 mt-15'></div>
            <div className='flex flex-wrap gap-5 justify-between mt-5 items-center'>
              <span className='text-gray-300'>  © 2026 Trackeroo. All rights reserved.</span>
                <ul className='flex text-gray-300 items-center'>
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