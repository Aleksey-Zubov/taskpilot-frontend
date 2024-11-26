import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
