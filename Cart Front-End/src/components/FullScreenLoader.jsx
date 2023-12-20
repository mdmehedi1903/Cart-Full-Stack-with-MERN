import React from 'react';
import '../assets/css/loader.css'

const FullScreenLoader = (props) => {
    return (
        <div className={props.visibility}>
            <div className="loader-container show">
            <div className="loader"></div>
            </div>
        </div>
      );
};

export default FullScreenLoader;