import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    const changeSlide = (n) => {
        setSlideIndex(slideIndex + n);
    };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName('carousel-slide');
        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
    };

    useEffect(() => {
        setInterval(() => {
            changeSlide(1);
        }, 3000);
    }, []);

    return (
        <div className="container border border-red-800">
            <div className="carousel-container">
                <div className="carousel-slide fade">
                    <img src="./assets/images/auli.jpg" alt="Image 1" />
                    <div className="carousel-text">Auli</div>
                </div>
                <div className="carousel-slide fade">
                    <img src="./assets/images/tehridam.jpg" alt="Image 2" />
                    <div className="carousel-text">Tehri Dam</div>
                </div>
                <div className="carousel-slide fade">
                    <img src="./assets/images/Vasuki-Tal.jpg" alt="Image 3" />
                    <div className="carousel-text">Vasuki Tal</div>
                </div>

                {/* Navigation Arrows */}
                <div className="nav-arrows">
                    <button className="arrow left" onClick={() => changeSlide(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M5 12l4 4" />
                            <path d="M5 12l4 -4" />
                        </svg>
                    </button>
                    <button className="arrow right" onClick={() => changeSlide(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M15 16l4 -4" />
                            <path d="M15 8l4 4" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Carousel;