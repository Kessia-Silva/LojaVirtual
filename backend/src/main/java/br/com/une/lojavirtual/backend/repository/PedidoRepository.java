package br.com.une.lojavirtual.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.une.lojavirtual.backend.model.Pedido;
import java.util.List;


public interface PedidoRepository extends JpaRepository<Pedido, Long> {
    List<Pedido> findByUsuarioId(Long usuarioId);
}
