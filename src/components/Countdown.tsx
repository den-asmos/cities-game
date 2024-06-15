import { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

type CountdownProps = {
  heading: string;
  duration?: number;
};

const Countdown = ({
  heading,
  duration = 120,
}: CountdownProps): JSX.Element => {
  const [secondsLeft, setSecondsLeft] = useState<number>(duration);

  useEffect(() => {
    if (secondsLeft > 0) {
      const interval = setTimeout(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [secondsLeft, duration]);

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
