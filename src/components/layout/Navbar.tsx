import { FaArrowRight } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { centers } from "../../constants/theme"

import logo from "../../assets/trakeroo.webp"
import Secondarybtn from "../common/Secondarybtn"
import PrimaryBtn from "../common/PrimaryBtn"




const Navbar = () => {
  return (
    <div className='w-full min-h-[60px] z-5   sticky top-5'>
        <div className="w-7xl px-10 h- mx-auto rounded-full backdrop-blur-2xl py-2 bg-white/10 flex justify-between items-center shadow-[10px_0px_30px_rgba(0,0,0,0.20)]">
                <div className="w-[30%] h-[40px] ">
                    <img src={logo} alt="logo" className="h-full "/>
                    </div>
                <div className="flex w-[70%] justify-between">
                <div >
                    <ul className="flex gap-6 items-center text-sm font-bold tracking-widest text-p ">
                        <li className=" h-full py-4 my-2">Home</li>
                        <li >About Us</li>
                        <li  className="flex gap-2 py-4 my-2 items-center ">Solution <IoMdArrowDropdown /></li>
                        <li className="flex gap-2  items-center py-4 my-2 ">Resources <IoMdArrowDropdown /></li>
                        <li className="flex gap-2 py-4 my-2 items-center ">Pricing <IoMdArrowDropdown /></li>

                    </ul>
                </div>
                <div className="flex text-p gap-4 items-center ">
                    <Secondarybtn value="Login"/>
                    <PrimaryBtn value='Get Started ' event={''}/>
                </div>
                </div>

        </div>
        
    
    </div>
  )
}

export default Navbar