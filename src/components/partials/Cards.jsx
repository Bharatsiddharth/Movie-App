import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div className='min-h-[40vh]  flex flex-wrap w-full px-[6%] bg-[#1f1e24]'>
        
      {data.map((c,i) => (
        <Link className='w-[30vh] mr-10 mb-10' key={i} >
            <img className='h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`} alt="" />
        <h1 className='text-xl text-zinc-400 mt-3 font-semibold'>
        {c.name || c.title || c.original_name || c.original_title}
        </h1>
        
        </Link>
      ))}
    </div>
  )
}

export default Cards


