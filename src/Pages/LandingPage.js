import React, {useState} from 'react';
import Header from '../Components/Header/Header';
import MainComponent from '../Components/MainComponent/MainComponent';
import HeroComponent from '../Components/HeroComponent/HeroComponent';

const LandingPage = () => {
    return (
        <div>
            <Header/>
            <MainComponent/>
            <HeroComponent/>
        </div>
    );
}
 
export default LandingPage;