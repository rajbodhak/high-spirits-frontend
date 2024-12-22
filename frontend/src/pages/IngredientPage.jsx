import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import IngredientCard from "../components/IngredientCard.jsx";
import Loading from '../components/Loading.jsx';

const IngredientPage = () => {
    const [loading, setLoading] = useState(false);
    const [ingredientName, setIngredientName] = useState("");
    const [ingredientDetails, setIngredientDetails] = useState(null);
    const [searchAttempted, setSearchAttempted] = useState(false);

    const handleIngredientChange = (e) => {
        const inputValue = e.target.value;
        const transformedValue = inputValue
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .replace(/ /g, "-");
        setIngredientName(transformedValue);
    };

    const handleButtonClick = async () => {
        setLoading(true);
        setSearchAttempted(true); // Mark that a search has been attempted
        try {
            const response = await fetch(`https://high-spirits-backend.onrender.com/api/cocktail/search/ingredient/${ingredientName}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.ingredients && data.ingredients.length > 0) {
                const ingredient = data.ingredients[0];
                const ingredientInfo = {
                    name: ingredient.strIngredient,
                    abv: ingredient.strABV,
                    description: ingredient.strDescription
                };
                setIngredientDetails(ingredientInfo);
            } else {
                setIngredientDetails(null);
            }
        } catch (error) {
            console.error('Error fetching cocktail details:', error);
            setIngredientDetails(null); // Optionally set to null on error
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black py-12">
            <div className='py-4 px-2 flex flex-col md:flex-col items-center w-full md:items-center'>
                <h1 className='text-white/50 font-bold text-xl'>
                    Discover Your Favorite Ingredient
                </h1>
                <div className='flex items-center'>
                    <input
                        type='text'
                        placeholder='Ex: Vodka'
                        className='my-4 text-sm py-2 px-3 rounded-lg font-sans border-2 border-gray-700'
                        onChange={handleIngredientChange}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        className='ml-2 p-3 text-sm bg-gray-500 text-white rounded-lg transition-transform transform hover:bg-gray-600 active:scale-95'
                        onClick={handleButtonClick}
                    >
                        <FaSearch />
                    </button>
                </div>
            </div>
            <div className='p-4 flex justify-center w-full'>
                {loading ? <Loading /> : (
                    ingredientDetails ? ( // Corrected conditional rendering
                        <IngredientCard
                            name={ingredientDetails.name}
                            abv={ingredientDetails.abv || "0"}
                            description={ingredientDetails.description}
                        />
                    ) : (
                        searchAttempted && <h1 className='text-white'>Not Found</h1> // Show "Not Found" if search was attempted
                    )
                )}
            </div>
        </div>
    )
}

export default IngredientPage;
