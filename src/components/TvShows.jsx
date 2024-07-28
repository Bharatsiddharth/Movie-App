import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';

const TvShows = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "Pico || TV Show ";


    const GetTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);

            if(data.results.length > 0){
                settv((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }else{
                sethasMore(false);
        }
            // settv(data.results)
            
            
            // console.log(data)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }

    const refreshHandler = async() => {
        if(tv.length === 0){
            GetTv();
        }else{
            setpage(1);
            settv([])
            GetTv();
        }
    }


    // console.log(tv)

    useEffect(() => {
        // GetTv();
        refreshHandler();
    }, [category])

  return tv.length > 0 ? (
    <div className=' w-screen h-screen '>

        <div className='w-full flex items-center justify-center px-[5%]'>
            <h1 className='text-2xl font-semibold  text-zinc-400 flex justify-center items-center gap-2 '>
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
                TV-Shows <span className='text-sm text-zinc-700'>({category})</span>
                </h1>

            <div className='w-full flex items-center justify-center'>
                <Topnav />

                <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]}
                    func={(e) => setcategory(e.target.value)}
                />
                <div className='w-10'></div>
               
            </div>

        </div>

    <InfiniteScroll 
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
    >
    <Cards data={tv} title={category} />
    </InfiniteScroll>

    </div>
): <Loading/>
}

export default TvShows
