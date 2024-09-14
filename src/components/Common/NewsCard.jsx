import React, { useState } from 'react'
import { formatISODate } from "../../utils/UtilsFunctions.jsx"
import Tooltip from "../common/Tooltip.jsx"
import { LuLink } from 'react-icons/lu'

const NewsCard = ({ image, title, content, date, sourceName, onCardClick, url }) => {
    const [tooltipContent, setTooltipContent] = useState("Copy Link");

    /// To copy the Post URL
    const handleCopyLink = (e, url) => {
        e.stopPropagation();
        navigator.clipboard.writeText(url)
            .then(() => {
                setTooltipContent("Link Copied")
                setTimeout(() => setTooltipContent("Copy Link"), 2000)
            })
            .catch((error) => {
                console.error('Failed to copy URL', error);
            });
    }

    return (
        <div 
            onClick={onCardClick} 
            className="rounded-xl border-2 border-blue-700/20 p-3 h-full flex flex-col gap-3 justify-between cursor-pointer bg-none"
        >
            <img src={image} alt={title} className="w-full h-[200px] rounded-xl object-cover overflow-hidden" />
            <div className='flex flex-col justify-between bg-none'>
                <div className='bg-none'>
                    <h1 className="text-[18px] font-bold line-clamp-2 mb-1.5 h-[60px]">{title}</h1>
                    <h1 className="text-[13px] font-medium line-clamp-2 text-gray-800 mb-3 bg-none">{content}</h1>
                </div>
                <div className="flex items-end justify-between bg-none">
                    <div className="text-[12px] font-normal text-gray-600/80 bg-none ">
                        <h1 className='bg-none'>{sourceName}</h1>
                        <h1 className='bg-none'>{formatISODate(date)}</h1>
                    </div>

                    <Tooltip className="bg-none" content={tooltipContent}>
                        <button 
                            className="w-8 h-8 hover:bg-blue-600/10 duration-700 rounded-md cursor-pointer 
                            active:scale-[0.9] flex justify-center items-center text-blue-600 text-[18px] bg-none"
                            onClick={(e) => handleCopyLink(e, url)} // Attach the click handler here
                        >
                            <LuLink className='bg-none' />
                        </button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
