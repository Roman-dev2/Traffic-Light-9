import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TrafficLightsContext = createContext();

const googleUrl = import.meta.env.VITE_apiURL;

export const TrafficLightsProvider = ({ children }) => {
    const [lights, setLights] = useState([]);
    const [isVertical, setIsVertical] = useState(true);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchLights();
    }, []);

    const fetchLights = async () => {
        try {
            const response = await fetch(`${googleUrl}?action=fetchLights`);
            const data = await response.json();
            if (Array.isArray(data)) {
                setLights(data);
            } else {
                console.error("Отримані дані не є масивом:", data);
                setLights([]);
            }
            setLoading(false);
        } catch (error) {
            console.error("Не вдалося завантажити дані:", error);
            setLoading(false);
        }
    };

    const handleLightClick = async (id) => {
        const light = lights.find(light => light.id === id);
        if (!light) {
            console.error("Світлофор з ID " + id + " не знайдено.");
            return;
        }
        const newState = light.clickcount + 1;

        try {
            await fetch(googleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify({
                    action: 'setLightState',
                    id: id,
                    state: newState
                }),
                mode: 'no-cors'
            });
        
            const updatedLights = lights.map(light => light.id === id ? { ...light, clickcount: newState } : light);
            setLights(updatedLights);
        } catch (error) {
            console.error("Помилка при оновленні світлофору:", error);
        }
    };

    const resetClicks = async () => {
        try {
            await fetch(googleUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain',  
                },
                body: JSON.stringify({
                    action: 'resetClicks'
                }),
                mode: 'no-cors'
            });
            
            const resetData = lights.map(light => ({ ...light, clickcount: 0 }));
            setLights(resetData);
        } catch (error) {
            console.error("Failed to reset lights:", error);
        }
    };
    

    const toggleOrientation = () => {
        setIsVertical(!isVertical);
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
