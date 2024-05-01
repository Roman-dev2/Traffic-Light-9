import { useContext, useEffect } from 'react';
import TrafficLights from './TrafficLights';
import ClickDisplay from './ClickDisplay';
import { TrafficLightsContext } from './TrafficLightsProvider';

const HorizontalTrafficLight = () => {
  const { lights, handleLightClick, resetClicks, toggleOrientation, isVertical } = useContext(TrafficLightsContext);

  // Встановлюємо горизонтальну орієнтацію при монтуванні
  useEffect(() => {
    if (isVertical) {
      toggleOrientation();
    }
  }, [isVertical, toggleOrientation]);

  return (
    <> 
      <ClickDisplay data={lights} onReset={resetClicks} />
      <TrafficLights orientation="horizontal" data={lights} onLightClick={handleLightClick} />
    </>
  );
};

export default HorizontalTrafficLight;
