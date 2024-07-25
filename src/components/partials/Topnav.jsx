import React from 'react'

const Topnav = () => {
  return (
    <div className='w-full h-[10vh]  relative flex justify-center items-center '>
      <i class="text-zinc-400 text-3xl  ri-search-2-line"></i>
      <input className='w-[50%] text-white p-5 mx-10 text-xl outline-none border-none bg-transparent' type="text" placeholder='Search Anything' />
      <i class="text-zinc-400 text-3xl ri-close-circle-line"></i>


      <div className='absolute bottom-0 w-[60%] h-[50vh] bg-red-200 top-[90%]'></div>
    </div>
  )
}

export default Topnav
