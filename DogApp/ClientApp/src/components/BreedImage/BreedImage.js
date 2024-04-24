import React, { useState, useEffect } from "react";


export default function BreedImage({ breed }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        if (breed) {
            fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
                .then(response => response.json())
                .then(data => setImageUrl(data.message));
        }
    }, [breed]);
    return (
        <div>
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={`Random ${breed}`}
                    className="h-80 w-80 rounded-lg object-center shadow-xl shadow-blue-gray-900/50 object-cover"
                />
            ) : (
                <p>Select a breed to see the image</p>
            )}
        </div>
    );
}