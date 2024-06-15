type CityProps = {
  cityName: string;
  direction: 'ltr' | 'rtl';
};

const City = ({ cityName, direction }: CityProps): JSX.Element => {
  const city = (
    <div dir={direction} className="w-full flex items-start">
      <div
        className={`py-2 px-5 ${direction === 'ltr' ? 'bg-violet-50 text-gray-700' : 'bg-violet-500 text-white'} rounded-e-xl rounded-ss-xl `}
      >
        {cityName}
      </div>
    </div>
  );

  return city;
};

export default City;
