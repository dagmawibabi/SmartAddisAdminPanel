'use client';

import axios from "axios";
import EachPostedNews from "./eachPostedNews";
import { useEffect, useState } from "react";

export default function NewContent() {
    let initialNewsPreview = {
        // "id": string,
        "title": "Initial" as string,
        "content": "Initial" as string,
        "author": "" as string,
        // "published": boolean,
        "pillars": [""] as Array<any>,
        "companies": [""] as Array<any>,
        // "createdAt": string,
        // "updatedAt": "",
    }

    const [isPublishing, setIsPublishing] = useState(false);
    const [previewNews, setPreviewNews] = useState(initialNewsPreview);

    function setNewsPreview() {
        let newsHeadlineInput = document.getElementById("newsHeadline") as HTMLInputElement;
        let headline = newsHeadlineInput.value;
        let newsBodyInput = document.getElementById("newsBody") as HTMLInputElement;
        let body = newsBodyInput.value;

        let newsObject = {            
            "title": headline as string,
            "content": body as string,
            "author": "6464b045ff7637578f7f2c3b" as string,
            "pillars": ["64a6b8eecda18028cd8cd07e"] as Array<string>,
            "companies": ["64a6eb62285317c2fa07d872"] as Array<string>
        };

        setPreviewNews(newsObject);
    }


    async function publishNews() {
        setIsPublishing(true);
        await axios.post("https://smartcity-ohdk.onrender.com/v1/news/", 
            previewNews
        ).then((response) => {console.log(response)}).catch((e) => console.log(e));
        setPreviewNews(initialNewsPreview);

        let newsHeadlineInput = document.getElementById("newsHeadline") as HTMLInputElement;
        newsHeadlineInput.value = "";
        let newsBodyInput = document.getElementById("newsBody") as HTMLInputElement;
        newsBodyInput.value = "";

        setIsPublishing(false);

    }

    return (
        <div className="text-white">
            <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>
                <span className="font-bold text-lg "> Create News Post </span>

                <div className="flex justify-left py-10">
                    {/* Preview */}
                    <div className="w-fit">
                        <EachPostedNews 
                            previewMode={true} 
                            headline={previewNews["title"]} 
                            body={previewNews["content"]} 
                            image="/newsTemplate.png" 
                            date={Date.now().toString()} 
                            id={""} deleteFunction={()=>{}} 
                        />
                    </div>
                    
                    {/* Input */}
                    <div className="flex w-1/3">
                        <div className="pl-5 mr-10 w-full">

                            {/* Headline */}
                            <span> News Headline </span>
                            <div>
                                <input 
                                    id="newsHeadline"
                                    type="text" 
                                    placeholder="Headline" 
                                    onChange={setNewsPreview}
                                    className={ isPublishing == false ?
                                        "input input-bordered w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" :                            
                                        "input input-bordered w-full max-w-lg bg-zinc-900 input-disabled rounded-2xl mt-3 p-2 pl-5" 
                                    }
                                    disabled={isPublishing}
                                />
                            </div>
                            <div className="mt-5"></div>

                            {/* Image */}
                            <span> News Image </span>
                            <div>
                                {/* <input 
                                    id="newsHeadline"
                                    type="text" 
                                    placeholder="Headline" 
                                    onChange={setNewsPreview}
                                    className={ isPublishing == false ?
                                        "input input-bordered w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" :                            
                                        "input input-bordered w-full max-w-lg bg-zinc-900 input-disabled rounded-2xl mt-3 p-2 pl-5" 
                                    }
                                    disabled={isPublishing}
                                /> */}
                                <input 
                                    type="file" 
                                    className={ isPublishing == false ? 
                                        "file-input file-input-bordered w-full max-w-md bg-zinc-700 rounded-2xl mt-4" :
                                        "file-input file-input-bordered w-full max-w-xs" 
                                    } 
                                />
                            </div>
                            <div className="mt-5"></div>

                            {/* Content */}
                            <span> News Body </span>
                            <div>
                                <textarea 
                                    id="newsBody" 
                                    placeholder="Body" 
                                    onChange={setNewsPreview}
                                    className={ isPublishing == false?
                                        "w-full max-w-lg bg-zinc-700 input rounded-2xl mt-3 p-2 h-56" :                 
                                        "w-full max-w-lg bg-zinc-900 textarea-disabled rounded-2xl mt-3 p-2 h-56" 
                                    }
                                    disabled={isPublishing}
                                > 
                                </textarea>
                            </div>
                            
                            {/* Publish */}
                            {
                                isPublishing == true ? 
                                <div>
                                    <span className="loading loading-spinner loading-lg mt-4 text-success"></span>
                                </div> :
                                <div className="rounded-3xl py-2 px-10 mt-4 bg-green-500 w-fit text-black hover:bg-green-400 hover:cursor-pointer">
                                    <button onClick={publishNews}> Publish </button>
                                </div>
                            }

                        </div>


                    </div>
                </div>

            </div>

            <div className="divider"></div>

            <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>
                <span className="font-bold text-lg"> Create Event </span>

                <div className="flex justify-left py-10">
                    {/* Preview */}
                    <div className="w-fit">
                        <EachPostedNews 
                            previewMode={true} 
                            headline={previewNews["title"]} 
                            body={previewNews["content"]} 
                            image="/newsTemplate.png" 
                            date={Date.now().toString()} 
                            id={""} deleteFunction={()=>{}} 
                        />
                    </div>

                    <div className="w-1/3 ml-7">

                        {/* Event Name */}
                        <span> Event Name </span>
                        <div>
                            <input type="text" placeholder="Event Name" className="input w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" />
                        </div>
                        <div className="mt-5"></div>

                        {/* Date */}
                        <span> Event Date </span>
                        <div>
                            <input type="date" placeholder="Event Name" className="input w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" />
                        </div>
                        <div className="mt-5"></div>

                        {/* Content */}
                        <span> Event Details </span>
                        <div>
                            <textarea placeholder="Body" className="input w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 h-56"> </textarea>
                        </div>
                        
                        {/* Publish */}
                        <div className="rounded-3xl py-2 px-10 mt-4 bg-green-500 w-fit text-black hover:bg-green-400 hover:cursor-pointer">
                            <button> Publish </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}