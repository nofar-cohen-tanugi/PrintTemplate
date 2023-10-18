import { HomePage } from './component/home/HomePage';
import { Route, Routes } from 'react-router';
import '../public/style/index.scss';
import { Sabbath } from './component/shabbath/shabbath';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route index path='/sabbath' element={<Sabbath />} />
      </Routes>
    </>
  );
}

export default App;
