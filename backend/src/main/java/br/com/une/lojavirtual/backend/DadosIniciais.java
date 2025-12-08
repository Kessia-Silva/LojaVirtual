package br.com.une.lojavirtual.backend;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.TipoUsuario;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;

@Configuration
public class DadosIniciais {

    @Bean
    CommandLineRunner rodar(ProdutoRepository produtoRepo, UsuarioRepository usuarioRepo) {
        return args -> {
            // 1. Carga de Produtos (Mantivemos a lógica anterior)
            if (produtoRepo.count() == 0) {
                Produto p1 = new Produto(null, "Thriller", "Michael Jackson", "O álbum mais vendido da história", new BigDecimal("120.00"), 50, "Vinil", "url_img_1");
                Produto p2 = new Produto(null, "The Dark Side of the Moon", "Pink Floyd", "Clássico do rock progressivo", new BigDecimal("150.00"), 20, "Vinil", "url_img_2");
                Produto p3 = new Produto(null, "Revolver", "The Beatles", "Edição remasterizada", new BigDecimal("80.00"), 100, "CD", "url_img_3");
                
                produtoRepo.saveAll(Arrays.asList(p1, p2, p3));
            }

            // 2. Carga de Usuários (NOVO!)
            if (usuarioRepo.count() == 0) {
                Usuario admin = new Usuario(null, "Rafael Admin", "admin@loja.com", "senha1234", TipoUsuario.ADMIN);
                Usuario cliente = new Usuario(null, "Vagner Cliente", "cliente@loja.com", "senha1234", TipoUsuario.CLIENTE);
                
                usuarioRepo.saveAll(Arrays.asList(admin, cliente));
                System.out.println("--- USUÁRIOS DE TESTE CRIADOS ---");
            }
        };
    }
}