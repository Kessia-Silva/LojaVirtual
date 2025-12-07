package br.com.une.lojavirtual.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;

@Entity // Diz ao Spring que isso é uma tabela no banco
@Table(name = "tb_produtos") // Nome da tabela no banco
@Data // O Lombok gera Getters, Setters, ToString e HashCode automaticamente
@NoArgsConstructor // Gera construtor vazio (obrigatório pro JPA)
@AllArgsConstructor // Gera construtor com todos os argumentos
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nome; 

    @Column(nullable = false)
    private String artista; 

    @Column(length = 1000)
    private String descricao;

    @Column(nullable = false)
    private BigDecimal preco;

    @Column(nullable = false)
    private Integer estoque;

    private String categoria; // Ex: "CD", "Vinil", "Camiseta"

    private String imagemUrl; // Link da capa do álbum
}