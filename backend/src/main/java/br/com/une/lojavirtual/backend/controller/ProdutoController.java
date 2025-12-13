package br.com.une.lojavirtual.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.service.ProdutoService;

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
        return service.buscarPorCategoria(nomeGenero);
    }

    // URL: http://localhost:8080/api/produtos/mais-vendidos
    @GetMapping("/mais-vendidos")
    public List<Produto> listarMaisVendidos() {
        return service.buscarMaisVendidos();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody Produto produto) {
        return ResponseEntity.ok(service.atualizar(id, produto));
    }

    @PostMapping
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        System.out.println(produto);
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