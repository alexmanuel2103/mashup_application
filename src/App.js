import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Series from './components/tidbiscomponents/Series'
import './App.css';

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<Series/>}/>
      </Routes>
    </Router>
  );
}
export default App;