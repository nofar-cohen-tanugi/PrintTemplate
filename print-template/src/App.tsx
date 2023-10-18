import { HomePage } from './component/home/HomePage';
import { Route, Routes } from 'react-router';
import '../public/style/index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<HomePage />} />

        {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}

export default App;
