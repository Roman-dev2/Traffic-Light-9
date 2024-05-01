import './App.css';
import TrafficLights from './TrafficLights';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ClickDisplay from './ClickDisplay';
import StatsBar from './StatsBar';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Header';
import HorizontalTrafficLight from './HorizontalTrafficLight';
import VerticalTrafficLight from './VerticalTrafficLight';


import { TrafficLightsProvider } from './TrafficLightsProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Header /><Outlet /></>,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "horizontal",
          element: <HorizontalTrafficLight />
        },
        {
          path: "vertical",
          element: <VerticalTrafficLight />
        }
      ]
    }
  ]);

  return (
    <TrafficLightsProvider>
      <RouterProvider router={router}>
        <div className="App">
          <StatsBar /> 
          <ClickDisplay />
          <TrafficLights />
        </div>
      </RouterProvider>
    </TrafficLightsProvider>
  );
}

export default App;
