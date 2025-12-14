package br.com.une.lojavirtual.backend.service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.une.lojavirtual.backend.dto.ItemCarrinhoDTO;
import br.com.une.lojavirtual.backend.dto.PedidoDTO;
import br.com.une.lojavirtual.backend.model.ItemPedido;
import br.com.une.lojavirtual.backend.model.Pedido;
import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.StatusPedido;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.PedidoRepository;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;
import jakarta.transaction.Transactional;

@Service
public class PedidoService {
    @Autowired
    private PedidoRepository repository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    @Transactional
    public Pedido criarPedido(PedidoDTO dto)
    {
        //Buscar user
        Usuario usuario = usuarioRepository.findById(dto.getUsuarioId())
            .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
        
        //Criar o objeto Pedido
        Pedido pedido = new Pedido();
        pedido.setUsuario(usuario);
        pedido.setDataPedido(LocalDateTime.now());
        pedido.setStatus(StatusPedido.PENDENTE);

        //Crio a lista que vai manter os objetos item instanciados
        List<ItemPedido> itensPedidos = new ArrayList<>();
        BigDecimal total = BigDecimal.ZERO;

        //Processar cada item na lista
        for(ItemCarrinhoDTO itemDTO : dto.getItens())
        {
            Produto produto = produtoRepository.findById(itemDTO.getProdutoId())
                .orElseThrow(() -> new IllegalArgumentException("Produto não encontrado: " + itemDTO.getProdutoId()));
            
            //Verificar estoque
            if(produto.getEstoque() < itemDTO.getQuantidade())
            {
                throw new IllegalArgumentException("Estoque insuficiente para: " + produto.getNome());
            }

            //Diminuir estoque
            produto.setEstoque(produto.getEstoque() - itemDTO.getQuantidade());
            produtoRepository.save(produto);

            //Criar item do pedido
            ItemPedido itemPedido = new ItemPedido();
            itemPedido.setProduto(produto);
            itemPedido.setPedido(pedido);
            itemPedido.setQtdComprada(itemDTO.getQuantidade());
            itemPedido.setPreco(produto.getPreco());

            itensPedidos.add(itemPedido);

            //Somo ao total
            BigDecimal subtot = itemPedido.getPreco().multiply(BigDecimal.valueOf(itemPedido.getQtdComprada()));
            total = total.add(subtot);
        }

        pedido.setItens(itensPedidos);
        pedido.setValorTotal(total);

        return repository.save(pedido);
    }

    public List<Pedido> listarPorUsuario(Long usuarioId)
    {
        return repository.findByUsuarioId(usuarioId);
    }

     //Atualizar Status do pedido
    public Pedido atualizarStatus(Long id, StatusPedido novoStatus)
    {
        Pedido pedido = repository.findById(id).orElseThrow(() -> new IllegalArgumentException("Pedido não encontrado."));

        pedido.setStatus(novoStatus);
        return repository.save(pedido);
    }
}
