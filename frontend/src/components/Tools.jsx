import React from 'react';
import { Link } from 'react-router-dom';
import './css/Tools.css';

const Tools = () => {
    return (
        <div className="tools-container flex flex-col md:flex-row justify-center items-center p-5 bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
            {/* Card 1: Search Cocktail */}
            <div className="card m-2 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Search Cocktail"
                    className="w-full h-28 object-cover rounded-t-lg border border-white/25"
                />
                <h2 className="text-lg font-bold mt-2">Search Cocktail</h2>
                <p className="text-gray-500 mt-1">
                    Find your favorite cocktails by searching through our extensive database.
                </p>
                <Link to="/search">
                    <button className="glow-on-hover">
                        Go to Search
                    </button>
                </Link>
            </div>

            {/* Card 2: Ingredient about Cocktail */}
            <div className="card m-2 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://images.pexels.com/photos/1189255/pexels-photo-1189255.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Know about Ingredients"
                    className="w-full h-28 object-contain rounded-t-lg border border-white/25"
                />
                <h2 className="text-lg font-bold mt-2">Learn about Ingredients</h2>
                <p className="text-gray-500 mt-1">
                    Explore essential cocktail ingredients and enhance your mixology skills today!
                </p>
                <Link to="/ingredient">
                    <button className="glow-on-hover">
                        Discover Now
                    </button>
                </Link>
            </div>

            {/* Card 3: Get Cocktail Suggestion */}
            <div className="card m-2 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                    src="https://images.pexels.com/photos/2198400/pexels-photo-2198400.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Get Cocktail Suggestion"
                    className="w-full h-28 object-cover rounded-t-lg border border-white/25"
                />
                <h2 className="text-lg font-bold mt-2">Get Cocktail Suggestion</h2>
                <p className="text-gray-500 mt-1">
                    Not sure what to drink? Get personalized cocktail suggestions!
                </p>
                <Link to="/suggestion">
                    <button className="glow-on-hover">
                        Get Suggestion
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Tools;