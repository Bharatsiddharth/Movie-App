import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import Sidebar from './partials/Sidebar'
import Topnav from './partials/Topnav'
import Header from './partials/Header'
import Horizontalcards from './partials/Horizontalcards'
import Dropdown from './partials/Dropdown'

const Home = () => {
    document.title = 'Pico || Home'

    const [wallpaper, setwallpaper] = useState(null)
    const [trending, settrending] = useState(null)
    const [category, setcategory] = useState("all")

    const GetheaderWallpaper = async () => {
      try {
          const { data } = await axios.get(`trending/all/day`);
          let random = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(random)
          
      } catch (error) {
          console.log("Error: " , error)
      }
  }

  const GetTrending = async () => {
    try {
        const { data } = await axios.get(`trending/${category}/day`);
        settrending(data.results)
        
    } catch (error) {
        console.log("Error: " , error)
    }
}

  // console.log(wallpaper)

  

  useEffect(() => {
    GetTrending();
    !wallpaper && GetheaderWallpaper();
    
  }, [category])
console.log(trending)
  return wallpaper  && trending ? (
    <>
    
 
        <Sidebar/>
        <div className='w-[80%] h-full  overflow-y-auto overflow-x-hidden'>
            <Topnav/>
            <Header data={wallpaper} />

            <div className=' flex justify-between px-10 pt-10'>
      <h1 className=' text-2xl font-semibold text-zinc-300'>Trending</h1>

      <Dropdown  title="filter" options={["tv", "movie", "all"]} func={(e) =>  setcategory(e.target.value)} />
      </div>

            <Horizontalcards data={trending}  />
        </div>
    
    </>
  ): <h1>Loading</h1>
}

export default Home
