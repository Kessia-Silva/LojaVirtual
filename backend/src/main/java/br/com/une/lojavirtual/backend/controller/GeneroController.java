package br.com.une.lojavirtual.backend.controller;

import br.com.une.lojavirtual.backend.model.GeneroMusical;
import br.com.une.lojavirtual.backend.service.GeneroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/generos")
@CrossOrigin(origins = "*")
public class GeneroController {

    @Autowired
    private GeneroService service;

    @GetMapping
    public List<GeneroMusical> listarTodos() {
        return service.listarTodos();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<GeneroMusical> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GeneroMusical> atualizar(@PathVariable Long id, @RequestBody GeneroMusical genero) {
        return ResponseEntity.ok(service.atualizar(id, genero));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}