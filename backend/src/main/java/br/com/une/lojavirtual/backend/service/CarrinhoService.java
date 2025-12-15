package br.com.une.lojavirtual.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.une.lojavirtual.backend.dto.ItemCarrinhoDTO;
import br.com.une.lojavirtual.backend.model.Carrinho;
import br.com.une.lojavirtual.backend.model.ItemCarrinho;
import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.repository.CarrinhoRepository;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Método para buscar o carrinho de um usuário pelo ID do usuário
    public Carrinho buscarCarrinhoPorUsuario(Long usuarioId) {
        return carrinhoRepository.findByUsuarioId(usuarioId)
                .orElseThrow(() -> new IllegalArgumentException("Carrinho não encontrado para este usuário."));
    }

    @Transactional
    public Carrinho adicionarItem(Long usuarioId, ItemCarrinhoDTO dto) {
        // 1. Busca o Carrinho e o Produto
        Carrinho carrinho = buscarCarrinhoPorUsuario(usuarioId);
        Produto produto = produtoRepository.findById(dto.getProdutoId())
                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado."));

        // 2. Verifica se tem estoque suficiente
        if (produto.getEstoque() < dto.getQuantidade()) {
            throw new IllegalArgumentException("Estoque insuficiente para o produto: " + produto.getNome());
        }

        // 3. Verifica se o produto JÁ existe no carrinho para somar a quantidade
        Optional<ItemCarrinho> itemExistente = carrinho.getItens().stream()
                .filter(item -> item.getProduto().getId().equals(produto.getId()))
                .findFirst();

        if (itemExistente.isPresent()) {
            // Se já existe, só aumenta a quantidade
            ItemCarrinho item = itemExistente.get();
            item.setQuantidade(item.getQuantidade() + dto.getQuantidade());
        } else {
            // Se não existe, cria um novo item
            ItemCarrinho novoItem = new ItemCarrinho();
            novoItem.setProduto(produto);
            novoItem.setQuantidade(dto.getQuantidade());
            novoItem.setCarrinho(carrinho);
            
            // Adiciona na lista do carrinho
            carrinho.getItens().add(novoItem);
        }

        // Salva o carrinho (O CascadeType.ALL vai salvar os itens automaticamente)
        return carrinhoRepository.save(carrinho);
    }
    
    // Método para remover item (orphanRemoval funciona aqui)
    @Transactional
    public Carrinho removerItem(Long usuarioId, Long produtoId) {
        Carrinho carrinho = buscarCarrinhoPorUsuario(usuarioId);
        
        // Remove o item da lista (orphanRemoval apaga do banco)
        carrinho.getItens().removeIf(item -> item.getProduto().getId().equals(produtoId));
        
        return carrinhoRepository.save(carrinho);
    }

    @Transactional
    public void limparCarrinho(Long usuarioId) {
        Carrinho carrinho = buscarCarrinhoPorUsuario(usuarioId);
        carrinho.getItens().clear(); // O orphanRemoval remove do banco
        carrinhoRepository.save(carrinho);
    }
}
