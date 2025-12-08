package br.com.une.lojavirtual.backend.dto;

import lombok.Data;

@Data // Gera Getters e Setters
public class LoginDTO {
    private String email;
    private String senha;
}