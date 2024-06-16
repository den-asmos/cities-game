import TextButton from '../components/TextButton';

const FinishPage = (): JSX.Element => {
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

  return win;
};

export default FinishPage;
