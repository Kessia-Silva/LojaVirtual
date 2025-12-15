package br.com.une.lojavirtual.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "tb_usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Usuario {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O nome é obrigatório")
    private String nome;

    @Column(unique = true) // Não deixa cadastrar dois emails iguais no banco
    @NotBlank(message = "O email é obrigatório")
    @Email(message = "O email deve ser válido") // Valida se tem @, ponto, etc.
    private String email;

    @NotBlank(message = "A senha é obrigatória")
    @Size(min = 8, message = "A senha deve ter no mínimo 8 caracteres") // Requisito solicitado
    private String senha;

    @Enumerated(EnumType.STRING) // Grava no banco como texto ("ADMIN", "CLIENTE") e não número (0, 1)
    @Column(nullable = false)
    private TipoUsuario tipo; // ADMIN ou CLIENTE

    private String cep;
    private String endereco; // Rua, número, bairro
    private String cidade;
    private String estado;
}