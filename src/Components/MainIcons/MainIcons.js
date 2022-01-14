import React, {useState} from 'react';
import styles from './MainIcons.module.css';

const MainIcons = (props) => {
    return (
        <div className = {`${styles['main-icons']}`}>
            {props.icons.map((icon) => (
                <div className = {`${styles['main-icon']}`}>
                    <img src={icon.icon} alt=""/>
                    <div>
                        <p>{icon.title}</p>
                        <p>{icon.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
 
export default MainIcons;