import TextButton from './components/TextButton';
import IconButton from './components/IconButton';
import Countdown from './components/Countdown';
import City from './components/City';

const App = (): JSX.Element => {
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

      <TextButton title={'Начать игру'} onClick={() => {}} />
    </section>
  );

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
          placeholder="Напишите любой город, например: Где вы живете?"
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
        />

        <IconButton iconName={'send-icon'} onClick={() => {}} />
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
        <City cityName={'Гатчина'} direction="rtl" />
        <City cityName={'Александров'} direction="ltr" />
        <City cityName={'Гатчина'} direction="rtl" />
        <City cityName={'Александров'} direction="ltr" />
        <City cityName={'Гатчина'} direction="rtl" />
        <City cityName={'Александров'} direction="ltr" />
      </div>

      <div className="py-4 w-full bg-transparent text-sm text-center text-gray-400">
        Всего перечислено городов: 2
      </div>

      <footer className="w-full px-6 relative">
        <input
          type="text"
          placeholder="Знаете город на букву “В”?"
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
        />

        <IconButton iconName={'send-icon'} disabled={true} onClick={() => {}} />
      </footer>
    </section>
  );

  const fail = (
    <section className="max-w-xl w-full py-10 flex flex-col justify-center items-center gap-8 bg-white rounded-2xl shadow text-xl text-center">
      <header>
        <p>К сожалению твое время вышло!</p>
        <p>Твой противник победил!</p>
      </header>

      <p className="text-3xl text-red-600 font-semibold">00:00</p>

      <div>
        <p>Всего было перечислено городов: 31</p>
        <p>Очень не плохой результат!</p>
      </div>

      <footer className="flex flex-col justify-center items-center gap-4">
        <p>Последний город названный победителем</p>
        <p className="text-2xl font-semibold">Москва</p>
      </footer>

      <TextButton title={'Начать новую игру'} onClick={() => {}} />
    </section>
  );

  const win = (
    <section className="max-w-xl w-full py-10 flex flex-col justify-center items-center gap-8 bg-white rounded-2xl shadow text-xl text-center">
      <header>
        <p>Поздравляем тебя с победой!</p>
        <p>Твой противник не вспомнил нужный город!</p>
      </header>

      <p className="text-3xl text-green-600 font-semibold">00:00</p>

      <div>
        <p>Всего было перечислено городов: 31</p>
        <p>Очень не плохой результат!</p>
      </div>

      <footer className="flex flex-col justify-center items-center gap-4">
        <p>Последний город названный победителем</p>
        <p className="text-2xl font-semibold">Москва</p>
      </footer>

      <TextButton title={'Начать новую игру'} onClick={() => {}} />
    </section>
  );

  return (
    <main className="w-screen h-screen p-4 flex justify-center items-center bg-gray-200">
      {listOfCities}
    </main>
  );
};

export default App;
