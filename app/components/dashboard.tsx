'use client';

import { useEffect, useState } from "react";
import EachPostedNews from "./eachPostedNews";
import axios from "axios";

// interface News {
//     image: string;
//     headline: string;
//     body: string;
//     date: string;
// }

interface News {
    id: string;
    title: string;
    content: string;
    author: string;
    published: boolean;
    pillars: Array<any>;
    companies: Array<any>;
    createdAt: string;
    updatedAt: string;
}

export default function Dashboard() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews()
    }, [])

    // Get News
    async function getNews() {
        setNewsList([]);
        await axios.get("https://smartcity-ohdk.onrender.com/v1/news/")
            .then((response) => {
                setNewsList(response["data"]["result"]["newss"]);
            }).catch((e) => {
                console.log(e);
            })
    }
    return (
        <div>
            {/* Stats */}
            <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>




                {/* News */}
                <div className='mb-8'>
                    <span className='uppercase font-bold'> News </span>
                </div>

                {/* Posted News Component */}
                <div className='flex w-full overflow-scroll h-[530px]'>
                    {
                        newsList.map(news => {
                            return <EachPostedNews key={news["updatedAt"]} image={"/newsTemplate.png"} headline={news["title"]} body={news["content"]} date={news["updatedAt"]} />;
                        })
                    }
                </div>

                {/* Events */}
                <div className='mb-8 pt-10'>
                    <span className='uppercase font-bold'> Events </span>
                </div>

                {/* Posted News Component */}
                <div className='flex w-full overflow-scroll h-[530px]'>
                    {
                        newsList.map(news => {
                            return <EachPostedNews key={news["updatedAt"]} image={"/newsTemplate.png"} headline={news["title"]} body={news["content"]} date={news["updatedAt"]} />;
                        })
                    }
                </div>


                {/* Events */}
                <div className='mb-8 pt-10'>
                    <span className='uppercase font-bold'> Gallery </span>
                </div>

                {/* Posted News Component */}
                <div className='flex w-full overflow-scroll h-[530px]'>
                    {
                        newsList.map(news => {
                            return <EachPostedNews key={news["updatedAt"]} image={"/newsTemplate.png"} headline={news["title"]} body={news["content"]} date={news["updatedAt"]} />;
                        })
                    }
                </div>

            </div>
        </div>
    )
}