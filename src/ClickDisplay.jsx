import { useContext } from 'react';
import { TrafficLightsContext } from './TrafficLightsProvider';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './ClickDisplay.css';

const ClickDisplay = () => {
  const { lights, resetClicks } = useContext(TrafficLightsContext);
  if (!lights) return <div>Loading...</div>;

  return (
    <div className="clickDisplay">
      {lights.map(light => (
        <span key={light.id} style={{ color: light.color }}>
          {light.description}: {light.clickcount}
        </span>
      ))}
      <button id="resetButton" onClick={resetClicks}>
        <i className="fas fa-sync-alt fa-3x"></i>
      </button>
    </div>
  );
};

export default ClickDisplay;
