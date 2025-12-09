package br.com.une.lojavirtual.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Table(name = "tb_itens_carrinho")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "produto_id", nullable = false)
    private Produto produto;

    @Column(nullable = false)
    private Integer quantidade;

    @JsonIgnore // Evita loop infinito no JSON (Carrinho -> Item -> Carrinho)
    @ManyToOne
    @JoinColumn(name = "carrinho_id", nullable = false)
    private Carrinho carrinho;

    // Método auxiliar para calcular o subtotal deste item (Preço x Quantidade)
    public BigDecimal getSubtotal() {
        return produto.getPreco().multiply(new BigDecimal(quantidade));
    }
}   