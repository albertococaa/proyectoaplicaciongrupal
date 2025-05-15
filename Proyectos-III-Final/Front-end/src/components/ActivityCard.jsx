import React from 'react'
import { PlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowRightIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'

const ActivityCard = ({ imgUrl, title, description, id, tag }) => {
    console.log('ID en ActivityCard:', id);

  return (
    <div>
        <div 
            className="col-span-2 h-52 md:h- md:w-64 md:pl-10 w-64 rounded-xl relative group " 
            style={ {background: `url(${imgUrl})`, backgroundSize: "cover" }}
        />
        <div className="col-span-3 text-[#14192C] bg-white py-4 px-4 flex flex-col justify-between">
            <div>
                <h5 className='font-2xl font-semibold mb-2 text-[#14192C]'>{title}</h5>
                <div className="flex space-x-2 mb-2">
                    {tag.map((tagName, index) => (
                        <div
                            key={index}
                            className="bg-blue-200 rounded-full px-2 py-1 text-sm"
                        >
                            {tagName}
                        </div>
                    ))}
                </div>
                <p className='text-[#14192C]'>{description}</p>
            </div>
            <div className='flex self-end'>
                <Link
                    href={`../activities/${id}`}
                    className="flex text-black mr-2"
                    >
                    <h1 className="text-sm mr-2">Mas informacion </h1>
                    
                    <ArrowRightIcon className='h-6 w-6 text-[#14192C] cursor-pointer' />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ActivityCard