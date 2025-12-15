package br.com.une.lojavirtual.backend.service;

import br.com.une.lojavirtual.backend.model.GeneroMusical;
import br.com.une.lojavirtual.backend.repository.GeneroRepository;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GeneroService {

    @Autowired
    private GeneroRepository repository;

    @Autowired
    private ProdutoRepository produtoRepository;

    // 1. Listar Todos
    public List<GeneroMusical> listarTodos() {
        return repository.findAll();
    }

    // 2. Atualizar
    public GeneroMusical atualizar(Long id, GeneroMusical generoAtualizado) {
        GeneroMusical generoExistente = repository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Gênero não encontrado."));
        
        generoExistente.setNome(generoAtualizado.getNome());
        return repository.save(generoExistente);
    }

    // 3. Deletar 
    public void deletar(Long id) {
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Gênero não encontrado.");
        }

        // Regra: Só deleta se NÃO tiver produto ligado
        if (produtoRepository.existsByGeneroMusicalId(id)) {
            throw new IllegalArgumentException("Não é possível deletar este gênero pois existem produtos vinculados a ele.");
        }

        repository.deleteById(id);
    }
    
    // Extra: Buscar por ID (pode ser útil)
    public GeneroMusical buscarPorId(Long id) {
        return repository.findById(id)
             .orElseThrow(() -> new IllegalArgumentException("Gênero não encontrado."));
    }
}