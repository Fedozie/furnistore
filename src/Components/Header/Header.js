import React, {useState} from 'react';
import styles from './Header.module.css';
import homeIcon from '../Assets/furnistore-logo.svg';
import searchIcon from '../Assets/search-icon.svg';
import bagIcon from '../Assets/bag-icon.svg';
import phoneIcon from '../Assets/phone-icon.svg';

const Header = () => {
    return (
        <header className = {styles.header}>
            <div className={`${styles['top-head']}`}>
                <div className = {`${styles['top-head_logo']}`}>
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
                    <li><a href="">NEW</a></li>
                    <li><a href="">IN STOCK</a></li>
                    <li><a href="">BESPOKE</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">OUTLETS</a></li>
                    <li><a href="">ABOUT US</a></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Header;