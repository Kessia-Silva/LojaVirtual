package br.com.une.lojavirtual.backend;

import java.math.BigDecimal;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.une.lojavirtual.backend.model.GeneroMusical;
import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.TipoUsuario;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.GeneroRepository;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;

@Configuration
public class DadosIniciais {

    @Bean
    CommandLineRunner rodar(ProdutoRepository produtoRepo, UsuarioRepository usuarioRepo, GeneroRepository generoRepo) {
        return args -> {
            // 1. Cadastrar Gêneros (PRIMEIRO DE TUDO)
        if (generoRepo.count() == 0) {
            GeneroMusical rock = new GeneroMusical(null, "Rock");
            GeneroMusical pop = new GeneroMusical(null, "Pop");
            GeneroMusical mpb = new GeneroMusical(null, "MPB");
            GeneroMusical eletronica = new GeneroMusical(null, "Eletrônica");
            
            // Salvamos e guardamos as referências para usar nos produtos
            generoRepo.saveAll(Arrays.asList(rock, pop, mpb, eletronica));
            
            // 2. Cadastrar Produtos (Usando os objetos de gênero acima)
            if (produtoRepo.count() == 0) {
                // Note que agora passamos o objeto 'rock', 'mpb', etc, no lugar da string
                Produto p1 = new Produto(null, "Thriller", "Michael Jackson", "O álbum mais vendido...", new BigDecimal("120.00"), 50, pop, "url_img_1");
                Produto p2 = new Produto(null, "The Dark Side of the Moon", "Pink Floyd", "Clássico...", new BigDecimal("150.00"), 20, rock, "url_img_2");
                Produto p3 = new Produto(null, "Revolver", "The Beatles", "Edição remasterizada", new BigDecimal("80.00"), 100, rock, "url_img_3");
                Produto p4 = new Produto(null, "Acabou Chorare", "Novos Baianos", "Música popular...", new BigDecimal("90.00"), 30, mpb, "url_img_4");
                Produto p5 = new Produto(null, "Random Access Memories", "Daft Punk", "Eletrônica...", new BigDecimal("60.00"), 40, eletronica, "url_img_5");

                produtoRepo.saveAll(Arrays.asList(p1, p2, p3, p4, p5));
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