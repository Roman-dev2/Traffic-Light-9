import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Header from './Header';
import HorizontalTrafficLight from './HorizontalTrafficLight';
import VerticalTrafficLight from './VerticalTrafficLight';
import { TrafficLightsProvider } from './TrafficLightsProvider';

function App() {
  return (
    <TrafficLightsProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/horizontal" element={<HorizontalTrafficLight />} />
            <Route path="/vertical" element={<VerticalTrafficLight />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </TrafficLightsProvider>
  );
}

export default App;
