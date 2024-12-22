import React from "react";
import Hero from "../components/Hero.jsx";
import Tools from "../components/Tools.jsx"

const HomePage = () => {
    return (
        <div className="bg-gradient-to-r from-[#2a2a32] via-[#1e1e28] to-[#16161d] min-h-screen flex flex-col">
            <Hero />
            <Tools />
        </div>
    );
};

export default HomePage;
