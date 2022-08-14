import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header.js'
import Home from './components/home.js'
import Details from './components/details';

import {Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
