import React from 'react';

const IngredientCard = ({ name, abv, description }) => {
    return (
        <div className='w-full max-w-xxl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden font-mono p-4 transition-transform transform  text-white/65'>

            <h2 className='text-2xl font-bold mb-2 text-gray-300'>{name}</h2>
            <p className='mb-2 text-sm'>
                <span className='font-bold text-gray-300'>Alcohol by Volume: </span>{abv}%
            </p>
            <p className='mb-2 text-sm text-justify text-gray-500'>
                <span className='font-bold text-gray-300'>Description: </span>
                {description}
            </p>
        </div>
    );
}


export default IngredientCard;