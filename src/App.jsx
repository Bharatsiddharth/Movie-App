import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import People from "./components/People"


function App() {

  return (
   <>
    
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/people" element={<People/>} />
      </Routes>
    </div>

   </>
  )
}

export default App
