import React from 'react';
import './style.css';

const ProgressBar = (props) => {
    const {value, maxValue, height} = props;
    return (
        <div className="progress relative">
            <div className="progress-component absolute progress-background" style={{width: `${maxValue}%`, height: `${height}px`}}></div>
            <div className="progress-component absolute progress-bar" role="progressbar" style={{width: `${value}%`, height: `${height}px`}}></div>            
        </div>
    );
};



export default ProgressBar;