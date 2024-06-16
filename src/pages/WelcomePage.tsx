import { useSessionStorage } from 'usehooks-ts';
import { useNavigate } from 'react-router';
import TextButton from '../components/TextButton';

const WelcomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const [, , removeCities] = useSessionStorage<string[]>('cities', []);
  const [, , removeTurn] = useSessionStorage<'you' | 'opponent'>('turn', 'you');

  const handleStartGame = (): void => {
    removeCities();
    removeTurn();
    navigate('game');
  };

  const welcome = (
    <section className="max-w-xl w-full py-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-sm">
      <header className="w-full px-6 border-b-2 border-gray-200">
        <h1 className="text-base text-center font-normal leading-normal">
          Игра в города на время
        </h1>
      </header>

      <div className="w-full px-6">
        <p>Цель: Назвать как можно больше реальных городов.</p>
        <ul>
          <li>Запрещается повторение городов.</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого
            бы пропускаем эту букву и игрок должен назвать город на букву
            стоящую перед ъ или ь знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
      </div>

      <TextButton title={'Начать игру'} onClick={handleStartGame} />
    </section>
  );

  return welcome;
};

export default WelcomePage;
