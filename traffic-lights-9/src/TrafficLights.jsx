import { useContext } from 'react';
import { TrafficLightsContext } from './TrafficLightsProvider';
import Light from './Light';
import './TrafficLights.css';

const TrafficLights = () => {
  const { lights, handleLightClick, isVertical } = useContext(TrafficLightsContext);
  if (!lights) return <div className="loading">Loading...</div>;


  const orientationClass = isVertical ? "vertical" : "horizontal";

  return (
    <div className={`trafficLightContainer ${orientationClass}`}>
      <div className={`trafficLight ${orientationClass}`}>
        <div className="lightsContainer">
          {lights.map((light) => (
            <Light
              key={light.id}
              tlColor={light.color}
              onClick={() => handleLightClick(light.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficLights;
