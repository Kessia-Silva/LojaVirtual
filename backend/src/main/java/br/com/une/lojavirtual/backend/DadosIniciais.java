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
GeneroMusical kpop = new GeneroMusical(null, "K-pop");
GeneroMusical sertanejo = new GeneroMusical(null, "Sertanejo");
GeneroMusical worship = new GeneroMusical(null, "Worship");
GeneroMusical musical = new GeneroMusical(null, "Musical");
GeneroMusical olodum = new GeneroMusical(null, "Olodum");
GeneroMusical anime = new GeneroMusical(null, "Anime / OST");
GeneroMusical reggae = new GeneroMusical(null, "Reggae");

            
            // Salvamos e guardamos as referências para usar nos produtos
            generoRepo.saveAll(Arrays.asList(
    rock, pop, mpb, kpop, sertanejo, worship, musical, olodum, anime, reggae
));
            
            // 2. Cadastrar Produtos (Usando os objetos de gênero acima)
            if (produtoRepo.count() == 0) {
                Produto p1 = new Produto(
    null,
    "Hamilton",
    "Lin‑Manuel Miranda (Original Broadway Cast)",
    "A trilha sonora oficial do musical Hamilton — mistura hip-hop, R&B, soul e show tunes que narra a vida de Alexander Hamilton através de 46 faixas divididas em dois atos, com duração total de aproximadamente 2h22. O álbum reinventa o teatro musical tradicional com batidas contemporâneas e rap ágil, mantendo a força dramática e a riqueza histórica da narrativa.",
    new BigDecimal("99.90"),
    30,
    musical,
    "assets/img/fotos-produtos/produto1.jpeg"
);

Produto p2 = new Produto(
    null,
    "Chico Buarque de Hollanda (Vol. 1)",
    "Chico Buarque",
    "Álbum de estreia de Chico Buarque, lançado em 1966. Considerado um marco da MPB, reúne composições que misturam poesia, crítica social e melodias tradicionais brasileiras. Traz faixas icônicas como “A Banda”, vencedora do Festival de Música Popular Brasileira, além de músicas que ajudaram a consolidar Chico como um dos maiores compositores do país.",
    new BigDecimal("89.90"),
    25,
    mpb,
    "assets/img/fotos-produtos/produto2.jpeg"
);

Produto p3 = new Produto(
    null,
    "Die With A Smile",
    "Lady Gaga & Bruno Mars",
    "Single colaborativo de Lady Gaga e Bruno Mars, trazendo uma mistura marcante de pop e soul. A faixa destaca os vocais poderosos dos dois artistas e apresenta produção refinada, com arranjos modernos e atmosfera romântica. Este lançamento especial em CD inclui a versão oficial do single e é um item ideal para fãs e colecionadores.",
    new BigDecimal("59.90"),
    50,
    pop,
    "assets/img/fotos-produtos/produto3.jpeg"
);

Produto p4 = new Produto(
    null,
    "O Tempo Não Para",
    "Cazuza",
    "Lançado em 1988, este álbum marca uma das fases mais intensas da carreira de Cazuza. Misturando rock, poesia e crítica social, o disco traz faixas emblemáticas como “O Tempo Não Para” e “Ideologia”, que se tornaram clássicos da música brasileira. Esta edição remasterizada apresenta som aprimorado e preserva toda a força emocional e a autenticidade do artista.",
    new BigDecimal("79.90"),
    40,
    rock,
    "assets/img/fotos-produtos/produto4.jpeg"
);

Produto p5 = new Produto(
    null,
    "Thriller",
    "Michael Jackson",
    "Lançado em 1982, Thriller é o álbum mais vendido de todos os tempos e um marco absoluto da música pop. Produzido por Quincy Jones, combina pop, funk, rock e R&B em faixas icônicas como “Billie Jean”, “Beat It” e a faixa-título “Thriller”. Esta edição em vinil destaca a qualidade sonora original e é essencial para colecionadores e fãs do Rei do Pop.",
    new BigDecimal("120.00"),
    50,
    pop,
    "assets/img/fotos-produtos/produto5.jpg"
);

Produto p6 = new Produto(
    null,
    "Eternal Sunshine",
    "Ariana Grande",
    "Lançado em 2024, Eternal Sunshine apresenta Ariana Grande em uma fase mais madura, unindo pop contemporâneo, R&B suave e letras emocionais. O álbum traz faixas marcantes como “yes, and?”, “we can’t be friends” e “the boy is mine”, explorando temas de autoconhecimento, relacionamentos e renovação pessoal. Uma produção sofisticada, perfeita para fãs e colecionadores.",
    new BigDecimal("95.00"),
    60,
    pop,
    "assets/img/fotos-produtos/produto6.jpeg"
);

Produto p7 = new Produto(
    null,
    "21",
    "Adele",
    "Lançado em 2011, 21 é um dos álbuns mais premiados da história recente, destacando a força vocal e emocional de Adele. Com influências de soul, blues e pop, o disco traz sucessos como “Rolling in the Deep”, “Someone Like You” e “Set Fire to the Rain”. A edição em vinil oferece uma experiência sonora rica, ideal para fãs e colecionadores.",
    new BigDecimal("110.00"),
    45,
    pop,
    "assets/img/fotos-produtos/produto7.jpg"
);

Produto p8 = new Produto(
    null,
    "Anavitória – Edição Especial",
    "Anavitória",
    "A edição especial do álbum de estreia da dupla Anavitória, lançado em 2016. Marcado por um estilo pop folk suave e melodias delicadas, o disco trouxe as artistas ao cenário nacional com sucessos como “Singular”, “Agora Eu Quero Ir” e “Trevo (Tu)”. Esta versão especial destaca a sonoridade leve e emocional da dupla e é ideal para fãs que acompanham sua trajetória desde o início.",
    new BigDecimal("75.00"),
    35,
    pop,
    "assets/img/fotos-produtos/produto8.jpeg"
);

Produto p9 = new Produto(
    null,
    "Pirata",
    "Jão",
    "Lançado em 2021, Pirata marca uma fase mais madura e romântica da carreira de Jão. O álbum mistura pop, synthpop e baladas emotivas, explorando temas como liberdade, amor e autodescoberta. Com faixas de destaque como “Idiota”, “Não Te Amo” e “Coringa”, o disco consolidou o artista como um dos principais nomes do pop brasileiro atual.",
    new BigDecimal("85.00"),
    55,
    pop,
    "assets/img/fotos-produtos/produto9.jpeg"
);

Produto p10 = new Produto(
    null,
    "Sambista Perfeito",
    "Arlindo Cruz",
    "Um dos álbuns mais celebrados de Arlindo Cruz, reunindo sambas marcantes com a assinatura do artista: letras poéticas, arranjos tradicionais e muito balanço. O disco destaca a força do samba carioca e traz composições que reforçam Arlindo como um dos maiores nomes do gênero. Ideal para quem aprecia samba de raiz e a musicalidade rica do artista.",
    new BigDecimal("69.90"),
    40,
    olodum,
    "assets/img/fotos-produtos/produto10.jpeg"
);

Produto p11 = new Produto(
    null,
    "BTS World",
    "BTS",
    "Trilha sonora oficial do jogo BTS World, lançada em 2019. O álbum reúne faixas inéditas e versões exclusivas de grandes sucessos do grupo, combinando K-Pop, pop e R&B. Destaca a versatilidade musical do BTS e a interação com os fãs, oferecendo uma experiência única para colecionadores e admiradores do grupo.",
    new BigDecimal("89.90"),
    10,
    kpop,
    "assets/img/fotos-produtos/produto11.jpeg"
);

Produto p12 = new Produto(
    null,
    "Proof",
    "BTS",
    "Álbum de antologia lançado em 2022 para celebrar os nove anos de carreira do BTS. Proof reúne grandes sucessos do grupo, faixas inéditas e versões remasterizadas, oferecendo uma visão completa da trajetória musical do grupo. Ideal para colecionadores e fãs, o álbum destaca a evolução do BTS no K-Pop e na música global.",
    new BigDecimal("120.00"),
    15,
    kpop,
    "assets/img/fotos-produtos/produto12.jpeg"
);

Produto p13 = new Produto(
    null,
    "Rosie",
    "Rosé",
    "Álbum de estreia solo da integrante Rosé, do grupo BLACKPINK, lançado em 2021. O disco mistura pop, baladas e elementos de R&B, com faixas que exploram temas de amor, autoconfiança e crescimento pessoal. Inclui hits como “On The Ground” e “GONE”, oferecendo aos fãs uma experiência musical intimista e sofisticada.",
    new BigDecimal("75.50"),
    8,
    kpop,
    "assets/img/fotos-produtos/produto13.jpeg"
);

Produto p14 = new Produto(
    null,
    "Sour",
    "Olivia Rodrigo",
    "Álbum de estreia da cantora Olivia Rodrigo, lançado em 2021. Sour combina pop, pop rock e elementos de indie, explorando emoções adolescentes, amor, frustração e autodescoberta. Com hits como “drivers license”, “good 4 u” e “deja vu”, o disco conquistou fãs globalmente e estabeleceu Olivia como uma das vozes mais influentes da nova geração.",
    new BigDecimal("99.90"),
    12,
    pop,
    "assets/img/fotos-produtos/produto14.jpeg"
);

Produto p15 = new Produto(
    null,
    "An Evening with Silk Sonic",
    "Bruno Mars & Anderson .Paak",
    "Álbum de estreia da dupla Silk Sonic, lançado em 2021. Combinando R&B, soul e funk, o disco traz uma produção retrô sofisticada e vocais marcantes. Inclui sucessos como “Leave The Door Open”, “Skate” e “Smokin Out The Window”, oferecendo uma experiência musical elegante e envolvente, perfeita para fãs de grooves clássicos e modernos.",
    new BigDecimal("110.00"),
    9,
    pop,
    "assets/img/fotos-produtos/produto15.jpeg"
);

Produto p16 = new Produto(
    null,
    "Happier Than Ever",
    "Billie Eilish",
    "Álbum lançado em 2021, mostrando uma evolução madura do estilo único de Billie Eilish. Misturando pop, electropop e baladas introspectivas, o disco aborda temas como fama, relacionamentos e autodescoberta. Destaques incluem as faixas “Happier Than Ever”, “Your Power” e “NDA”, oferecendo uma experiência sonora envolvente e emocional para fãs e colecionadores.",
    new BigDecimal("105.00"),
    7,
    pop,
    "assets/img/fotos-produtos/produto16.jpeg"
);

Produto p17 = new Produto(
    null,
    "100%",
    "Charlie Brown Jr.",
    "Lançado em 2003, 100% é um álbum emblemático da banda Charlie Brown Jr., trazendo uma mistura de rock, rap e skate punk. Com letras que abordam juventude, desafios e reflexões sobre a vida, o disco inclui faixas marcantes como “Tudo Que Ela Gosta de Escutar” e “Me Encontra”, consolidando a banda como referência do rock brasileiro.",
    new BigDecimal("95.00"),
    5,
    rock,
    "assets/img/fotos-produtos/produto17.jpeg"
);

Produto p18 = new Produto(
    null,
    "Rubber Soul",
    "The Beatles",
    "Lançado em 1965, Rubber Soul é um dos álbuns mais influentes dos Beatles, marcando a transição da banda para um estilo mais maduro e experimental. Misturando rock, folk e pop, o disco inclui faixas clássicas como “Norwegian Wood”, “In My Life” e “Michelle”. Esta edição em CD oferece som remasterizado e é essencial para fãs e colecionadores da história da música.",
    new BigDecimal("85.00"),
    6,
    rock,
    "assets/img/fotos-produtos/produto18.jpeg"
);

Produto p19 = new Produto(
    null,
    "Born to Die",
    "Lana Del Rey",
    "Álbum de estreia lançado em 2012, Born to Die apresenta Lana Del Rey com seu estilo cinematográfico e nostálgico, combinando pop alternativo, baroque pop e elementos de trip hop. Com hits como “Video Games”, “Born to Die” e “Blue Jeans”, o disco explora temas de amor, fama e melancolia, consolidando a artista como referência da música contemporânea.",
    new BigDecimal("99.90"),
    4,
    pop,
    "assets/img/fotos-produtos/produto19.jpeg"
);

Produto p20 = new Produto(
    null,
    "Fearless (Taylor's Version)",
    "Taylor Swift",
    "Lançado em 2021, Fearless (Taylor's Version) é a regravação do segundo álbum de Taylor Swift, trazendo todas as faixas originais e versões bônus inéditas. O disco combina country, pop e storytelling lírico, incluindo sucessos como “Love Story”, “You Belong With Me” e “Fifteen”. Esta edição celebra a reinvenção do álbum e é essencial para fãs e colecionadores.",
    new BigDecimal("89.90"),
    10,
    pop,
    "assets/img/fotos-produtos/produto20.jpeg"
);


                produtoRepo.saveAll(Arrays.asList(
                p1, p2, p3, p4, p5,
                p6, p7, p8, p9, p10,
                p11, p12, p13, p14, p15,
                p16, p17, p18, p19, p20
                ));

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
