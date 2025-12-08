package br.com.une.lojavirtual.backend.service;

import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    // 1. Cadastrar Usuário com validação de email duplicado
    public Usuario cadastrar(Usuario usuario) {
        if (repository.existsByEmail(usuario.getEmail())) {
            throw new IllegalArgumentException("Este email já está cadastrado.");
        }
        return repository.save(usuario);
    }

    // 2. Login simples (retorna o usuário se der certo, ou erro)
    public Usuario login(String email, String senha) {
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);

        // Se o usuário existe E a senha bate
        if (usuarioOpt.isPresent() && usuarioOpt.get().getSenha().equals(senha)) {
            return usuarioOpt.get();
        }
        
        throw new IllegalArgumentException("Email ou senha inválidos.");
    }
    
    // Buscar por ID (útil para o carrinho depois)
    public Usuario buscarPorId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado."));
    }
}