
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, IoLogoTwitter } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import HeadBtn from "../../common/headbtn";
import { Link } from "react-router-dom";

const data =[
  {
    "id": 1,
    "name": "Rahul Xonier",
    "role": "Founder & CEO",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "rahul@trackeroo.com"
  },
  {
    "id": 2,
    "name": "Anjali Sharma",
    "role": "Head of Product",
    "image": "https://randomuser.me/api/portraits/women/44.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "anjali@trackeroo.com"
  },
  {
    "id": 3,
    "name": "Vikram Mehta",
    "role": "Head of Engineering",
    "image": "https://randomuser.me/api/portraits/men/75.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "vikram@trackeroo.com"
  },
  {
    "id": 4,
    "name": "Neha Verma",
    "role": "Customer Success Lead",
    "image": "https://randomuser.me/api/portraits/women/68.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "neha@trackeroo.com"
  },
  {
    "id": 5,
    "name": "Arjun Kapoor",
    "role": "UI/UX Designer",
    "image": "https://randomuser.me/api/portraits/men/41.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "arjun@trackeroo.com"
  },
  {
    "id": 6,
    "name": "Priya Singh",
    "role": "Marketing Manager",
    "image": "https://randomuser.me/api/portraits/women/33.jpg",
    "linkedin": "#",
    "twitter": "#",
    "email": "priya@trackeroo.com"
  }
]

const Team = () => {
  return (
    <div className="w-full  min-h-[50vh]">
        <div className="max-w-7xl mx-auto relative">
            <div className="flex flex-col gap-6 items-center">

           
            <HeadBtn value='Our Team'/>
            <h2>Meet the People Behind {' '}
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
                Trakeroo</span></h2>
             </div>

        
        <button className="prevbtn absolute top-[55%] -left-5 z-20 text-5xl cursor-pointer text-cyan-600"> <IoIosArrowDropleftCircle /></button>
        <button className="nextbtn absolute top-[55%] -right-5 z-20 text-5xl cursor-pointer text-cyan-600"><IoIosArrowDroprightCircle /></button>

         <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter:true
          }}
          navigation={{
           nextEl:'.nextbtn',
           prevEl:'.prevbtn'
          }}
          pagination={{
            el: '.pgdots',
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          style={{"padding": "20px 7px",
            'marginTop': '40px'
          }}
          className=" "
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  shadow-lg
                  border
                  border-slate-100
                  h-full
                  hover:-translate-y-3
                  transition-all
                  duration-500
                  group
                "
              >
                

                

                <div className="flex flex-col items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      w-20
                      h-20
                      rounded-full
                      object-cover
                      border-2
                      border-cyan-400
                    "
                  />

                  <div className="flex flex-col justify-center items-center gap-2">
                    <h4 className="font-semibold text-slate-800">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.role} 
                    </p>
                  </div>
                  <div className="flex items-center w-[200px] text-2xl text-cyan-500 px-5 justify-between">
                      <Link to={item.linkedin}>
                      <span>
                        <FaLinkedinIn />
                    </span>
                      
                      </Link>
                    
                    <Link to={item.twitter}> <span>
                        <IoLogoTwitter />
                    </span></Link>
                   
                    <Link to={item.email}><span>
                        <MdOutlineMailOutline />
                    </span></Link>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
         <div className="flex  items-center justify-between z-10 mt-5 ">

        <span className="pgdots text-center z-20 ml-5" />
        </div>


    </div>
    </div>
  )
}

export default Team