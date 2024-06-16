import { Outlet } from 'react-router';

const App = (): JSX.Element => {
  return (
    <main className="w-screen h-screen p-4 flex justify-center items-center bg-gray-200">
      <Outlet />
    </main>
  );
};

export default App;
