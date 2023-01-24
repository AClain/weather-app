import { FC } from 'react';
import { WeatherData } from 'index.d';
import Flex from 'components/atoms/Flex';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';

import './weathercard.css';

interface Props {
  weatherData: WeatherData;
}

const WeatherCard: FC<Props> = ({ weatherData }) => {
  return (
    <Flex justify="around" className="weather_card">
      <img src={`/${weatherData.weather[0].icon}.gif`} />
      <Flex direction="column">
        <Title>{weatherData.name}</Title>
        <Text size={24} bold>
          {Math.ceil(weatherData.main.temp)}C°
        </Text>

        <Flex align="start">
          <Title order="h6">Min</Title>
          <Text as="span" size={24} bold>
            {Math.ceil(weatherData.main.temp_min)}C°
          </Text>
        </Flex>

        <Flex align="start">
          <Title order="h6">Max</Title>
          <Text as="span" size={24} bold>
            {Math.ceil(weatherData.main.temp_max)}C°
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WeatherCard;
