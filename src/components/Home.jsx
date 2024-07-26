import React, { useEffect, useState } from 'react'
import axios from '../utils/axios'
import Sidebar from './partials/Sidebar'
import Topnav from './partials/Topnav'
import Header from './partials/Header'

const Home = () => {
    document.title = 'Pico || Home'

    const [wallpaper, setwallpaper] = useState(null)

    const GetheaderWallpaper = async () => {
      try {
          const { data } = await axios.get(`trending/all/day`);
          let random = data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(random)
          
      } catch (error) {
          console.log("Error: " , error)
      }
  }

  // console.log(wallpaper)

  

  useEffect(() => {
    !wallpaper && GetheaderWallpaper();
  })

  return wallpaper ? (
    <>
    
 
        <Sidebar/>
        <div className='w-[80%] h-full'>
            <Topnav/>
            <Header data={wallpaper} />
        </div>
    
    </>
  ): <h1>Loading</h1>
}

export default Home
