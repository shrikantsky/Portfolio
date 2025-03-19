
import './App.css';


import{
  BrowserRouter,
  Routes,
  Route,
  Router
}from 'react-router-dom';

import HomePage from './component/HomePage';
import Project from './component/Project';
import Work from './component/Work';
import Aboutme from './component/Aboutme';






function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>

      <Route path='/Project' element={<Project/>}></Route>

      <Route path='/work' element={<Work/>}/>

      <Route path ='/about' element={<Aboutme/>}/>

    </Routes>
    </BrowserRouter>

  
    
  );
}

export default App;
