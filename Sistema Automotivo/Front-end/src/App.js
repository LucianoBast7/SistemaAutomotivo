import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VehiclePage from "./pages/VehiclePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/veiculos" element={<VehiclePage />} />
      </Routes>
    </Router>
  );
};

export default App;
