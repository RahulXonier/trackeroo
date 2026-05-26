
import Counter from './Counter'


const SideCards = ({ head, num,hesuf,hpre, num2,sign, suf, prefix, p, prop, gcolor,gra}) => {

  return (
    <div className={`${prop} grid gap-4 p-4 shadow-[0_0_5px_#00000010] hover:shadow-[0_0_10px_#00000025] bg-transparent bg-white min-w-[100px] min-h-[100px] anime-trans ` }>
      <span className='h-[5px] md:h-[25px] font-bold'>{head}</span>
      <div className='flex gap-2 mt-5 lg:mt-0  md:text-xl font-bold'>
        {hesuf}
      <Counter end={num}  />{hpre}
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <div className='flex gap-2'>
        <div className={`flex  items-center ${gcolor}`}>
        <span className={`text-sm lg:text-lg  w-fit`}>{sign}</span>
        <span className={`${gcolor}`}>{suf}</span>
        <Counter end={num2}/>
        <span>{prefix}</span>
       
        </div>
         <p>{p}</p>
         </div>
        <div className={`${gcolor} text-2xl`}>{gra}</div>
       
      </div> 


    </div>
  )
}

export default SideCards