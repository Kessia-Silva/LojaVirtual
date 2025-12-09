package br.com.une.lojavirtual.backend;

import java.math.BigDecimal;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.TipoUsuario;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;

@Configuration
public class DadosIniciais {

    @Bean
    CommandLineRunner rodar(ProdutoRepository produtoRepo, UsuarioRepository usuarioRepo) {
        return args -> {
            // 1. Carga de Produtos (Mantivemos a lógica anterior)
            if (produtoRepo.count() == 0) {

    Produto p1 = new Produto(
        null,
        "Hamilton",
        "Lin-Manuel Miranda",
        "A trilha sonora oficial do musical Hamilton.",
        new BigDecimal("99.90"),
        30,
        "CD",
        "assets/img/fotos-produtos/produto1.jpeg"
    );

    Produto p2 = new Produto(
        null,
        "Chico Buarque de Holanda",
        "Chico Buarque",
        "Um clássico essencial da música brasileira.",
        new BigDecimal("89.90"),
        25,
        "Vinil",
        "assets/img/fotos-produtos/produto2.jpeg"
    );

    Produto p3 = new Produto(
        null,
        "Die With A Smile",
        "Lady Gaga & Bruno Mars",
        "Single especial com arranjos inéditos.",
        new BigDecimal("59.90"),
        50,
        "CD",
        "assets/img/fotos-produtos/produto3.jpeg"
    );

    Produto p4 = new Produto(
        null,
        "Cazuza",
        "Cazuza",
        "Coletânea remasterizada dos maiores sucessos.",
        new BigDecimal("79.90"),
        40,
        "CD",
        "assets/img/fotos-produtos/produto4.jpeg"
    );

    Produto p5 = new Produto(
        null,
        "Thriller",
        "Michael Jackson",
        "O álbum mais vendido da história.",
        new BigDecimal("120.00"),
        50,
        "Vinil",
        "assets/img/fotos-produtos/produto5.jpg"
    );

    Produto p6 = new Produto(
        null,
        "Eternal Sunshine",
        "Ariana Grande",
        "Novo álbum da artista com grandes hits.",
        new BigDecimal("95.00"),
        60,
        "CD",
        "assets/img/fotos-produtos/produto6.jpeg"
    );

    Produto p7 = new Produto(
        null,
        "21",
        "Adele",
        "Um dos álbuns mais premiados da década.",
        new BigDecimal("110.00"),
        45,
        "Vinil",
        "assets/img/fotos-produtos/produto7.jpg"
    );

    Produto p8 = new Produto(
        null,
        "Ana Vitória",
        "Anavitória",
        "O álbum que marcou a dupla no cenário brasileiro.",
        new BigDecimal("75.00"),
        35,
        "CD",
        "assets/img/fotos-produtos/produto8.jpeg"
    );

    Produto p9 = new Produto(
        null,
        "Pirata",
        "Jão",
        "Álbum pop com grande sucesso nacional.",
        new BigDecimal("85.00"),
        55,
        "CD",
        "assets/img/fotos-produtos/produto9.jpeg"
    );

    Produto p10 = new Produto(
        null,
        "Sambista Perfeito",
        "Dilsinho",
        "Álbum com influências fortes de samba e pagode.",
        new BigDecimal("69.90"),
        40,
        "CD",
        "assets/img/fotos-produtos/produto10.jpeg"
    );

    Produto p11 = new Produto(
    null,
    "BTS World",
    "BTS",
    "K-Pop",
    new BigDecimal("89.90"),
    10,
    "CD",
    "assets/img/fotos-produtos/produto11.jpeg"
);

Produto p12 = new Produto(
    null,
    "Proof",
    "BTS",
    "K-Pop",
    new BigDecimal("120.00"),
    15,
    "CD",
    "assets/img/fotos-produtos/produto12.jpeg"
);

Produto p13 = new Produto(
    null,
    "R",
    "Rosie",
    "Pop",
    new BigDecimal("75.50"),
    8,
    "Vinil",
    "assets/img/fotos-produtos/produto13.jpeg"
);

Produto p14 = new Produto(
    null,
    "Sour",
    "Olivia Rodrigo",
    "Pop",
    new BigDecimal("99.90"),
    12,
    "CD",
    "assets/img/fotos-produtos/produto14.jpeg"
);

Produto p15 = new Produto(
    null,
    "An Evening with Silk Sonic",
    "Bruno Mars",
    "R&B",
    new BigDecimal("110.00"),
    9,
    "Vinil",
    "assets/img/fotos-produtos/produto15.jpeg"
);

Produto p16 = new Produto(
    null,
    "Happier Than Ever",
    "Billie Eilish",
    "Pop",
    new BigDecimal("105.00"),
    7,
    "CD",
    "assets/img/fotos-produtos/produto16.jpeg"
);

Produto p17 = new Produto(
    null,
    "Dylan",
    "Bob Dylan",
    "Folk",
    new BigDecimal("95.00"),
    5,
    "Vinil",
    "assets/img/fotos-produtos/produto17.jpeg"
);

Produto p18 = new Produto(
    null,
    "Faces",
    "Caras",
    "Pop",
    new BigDecimal("85.00"),
    6,
    "CD",
    "assets/img/fotos-produtos/produtos18.jpeg"
);

Produto p19 = new Produto(
    null,
    "Chemtrails over the Country Club",
    "Lana Del Rey",
    "Indie",
    new BigDecimal("99.90"),
    4,
    "CD",
    "assets/img/fotos-produtos/produtos19.jpeg"
);

Produto p20 = new Produto(
    null,
    "1989",
    "Taylor Swift",
    "Pop",
    new BigDecimal("89.90"),
    10,
    "CD",
    "assets/img/fotos-produtos/produtos20.jpeg"
);


    

    

    produtoRepo.saveAll(Arrays.asList(
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20
    ));
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