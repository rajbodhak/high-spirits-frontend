import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import CocktailCard from '../components/CocktailCard.jsx';
import Loading from '../components/Loading.jsx';

const SearchPage = () => {
    const [cocktailName, setCocktailName] = useState("");
    const [cocktailDetails, setCocktailDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchAttempted, setSearchAttempted] = useState(false); // New state to track search attempts

    const handleCocktailChange = (e) => {
        const inputValue = e.target.value;
        const transformedValue = inputValue
            .trim()
            .replace(/\s+/g, ' ')
            .toLowerCase()
            .replace(/ /g, "-");
        setCocktailName(transformedValue);
    };

    const handleButtonClick = async () => {
        if (!cocktailName) return; // Prevent empty searches
        setLoading(true);
        setSearchAttempted(true);
        try {
            const response = await fetch(`https://high-spirits-backend.onrender.com/api/cocktail/search/name/${cocktailName}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
                const drinks = data.drinks.map(drink => ({
                    id: drink.idDrink,
                    name: drink.strDrink,
                    image: drink.strDrinkThumb,
                    category: drink.strCategory,
                    instruction: drink.strInstructions
                }));
                setCocktailDetails(drinks);
            } else {
                setCocktailDetails([]);
            }
        } catch (error) {
            console.error('Error fetching cocktail details:', error);
            setCocktailDetails([]); // Optionally set to empty array on error
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleButtonClick();
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black py-12">
            <div className='py-4 px-2 flex flex-col items-center'>
                <h1 className='text-white/50 font-bold text-xl'>
                    Search Your Favourite Cocktail
                </h1>
                <div className='flex items-center'>
                    <input
                        type='text'
                        placeholder='Ex: Margarita'
                        className='my-4 text-sm py-2 px-3 rounded-lg font-sans border-2 border-gray-700'
                        onChange={handleCocktailChange}
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
            <div className='p-4 flex flex-col items-center'>
                {loading ? <Loading /> :
                    (
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {searchAttempted && cocktailDetails.length > 0 ? (
                                cocktailDetails.map(cocktail => (
                                    <CocktailCard
                                        key={cocktail.id}
                                        image={cocktail.image}
                                        name={cocktail.name}
                                        category={cocktail.category}
                                        instruction={cocktail.instruction}
                                    />
                                ))
                            ) : (
                                searchAttempted && <h1 className='text-white'>Not Found </h1>
                            )}
                        </div>
                    )}
            </div>
        </div>
    );
}

export default SearchPage;
