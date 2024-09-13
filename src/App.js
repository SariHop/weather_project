import './App.css';
import WeatherData from './components/weatherData';

function App() {
  const coord = [{lat:29.55, lon:34.95},{lat:51.50, lon:-0.12},{lat:40.71, lon:-74.00},{lat:64.20, lon:-149.49}]

  return (
    <div className="App">
      {coord.map((item) => <WeatherData coord={item} ></WeatherData>)}      
    </div>
  );
}

export default App;
