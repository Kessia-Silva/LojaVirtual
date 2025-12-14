package br.com.une.lojavirtual.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

import br.com.une.lojavirtual.backend.model.ItemPedido;
import br.com.une.lojavirtual.backend.model.Produto;

@Repository
public interface ItemPedidoRepository extends JpaRepository<ItemPedido, Long> {

    // QUERY: Retorna os produtos que mais apareceram nos pedidos
    @Query("SELECT i.produto FROM ItemPedido i GROUP BY i.produto ORDER BY SUM(i.qtdComprada) DESC")
    List<Produto> findTopSellingProducts(Pageable pageable);
}