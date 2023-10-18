import { HomePage } from './component/home/HomePage';
import { Route, Routes } from 'react-router';
import '../public/style/index.scss';
import './utils/i18n';
import { Saturday } from './component/saturday/Saturday';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/saturday' element={<Saturday />} />
      </Routes>
    </>
  );
}

export default App;
