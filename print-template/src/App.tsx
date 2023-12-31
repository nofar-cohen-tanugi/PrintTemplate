import { HomePage } from './component/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import '../public/style/index.scss';
import './utils/i18n';
import { SaturdayStyle } from './component/saturday/SaturdayStyle';
import { Saturday } from './component/saturday/Saturday';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/saturday' element={<Saturday />} />
        <Route index path='/saturday-style' element={<SaturdayStyle />} />
      </Routes>
    </>
  );
}

export default App;
