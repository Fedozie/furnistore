import React, {useState} from 'react';
import styles from './IconComponent.module.css';

const IconComponent = (props) => {
    return (
        <div className = {`${styles['main-icons']}`}>
            {props.icons.map((icon) => {
                <div className = {`${styles['main-icon']}`}>
                    <img src={icon.icon} alt=""/>
                    <p>{icon.title}</p>
                    <p>{icon.description}</p>
                </div>
            })}
        </div>
    );
}
 
export default IconComponent;