package br.com.une.lojavirtual.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.une.lojavirtual.backend.model.Carrinho;

@Repository
public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {
    // Busca o carrinho de um usuário específico
    Optional<Carrinho> findByUsuarioId(Long usuarioId);
}