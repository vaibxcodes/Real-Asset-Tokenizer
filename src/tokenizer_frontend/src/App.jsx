import { useState } from 'react';
import { tokenizer_backend } from 'declarations/tokenizer_backend';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Feature from './component/Feature';
import Dashboard from './component/Dashboard'
import Marketplace from './component/Marketplace';
import Login from './component/Login'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/feature" element={<Feature/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/marketplace" element={<Marketplace/>} />
           <Route path="/login" element={ <Login/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
