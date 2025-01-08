import React, { useEffect, useState } from "react";
import api from "../services/api";

const VehicleList = () => {
  const [veiculos, setVeiculos] = useState([]);

  // Carrega os veículos da API
  useEffect(() => {
    fetchVeiculos();
  }, []);

  const fetchVeiculos = () => {
    api
      .get("/veiculos")
      .then((response) => setVeiculos(response.data))
      .catch((error) => console.error(error));
  };

  // Função para deletar um veículo
  const handleDelete = (id) => {
    if (window.confirm("Tem certeza que deseja deletar este veículo?")) {
      api
        .delete(`/veiculos/${id}`)
        .then(() => {
          alert("Veículo deletado com sucesso!");
          fetchVeiculos(); // Atualiza a lista após remoção
        })
        .catch((error) => console.error(error));
    }
  };

  // Função para iniciar a atualização de um veículo
  const handleUpdate = (veiculo) => {
    const updatedPreco = prompt(
      `Digite o novo preço para o veículo ${veiculo.modelo} (${veiculo.id}):`,
      veiculo.preco
    );
    if (updatedPreco) {
      api
        .put(`/veiculos/${veiculo.id}`, { ...veiculo, preco: updatedPreco })
        .then(() => {
          alert("Veículo atualizado com sucesso!");
          fetchVeiculos(); // Atualiza a lista após a edição
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <h1>Lista de Veículos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Preço</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculo.id}>
              <td>{veiculo.id}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.cor}</td>
              <td>{veiculo.preco}</td>
              <td>{veiculo.status}</td>
              <td>
                <button onClick={() => handleUpdate(veiculo)}>Atualizar</button>
                <button onClick={() => handleDelete(veiculo.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleList;
