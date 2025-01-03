// MainRouter.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmployeeDetail from './components/EmployeeDetails';
import App from './App'; // Main HR Portal Page

function MainRouter() {
  return (
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<App />} />
      {/* Employee details page route */}
      <Route path="/employee-details/:psNumber" element={<EmployeeDetail />} />
    </Routes>
  );
}

export default MainRouter;
