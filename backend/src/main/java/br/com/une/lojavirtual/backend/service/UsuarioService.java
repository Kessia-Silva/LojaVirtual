package br.com.une.lojavirtual.backend.service;

import java.util.Optional; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.une.lojavirtual.backend.model.Carrinho;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.CarrinhoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Transactional // Garante que salva o Usuario E o Carrinho juntos (ou nenhum)
    public Usuario cadastrar(Usuario usuario) {
        if (repository.existsByEmail(usuario.getEmail())) { // Cadastrar Usuário com validação de email duplicado
            throw new IllegalArgumentException("Este email já está cadastrado.");
        }
        
        // 1. Salva o Usuário primeiro para gerar o ID
        Usuario usuarioSalvo = repository.save(usuario);

        // 2. Cria o Carrinho vinculado a este usuário
        Carrinho carrinho = new Carrinho();
        carrinho.setUsuario(usuarioSalvo);
        
        carrinhoRepository.save(carrinho); // Salva o carrinho vazio

        return usuarioSalvo;
    }

    // Login simples (retorna o usuário se der certo, ou erro)
    public Usuario login(String email, String senha) {
        Optional<Usuario> usuarioOpt = repository.findByEmail(email);

        // Se o usuário existe e a senha bate
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