import React, { useState, useEffect } from "react";
import api from "../services/api";
import VehicleForm from "../components/VehicleForm";
import VehicleList from "../components/VehicleList";

const VehiclePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [vehicleToEdit, setVehicleToEdit] = useState(null);

  // Busca a lista de veículos ao carregar a página
  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await api.get("/veiculos");
        setVehicles(response.data);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      }
    };
    fetchVehicles();
  }, []);

  // Atualiza a lista de veículos após cadastro/edição
  const handleSuccess = async () => {
    try {
      const response = await api.get("/veiculos");
      setVehicles(response.data);
      setVehicleToEdit(null); // Limpa o veículo selecionado para edição
    } catch (error) {
      console.error("Erro ao atualizar lista de veículos:", error);
    }
  };

  return (
    <div>
      <h1>Gerenciamento de Veículos</h1>
      
      {/* Formulário para cadastro e edição */}
      <VehicleForm vehicleToEdit={vehicleToEdit} onSuccess={handleSuccess} />
      
      {/* Tabela para exibição de veículos */}
      <h2>Lista de Veículos</h2>
      <VehicleList vehicles={vehicles} setVehicleToEdit={setVehicleToEdit} />
    </div>
  );
};

export default VehiclePage;

