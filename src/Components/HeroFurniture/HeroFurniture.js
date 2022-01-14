import React, {useState} from 'react';
import styles from './HeroFurniture.module.css';

const HeroFurniture = (props) => {
    return (
        <div className = {`${styles['hero-top']}`}>
            {props.collections.map((collection) => (
                <div className = {`${styles['hero-top-tab']}`}>
                    <div>
                        <p>{collection.title}</p>
                        <p>{collection.price}</p>
                        <p>Read more </p>
                    </div>
                    <div>
                        <img src={collection.image} alt=""/>
                    </div>
                </div>
            ))}
        </div>
        
    );
}
 
export default HeroFurniture;