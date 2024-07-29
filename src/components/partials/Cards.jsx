import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  console.log(title)
  return (
    <div className='min-h-[40vh] mt-4  flex flex-wrap w-full  justify-center bg-[#1f1e24]'>
        
      {data.map((c,i) => (
        <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[15vh] sm:w-[20vh] lg:w-[30vh] mr-10 mb-10 ' key={i} >
            <img className='h-[20vh] sm:h-[30vh] lg:h-[40vh] w-full shadow-xl object-cover' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />
        <h1 className='text-[1.3vw]  text-zinc-400 mt-3 font-semibold'>
        {c.name || c.title || c.original_name || c.original_title}
        </h1>

        {c.vote_average && <div className='absolute bottom-32 -right-5 w-10 h-10 flex justify-center items-center bg-yellow-400 text-white font-bold rounded-full'>
          {(c.vote_average * 10).toFixed()}<sup>%</sup>
        </div>}
        
        
        </Link>
      ))}
    </div>
  )
}

export default Cards


