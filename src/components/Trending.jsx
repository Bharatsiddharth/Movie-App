import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './partials/Topnav';
import Dropdown from './partials/Dropdown';
import axios from '../utils/axios';
import Cards from './partials/Cards';
import Loading from './Loading';

const Trending = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [trending, settrending] = useState(null)
    


    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`trending/${category}/${duration}`);
            settrending(data.results)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }


    console.log(trending)

    useEffect(() => {
        GetTrending();
    }, [category, duration])

    return trending ? (
        <div className='p-[3%] w-screen h-screen overflow-hidden overflow-y-auto'>

            <div className='w-full flex items-center justify-center px-10'>
                <h1 className='text-2xl font-semibold text-zinc-400 flex gap-2 '>
                    <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
                    Trending</h1>

                <div className='w-full flex items-center justify-center'>
                    <Topnav />

                    <Dropdown title="Category" options={["movie", "tv", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                    <div className='w-10'></div>
                    <Dropdown title="Duration" options={["week", "day"]}
                    func={(e) => setduration(e.target.value)}
                    />
                </div>

            </div>


        <Cards data={trending} title={category} />


        </div>
    ): <Loading/>
}

export default Trending
