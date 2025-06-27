import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Auth } from './pages/Auth/auth';


function App() {

  return (
    <Routes>
      <Route path='/auth' element={<Auth/> }/>
    </Routes>
  );
}

export default App;
