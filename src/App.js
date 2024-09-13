import './App.css';
import WeatherData from './components/weatherData';

function App() {
  const coord = [{lat:0, lon:0}, {lat:0, lon:0}, {lat:0, lon:0}, {lat:0, lon:0}]

  return (
    <div className="App">
      {coord.map((item) => <WeatherData coord={item} ></WeatherData>)}      
    </div>
  );
}

export default App;
