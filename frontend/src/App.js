import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import CompanyForm2 from './views/CompanyForm2';
import CompanyDetails from './views/CompanyDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<CompanyForm2 />} />
        <Route path="/details" element={<CompanyDetails />} />

      </Routes>
    </div>
  );
}

export default App;