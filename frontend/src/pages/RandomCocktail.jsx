import React, { useState } from 'react';
import { FaRegSurprise } from "react-icons/fa";
import Loading from '../components/Loading';
import "../components/css/Tools.css";

const RandomCocktail = () => {
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://high-spirits-backend.onrender.com/api/cocktail/random-cocktail/`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
                const drink = data.drinks[0];
                const randomCocktailInfo = {
                    image: drink.strDrinkThumb,
                    name: drink.strDrink,
                    category: drink.strCategory,
                    instructions: drink.strInstructions
                };

                const allIngredients = [];
                for (let i = 1; i <= 15; i++) {
                    const ingredient = drink[`strIngredient${i}`];
                    const measure = drink[`strMeasure${i}`];
                    if (ingredient) {
                        allIngredients.push(`${measure ? measure + ' ' : ''}${ingredient}`);
                    }
                }
                setIngredients(allIngredients);
                setRandomCocktail(randomCocktailInfo);
            } else {
                setRandomCocktail(null);
            }
        } catch (error) {
            console.error('Error fetching cocktail details:', error);
            setRandomCocktail(null); // Set to null in case of error
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-tr from-gray-900 via-gray-800 to-black py-12">
            <div className='py-4 px-2 flex flex-col items-center w-full  md:justify-center'>
                <h1 className='text-white/50 font-bold text-xl'>
                    Surprise Me with a Cocktail!
                </h1>
                <div className='flex items-center'>
                    <button
                        className='m-2 px-8 py-3 text-sm bg-gray-500 text-white rounded-lg transition-transform transform glow-on-hover active:scale-95 gradient-border shadow-lg'
                        onClick={handleButtonClick}
                    >
                        <FaRegSurprise />
                    </button>
                </div>
            </div>

            <div className='p-4 flex justify-center w-full'>
                {loading ? (
                    <Loading />
                ) : (
                    randomCocktail ? (
                        <div className='w-full max-w-xxl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden font-mono p-4 transition-transform transform text-white/65 md:w-1/2'>
                            <div className='flex flex-col items-center'>
                                <img className="h-30 w-44 object-cover rounded-lg " src={randomCocktail.image} alt={randomCocktail.name} />
                                <h2 className='text-2xl font-bold mb-2 text-gray-500'>{randomCocktail.name}</h2>
                            </div>

                            <p className='mb-2 text-sm text-gray-300'>
                                <span className='font-bold text-gray-500 text-lg'>Category: </span>{randomCocktail.category}
                            </p>
                            <p className='mb-2 text-sm text-justify text-gray-300'>
                                <span className='font-bold text-gray-500 text-lg'>Instructions: </span>
                                {randomCocktail.instructions}
                            </p>
                            <p className='font-bold text-sm text-gray-300'> <span className='text-lg text-gray-500'>Ingredients</span>:</p>
                            <ul className='mb-2 text-sm'>
                                {ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        " "
                    )
                )}
            </div>
        </div>
    );
}

export default RandomCocktail;
