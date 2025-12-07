package br.com.une.lojavirtual.backend.repository;

import br.com.une.lojavirtual.backend.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    
    // O Spring cria o SQL automaticamente só pelo nome do método!
    
    // Buscar produtos contendo um texto no nome (ignorando maiúscula/minúscula)
    List<Produto> findByNomeContainingIgnoreCase(String nome);
    
    // Buscar por categoria (pro filtro da loja)
    List<Produto> findByCategoria(String categoria);
}
