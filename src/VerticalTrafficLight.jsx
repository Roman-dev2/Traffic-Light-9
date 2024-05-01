import { useContext, useEffect } from 'react';
import TrafficLights from './TrafficLights';
import ClickDisplay from './ClickDisplay';
import { TrafficLightsContext } from './TrafficLightsProvider';

const VerticalTrafficLight = () => {
  const { lights, handleLightClick, resetClicks, isVertical, toggleOrientation } = useContext(TrafficLightsContext);

  useEffect(() => {
    if (!isVertical) {
      toggleOrientation();
    }
  }, [isVertical, toggleOrientation]);

  return (
    <>
      <ClickDisplay data={lights} onReset={resetClicks} />
      <TrafficLights orientation="vertical" data={lights} onLightClick={handleLightClick} />
    </>
  );
};

export default VerticalTrafficLight;
