package br.com.une.lojavirtual.backend;

import br.com.une.lojavirtual.backend.model.Categoria;
import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.TipoUsuario;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;

@Configuration
public class DadosIniciais {

    @Bean
    CommandLineRunner rodar(ProdutoRepository produtoRepo, UsuarioRepository usuarioRepo, CategoriaRepository categoriaRepo) {
        return args -> {
            // 1. Criar Categorias Primeiro
            if (categoriaRepo.count() == 0) {
                Categoria vinil = new Categoria(null,"Vinil");                
                Categoria cd = new Categoria(null,"CD");
                
                categoriaRepo.saveAll(Arrays.asList(vinil, cd));
                
                // 2. Criar Produtos (Agora passando o objeto Categoria, não String)
                if (produtoRepo.count() == 0) {
                    Produto p1 = new Produto(null, "Thriller", "Michael Jackson", "Descricao...", new BigDecimal("120.00"), 50, vinil, "url_1");
                    Produto p2 = new Produto(null, "Dark Side", "Pink Floyd", "Descricao...", new BigDecimal("150.00"), 20, vinil, "url_2");
                    Produto p3 = new Produto(null, "Revolver", "Beatles", "Descricao...", new BigDecimal("80.00"), 100, cd, "url_3");
                    
                    produtoRepo.saveAll(Arrays.asList(p1, p2, p3));
                }
            }

            // 3. Usuários (Mantém igual)
            if (usuarioRepo.count() == 0) {
                Usuario admin = new Usuario(null, "Rafael Admin", "admin@loja.com", "senha1234", TipoUsuario.ADMIN);
                Usuario cliente = new Usuario(null, "Vagner Cliente", "cliente@loja.com", "senha1234", TipoUsuario.CLIENTE);
                usuarioRepo.saveAll(Arrays.asList(admin, cliente));
            }
        };
    }
}