import './App.css';
import WeatherData from './components/weatherData';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

function App() {
  const coord = [
    { lat: 40.712, lon: -74.006, city: 'New York' },
    { lat: 51.507, lon: -0.127, city: 'London' },
    { lat: 29.550, lon: 34.950, city: 'Eilat' },
    { lat: 64.200, lon: -149.493, city: 'Alaska' },
  ];


  return (
    <div className="App">
      <Grid container spacing={5}>
        <Grid size={12} sx={{ backgroundColor: 'white' }}>
          <Typography variant='h4' align='right' sx={{ margin: '30px', }}> תחזית מסביב לעולם</Typography>
        </Grid>
        {coord.map((item) =>
          <Grid size={6}>
            <WeatherData coord={item} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
