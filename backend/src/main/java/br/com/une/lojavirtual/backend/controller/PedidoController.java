package br.com.une.lojavirtual.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.une.lojavirtual.backend.dto.PedidoDTO;
import br.com.une.lojavirtual.backend.model.Pedido;
import br.com.une.lojavirtual.backend.service.PedidoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(origins =  "*")
public class PedidoController {
    
    @Autowired
    private PedidoService service;

    // POST: Finalizar compra (Criar pedido)
    // URL: http://localhost:8080/api/pedidos
    // Body: { "usuarioId": 1, "itens": [ { "produtoId": 2, "quantidade": 1 } ] }
    @PostMapping
    public ResponseEntity<Pedido> criarPedido(@RequestBody PedidoDTO dto) {
        Pedido novoPedido = service.criarPedido(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPedido);
    }

    // GET: Listar pedidos de um usuário
    // URL: http://localhost:8080/api/pedidos/usuario/1
    @GetMapping("usuario/{id}")
    public ResponseEntity<List<Pedido>> listarPorUsuario(@PathVariable Long id)
    {
        return ResponseEntity.ok(service.listarPorUsuario(id));
    }
    
}
