'use client';
import { useState } from 'react';
import SideBarButtons from './components/sidebar_buttons'

export default function Home() {

  const [currentIndex, chooseIndex] = useState(1);

  function choosePage(index: number) {
    chooseIndex(index);
    console.log(currentIndex);
  }

  return (
    <div className='flex bg-zinc-950'>
      {/* Side Bar */}
      <div className="bg-zinc-200 w-96 h-screen rounded-l-3xl text-black">
        <img src='/AALogo.png' className='mx-28 my-5'/>
        <div className='px-5 text-center'>
          <span className='text-base font-bold'> Addis Ababa City Adminstration Innovation and Technology Development Bureau </span>
        </div>
        
        <div className='grid justify-center mt-10 py-10'>
          <SideBarButtons buttonText="Dashboard" buttonIcon='/icons/dashboard.png' onClickFunction={() => choosePage(1)} isChosen={currentIndex == 1 ? true : false} />
          <SideBarButtons buttonText="Activity" buttonIcon='/icons/activity.png' onClickFunction={() => choosePage(2)} isChosen={currentIndex == 2 ? true : false}/>
          <SideBarButtons buttonText="Setting" buttonIcon='/icons/settings.png' onClickFunction={() => choosePage(3)} isChosen={currentIndex == 3 ? true : false}/>
        </div>

        <div className='flex justify-center'>
          <div className='flex items-center text-center justify-center my-96 w-36 py-2 rounded-2xl hover:bg-zinc-300'>
            <img src="/icons/logout.png" className='w-8 h-5 pr-2'/>
            <span> Sign Out </span>
          </div>
        </div>

        
      </div>

      {/* Main Control */}
      <div className="bg-zinc-200 w-screen ">
        <div className="bg-zinc-800 h-screen rounded-l-3xl p-10 shadow-black shadow-xl">
          <div className='flex justify-between items-center '>

            {/* Control Title */}
            <span className='font-bold text-lg uppercase'> {currentIndex == 1 ? "Dashboard" : currentIndex == 2 ? "Activity" : "Settings" } </span>

            <div className='flex'>
              {/* Some Primary Button */}
              <div className='bg-yellow-400 px-5 py-2 rounded-2xl text-black font-bold mr-4'>
                <span> Export Data </span>
              </div>

              {/* Notification */}
              <div className='rounded-2xl border-zinc-500 border p-2 hover:bg-zinc-600'>
                <img src="/icons/notification.png" className='w-5 h-5' />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
