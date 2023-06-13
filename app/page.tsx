'use client';
import { useState } from 'react';
import SideBarButtons from './components/sidebar_buttons'
import EachPostedNew from './components/eachPostedNews';
import EachPostedNews from './components/eachPostedNews';
import Image from "next/image";
import Dashboard from './components/dashboard';
import Activities from './components/activities';
import NewContent from './components/newContent';

export default function Home() {

  const [currentIndex, chooseIndex] = useState(1);

  function choosePage(index: number) {
    chooseIndex(index);
    console.log(currentIndex);
  }

  let postedList = [
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
    {
      "image": "/newsTemplate.png",
      "headline": "New Species of Butterfl",
      "body": 'A local woman has discovered a new species of butterfly in her backyard. The butterfly, which has been named the "Butterfly of Hope," is a small, blue-and-white creature with a wingspan of about two inches. The woman, who has asked to remain anonymous, said she first saw the butterfly in her garden about a month ago. She said she was immediately struck by its beauty and unusual coloring. The woman contacted a local entomologist, who confirmed that the butterfly was a new species. The entomologist said the butterfly is likely to be found in other parts of the world, but it is the first time it has been seen in North America. The woman said she is excited about the discovery and hopes that it will help to raise awareness of the importance of biodiversity. She said she is also grateful to the entomologist for his help in identifying the butterfly. The discovery of the new butterfly is a reminder of the incredible diversity of life on Earth. It is also a reminder that we need to do everything we can to protect our planet and the creatures that live on it.',
      "date": "July 12, 2024",
    },
  ];

  return (
    <div className='flex bg-zinc-950 h-screen overflow-hidden '>

      {/* Side Bar */}
      <div className="bg-zinc-200 w-96 h-screen rounded-l-3xl text-black">
        {/* <img src='/AALogo.png' className='mx-28 my-5'/> */}
        <Image src='/AALogo.png' alt="logo" width={120} height={20} className='mx-28 my-5' />
        <div className='px-5 text-center'>
          <span className='text-base font-bold'> Addis Ababa City Adminstration Innovation and Technology Development Bureau </span>
        </div>
        
        <div className='grid justify-center mt-10 py-10'>
          <SideBarButtons buttonText="New Post" buttonIcon='/icons/settings.png' onClickFunction={() => choosePage(0)} isChosen={currentIndex == 0 ? true : false}/>
          <SideBarButtons buttonText="Dashboard" buttonIcon='/icons/dashboard.png' onClickFunction={() => choosePage(1)} isChosen={currentIndex == 1 ? true : false} />
          <SideBarButtons buttonText="Activity" buttonIcon='/icons/activity.png' onClickFunction={() => choosePage(2)} isChosen={currentIndex == 2 ? true : false}/>
          <SideBarButtons buttonText="Setting" buttonIcon='/icons/settings.png' onClickFunction={() => choosePage(3)} isChosen={currentIndex == 3 ? true : false}/>
        </div>

        <div className='flex justify-center'>
          <div className='flex items-center text-center justify-center my-96 w-36 py-2 rounded-2xl border border-gray-300 hover:bg-zinc-300'>
            {/* <img src="/icons/logout.png" className='w-8 h-5 pr-2'/> */}
            <Image src="/icons/logout.png" alt="icon" className='pr-2' width={26} height={26} />
            <span> Sign Out </span>
          </div>
        </div>

        
      </div>

      {/* Main Control */}
      <div className="w-screen overflow-scroll bg-zinc-900">
        <div className="bg-zinc-800 h-screen rounded-l-3xl shadow-black shadow-xl ">
          
          {/* Nav Bar */}
          <div className='flex justify-between items-center px-8 py-6 w-full bg-zinc-800'>

            {/* Control Title */}
            <span className='font-bold text-xl uppercase w-52'> {currentIndex == 0 ? "New Post" : currentIndex == 1 ? "Dashboard" : currentIndex == 2 ? "Activity" : "Settings" } </span>

            {/* Search */}
            <div className='flex border border-zinc-700 rounded-3xl'>
              <input type="text" placeholder="Search..." className="input w-96 max-w-xs bg-zinc-800 border px-5 py-2 rounded-3xl border-none outline-none hover:bg-zinc-700" />
              <button className="btn btn-square hover:bg-zinc-600 rounded-2xl p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>

            {/* Some Primary Button & Notification */}
            <div className='flex'>
              {/* Some Primary Button */}
              <div className='bg-yellow-400 px-5 py-2 rounded-2xl text-black font-bold mr-4 hover:bg-yellow-300'>
                <span> Export Data </span>
              </div>

              {/* Notification */}
              <div className='rounded-2xl border-zinc-500 border p-2 hover:bg-zinc-600'>
                {/* <img src="/icons/notification.png" className='w-5 h-5' /> */}
                <Image src="/icons/notification.png" alt="notification" width={18} height={18} />

              </div>
            </div>

          </div>

          {/* Dashboard, Activities and Setting */}
          {currentIndex == 0 ? 
            <NewContent /> :
              currentIndex == 1 ?
            <Dashboard postedList={postedList}/>
            : <Activities />
          }
          
        </div>
      </div>
    </div>
  )
}
