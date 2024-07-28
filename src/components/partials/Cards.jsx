import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div className='min-h-[40vh]  flex flex-wrap w-full px-[6%] bg-[#1f1e24]'>
        
      {data.map((c,i) => (
        <Link className='relative w-[30vh] mr-10 mb-10 ' key={i} >
            <img className='h-[40vh] w-full shadow-xl object-cover' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="" />
        <h1 className='text-xl text-zinc-400 mt-3 font-semibold'>
        {c.name || c.title || c.original_name || c.original_title}
        </h1>

        {c.vote_average && <div className='absolute bottom-28 -right-5 w-10 h-10 flex justify-center items-center bg-yellow-400 text-white font-bold rounded-full'>
          {(c.vote_average * 10).toFixed()}<sup>%</sup>
        </div>}
        
        
        </Link>
      ))}
    </div>
  )
}

export default Cards


