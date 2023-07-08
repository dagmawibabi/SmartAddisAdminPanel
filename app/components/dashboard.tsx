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
    const [isGettingNews, setIsGettingNews] = useState(true);

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
        setIsGettingNews(false);
    }

    async function deleteNews(id:string) {
        await axios.delete("https://smartcity-ohdk.onrender.com/v1/news/" + id )
            .then((response) => {
                setNewsList(response["data"]["result"]["newss"]);
            }).catch((e) => {
                console.log(e);
            })
        getNews();
    }
    return (
        <div>
            {
                isGettingNews == true ? 
                    // Loading
                    <div className="justify-center w-full h-96 text-center align-middle pt-40">
                        <span className="loading loading-spinner loading-lg mt-4 text-zinc-300 mb-10"></span> 
                        <h1 className="text-zinc-400"> Fetching All Published Content </h1>
                    </div>
                    :
                    // Stats
                    <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>

                        {/* News */}
                        <div className='mb-8'>
                            <span className='uppercase font-bold'> News </span>
                        </div>

                        {/* Posted News Component */}
                        <div className='flex w-full overflow-scroll h-fit pb-10'>
                            {
                                newsList.map(news => {
                                    return <EachPostedNews 
                                                key={news["updatedAt"]}  
                                                previewMode={false}
                                                id={news["_id"]} 
                                                deleteFunction={deleteNews} 
                                                image={"/newsTemplate.png"} 
                                                headline={news["title"]} 
                                                body={news["content"]} 
                                                date={news["updatedAt"]} 
                                            />;
                                })
                            }

                            {
                                newsList.length == 0 ? 
                                    <div className="rounded-2xl bg-zinc-900 h-fit py-5 px-10"> 
                                        <h1> No News Have Been Posted! </h1> 
                                    </div>
                                    : <span> </span>
                            }
                        </div>

                        {/* Events */}
                        <div className='mb-8 pt-10'>
                            <span className='uppercase font-bold'> Events </span>
                        </div>

                        {/* Posted News Component */}
                        <div className='flex w-full overflow-scroll h-fit pb-10'> {/* h-[530px] */ }
                            {
                                newsList.map(news => {
                                    return <EachPostedNews 
                                                key={news["updatedAt"]}  
                                                previewMode={false}
                                                id={news["_id"]} 
                                                deleteFunction={deleteNews} 
                                                image={"/newsTemplate.png"} 
                                                headline={news["title"]} 
                                                body={news["content"]} 
                                                date={news["updatedAt"]} 
                                            />;
                                })
                            }
                            {
                                newsList.length == 0 ? 
                                    <div className="rounded-2xl bg-zinc-900 h-fit py-5 px-10"> 
                                        <h1> No Events Have Been Posted! </h1> 
                                    </div>
                                    : <span> </span>
                            }
                        </div>


                        {/* Events */}
                        <div className='mb-8 pt-10'>
                            <span className='uppercase font-bold'> Gallery </span>
                        </div>

                        {/* Posted News Component */}
                        <div className='flex w-full overflow-scroll h-fit pb-10'>
                            {
                                newsList.map(news => {
                                    return <EachPostedNews 
                                                key={news["updatedAt"]}  
                                                previewMode={false}
                                                id={news["_id"]} 
                                                deleteFunction={deleteNews} 
                                                image={"/newsTemplate.png"} 
                                                headline={news["title"]} 
                                                body={news["content"]} 
                                                date={news["updatedAt"]} 
                                            />;
                                })
                            }
                            {
                                newsList.length == 0 ? 
                                    <div className="rounded-2xl bg-zinc-900 h-fit py-5 px-10"> 
                                        <h1> No Gallery Have Been Posted! </h1> 
                                    </div>
                                    : <span> </span>
                            }
                    </div>

                    </div>                
            }
        </div>
    )
}