import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';

const Movies = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "Pico || Movies ";


    const GetMovie = async () => {
        try {
            const { data } = await axios.get(`/movie/${category}?page=${page}`);

            if(data.results.length > 0){
                setmovie((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }else{
                sethasMore(false);
        }
            // setmovie(data.results)
            
            
            // console.log(data)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }

    const refreshHandler = async() => {
        if(movie.length === 0){
            GetMovie();
        }else{
            setpage(1);
            setmovie([])
            GetMovie();
        }
    }


    // console.log(movie)

    useEffect(() => {
        // Getmovie();
        refreshHandler();
    }, [category])

  return movie.length > 0 ? (
    <div className=' w-screen h-screen '>

        <div className='w-full flex flex-col sm:flex-row  items-start justify-start px-[5%]'>
            <h1 className='text-2xl font-semibold  text-zinc-400 flex justify-center pt-4 items-center gap-2 '>
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
                Movies <span className='text-sm text-zinc-700'>({category})</span>
                </h1>

            <div className='w-full flex flex-col sm:flex-row items-end justify-end'>
                <Topnav />

                <Dropdown title="Category" options={["popular", "top_rated", "upcoming", "now_playing"]}
                    func={(e) => setcategory(e.target.value)}
                />
                <div className='w-10'></div>
               
            </div>

        </div>

    <InfiniteScroll 
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
    >
    <Cards data={movie} title="movie" />
    </InfiniteScroll>

    </div>
): <Loading/>
}

export default Movies
