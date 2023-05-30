import Image from "next/image";

export default function EachPostedNews({image, headline, body, date} : {image:string, headline:string, body:string, date:string}) {
    return (
        <div className='w-96 h-fit mx-5 shadow-lg shadow-zinc-900 rounded-2xl bg-clip-border overflow-clip hover:shadow-zinc-950 '>

            {/* News Image */}
            <div className='w-96 h-60 bg-zinc-700'>
                {/* <img className='w-full h-full' src={image} /> */}
                <Image src={image} alt="newsimage" className='w-full h-full' width={100} height={100} />
            </div>
            <div className='p-3 bg-zinc-800 shadow-lg shadow-white'>

                {/* News Headline */}
                <div className='pb-4'>
                    <span className='font-bold'> {headline} </span>
                </div>

                {/* News Body */}
                <div className='h-32 overflow-scroll text-sm '>
                    <p className=''>
                        {body}
                    </p>
                </div>

                {/* Edit or Delete News */}
                <div className='flex'>
                    <button className="bg-zinc-900 w-full rounded-lg mt-6 py-2 mr-2 hover:text-blue-500 border border-transparent hover:border-blue-600 "> Edit News </button>
                    <button className="bg-zinc-900 mt-6 py-2 px-3 rounded-lg border border-transparent hover:border-red-800"> 
                        {/* <img src='/icons/delete.png' className='w-5'/> */}
                        <Image src='/icons/delete.png' alt="deleteicon" width={16} height={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}