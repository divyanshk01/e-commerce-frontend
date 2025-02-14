import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './LoadingSpinner.scss'; 
import { PacmanLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="loader ">
      {/* <svg class="svg-spinner" width="50" height="50" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="4"></circle>
      </svg> */}

      <PacmanLoader size={15} color='#2879fe'/>
    </div>
    // <div className="loading-bar"></div>
    
  );
};

export default LoadingSpinner;
