const App = (): JSX.Element => {
  const image: string = new URL('./assets/send-icon.svg', import.meta.url).href;

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

      <button className="py-2 px-4 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out">
        Начать игру
      </button>
    </section>
  );

  const firstCity = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <header className="w-full px-6 flex justify-between items-center">
        <p>Сейчас ваша очередь</p>
        <p className="text-xl text-black font-semibold">1:59</p>
      </header>

      <div className="w-full h-1 flex bg-gray-200">
        <div className="w-3/4 bg-violet-300"></div>
      </div>

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

        <button className="p-3 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out absolute right-8 top-1/2 -translate-y-1/2">
          <img src={image} alt="send-icon" className="m-0 w-4 h-4" />
        </button>
      </footer>
    </section>
  );

  const opponentWaiting = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <header className="w-full px-6 flex justify-between items-center">
        <p>Сейчас очередь соперника</p>
        <p className="text-xl text-black font-semibold">1:59</p>
      </header>

      <div className="w-full h-1 flex bg-gray-200">
        <div className="w-3/4 bg-violet-300"></div>
      </div>

      <div className="w-full max-h-80 min-h-80 py-10 px-6 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        <div dir="rtl" className="w-full flex items-end">
          <div className="py-2 px-5 bg-violet-500 rounded-e-xl rounded-ss-xl text-white text-pretty">
            Санкт-Петербург
          </div>
        </div>
      </div>

      <footer className="w-full px-6 relative">
        <input
          type="text"
          placeholder="Ожидаем ответа соперника..."
          className="w-full p-3 pr-14 bg-gray-100 rounded-md placeholder:text-gray-700 focus:outline-none disabled:placeholder:text-gray-400"
          disabled
        />

        <button
          disabled
          className="p-3 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out absolute right-8 top-1/2 -translate-y-1/2"
        >
          <img src={image} alt="send-icon" className="m-0 w-4 h-4" />
        </button>
      </footer>
    </section>
  );

  const listOfCities = (
    <section className="max-w-xl w-full pb-6 flex flex-col justify-center items-center bg-white rounded-2xl shadow prose prose-base">
      <header className="w-full px-6 flex justify-between items-center">
        <p>Сейчас ваша очередь</p>
        <p className="text-xl text-black font-semibold">1:59</p>
      </header>

      <div className="w-full h-1 flex bg-gray-200">
        <div className="w-3/4 bg-violet-300"></div>
      </div>

      <div className="w-full max-h-80 min-h-80 py-10 px-6 flex flex-col justify-start items-start gap-2 overflow-y-auto">
        <div dir="rtl" className="w-full flex items-end">
          <div className="py-2 px-5 bg-violet-500 rounded-e-xl rounded-ss-xl text-white text-pretty">
            Гатчина
          </div>
        </div>

        <div dir="ltr" className="w-full flex items-start">
          <div className="py-2 px-5 bg-violet-50 rounded-e-xl rounded-ss-xl text-gray-700 text-pretty">
            Александров
          </div>
        </div>
        <div dir="rtl" className="w-full flex items-end">
          <div className="py-2 px-5 bg-violet-500 rounded-e-xl rounded-ss-xl text-white">
            Гатчина
          </div>
        </div>

        <div dir="ltr" className="w-full flex items-start">
          <div className="py-2 px-5 bg-violet-50 rounded-e-xl rounded-ss-xl text-gray-700">
            Александров
          </div>
        </div>
        <div dir="rtl" className="w-full flex items-end">
          <div className="py-2 px-5 bg-violet-500 rounded-e-xl rounded-ss-xl text-white">
            Гатчина
          </div>
        </div>

        <div dir="ltr" className="w-full flex items-start">
          <div className="py-2 px-5 bg-violet-50 rounded-e-xl rounded-ss-xl text-gray-700">
            Александров
          </div>
        </div>
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

        <button className="p-3 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out absolute right-8 top-1/2 -translate-y-1/2">
          <img src={image} alt="send-icon" className="m-0 w-4 h-4" />
        </button>
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

      <button className="py-2 px-4 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out">
        Начать новую игру
      </button>
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

      <button className="py-2 px-4 rounded bg-violet-600 text-white text-base shadow-md enabled:hover:opacity-85 enabled:active:scale-110 disabled:bg-gray-400 duration-200 ease-in-out">
        Начать новую игру
      </button>
    </section>
  );

  return (
    <main className="w-screen h-screen p-4 flex justify-center items-center bg-gray-200">
      {win}
    </main>
  );
};

export default App;
