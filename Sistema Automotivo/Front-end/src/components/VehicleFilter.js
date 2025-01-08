import React, { useState } from "react";
import api from "../services/api";

function VehicleList() {
  const [filters, setFilters] = useState({ marca: "", modelo: "", ano: "", status: "" });
  const [vehicles, setVehicles] = useState([]);

  const handleInputChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const fetchFilteredVehicles = async () => {
    const response = await api.get("/veiculos/filtros", { params: filters });
    setVehicles(response.data);
  };

  return (
    <div>
      <h1>Filtrar Veículos</h1>
      <div>
        <input name="marca" placeholder="Marca" onChange={handleInputChange} />
        <input name="modelo" placeholder="Modelo" onChange={handleInputChange} />
        <input name="ano" placeholder="Ano" type="number" onChange={handleInputChange} />
        <input name="status" placeholder="Status" onChange={handleInputChange} />
        <button onClick={fetchFilteredVehicles}>Filtrar</button>
      </div>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>
            {vehicle.marca} - {vehicle.modelo} ({vehicle.ano})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleList;
