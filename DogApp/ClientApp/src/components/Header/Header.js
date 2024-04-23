import React from "react"
import './style.css'

export default function Header() {
    return (
        <div>
            <section className="bg-blue-800 h-40">
                <header className="text-white p-4 flex justify-center">
                    {/* Responsive text sizing and minimum width */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold min-w-xs whitespace-normal">
                        Dog Breeds Explorer
                    </h1>
                </header>
                <br />
                <header className="flex justify-center">
                    {/* Ensure text does not overflow and is responsive */}
                    <h1 className="text-sm md:text-base lg:text-lg font-bold text-white min-w-xs whitespace-normal">
                        Select a dog breed from the list to view a random image of the dog.
                    </h1>
                </header>
            </section>
        </div>
    );
};
