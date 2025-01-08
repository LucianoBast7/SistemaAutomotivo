package com.example.demo.repository;

import com.example.demo.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

    @Query("SELECT v FROM Veiculo v WHERE " +
            "(:marca IS NULL OR v.marca = :marca) AND " +
            "(:modelo IS NULL OR v.modelo = :modelo) AND " +
            "(:ano IS NULL OR v.ano = :ano) AND " +
            "(:status IS NULL OR v.status = :status)")
    List<Veiculo> filtrar(
            @Param("marca") String marca,
            @Param("modelo") String modelo,
            @Param("ano") Integer ano,
            @Param("status") String status
    );
}
