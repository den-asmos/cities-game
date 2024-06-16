import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';
import { useNavigate } from 'react-router';

type CountdownProps = {
  heading: string;
  duration?: number;
  turn: 'you' | 'opponent';
  citiesCount: number;
  lastCity: string;
};

const Countdown = ({
  heading,
  duration = 10,
  turn,
  citiesCount,
  lastCity,
}: CountdownProps): JSX.Element => {
  const [secondsLeft, setSecondsLeft] = useState<number>(duration);
  const navigate = useNavigate();

  useEffect(() => {
    if (secondsLeft > 0) {
      const interval = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      navigate('/finish', { state: { turn, citiesCount, lastCity } });
    }
  }, [secondsLeft, duration, turn, citiesCount, lastCity, navigate]);

  const width = `${((secondsLeft / duration) * 100).toFixed(0)}%`;

  const countdown = (
    <>
      <header className="w-full px-6 flex justify-between items-center">
        <p>{heading}</p>
        <p className="text-xl text-black font-semibold">
          {formatTime(secondsLeft)}
        </p>
      </header>

      <div className="w-full h-1 flex bg-gray-200">
        <div
          className="h-full bg-violet-300 transition-all duration-1000 ease-linear"
          style={{ width: width }}
        ></div>
      </div>
    </>
  );

  return countdown;
};

export default Countdown;
