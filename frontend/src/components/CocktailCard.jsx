import React, { useState } from 'react';

const CocktailCard = ({ image, name, category, instruction }) => {
    const [showFullInstruction, setShowFullInstruction] = useState(false);

    const toggleInstruction = () => setShowFullInstruction(!showFullInstruction);

    return (
        <div className="w-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden font-asap">
            <div>
                <img className="h- w-full object-cover rounded-t-lg" src={image} alt={name} />
            </div>
            <div className="p-2">
                <h5 className="mb-1 text-md font-bold tracking-tight text-gray-300">{name}</h5>
                <div className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                    <p className='text-xs'>
                        <span className='font-bold text-gray-300'>Category: </span> {category}
                    </p>
                    <p className="text-xs">
                        <span className='font-bold text-gray-300'>Instruction: </span>
                        {showFullInstruction ? instruction : `${instruction.substring(0, 50)}...`} {/* Show truncated or full instruction */}
                        <button
                            className="text-blue-500 ml-1"
                            onClick={toggleInstruction} // Toggle instruction visibility
                        >
                            {showFullInstruction ? 'Read Less' : 'Read More'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CocktailCard;