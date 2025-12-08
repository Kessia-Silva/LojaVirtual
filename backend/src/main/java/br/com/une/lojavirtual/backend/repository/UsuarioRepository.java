package br.com.une.lojavirtual.backend.repository;

import br.com.une.lojavirtual.backend.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    // Método mágico para buscar pelo email (usaremos no login)
    Optional<Usuario> findByEmail(String email);
    
    // Verifica se o email já existe antes de cadastrar
    boolean existsByEmail(String email);
}