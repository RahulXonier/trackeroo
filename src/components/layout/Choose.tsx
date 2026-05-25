import { useEffect, useRef } from 'react'
import { MdOutlineSecurity } from 'react-icons/md'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaRegCheckCircle } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { IoIosCloudDone } from 'react-icons/io'
import { FaClockRotateLeft } from 'react-icons/fa6'
import { gsap } from 'gsap'
import img from '../../assets/ChatGPT Image May 22, 2026, 05_43_14 PM.png'
import HeadBtn from '../common/headbtn'

const data = [
  { id: 1, icon: <MdOutlineSecurity />, main: 'Secure & Reliable' },
  { id: 2, icon: <BsGraphUpArrow />, main: 'Scalable Architecture' },
  { id: 3, icon: <FaRegCheckCircle />, main: 'Fast Onboarding' },
  { id: 4, icon: <BiSupport />, main: '24/7 Support' },
  { id: 5, icon: <IoIosCloudDone />, main: 'Cloud Based' },
  { id: 6, icon: <FaClockRotateLeft />, main: 'Regular Updates' },
]

const Choose = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from('.choose-img', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out',
    })

    gsap.from('.choose-content', {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    })

    // gsap.from('.feature-card', {
    //   opacity: 0,
    //   y: 40,
    //   stagger: 0.1,
    //   duration: 0.8,
    //   delay: 0.4,
    //   ease: 'power3.out',
    // })


   
  }, [])

//   console.log("ss :",data)

  return (
    <div
      ref={sectionRef}
      className='w-full min-h-[90vh] py-20 overflow-hidden relative bg-slate-50'
    >
      <div
        className='absolute inset-0 opacity-[0.05]'
        style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />


      <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full' />
      <div className='absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/20 blur-3xl rounded-full' />

      <div className='w-[90%] max-w-7xl mx-auto relative z-20 flex flex-col lg:flex-row items-center justify-between gap-16'>
        

        <div className='choose-img w-full lg:w-[48%] relative group'>
          

          <div className='absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 group-hover:blur-xl transition-all duration-500' />

          <img
            src={img}
            alt='image'
            className='relative rounded-2xl shadow-2xl border border-white/20'
          />


          <div className='absolute -bottom-6 -right-6 bg-white px-5 py-4 rounded-2xl shadow-2xl border border-slate-200'>
            <h4 className='text-3xl font-bold bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
              98%
            </h4>
            <p className='text-slate-500 text-sm'>
              Client Satisfaction
            </p>
          </div>
        </div>

        <div className='choose-content w-full lg:w-[45%] flex flex-col gap-6'>
          
          <HeadBtn value='Why Choose Us' />

          <h2 className='text-4xl lg:text-5xl font-bold leading-tight text-slate-900'>
            Built for{' '}
            <span className='bg-gradient-to-r from-cyan-500 to-emerald-400 bg-clip-text text-transparent'>
              Modern Businesses
            </span>
          </h2>

          <p className='text-slate-600 leading-relaxed'>
            Our platform is designed to help teams collaborate smarter,
            automate workflows, and scale operations with powerful cloud
            solutions.
          </p>
          

          <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2'>
            {data.map((i) => (
              <li
                key={i.id}
                className='feature-card group flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 text-white text-xl flex justify-center items-center shadow-lg group-hover:scale-110 transition-all duration-300'>
                  {i.icon}
                </div>

                <p className='font-medium text-slate-700'>
                  {i.main}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Choose