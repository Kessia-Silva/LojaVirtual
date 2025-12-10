package br.com.une.lojavirtual.backend.controller;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produtos") // URL base: http://localhost:8080/api/produtos
@CrossOrigin(origins = "*") // Libera acesso para o Angular (qualquer porta)
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping
    public List<Produto> listar() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        Optional<Produto> produto = service.buscarPorId(id);
        // Se achar, retorna 200 OK, se não 404 Not Found
        return produto.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // URL: http://localhost:8080/api/produtos/buscar?nome=Pink
    @GetMapping("/buscar")
    public List<Produto> buscarPorNome(@RequestParam String nome) {
        return service.buscarPorNome(nome);
    }

    // URL: http://localhost:8080/api/produtos/categoria/Vinil
    @GetMapping("/categoria/{nomeGenero}")
    public List<Produto> buscarPorCategoria(@PathVariable String nomeGenero) {
        return service.buscarPorGenero(nomeGenero);
    }

    @PostMapping
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        Produto novoProduto = service.salvar(produto);
        // Retorna 201 Created
        return ResponseEntity.status(HttpStatus.CREATED).body(novoProduto);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}