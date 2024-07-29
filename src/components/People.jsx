import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './partials/Dropdown';
import Topnav from './partials/Topnav';
import Cards from './partials/Cards';

const People = () => {
    const navigate = useNavigate();
    const [category, setcategory] = useState("popular");
    const [person, setperson] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)
    document.title = "Pico || Person Show ";


    const GetPerson = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);

            if(data.results.length > 0){
                setperson((prevState) => [...prevState, ...data.results]);
                setpage(page + 1);
            }else{
                sethasMore(false);
        }
            // setperson(data.results)
            
            
            // console.log(data)
            
        } catch (error) {
            console.log("Error: " , error)
        }
    }

    const refreshHandler = async() => {
        if(person.length === 0){
            GetPerson();
        }else{
            setpage(1);
            setperson([])
            GetPerson();
        }
    }


    // console.log(person)

    useEffect(() => {
        // GetPerson();
        refreshHandler();
    }, [category])



  return  person.length > 0 ? (
    <div className=' w-screen h-screen '>

        <div className='w-full flex flex-col sm:flex-row  items-start justify-start px-[5%]'>
            <h1 className='text-2xl font-semibold  text-zinc-400 pt-5 flex justify-center items-center gap-2 '>
                <i onClick={() => navigate(-1)} className="ri-arrow-left-line"></i>
                People 
                </h1>

            <div className='w-full flex flex-col sm:flex-row items-end justify-end'>
                <Topnav />

                <Dropdown title="Category" options={["on_the_air", "popular", "top_rated", "airing_today"]}
                    func={(e) => setcategory(e.target.value)}
                />
                <div className='w-10'></div>
               
            </div>

        </div>

    <InfiniteScroll 
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
    >
    <Cards data={person} title="people" />
    </InfiniteScroll>

    </div>
): <Loading/>
}

export default People
