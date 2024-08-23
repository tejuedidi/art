import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ArtStyles() {
    const [artStyles, setArtStyles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/art/')
            .then(response => {
                console.log("API Response:", response.data);
                setArtStyles(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the art styles!", error);
            });
    }, []);

    return (
        <div>
            <h1>Chinese Art Styles</h1>
            <div>
                {artStyles.map((style, index) => (
                    <div key={index}>
                        <h2>{style.title}</h2>
                        <p><strong>Artist:</strong> {style.artist}</p>
                        <p><strong>Date:</strong> {style.date}</p>
                        {style.image && <img src={style.image} alt={style.title} />}
                    </div>
                ))}
            </div>
        </div>
    );
}
