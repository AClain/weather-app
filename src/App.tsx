import Container from 'components/atoms/Container';
import Flex from 'components/atoms/Flex';
import Title from 'components/atoms/Title';
import Divider from 'components/atoms/Divider';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Button from 'components/atoms/Button';
import { IconArrowRight } from '@tabler/icons';
import { WeatherData } from './index.d';

import './App.css';

function App() {
  const [weatherDate, setWeatherData] = useState<WeatherData>({});
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch('')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const onChange = (_e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(_e.target.value);
  };

  const onSubmit = (_e: FormEvent<HTMLFormElement>) => {
    _e.preventDefault();

    if (inputValue !== '') {
      setInputValue('');
    }
  };

  return (
    <Container>
      <Flex as="form" align="center" styles={{ marginBottom: '15px' }} onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={inputValue}
          id="new_todo_input"
          type="text"
          placeholder="Add something to do ..."
        />
        <Button type="submit" label="Add" rightIcon={<IconArrowRight size={18} />} />
      </Flex>
    </Container>
  );
}

export default App;
