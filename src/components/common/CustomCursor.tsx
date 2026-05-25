import gsap from 'gsap';
import { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(()=>{
    const cursor = cursorRef.current
    const dot = dotRef.current

    if(!cursor || !dot ) return;

    const moveCursor = (e: MouseEvent)=>{
        const x = e.clientX;
        const y = e.clientY;


        gsap.to(cursor,{
            x,y,
            duration:0.1,
            ease : "power2.out"
        })
          gsap.to(dot,{
            x,y,
            duration:1,
            ease : "power2.out"
        })
    }

     window.addEventListener('mousemove',moveCursor)
return () => {
      window.removeEventListener("mousemove", moveCursor);
    };


  },[])

  return (
    <>
    <div
    ref={cursorRef}
    className='fixed top-0 left-0 w-12 h-12 border-2 border-cyan-400 rounded-full pointer-events-none z-50 '
       style={{
          transform: "translate(-50%, -50%)",
        }}>
      

    </div>
       <div
    ref={dotRef}
    className='fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 '
      style={{
          transform: "translate(-50%, -50%)",
        }}
    ></div>


      
    </>
  )
}

export default CustomCursor
