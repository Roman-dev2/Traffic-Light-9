import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './Light.css';

function Light({ tlColor = 'red', onClick, settings = { duration: 250, brightness: 0.5, blinks: 1 } }) {
    const [isBlinking, setIsBlinking] = useState(false);
    const [blinkKey, setBlinkKey] = useState(0);  
  
    const handleBlink = () => {
      onClick(tlColor); 
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        setBlinkKey(prevKey => prevKey + 1); 
      }, settings.duration * settings.blinks);
    };
  

    useEffect(() => {
      return () => clearTimeout(handleBlink);
    }, []);

    return (
      <motion.div
        key={blinkKey}  
        className="light"
        onClick={handleBlink}
        style={{
          backgroundColor: tlColor,
          width: '100px',
          height: '100px',
          borderRadius: '50%'
        }}
        animate={{ opacity: isBlinking ? settings.brightness : 1 }}
        transition={{ duration: settings.duration / 1000, repeat: settings.blinks, repeatType: "reverse" }}
      />
    );
}

Light.propTypes = {
  tlColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  settings: PropTypes.shape({
    duration: PropTypes.number,
    brightness: PropTypes.number,
    blinks: PropTypes.number
  }).isRequired
};

export default Light;
