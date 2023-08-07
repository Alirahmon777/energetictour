import React from "react";
import '../../App.css';
import Footer from "../footer/Footer";
import HeroSection from "../hero-section/HeroSection";
// import img from '../images/istockphoto-1281287664-612x612.jpg'
import Cards from '../card-item/Cards'
export default function Products() {
    return(
        <>
            <HeroSection />

                <Cards />



            <Footer />
        </>
    )
}