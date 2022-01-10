import React, {useState} from 'react';
import styles from './MainComponent.module.css';
import mainImg from '../Assets/main-component-image.svg';

const MainComponent = () => {
    return (
        <div className = {styles.main} /*style = {{backgroundImage:`url(${mainImg})`}}*/>
            <div className = {`${styles['main-description']}`}>
                <p>ALLURE COLLECTION</p>
                <h3>TAKE A SEAT, YOU DESERVE IT.</h3>
                <p>
                    At FURNISTORE, experience exquisite taste and expert craftmanship reveal a sensational interior design, to create a look that is modern, relevant and incredibly comfrotable
                </p>
                <button>Browse Store</button>
            </div>
            <div className = {`${styles['main-chatbox']}`}></div>
        </div>
    );
}
 
export default MainComponent;