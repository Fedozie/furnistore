import React, {useState} from 'react';
import styles from './MainComponent.module.css';
import IconComponent from '../IconComponent/IconComponent';
import mainImg from '../Assets/main-component-image.svg';
import logoCircle from '../Assets/logo-circle.svg';
import iconChatbox from '../Assets/icon-chatbox.svg';


const MainComponent = () => {
    const items = [
        {title: 'Quick Payment', description: '100% secure payment'},
        {title: 'Smart Gift Card', description: 'Buy over $1000 to get a card'},
        {title: '24/7 Support', description: 'Quick Support'},
        {title: 'Free Shipping',description: 'Orders over $100'}
    ];


    return (
        <div className = {styles.main} /*style = {{backgroundImage:`url(${mainImg})`}}*/>
            <div className = {`${styles['main-description']}`}>
                <p>ALLURE COLLECTION</p>
                <h1>TAKE A SEAT, YOU DESERVE IT.</h1>
                <p>
                    At FURNISTORE, experience exquisite taste and expert craftmanship reveal a sensational interior design, to create a look that is modern, relevant and incredibly comfrotable
                </p>
                <button>BROWSE STORE</button>
            </div>
            <div className = {`${styles['main-chatbox']}`}>
                <p>
                    We're online! How may we help you today?
                </p>
            </div>
            <img src={logoCircle} alt="" className = {`${styles['main-logo-circle-icon']}`} />
            <img src={iconChatbox} alt="" className = {`${styles['main-chatbox-icon']}`}/>
            {/* <IconComponent icon = {items}/> */}
        </div>
    );
}
 
export default MainComponent;