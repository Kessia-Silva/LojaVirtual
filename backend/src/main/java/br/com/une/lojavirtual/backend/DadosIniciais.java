package br.com.une.lojavirtual.backend;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.util.Arrays;

@Configuration
public class DadosIniciais {

    @Bean
    CommandLineRunner rodar(ProdutoRepository repository) {
        return args -> {
            // Verifica se já tem dados para não duplicar
            if (repository.count() > 0) return;

            Produto p1 = new Produto(null, "Thriller", "Michael Jackson", "O álbum mais vendido da história", new BigDecimal("120.00"), 50, "Vinil", "url_img_1");
            Produto p2 = new Produto(null, "The Dark Side of the Moon", "Pink Floyd", "Clássico do rock progressivo", new BigDecimal("150.00"), 20, "Vinil", "url_img_2");
            Produto p3 = new Produto(null, "Revolver", "The Beatles", "Edição remasterizada", new BigDecimal("80.00"), 100, "CD", "url_img_3");
            Produto p4 = new Produto(null, "Acabou Chorare", "Novos Baianos", "Música popular brasileira", new BigDecimal("90.00"), 30, "Vinil", "url_img_4");
            Produto p5 = new Produto(null, "Random Access Memories", "Daft Punk", "Eletrônica moderna", new BigDecimal("60.00"), 40, "CD", "url_img_5");

            repository.saveAll(Arrays.asList(p1, p2, p3, p4, p5));
            System.out.println("--- CARGA DE DADOS INICIAIS CONCLUÍDA COM SUCESSO ---");
        };
    }
}