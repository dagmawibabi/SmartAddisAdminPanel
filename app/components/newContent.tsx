import EachPostedNews from "./eachPostedNews";

export default function NewContent() {

    function setNewsPreview() {

    }

    return (
        <div className="text-white">
            <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>
                <span className="font-bold text-lg"> Create News Post </span>
                <div className="flex bg-red w-4/5">
                    <div className="pl-5 pt-5 mr-10 w-full">

                        {/* Headline */}
                        <span> News Headline </span>
                        <div>
                            <input type="text" placeholder="Headline" className="input input-bordered input-info w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" />
                        </div>
                        <div className="mt-5"></div>

                        {/* Content */}
                        <span> News Body </span>
                        <div>
                            <textarea placeholder="Body" className="w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 h-56"> </textarea>
                        </div>
                        
                        {/* Publish */}
                        <div className="rounded-3xl py-2 px-10 mt-4 bg-green-500 w-fit text-black hover:bg-green-400 hover:cursor-pointer">
                            <button> Publish </button>
                        </div>

                    </div>

                    <div className="">

                        <EachPostedNews headline="" body="" image="/newsTemplate.png" date={Date.now().toString()} />

                    </div>

                </div>
            </div>

            <div className='text-white mt-2 px-10 pt-5 pb-5 h-fit bg-zinc-800 overflow-scroll'>
                <span className="font-bold text-lg"> Create Event </span>
                <div className="pl-5 pt-5">

                    {/* Event Name */}
                    <span> Event Name </span>
                    <div>
                        <input type="text" placeholder="Event Name" className="input input-bordered input-info w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" />
                    </div>
                    <div className="mt-5"></div>

                    {/* Date */}
                    <span> Event Date </span>
                    <div>
                        <input type="date" placeholder="Event Name" className="input input-bordered input-info w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 pl-5" />
                    </div>
                    <div className="mt-5"></div>

                    {/* Content */}
                    <span> Event Details </span>
                    <div>
                        <textarea placeholder="Body" className="w-full max-w-lg bg-zinc-700 rounded-2xl mt-3 p-2 h-56"> </textarea>
                    </div>
                    
                    {/* Publish */}
                    <div className="rounded-3xl py-2 px-10 mt-4 bg-green-500 w-fit text-black hover:bg-green-400 hover:cursor-pointer">
                        <button> Publish </button>
                    </div>

                </div>
            </div>

        </div>
    )
}