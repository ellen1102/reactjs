"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';


const MovieSlide = () => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/movies');
        
        setMovieData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

return (
    <Carousel style={{ maxHeight: '450px', overflow: 'hidden' }}> {/* Atur maxHeight sesuai kebutuhan */}>
        {movieData?.data.map((movie: any, index: any) => (
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={movie.foto}
            alt={movie.judul}
            style={{ maxHeight: '450px', objectFit: 'contain' }}
            />
        <Carousel.Caption>
            <h3>{movie.judul}</h3>
            <p>{movie.sutradara}</p>
        </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
);
};

export default MovieSlide;