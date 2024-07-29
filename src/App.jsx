import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Loading from "./components/Loading"
import Trending from "./components/Trending"
import Popular from "./components/Popular"
import Movies from "./components/Movies"
import TvShows from "./components/TvShows"
import People from "./components/People"
import MoviesDetails from "./components/MoviesDetails"
import TvShowsDetails from "./components/TvShowsDetails"
import PeopleDetails from "./components/PeopleDetails"


function App() {

  return (
   <>
    
    <div className="w-full h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/movie" element={<Movies/>} />
        <Route path="/movie/details/:id" element={<MoviesDetails/>} />
        <Route path="/tvshows" element={<TvShows/>} />
        <Route path="/tv/details/:id" element={<TvShowsDetails/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/people/details/:id" element={<PeopleDetails/>} />
      </Routes>
    </div>

   </>
  )
}

export default App
