import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import HomePage from './component/HomePage';
import Project from './component/Project';
import Work from './component/Work';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/photo' element={<Project />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
