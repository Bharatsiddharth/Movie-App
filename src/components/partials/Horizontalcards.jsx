import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const Horizontalcards = ({data, func}) => {
  return (
    <div className='w-full   p-5 '>
     
      
      <div className='w-[80%]  max-[1025px]:w-[100%] min-[1025px]:ml-[20%]  text-white  flex overflow-y-hidden '>

      {data.map((d,i) => (
        <Link to={`/${d.media_type || title}/details/${d.id}`} key={i} className='min-w-[15rem] max-[620px]:w-[5rem]      bg-zinc-900  mr-5 '>
          <img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || data.poster_path
 }`} alt="" />

<div className='p-4 flex flex-col gap-3 h-[45%]'>
<h1 className='  text-1xl font-semibold text-white'>
      {d.name || d.title || d.original_name || d.original_title}
      </h1>
      <p className=' '>{d.overview.slice(0,50)}...<span className='text-blue-400'>More</span></p>
        
</div>
      </Link>
      ))}

      

      </div>
    </div>
  )
}

export default Horizontalcards
