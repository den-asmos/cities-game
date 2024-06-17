import { SyntheticEvent, useState } from 'react';
import { useSessionStorage } from 'usehooks-ts';
import { validateCity } from '../utils/validateCity';
import { getLastLetter } from '../utils/getLastLetter';
import { getRandomAnswerTime } from '../utils/getRandomAnswerTime';
import { getRandomCity } from '../utils/getRandomCity';
import IconButton from '../components/IconButton';
import Countdown from '../components/Countdown';
import City from '../components/City';
import { useNavigate } from 'react-router';

const GamePage = (): JSX.Element => {
  const [cityValue, setCityValue] = useState<string>('');
  const [cities, setCities] = useSessionStorage<string[]>('cities', []);
  const [turn, setTurn] = useSessionStorage<'you' | 'opponent'>('turn', 'you');
  const navigate = useNavigate();

  const generateCity = (mentionedCities: string[], lastCity: string): void => {
    const answerTime = getRandomAnswerTime(10000, 121000);
    const city = getRandomCity(mentionedCities, lastCity);

    if (city) {
      setTimeout(() => {
        setCities((prev) => [...prev, city]);
        setTurn('you');
      }, answerTime);
    } else {
      setTimeout(() => {}, 120000);
    }
  };

  const handleAddCity = (event: SyntheticEvent): void => {
    event.preventDefault();

    const { isValid, error } = validateCity(cityValue, cities);

    if (isValid) {
      setCityValue('');
      setCities((prev) => [...prev, cityValue]);
      setTurn('opponent');

      generateCity([...cities, cityValue], cityValue);
    } else {
      alert(error);
    }
  };

  const handleFinishGame = (): void => {
    navigate('/finish', {
      state: {
        turn,
        citiesCount: cities.length,
        lastCity: cities.slice(-1)[0],
      },
    });
  };

  const firstCity = (
    <div className="w-full min-h-80 px-6 flex justify-center items-center">
      <p className="text-sm text-gray-400">
        Первый участник вспоминает города...
      </p>
    </div>
  );

  const listOfCities = (
    <>
      <div className="w-full max-h-80 min-h-80 py-10 px-6 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        {cities.map((city, index) => (
          <City
            key={city}
            cityName={city}
            direction={`${index % 2 === 0 ? 'rtl' : 'ltr'}`}
          />
        ))}
      </div>

      <div className="py-4 w-full bg-transparent text-sm text-center text-gray-400">
        Всего перечислено городов: {cities.length}
      </div>
    </>
  );

  const heading =
    turn === 'you' ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника';

  const placeholder = !cities.length
    ? 'Напишите любой город, например: Где вы живете?'
    : turn === 'you'
      ? `Знаете город на букву “${getLastLetter(cities.slice(-1)[0])}”?`
      : 'Ожидаем ответа соперника...';

  const content = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <Countdown
        heading={heading}
        turn={turn}
        handleFinishGame={handleFinishGame}
      />

      {!cities.length ? firstCity : listOfCities}

      <form onSubmit={handleAddCity} className="w-full px-6 relative">
        <input
          type="text"
          value={cityValue}
          onChange={({ target }) => setCityValue(target.value)}
          placeholder={placeholder}
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
        />

        <IconButton
          type={'submit'}
          iconName={'send-icon'}
          disabled={turn === 'opponent' || !cityValue}
        />
      </form>
    </section>
  );

  return content;
};

export default GamePage;
