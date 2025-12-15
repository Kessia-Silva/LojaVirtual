package br.com.une.lojavirtual.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.une.lojavirtual.backend.dto.ItemCarrinhoDTO;
import br.com.une.lojavirtual.backend.model.Carrinho;
import br.com.une.lojavirtual.backend.service.CarrinhoService;

@RestController
@RequestMapping("/api/carrinho")
@CrossOrigin(origins = "*")
public class CarrinhoController {

    @Autowired
    private CarrinhoService service;

    // GET: Pega o carrinho do usuário (para exibir na tela)
    // Ex: http://localhost:8080/api/carrinho/1 (Onde 1 é o ID do Usuario)
    @GetMapping("/{usuarioId}")
    public ResponseEntity<Carrinho> buscarCarrinho(@PathVariable Long usuarioId) {
        return ResponseEntity.ok(service.buscarCarrinhoPorUsuario(usuarioId));
    }

    // POST: Adiciona item
    // Ex: http://localhost:8080/api/carrinho/1/adicionar
    // Body: { "produtoId": 2, "quantidade": 1 }
    @PostMapping("/{usuarioId}/adicionar")
    public ResponseEntity<Carrinho> adicionarItem(@PathVariable Long usuarioId, @RequestBody ItemCarrinhoDTO dto) {
        return ResponseEntity.ok(service.adicionarItem(usuarioId, dto));
    }
    
    // DELETE: Remove item
    // Ex: http://localhost:8080/api/carrinho/1/remover/2 (Remove o produto 2 do carrinho do user 1)
    @DeleteMapping("/{usuarioId}/remover/{produtoId}")
    public ResponseEntity<Carrinho> removerItem(@PathVariable Long usuarioId, @PathVariable Long produtoId) {
        return ResponseEntity.ok(service.removerItem(usuarioId, produtoId));
    }

    @DeleteMapping("/{usuarioId}/limpar")
    public ResponseEntity<Void> limparCarrinho(@PathVariable Long usuarioId) {
        service.limparCarrinho(usuarioId);
        return ResponseEntity.noContent().build();
    }
}