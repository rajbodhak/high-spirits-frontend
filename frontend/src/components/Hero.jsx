import React from 'react';
import './css/Hero.css';

const Hero = () => {
    return (
        <div className="pt-3 flex flex-col sm:flex-row h-auto sm:h-screen items-center bg-gradient-to-tr from-gray-900 via-gray-800 to-black">
            {/* Text Section */}
            <div className="flex-1 pt-6 pb-4 px-4 sm:px-4 order-2 sm:order-1 text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6">
                    Discover Your Next Favorite Drink
                </h1>
                <p className="text-gray-300 text-md sm:text-base mb-4">
                    Search for cocktails, learn about ingredients, and explore new flavors.
                </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative order-1 sm:order-2 w-full h-64 sm:h-auto px-8 pt-12 sm:px-0">
                <div className="absolute top-0 left-0 w-full h-full"></div>
                <div className="relative z-10 w-full h-full castom-padding">
                    <div className="gradient-border">
                        <img
                            src="https://images.pexels.com/photos/4295/black-and-white-alcohol-bar-drinks.jpg?auto=compress&cs=tinysrgb&w=600"
                            alt="Cocktail"
                            loading="lazy"
                            className="w-full h-full object-cover rounded-lg "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
