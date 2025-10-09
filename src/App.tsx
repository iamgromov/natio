import { Routes, Route } from 'react-router-dom';

import { Details } from './pages/Details';
import { Home } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Header } from './shared/components/Header';
import { Main } from './shared/components/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
