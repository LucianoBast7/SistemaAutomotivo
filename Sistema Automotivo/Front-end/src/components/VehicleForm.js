import React, { useState } from "react";
import api from "../services/api";

function VehicleForm() {
  const [formData, setFormData] = useState({
    modelo: "",
    marca: "",
    ano: "",
    cor: "",
    preco: "",
    quilometragem: "",
    status: "Disponível",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/veiculos", formData); // Certifique-se de que a rota está correta
      alert("Veículo cadastrado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar veículo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="modelo"
        placeholder="Modelo"
        value={formData.modelo}
        onChange={handleChange}
      />
      <input
        type="text"
        name="marca"
        placeholder="Marca"
        value={formData.marca}
        onChange={handleChange}
      />
      <input
        type="number"
        name="ano"
        placeholder="Ano"
        value={formData.ano}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cor"
        placeholder="Cor"
        value={formData.cor}
        onChange={handleChange}
      />
      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={formData.preco}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quilometragem"
        placeholder="Quilometragem"
        value={formData.quilometragem}
        onChange={handleChange}
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="Disponível">Disponível</option>
        <option value="Indisponível">Indisponível</option>
      </select>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default VehicleForm;
