import React, {useState} from 'react';
import styles from './HeroComponent.module.css';
import HeroFurniture from '../HeroFurniture/HeroFurniture';
import firstFurniture from '../Assets/first-furniture.svg';
import secondFurniture from '../Assets/second-furniture.svg';
import thirdFurniture from '../Assets/third-furniture.svg';

const HeroComponent = () => {
    const furnitures = [
        {title: "Modern Furniture Collections", price: "Starting from $500", image: firstFurniture},
        {title: "Mahogany Furniture Collections", price: "Starting from $300", image: secondFurniture},
        {title: "Complete Sofa Collections", price: "Starting from $300", image: thirdFurniture}
    ]


    return (
        <div className = {styles.hero}>
            <HeroFurniture collections = {furnitures}/>
            <div className = {`${styles['hero-text']}`}>
                <p>TRENDING</p>
                <div>
                    <p>Top Products</p>
                    <p>Best Sellers</p>
                </div>
            </div>
            <div className = {`${styles['hero-bottom']}`}>

            </div>
        </div>
    );
}
 
export default HeroComponent;