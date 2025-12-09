package br.com.une.lojavirtual.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.une.lojavirtual.backend.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long>{
    
    //Metodi de busca de categoria por nome
    Optional<Categoria> findByNome(String nome);
}
