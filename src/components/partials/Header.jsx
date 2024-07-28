import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
    // console.log(data)
  return (
    <div 
    style={{
        background: `linear-gradient(rgba(0, 0, 0,0.4), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',

        
        
    }}

        

        
    className='w-[80%]  max-[1025px]:w-[100%] min-[1025px]:ml-[20%] h-[50vh] flex items-start  flex-col justify-end p-[5%] text-white'>
      <h1 className='w-[90%] text-[4vw] max-[620px]:text-3xl font-black text-white'>
      {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className='w-[70%] max-[1025px]:w-[100%] mt-5'>{data.overview.slice(0,200)}...<Link className='text-blue-400'>More</Link></p>

        <p className='flex gap-2'>
        <i className="text-yellow-300 ri-megaphone-fill"></i>
        {" "}{data.release_date || "no info"}
        <i className="text-yellow-300 ri-album-fill"></i>{data.media_type.toUpperCase()}
        </p>
        <Link
  className="bg-[#6556CD] p-2 md:p-3   rounded font-semibold mt-5 md:mt-7 lg:mt-3 xl:mt-5   text-sm md:text-base lg:text-lg xl:text-xl"
>
  Watch Trailer
</Link>
    </div>
  )
}

export default Header
