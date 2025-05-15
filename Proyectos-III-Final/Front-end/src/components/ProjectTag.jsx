import React from 'react'

const ProjectTag = ({ name, onClick, isSelected}) => {
    const buttonStyles = isSelected 
    ? 'border-blue-900 text-white bg-[#0065EF]' 
    : 'text-white border-blue-500 bg-[#0065EF] hover:border-blue-900'
    return (
        <button 
        className={`${buttonStyles} rounded-full border-4 px-6 py-2 text-sm md:text-sm  cursor-pointer`}
        onClick={() => onClick(name)}
        >
            {name}
        </button>
    )
}

export default ProjectTag