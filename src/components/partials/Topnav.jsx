import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {

    const [query, setquery] = useState("")

    console.log(query)


  return (
    <div className='w-full h-[10vh]  relative ml-[15%] flex justify-start items-center '>
      <i className="text-zinc-400 text-3xl  ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
      className='w-[50%] text-white p-5 mx-10 text-xl outline-none border-none bg-transparent' type="text" placeholder='Search Anything' />

      {query.length > 0 && (
         <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-circle-line"></i>
      )}
     


      <div className='absolute  w-[60%] max-h-[50vh] bg-zinc-100   top-[100%] overflow-auto'>
        {/* <Link className='hover:text-black hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-start border-b-2 border-zinc-100'>
            <img src="" alt="" />
            <span className=''>Hello </span>
        </Link> */}

      </div>
      
    </div>
  )
}

export default Topnav
