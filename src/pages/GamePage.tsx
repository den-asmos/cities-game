import { useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import { validateCity } from '../utils/validateCity';
import IconButton from '../components/IconButton';
import Countdown from '../components/Countdown';
import City from '../components/City';
import { getLastLetter } from '../utils/getLastLetter';

const GamePage = (): JSX.Element => {
  const [cityValue, setCityValue] = useState<string>('');
  const [cities, setCities] = useSessionStorage<string[]>('cities', []);
  const [turn, setTurn] = useSessionStorage<'you' | 'opponent'>('turn', 'you');

  const handleAddCity = (): void => {
    if (validateCity(cityValue, cities)) {
      setCityValue('');
      setCities([...cities, cityValue]);
      setTurn('opponent');
    }
  };

  const firstCity = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <Countdown heading={'Сейчас ваша очередь'} />

      <div className="w-full min-h-80 px-6 flex justify-center items-center">
        <p className="text-sm text-gray-400">
          Первый участник вспоминает города...
        </p>
      </div>

      <footer className="w-full px-6 relative">
        <input
          type="text"
          value={cityValue}
          onChange={({ target }) => setCityValue(target.value)}
          placeholder="Напишите любой город, например: Где вы живете?"
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
        />

        <IconButton iconName={'send-icon'} onClick={handleAddCity} />
      </footer>
    </section>
  );

  const opponentWaiting = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <Countdown heading={'Сейчас очередь соперника'} />

      <div className="w-full max-h-80 min-h-80 py-10 px-6 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        <City cityName={'Санкт-Петербург'} direction="rtl" />
      </div>

      <footer className="w-full px-6 relative">
        <input
          type="text"
          placeholder="Ожидаем ответа соперника..."
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
          disabled
        />

        <IconButton iconName={'send-icon'} disabled={true} onClick={() => {}} />
      </footer>
    </section>
  );

  const listOfCities = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <Countdown heading={'Сейчас ваша очередь'} />

      <div className="w-full max-h-80 min-h-80 py-10 px-6 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        {cities.map((city, index) => (
          <City
            cityName={city}
            direction={`${index % 2 === 0 ? 'rtl' : 'ltr'}`}
            key={index}
          />
        ))}
      </div>

      <div className="py-4 w-full bg-transparent text-sm text-center text-gray-400">
        Всего перечислено городов: {cities.length}
      </div>

      <footer className="w-full px-6 relative">
        <input
          type="text"
          placeholder={`Знаете город на букву “${getLastLetter(cities)}”?`}
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
        />

        <IconButton
          iconName={'send-icon'}
          disabled={turn === 'opponent'}
          onClick={() => {}}
        />
      </footer>
    </section>
  );

  return listOfCities;
};

export default GamePage;
