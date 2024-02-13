import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import CompanyForm from './views/CompanyForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CompanyForm />} />
      </Routes>
    </div>
  );
}

export default App;