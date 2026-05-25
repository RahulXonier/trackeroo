import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryBtn = ({value,event}) => {
  return (
     <>
    <button className="primary-btn center anime-trans w-fit">{value}<FaArrowRight />
</button>
    </>
  )
}

export default PrimaryBtn