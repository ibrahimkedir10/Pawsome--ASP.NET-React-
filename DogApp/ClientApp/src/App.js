import React, { useState } from "react";
import BreedImage from './components/BreedImage/BreedImage.js'; // Adjusted path
import BreedList from './components/BreedList/BreedList.js'; // Adjusted path
import Header from "./components/Header/Header.js"; // Adjusted path
import Footer from "./components/Footer/Footer.js"; // Adjusted path
import './index.css'; 

function App() {
    const [selectedBreed, setSelectedBreed] = useState("");

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-10 mx-auto p-4 w-full max-w-7xl mt-10">
                    <section className="bg-white shadow-lg rounded-lg p-4 h-96 flex justify-center items-center">
                        <BreedList onSelectBreed={setSelectedBreed} />
                    </section>
                    <section className="bg-white shadow-lg rounded-lg p-4 h-96 flex justify-center items-center">
                        <BreedImage breed={selectedBreed} />
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
