import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Sistema Automotivo</h1>
      <p>Bem-vindo ao Sistema de Gerenciamento de Veículos.</p>
      <Link to="/veiculos">Ver Lista de Veículos</Link>
    </div>
  );
};

export default HomePage;
