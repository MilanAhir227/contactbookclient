import React, { useState, useEffect } from 'react';
import { Rings } from 'react-loader-spinner';
import '../App.css'; // Create a CSS file for styling

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000; // Adjust the delay time in milliseconds (e.g., 2000 for 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // After the delay, set isLoading to false to hide the loader smoothly
    }, delay);

    return () => {
      clearTimeout(timer); // Clean up the timer if the component unmounts before the delay is complete
    };
  }, []);

  return (
    <div className={`loader-container ${isLoading ? 'show' : 'hide'}`}>
      <div className="loader">
        <Rings
          type="rings"
          color="#45f3ff"
          height={100}
          width={100}
        />
      </div>
      <div className={`content ${isLoading ? 'hide' : 'show'}`}>
        Please wait..! 
      </div>
    </div>
  );
};

export default Loader;
