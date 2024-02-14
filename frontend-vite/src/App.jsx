import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home';
import CompanyForm2 from './views/CompanyForm2';
import CompanyDetails from './views/CompanyDetails';
import Layout from './components/molecules/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<CompanyForm2 />} />
          <Route path="/details" element={<CompanyDetails />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;