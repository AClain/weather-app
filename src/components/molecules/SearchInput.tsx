import { ChangeEvent, FC, useState } from 'react';
import Flex from 'components/atoms/Flex';
import { City } from 'index';
import Text from 'components/atoms/Text';
import './searchinput.css';

interface Props {
  onSelect: (selection: City) => void;
  items: City[];

  placeholder?: string;
}

const SearchInput: FC<Props> = ({ onSelect, items, placeholder = 'Search ...' }) => {
  const [search, setSearch] = useState('');
  const [matchingCities, setMatchingCities] = useState<City[]>([]);

  const getHighlightedText = (text: string, highlight: string) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {' '}
        {parts.map((part, i) => (
          <span key={i} className={part.toLowerCase() === highlight.toLowerCase() ? 'hightlight' : ''}>
            {part}
          </span>
        ))}{' '}
      </span>
    );
  };

  const handleChange = (_e: ChangeEvent<HTMLInputElement>) => {
    setSearch(_e.target.value);

    const regex = new RegExp('^(.){0,}' + _e.target.value + '(.){0,}$', 'i');
    console.log(items.filter((city) => city.name.match(regex)).slice(0, 20));
    setMatchingCities(items.filter((city) => city.name.match(regex)).slice(0, 20));
  };

  const handleSelect = (city: City) => {
    setSearch(city.name);
    onSelect(city);

    setMatchingCities([]);
  };

  return (
    <Flex styles={{ width: '100%', position: 'relative' }}>
      <input onChange={handleChange} placeholder={placeholder} value={search} id="search_input" />
      <Flex gap={0} direction="column" className="matching_cities">
        {matchingCities.map((city) => (
          <div
            key={city.id}
            className="matching_city"
            onClick={() => {
              handleSelect(city);
            }}
          >
            <Text>{`${city.name} - ${city.state_name}, ${city.country_name}`}</Text>
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default SearchInput;
