package br.com.une.lojavirtual.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;

@Service // Indica ao Spring que aqui tem Regra de Negócio
public class ProdutoService {

    @Autowired
    private ProdutoRepository repository;

    // Listar tudo
    public List<Produto> listarTodos() {
        return repository.findAll();
    }

    // Buscar por ID
    public Optional<Produto> buscarPorId(Long id) {
        return repository.findById(id);
    }

    // Buscar por parte do nome (Busca)
    public List<Produto> buscarPorNome(String nome) {
        return repository.findByNomeContainingIgnoreCase(nome);
    }

    // Buscar por categoria exata (Filtro)
    public List<Produto> buscarPorCategoria(String nomeGenero) {
        return repository.buscarPorNomeDoGenero(nomeGenero);
    }

    // Salvar ou Atualizar
    public Produto salvar(Produto produto) {
        // Validação simples (depois podemos melhorar)
        if (produto.getPreco() != null && produto.getPreco().doubleValue() < 0) {
            throw new IllegalArgumentException("O preço não pode ser negativo.");
        }
        return repository.save(produto);
    }

    // Deletar
    public void deletar(Long id) {
        repository.deleteById(id);
    }
}