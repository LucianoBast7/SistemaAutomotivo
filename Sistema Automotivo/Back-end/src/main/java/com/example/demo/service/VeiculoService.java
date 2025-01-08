package com.example.demo.service;

import com.example.demo.model.Veiculo;
import com.example.demo.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    public List<Veiculo> listarTodos() {
        return veiculoRepository.findAll();
    }

    public Veiculo buscarPorId(Long id) {
        return veiculoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Veículo não encontrado!"));
    }

    public Veiculo adicionarVeiculo(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    public Veiculo atualizarVeiculo(Long id, Veiculo veiculoAtualizado) {
        Veiculo veiculo = buscarPorId(id);
        veiculo.setModelo(veiculoAtualizado.getModelo());
        veiculo.setMarca(veiculoAtualizado.getMarca());
        veiculo.setAno(veiculoAtualizado.getAno());
        veiculo.setCor(veiculoAtualizado.getCor());
        veiculo.setPreco(veiculoAtualizado.getPreco());
        veiculo.setQuilometragem(veiculoAtualizado.getQuilometragem());
        veiculo.setStatus(veiculoAtualizado.getStatus());
        return veiculoRepository.save(veiculo);
    }

    public void deletarVeiculo(Long id) {
        veiculoRepository.deleteById(id);
    }

    public List<Veiculo> filtrar(String marca, String modelo, Integer ano, String status) {
        return veiculoRepository.filtrar(marca, modelo, ano, status);
    }

}
