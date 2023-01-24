import Container from 'components/atoms/Container';
import { useState } from 'react';
import { City, WeatherData } from './index.d';
import cities from 'assets/cities.json';
import SearchInput from 'components/molecules/SearchInput';
import WeatherCard from 'components/organisms/WeatherCard';

import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const onSelect = (city: City) => {
    fetch(
      import.meta.env.VITE_API_BASE_URL +
        `/weather?q=${city.name},${city.state_code},${city.country_code}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <SearchInput items={cities as City[]} onSelect={onSelect} />

      {weatherData ? <WeatherCard weatherData={weatherData} /> : null}
    </Container>
  );
}

export default App;
