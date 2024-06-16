import { useLocation, useNavigate } from 'react-router';
import TextButton from '../components/TextButton';

type LocationState = {
  turn: 'you' | 'opponent';
  citiesCount: number;
  lastCity: string;
};

const FinishPage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  const handleStartNewGame = (): void => {
    navigate('/');
  };

  const fail = (
    <header>
      <p>К сожалению твое время вышло!</p>
      <p>Твой противник победил!</p>
    </header>
  );

  const win = (
    <header>
      <p>Поздравляем тебя с победой!</p>
      <p>Твой противник не вспомнил нужный город!</p>
    </header>
  );

  const className = `text-3xl ${state.turn === 'opponent' ? 'text-green-600' : 'text-red-600'} font-semibold`;

  const content = (
    <section className="max-w-xl w-full py-10 flex flex-col justify-center items-center gap-8 bg-white rounded-2xl shadow text-xl text-center">
      {state.turn === 'opponent' ? win : fail}

      <p className={className}>00:00</p>

      <div>
        <p>Всего было перечислено городов: {state.citiesCount}</p>
        <p>Очень не плохой результат!</p>
      </div>

      <footer className="flex flex-col justify-center items-center gap-4">
        <p>Последний город названный победителем</p>
        <p className="text-2xl font-semibold">{state.lastCity}</p>
      </footer>

      <TextButton title={'Начать новую игру'} onClick={handleStartNewGame} />
    </section>
  );

  return content;
};

export default FinishPage;
