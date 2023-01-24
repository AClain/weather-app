import { ChangeEvent, FC, FocusEvent, useState } from 'react';
import Flex from 'components/atoms/Flex';
import { City } from 'index';
import Text from 'components/atoms/Text';
import { IconX } from '@tabler/icons';

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

  const handleSearch = (search: string) => {
    setSearch(search);

    const regex = new RegExp('^(.){0,}' + search + '(.){0,}$', 'i');

    setMatchingCities(items.filter((city) => city.name.match(regex)).slice(0, 15));
  };

  const handleFocus = (_e: FocusEvent<HTMLInputElement>) => {
    handleSearch(_e.target.value);
  };

  const handleChange = (_e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(_e.target.value);
  };

  const handleClose = () => {
    setMatchingCities([]);
  };

  const handleSelect = (city: City) => {
    setSearch(city.name);
    onSelect(city);

    setMatchingCities([]);
  };

  return (
    <Flex styles={{ width: '100%', position: 'relative' }}>
      <input
        onFocus={handleFocus}
        onChange={handleChange}
        placeholder={placeholder}
        value={search}
        id="search_input"
      />
      <Flex gap={0} justify="start" direction="column" className="matching_cities">
        <IconX size={24} onClick={handleClose} className="icon_close" />

        {matchingCities.map((city) => (
          <div
            key={city.id}
            className="matching_city"
            onClick={() => {
              handleSelect(city);
            }}
          >
            <Text>
              {getHighlightedText(`${city.name} - ${city.state_name}, ${city.country_name}`, search)}
            </Text>
          </div>
        ))}
      </Flex>
    </Flex>
  );
};

export default SearchInput;
