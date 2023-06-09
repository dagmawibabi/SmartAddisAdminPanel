'use client';
import Image from "next/image";
import Link from "next/link";

export default function SideBarButtons({buttonText, buttonIcon, onClickFunction, isChosen} : { buttonText: string, buttonIcon: string, onClickFunction: Function, isChosen: boolean}) {
    let normalStyle = 'px-10 py-2 my-2 rounded-xl w-48 text-center font-bold flex items-center border hover:bg-zinc-300 hover:border-zinc-400 cursor-grab';
    let chosenStyle = 'px-10 py-2 my-2 rounded-xl w-48 text-center font-bold flex items-center border bg-zinc-300 border-zinc-400';
    return (
        <div className={isChosen == true ? chosenStyle : normalStyle} onClick={(e) => onClickFunction()} >
            {/* <img src={buttonIcon} className="w-7 h-5 pr-2 "/> */}
            <Image src={buttonIcon} alt="btnIcon" className="pr-2 " width={30} height={30} />
            
            <span> {buttonText} </span>
        </div>        
        // <Link href="/activitiesPage"> 
        // </Link>
    );
}