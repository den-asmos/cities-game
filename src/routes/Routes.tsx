import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import FinishPage from '../pages/FinishPage';
import GamePage from '../pages/GamePage';
import WelcomePage from '../pages/WelcomePage';
import NotFoundPage from '../pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WelcomePage />,
      },
      {
        path: 'game',
        element: <GamePage />,
      },
      {
        path: 'finish',
        element: <FinishPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
