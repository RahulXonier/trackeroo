import { FaArrowRight } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { centers } from "../../constants/theme"

import logo from "../../assets/trakeroo.webp"
import Secondarybtn from "../common/Secondarybtn"
import PrimaryBtn from "../common/PrimaryBtn"
import { Link } from "react-router-dom"
import DropDown from "../common/DropDown"
import { TiThMenu } from "react-icons/ti"

export const SolutionData = [
  {id:1,
    title: "By Use Case",
    items: [
        {id:1, head:      "Team Collaboration",
},
        {id:2, head:      "Strategy and Planning",
},
        {id:3, head:      "Service Management",
},
        {id:4, head:      "Software Development",
},
        {id:5, head:      "Project Tracking",
},

    ],
  },

  {id:2,
    title: "By Team",
    items: [
        {id:1, head:'Software'},
        {id:2, head:'Marketing'},
        {id:3, head:'IT'},
        {id:4, head:'Product'},
        {id:5, head:      "HR Management",
},

   
    ],
  },

  {id:3,
    title: "By Size",
    items: [
        {id:1, head:'Enterprise'},
        {id:2, head:      "Small Business",
},
        {id:3, head:      "Startup",
},
        {id:4, head:      "Non-profit",
},
        {id:5, head:'Agency'},
      
    ],
  },

  {id:4,
    title: "By Industry",
    items: [
        {id:1, head:"Retail",},
        {id:2, head:"Telecommunications",
},
        {id:3, head:"Professional Services",
},
        {id:4, head:"Government",
},
        {id:5, head:"Healthcare"},

      
    ],
  },
];




const Navbar = () => {
  return (
    <div className='w-full min-h-[60px] z-50   sticky top-5'>
        <div className="max-w-7xl px-10 py-4 md:py-0 mx-auto rounded-full backdrop-blur-2xl  bg-white/10 flex justify-between items-center shadow-[10px_0px_30px_rgba(0,0,0,0.20)]">
                <div className="w-[30%] h-[40px] ">
                    <img src={logo} alt="logo" className="h-full "/>
                    </div>

                    <div className="flex items-center w-fit text-xl justify-end "><TiThMenu className="block md:hidden" /></div>
                <div className="md:flex hidden w-[70%] justify-between">
                <div >
                   


                    <ul className=" gap-6 items-center text-sm font-bold tracking-widest text-p flex">
  
  <Link to='/'>
    <li className="group flex items-center gap-1 py-6 my-2 cursor-pointer hover:text-blue-500">
      Home
    </li>
  </Link>

  <Link to='/About'>
    <li className="group flex items-center gap-1 py-6 my-2 cursor-pointer hover:text-blue-500">
      About Us
    </li>
  </Link>

  <li className="group relative flex gap-1 py-6 my-2 items-center cursor-pointer hover:text-blue-500">
    Solution
    <IoMdArrowDropdown className="text-lg transition-transform duration-300 group-hover:rotate-180" />

    {/* Dropdown */}
    <div className="absolute top-22 left-0  bg-white flex gap-5 shadow-xl rounded-2xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
    {
        SolutionData.map((i)=>(
            <DropDown key={i.id} title={i.title} items={i.items}/>
        ))
    }
    </div>


  </li>

  <li className="group relative flex gap-1 items-center py-6 my-2 cursor-pointer hover:text-blue-500">
    Resources
    <IoMdArrowDropdown className="text-lg transition-transform duration-300 group-hover:rotate-180" />

    <div className="absolute top-22 left-0 w-52 bg-white shadow-xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
      <ul className="flex flex-col gap-2 text-sm font-medium tracking-normal">
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg text-slate-400 hover:text-blue-500">Blogs</li>
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg text-slate-400 hover:text-blue-500">Documentation</li>
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg text-slate-400 hover:text-blue-500">Help Center</li>
      </ul>
    </div>
  </li>

  <li className="group relative flex gap-1 py-6 my-2 items-center cursor-pointer hover:text-blue-500">
    Pricing
    <IoMdArrowDropdown className="text-lg transition-transform duration-300 group-hover:rotate-180" />

    <div className="absolute text-slate-400 top-22 left-0 w-52 bg-white shadow-xl rounded-2xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
      <ul className="flex flex-col gap-2 text-sm font-medium tracking-normal">
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg hover:text-blue-500">Basic Plan</li>
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg hover:text-blue-500 ">Pro Plan</li>
        <li className="hover:bg-slate-100 px-3 py-2 rounded-lg hover:text-blue-500">Enterprise</li>
      </ul>
    </div>
  </li>

</ul>
                </div>
                <div className=" text-p gap-4 items-center hidden lg:flex ">
                    <Secondarybtn value="Get a demo"/>
                    <PrimaryBtn value='Get Started ' event={''}/>
                </div>
                </div>

        </div>
        
    
    </div>
  )
}

export default Navbar