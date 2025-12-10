package br.com.une.lojavirtual.backend.dto;

import java.util.List;
import lombok.Data;

@Data
public class PedidoDTO {
    private Long usuarioId;
    private List<ItemCarrinhoDTO> itens;
}
