package br.com.une.lojavirtual.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.une.lojavirtual.backend.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
    // O Spring cria o SQL automaticamente só pelo nome do método!
    
    // Buscar produtos contendo um texto no nome (ignorando maiúscula/minúscula)
    List<Produto> findByNomeContainingIgnoreCase(String nome);
    
    // Buscar pelo nome do gênero (navegação entre tabelas)
    List<Produto> findByGeneroMusicalNomeIgnoreCase(String nomeGenero);
}
