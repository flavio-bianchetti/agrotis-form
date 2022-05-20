import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FunctionalForm from './pages/FunctionalForm';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <FunctionalForm /> } />
    </Routes>
  );
}

export default App;
