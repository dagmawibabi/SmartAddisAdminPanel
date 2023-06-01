'use client';

import EachPostedNews from "./eachPostedNews";

interface News {
    image: string;
    headline: string;
    body: string;
    date: string;
}

export default function Dashboard({postedList} : {postedList: Array<News>}) {
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
                        postedList.map(news => {
                            return <EachPostedNews key={Date.now()} image={news["image"]} headline={news["headline"]} body={news["body"]} date={news["date"]} />;
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
                        postedList.map(news => {
                            return <EachPostedNews key={Date.now()} image={news["image"]} headline={news["headline"]} body={news["body"]} date={news["date"]} />;
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
                        postedList.map(news => {
                            return <EachPostedNews key={Date.now()} image={news["image"]} headline={news["headline"]} body={news["body"]} date={news["date"]} />;
                        })
                    }
                </div>

            </div>
        </div>
    )
}