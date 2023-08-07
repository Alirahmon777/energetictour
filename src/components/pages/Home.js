import React from 'react';
import '../../App.css';
import Cards from '../card-item/Cards';
import Footer from '../footer/Footer';
import HeroSection from '../hero-section/HeroSection';
import Carusel from '../hero-section/carusel';

function Home () {
    return (
        <>
            <HeroSection/>
            <Carusel />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;