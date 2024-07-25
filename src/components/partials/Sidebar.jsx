import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[20%] h-full  border-r-2 border-zinc-400 p-10'>
        <h1 className='text-2xl text-white font-bold'>
        <i class="text-[#6556CD] ri-tv-fill mr-2"></i>
            <span className=' text-'>Sasta-Netflix</span>
        </h1>


<nav className='flex flex-col text-zinc-300 text-xl gap-3'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
    <Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-fire-fill"></i>Trending</Link>
<Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-bard-fill"></i>Popular</Link>
<Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-movie-2-line"></i>Movies</Link>
<Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-tv-2-line"></i>Tv Shows</Link>
<Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-group-line"></i>People</Link>
</nav>


<hr className='border-none h-[1px] bg-zinc-300 mt-5' />


<nav className='flex flex-col text-zinc-300 text-xl gap-3'>
    <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
    <Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-information-2-line"></i>About</Link>
<Link className='hover:bg-[#6556CD] hover:text-white p-2 rounded duration-300'><i class="ri-phone-fill"></i>Contact Us</Link>

</nav>




    </div>
  )
}

export default Sidebar
