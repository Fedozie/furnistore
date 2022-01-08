import React, {useState} from 'react';
import styles from './Header.module.css';
import homeIcon from '../Assets/furnistore-logo.svg';
import searchIcon from '../Assets/search-icon.svg';
import bagIcon from '../Assets/bag-icon.svg';
import phoneIcon from '../Assets/phone-icon.svg';

const Header = () => {
    return (
        <div>
            <header className = {styles.header}>
                <div className={`${styles['top-head']}`}>
                    <div>
                        <img src={homeIcon} alt=""/>
                    </div>
                    <div className = {`${styles['top-head_text']}`}>
                        <p>THE FURNISTORE COMPANY</p>
                        <p>LONDON</p>
                    </div>
                    <div className = {`${styles['top-head_icons']}`}>
                        <img src={searchIcon} alt=""/>
                        <img src={bagIcon} alt=""/>
                        <img src={phoneIcon} alt=""/>
                    </div>
                </div>
                <nav className={`${styles['bottom-head']}`}>
                    <ul>
                        <li>NEW</li>
                        <li>IN STOCK</li>
                        <li>BESPOKE</li>
                        <li>GALLERY</li>
                        <li>OUTLETS</li>
                        <li>ABOUT US</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
 
export default Header;