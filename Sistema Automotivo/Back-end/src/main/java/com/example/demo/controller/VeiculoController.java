package com.example.demo.controller;

import com.example.demo.model.Veiculo;
import com.example.demo.service.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3006") // Para permitir a comunicação com o frontend
@RestController
@RequestMapping("/veiculos")
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    @GetMapping
    public List<Veiculo> listarTodos() {
        return veiculoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Veiculo buscarPorId(@PathVariable Long id) {
        return veiculoService.buscarPorId(id);
    }

    @PostMapping
    public Veiculo adicionarVeiculo(@RequestBody Veiculo veiculo) {
        System.out.println("Dados recebidos no POST: " + veiculo); // Log para depuração
        return veiculoService.adicionarVeiculo(veiculo);
    }


    @PutMapping("/{id}")
    public Veiculo atualizarVeiculo(@PathVariable Long id, @RequestBody Veiculo veiculo) {
        return veiculoService.atualizarVeiculo(id, veiculo);
    }

    @DeleteMapping("/{id}")
    public void deletarVeiculo(@PathVariable Long id) {
        veiculoService.deletarVeiculo(id);
    }

    @GetMapping("/filtros")
    public List<Veiculo> filtrarVeiculos(
        @RequestParam(required = false) String marca,
        @RequestParam(required = false) String modelo,
        @RequestParam(required = false) Integer ano,
        @RequestParam(required = false) String status
    )   {
        return veiculoService.filtrar(marca, modelo, ano, status);
    }



}

