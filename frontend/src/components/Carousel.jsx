import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export default function List() {
    const [artStyles, setArtStyles] = useState([]);
    const [error, setError] = useState(null);
    const { region } = useParams(); // pass region to backend 

    useEffect(() => {
        axios.get(`http://localhost:8000/art/${region}`)
            .then(response => {
                if (response.data.length === 0) {
                    setError('No art pieces found for this region.');
                } else {
                    setArtStyles(response.data);
                    setError(null);
                }
            })
            .catch(error => {
                console.error("Error, failed to load art pieces!", error);
                setError('Failed to load art pieces.');
            });
    }, [region]);

    const settings = {
        dots: true,
        centerPadding: '0',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="carousel-container">
            <h1>{region} Art Styles</h1>
            {error && <p>{error}</p>}

            <Slider {...settings}>
                {artStyles.map((style, index) => (
                    <div key={index} className="slide">
                        <div className="image-container">
                            <img src={style.image} alt={style.title} />
                        </div>

                        <div className="text-container">
                            <h2>{style.title}</h2>
                            <p><strong>Artist:</strong> {style.artist}</p>
                            <p><strong>Date:</strong> {style.date}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
