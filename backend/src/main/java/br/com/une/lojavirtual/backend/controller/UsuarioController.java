package br.com.une.lojavirtual.backend.controller;

import br.com.une.lojavirtual.backend.dto.LoginDTO;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // Front pode acessar
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    // POST: http://localhost:8080/api/usuarios/cadastro
    @PostMapping("/cadastro")
    public ResponseEntity<Usuario> cadastrar(@Valid @RequestBody Usuario usuario) {
        Usuario novoUsuario = service.cadastrar(usuario);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoUsuario);
    }

    // POST: http://localhost:8080/api/usuarios/login
    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody LoginDTO loginData) {
        Usuario usuarioLogado = service.login(loginData.getEmail(), loginData.getSenha());
        return ResponseEntity.ok(usuarioLogado);
    }

    // PUT: http://localhost:8080/api/usuarios/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizar(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario usuarioAtualizado = service.atualizar(id, usuario);
        return ResponseEntity.ok(usuarioAtualizado);
    }
}