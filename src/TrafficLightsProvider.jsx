import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const TrafficLightsContext = createContext();

export const TrafficLightsProvider = ({ children }) => {
    const [lights, setLights] = useState([]);
    const [isVertical, setIsVertical] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLights();
    }, []);

    const fetchLights = async () => {
        try {
            const response = await axios.get('https://script.google.com/macros/s/AKfycbw2i1RnAirjhlbvM_3Ar3mlF0xHSECRVF3M6KYQv5FwyO734CV61lFFNYIRZlLQXODu/exec?action=fetchLights');
            if (Array.isArray(response.data)) {
                setLights(response.data);
            } else {
                console.error("Отримані дані не є масивом:", response.data);
                setLights([]);  
            }
            setLoading(false);
        } catch (error) {
            console.error("Не вдалося завантажити дані:", error);
            setLoading(false);
        }
    };
    
    

    const toggleOrientation = () => {
        setIsVertical(!isVertical);
    };

    const handleLightClick = async (id) => {
        const light = lights.find(light => light.id === id);
        if (!light) {
            console.error("Світлофор з ID " + id + " не знайдено.");
            return;
        }
        const newState = light.clickcount + 1;
    
        try {
            const response = await axios.post('https://script.google.com/macros/s/AKfycbw2i1RnAirjhlbvM_3Ar3mlF0xHSECRVF3M6KYQv5FwyO734CV61lFFNYIRZlLQXODu/exec', {
                action: 'setLightState',
                id: id,
                state: newState
            });
            if (response.data === 'Success') {
                const updatedLights = lights.map(light => light.id === id ? { ...light, clickcount: newState } : light);
                setLights(updatedLights);
            } else {
                console.error("Не вдалося оновити стан світлофору:", response.data);
            }
        } catch (error) {
            console.error("Помилка при оновленні світлофору:", error);
        }
    };
    
    
    

    const resetClicks = async () => {
        try {
            await axios.post('https://script.google.com/macros/s/AKfycbw2i1RnAirjhlbvM_3Ar3mlF0xHSECRVF3M6KYQv5FwyO734CV61lFFNYIRZlLQXODu/exec', {
                action: 'resetClicks'
            });
            const resetData = lights.map(light => ({ ...light, clickcount: 0 }));
            setLights(resetData);
        } catch (error) {
            console.error("Failed to reset lights:", error);
        }
    };

    return (
        <TrafficLightsContext.Provider value={{
            lights,
            handleLightClick,
            resetClicks,
            toggleOrientation, 
            isVertical,
            loading
        }}>
            {children}
        </TrafficLightsContext.Provider>
    );
};

TrafficLightsProvider.propTypes = {
    children: PropTypes.node.isRequired
};
