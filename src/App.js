import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Input from './components/Input';
import { useWeather } from './context/Weather';
import { useEffect } from 'react';

function App() {
  const weather=useWeather();
  console.log(weather);
  useEffect = (()=>{
    weather.fetchCurrentUserLocationData();
  },[]);
  return (
    <div className='App'>
      <h1>Weather Forecast</h1>
      <Input/>
      <Button onClick={weather.fetchData} value="Search" />
      <Card/>
      <Button onClick={weather.fetchCurrentUserLocationData} value="Reset" />
    </div>
  );
}

export default App;
