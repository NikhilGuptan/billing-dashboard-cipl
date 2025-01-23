import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Budgets from './pages/Budgets';
import Capacity from './pages/Capacity';
// import BillingEstimates from './pages/BillingEstimates';
// import DataStorage from './pages/DataStorage';

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/capacity" element={<Capacity />} />
          {/* <Route path="/billing-estimates" element={<BillingEstimates />} />
          <Route path="/data-storage" element={<DataStorage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
