import React from 'react'
import Counter from './Counter'

const PurposeCard = ({id, icon ,head,p,color,count,suffix}) => {
  return (
    <>
    <div  className={`flex  ${ id ===1 ? '':'border-l border-slate-200' } justify-between px-4 gap-2 max-w-[400px]`}>
                            <div className={` flex justify-center items-center w-[20%] `}>
                            <span className={`${color} border text-3xl w-fit p-2  rounded-full flex`}> 
                                {icon}

                            </span>
                            </div>
                            <div className='flex flex-col gap-2 w-[80%]'>
                                { head && p  && <>
                                <h3>{head}</h3>
                                <p>{p}</p>
                                </>
                                
                                }
                                {count && suffix && <>
                                <div className='flex gap-2 px-4 items-center '>
                                         <h3>
                                            <Counter end={count}/></h3><span className='text-xl'>{suffix}</span>
                                </div>
                                <p className='px-4'>{head}</p>
                           
                                </>

                                }
                            </div>

                        </div>

    </>
  )
}

export default PurposeCard