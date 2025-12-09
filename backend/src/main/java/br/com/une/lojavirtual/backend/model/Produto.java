package br.com.une.lojavirtual.backend.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    // Substituímos a String categoria por um Objeto completo
    @ManyToOne // Muitos Produtos podem ter o mesmo Gênero
    @JoinColumn(name = "genero_id", nullable = false)
    private GeneroMusical generoMusical; // O nome do campo deve ser 'genero' para bater com o front ou usamos DTO depois

    private String imagemUrl; // Link da capa do álbum

    
}