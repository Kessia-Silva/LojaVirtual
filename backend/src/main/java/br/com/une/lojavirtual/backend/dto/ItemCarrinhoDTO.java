package br.com.une.lojavirtual.backend.dto;

import lombok.Data;

@Data
public class ItemCarrinhoDTO {
    private Long produtoId;
    private Integer quantidade;
}