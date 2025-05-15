import React from 'react';
import { PlusIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, id }) => {
    console.log('ID en ActivityCard:', id);

    return (
        <div className="flex rounded-xl border-2 border-[#9DA3A7]">
            <div 
                className="flex-1 rounded-l-xl" 
                style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
            />
            <div className="flex-1 text-black rounded-r-xl bg-white py-6 px-4 flex flex-col justify-between">
                <div>
                    <h5 className="font-xl font-semibold mb-2 text-[#14192C]">{title}</h5>
                    <p className="text-[#000000]">{description}</p>
                </div>
                <div className="flex self-end">
                    <Link
                        href={`../communities/${id}`}
                        className="flex text-black mr-2"
                    >
                        <PlusIcon className="h-6 w-6 text-[#14192C] cursor-pointer" />
                        <h1 className="text-sm">INFO</h1>
                    </Link>
                    <Link
                        href={`../communities/${id}`}
                    >
                        <ArrowRightIcon className="h-6 w-6 text-[#14192C] cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
