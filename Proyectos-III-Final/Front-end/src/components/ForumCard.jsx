import React from 'react'
import { PlusIcon, ChatBubbleOvalLeftEllipsisIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ForumCard = ({ imgUrl, title, description, id }) => {
  return (
    <Link href={`../forum/${id}`} passHref>
        <div className="bg-white">
          <div className="grid grid-cols-5">
            <div className="col-span-5 text-black rounded-t-xl border-t-2 border-l-2 border-r-2 border-[#9DA3A7] py-6 px-4 flex flex-col justify-between">
              <div>
                <h5 className='font-xl font-semibold mb-2 text-[#14192C]'>{title}</h5>
                <p className='text-[#000000]'>{description}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="col-span-1 border-l-2 border-b-2 rounded-bl-xl border-[#9DA3A7]"/>
            <div className="col-span-1 bg-[#0065EF] text-white border-2 border-[#0065EF] rounded-tl-xl rounded-br-lg">
              <h1 className="font-Montserrat text-sm pt-2 pb-2 font-normal">Disponible hasta INDF</h1>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default ForumCard
