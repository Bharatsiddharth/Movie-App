import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import Noimage from '../../Assets/Noimage.jpg'

const Topnav = () => {

    const [query, setquery] = useState("")
    const [searches, setsearches] = useState([])


    const getSearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
        //    console.log(d)
        setsearches(data.results)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }


    useEffect(() => {
        getSearch();
    },[query])

    // console.log(query)


  return (
    <div className='w-full z-10  h-[10vh] ml-4   relative mx-auto flex  justify-center items-center '>
      <i className="text-zinc-400 text-3xl  ri-search-2-line"></i>
      <input
  onChange={(e) => setquery(e.target.value)}
  value={query}
  className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 text-white p-5 mx-10 text-xl outline-none border-none bg-transparent"
  type="text"
  placeholder="Search Anything"
/>

      {query.length > 0 && (
         <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-circle-line"></i>
      )}
     


      <div className='absolute left-[50%] transform translate-x-[-50%]  w-[30vw] max-[620px]:w-[60vw] max-h-[50vh] bg-zinc-100    top-[100%] overflow-auto'>
        {searches.map((s,i) => (
             <Link key={i}  className='hover:text-black gap-10 hover:bg-zinc-300 font-semibold text-zinc-600 w-[100%] p-8 flex justify-start items-center border-b-2 border-zinc-100'>
             <img src={s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: Noimage}
                className='w-[6vw] h-[6vw] max-[620px]:w-[12vw] max-[620px]:h-[12vw] object-cover rounded shadow-2xl'
             alt="" />
             <span className='text-[1.4vw] max-[620px]:text-[2.2vw] '>{s.name || s.title || s.original_name || s.original_title}</span>
             </Link>
        ))}
       
      
        
       

      </div>
      
    </div>
  )
}

export default Topnav
