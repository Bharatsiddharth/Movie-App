import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';
import Topnav from './partials/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './partials/Cards';
import Dropdown from './partials/Dropdown';

const Popular = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie")
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "Pico || Popular " + category.toLocaleUpperCase();

    const GetPopular = async () => {
        try {
            const { data } = await axios.get(`/${category}/popular?page=${page}`);

            if(data.results.length > 0){
                setpopular((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }else{
                sethasMore(false);
        }
            // setpopular(data.results)
            
            
            // console.log(data)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }

    const refreshHandler = async() => {
        if(popular.length === 0){
            GetPopular();
        }else{
            setpage(1);
            setpopular([])
            GetPopular();
        }
    }


    // console.log(popular)

    useEffect(() => {
        // Getpopular();
        refreshHandler();
    }, [category])


  return popular.length > 0 ? (
    <div className=' w-screen h-screen '>

        <div className='w-full flex flex-col sm:flex-row items-center justify-center px-[5%]'>
            <h1 className='text-2xl font-semibold text-zinc-400 flex gap-2 '>
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
                Popular</h1>

            <div className='w-full flex flex-col sm:flex-row items-center justify-center'>
                <Topnav />

                <Dropdown title="Category" options={["tv", "movie"]}
                    func={(e) => setcategory(e.target.value)}
                />
                <div className='w-10'></div>
               
            </div>

        </div>

    <InfiniteScroll 
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
    >
    <Cards data={popular} title={category} />
    </InfiniteScroll>

    </div>
): <Loading/>
}

export default Popular
