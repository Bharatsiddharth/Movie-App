import React from 'react'
import Animation from "../../public/Animation - 1722103670029.gif"

const Loading = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
      <img className='w-60' src={Animation} alt="" />
      
    </div>
  )
}

export default Loading
