package br.com.une.lojavirtual.backend;

import java.math.BigDecimal;
import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import br.com.une.lojavirtual.backend.model.Carrinho;
import br.com.une.lojavirtual.backend.model.GeneroMusical;
import br.com.une.lojavirtual.backend.model.Produto;
import br.com.une.lojavirtual.backend.model.TipoUsuario;
import br.com.une.lojavirtual.backend.model.Usuario;
import br.com.une.lojavirtual.backend.repository.CarrinhoRepository;
import br.com.une.lojavirtual.backend.repository.GeneroRepository;
import br.com.une.lojavirtual.backend.repository.ProdutoRepository;
import br.com.une.lojavirtual.backend.repository.UsuarioRepository;

@Configuration
public class DadosIniciais {

    private final CarrinhoRepository carrinhoRepository;

    DadosIniciais(CarrinhoRepository carrinhoRepository) {
        this.carrinhoRepository = carrinhoRepository;
    }

    @Bean
    CommandLineRunner rodar(ProdutoRepository produtoRepo, UsuarioRepository usuarioRepo, GeneroRepository generoRepo) {
        return args -> {
        // 1. Gêneros 
        if (generoRepo.count() == 0) {
            GeneroMusical rock = new GeneroMusical(null, "Rock");
            GeneroMusical pop = new GeneroMusical(null, "Pop");
            GeneroMusical mpb = new GeneroMusical(null, "MPB");
            GeneroMusical kpop = new GeneroMusical(null, "K-pop");
            GeneroMusical sertanejo = new GeneroMusical(null, "Sertanejo");
            GeneroMusical worship = new GeneroMusical(null, "Worship");
            GeneroMusical musical = new GeneroMusical(null, "Musical");
            GeneroMusical olodum = new GeneroMusical(null, "Olodum");
            GeneroMusical reggae = new GeneroMusical(null, "Reggae");
            GeneroMusical samba = new GeneroMusical(null, "Samba");

            // Salvamos e guardamos as referências para usar nos produtos
            generoRepo.saveAll(Arrays.asList(rock, pop, mpb, kpop, sertanejo, 
                worship, musical, olodum, reggae, samba));
            
            // 2. Cadastrar Produtos (Usando os objetos de gênero acima)
            if (produtoRepo.count() == 0) {
                Produto p1 = new Produto(
    null,
    "Hamilton",
    "Lin-Manuel Miranda (Original Broadway Cast)",
    "A trilha sonora oficial do musical Hamilton — mistura hip-hop, R&B, soul e show tunes que narra a vida de Alexander Hamilton através de 46 faixas divididas em dois atos, com duração total de aproximadamente 2h22. O álbum reinventa o teatro musical tradicional com batidas contemporâneas e rap ágil, mantendo a força dramática e a riqueza histórica da narrativa.",
    new BigDecimal("99.90"),
    330,
    musical,
    "assets/img/fotos-produtos/produto1.jpeg"
);

Produto p2 = new Produto(
    null,
    "Chico Buarque de Hollanda (Vol. 1)",
    "Chico Buarque",
    "Álbum de estreia de Chico Buarque, lançado em 1966. Considerado um marco da MPB, reúne composições que misturam poesia, crítica social e melodias tradicionais brasileiras. Traz faixas icônicas como “A Banda”, vencedora do Festival de Música Popular Brasileira, além de músicas que ajudaram a consolidar Chico como um dos maiores compositores do país.",
    new BigDecimal("89.90"),
    225,
    mpb,
    "assets/img/fotos-produtos/produto2.jpeg"
);

Produto p3 = new Produto(
    null,
    "Die With A Smile",
    "Lady Gaga & Bruno Mars",
    "Single colaborativo de Lady Gaga e Bruno Mars, trazendo uma mistura marcante de pop e soul. A faixa destaca os vocais poderosos dos dois artistas e apresenta produção refinada, com arranjos modernos e atmosfera romântica. Este lançamento especial em CD inclui a versão oficial do single e é um item ideal para fãs e colecionadores.",
    new BigDecimal("59.90"),
    550,
    pop,
    "assets/img/fotos-produtos/produto3.jpeg"
);

Produto p4 = new Produto(
    null,
    "O Tempo Não Para",
    "Cazuza",
    "Lançado em 1988, este álbum marca uma das fases mais intensas da carreira de Cazuza. Misturando rock, poesia e crítica social, o disco traz faixas emblemáticas como “O Tempo Não Para” e “Ideologia”, que se tornaram clássicos da música brasileira. Esta edição remasterizada apresenta som aprimorado e preserva toda a força emocional e a autenticidade do artista.",
    new BigDecimal("79.90"),
    190,
    rock,
    "assets/img/fotos-produtos/produto4.jpeg"
);

Produto p5 = new Produto(
    null,
    "Thriller",
    "Michael Jackson",
    "Lançado em 1982, Thriller é o álbum mais vendido de todos os tempos e um marco absoluto da música pop. Produzido por Quincy Jones, combina pop, funk, rock e R&B em faixas icônicas como “Billie Jean”, “Beat It” e a faixa-título “Thriller”. Esta edição em vinil destaca a qualidade sonora original e é essencial para colecionadores e fãs do Rei do Pop.",
    new BigDecimal("120.00"),
    120,
    pop,
    "assets/img/fotos-produtos/produto5.jpg"
);

Produto p6 = new Produto(
    null,
    "Eternal Sunshine",
    "Ariana Grande",
    "Lançado em 2024, Eternal Sunshine apresenta Ariana Grande em uma fase mais madura, unindo pop contemporâneo, R&B suave e letras emocionais. O álbum traz faixas marcantes como “yes, and?”, “we can’t be friends” e “the boy is mine”, explorando temas de autoconhecimento, relacionamentos e renovação pessoal. Uma produção sofisticada, perfeita para fãs e colecionadores.",
    new BigDecimal("95.00"),
    600,
    pop,
    "assets/img/fotos-produtos/produto6.jpeg"
);

Produto p7 = new Produto(
    null,
    "21",
    "Adele",
    "Lançado em 2011, 21 é um dos álbuns mais premiados da história recente, destacando a força vocal e emocional de Adele. Com influências de soul, blues e pop, o disco traz sucessos como “Rolling in the Deep”, “Someone Like You” e “Set Fire to the Rain”. A edição em vinil oferece uma experiência sonora rica, ideal para fãs e colecionadores.",
    new BigDecimal("110.00"),
    450,
    pop,
    "assets/img/fotos-produtos/produto7.jpg"
);

Produto p8 = new Produto(
    null,
    "Anavitória – Edição Especial",
    "Anavitória",
    "A edição especial do álbum de estreia da dupla Anavitória, lançado em 2016. Marcado por um estilo pop folk suave e melodias delicadas, o disco trouxe as artistas ao cenário nacional com sucessos como “Singular”, “Agora Eu Quero Ir” e “Trevo (Tu)”. Esta versão especial destaca a sonoridade leve e emocional da dupla e é ideal para fãs que acompanham sua trajetória desde o início.",
    new BigDecimal("75.00"),
    25,
    pop,
    "assets/img/fotos-produtos/produto8.jpeg"
);

Produto p9 = new Produto(
    null,
    "Pirata",
    "Jão",
    "Lançado em 2021, Pirata marca uma fase mais madura e romântica da carreira de Jão. O álbum mistura pop, synthpop e baladas emotivas, explorando temas como liberdade, amor e autodescoberta. Com faixas de destaque como “Idiota”, “Não Te Amo” e “Coringa”, o disco consolidou o artista como um dos principais nomes do pop brasileiro atual.",
    new BigDecimal("85.00"),
    50,
    pop,
    "assets/img/fotos-produtos/produto9.jpeg"
);

Produto p10 = new Produto(
    null,
    "Sambista Perfeito",
    "Arlindo Cruz",
    "Um dos álbuns mais celebrados de Arlindo Cruz, reunindo sambas marcantes com a assinatura do artista: letras poéticas, arranjos tradicionais e muito balanço. O disco destaca a força do samba carioca e traz composições que reforçam Arlindo como um dos maiores nomes do gênero. Ideal para quem aprecia samba de raiz e a musicalidade rica do artista.",
    new BigDecimal("69.90"),
    100,
    samba,
    "assets/img/fotos-produtos/produto10.jpeg"
);

Produto p11 = new Produto(
    null,
    "BTS World",
    "BTS",
    "Trilha sonora oficial do jogo BTS World, lançada em 2019. O álbum reúne faixas inéditas e versões exclusivas de grandes sucessos do grupo, combinando K-Pop, pop e R&B. Destaca a versatilidade musical do BTS e a interação com os fãs, oferecendo uma experiência única para colecionadores e admiradores do grupo.",
    new BigDecimal("89.90"),
    500,
    kpop,
    "assets/img/fotos-produtos/produto11.jpeg"
);

Produto p12 = new Produto(
    null,
    "Proof",
    "BTS",
    "Álbum de antologia lançado em 2022 para celebrar os nove anos de carreira do BTS. Proof reúne grandes sucessos do grupo, faixas inéditas e versões remasterizadas, oferecendo uma visão completa da trajetória musical do grupo. Ideal para colecionadores e fãs, o álbum destaca a evolução do BTS no K-Pop e na música global.",
    new BigDecimal("120.00"),
    500,
    kpop,
    "assets/img/fotos-produtos/produto12.jpeg"
);

Produto p13 = new Produto(
    null,
    "Rosie",
    "Rosé",
    "Álbum de estreia solo da integrante Rosé, do grupo BLACKPINK, lançado em 2021. O disco mistura pop, baladas e elementos de R&B, com faixas que exploram temas de amor, autoconfiança e crescimento pessoal. Inclui hits como “On The Ground” e “GONE”, oferecendo aos fãs uma experiência musical intimista e sofisticada.",
    new BigDecimal("75.50"),
    340,
    kpop,
    "assets/img/fotos-produtos/produto13.jpeg"
);

Produto p14 = new Produto(
    null,
    "Sour",
    "Olivia Rodrigo",
    "Álbum de estreia da cantora Olivia Rodrigo, lançado em 2021. Sour combina pop, pop rock e elementos de indie, explorando emoções adolescentes, amor, frustração e autodescoberta. Com hits como “drivers license”, “good 4 u” e “deja vu”, o disco conquistou fãs globalmente e estabeleceu Olivia como uma das vozes mais influentes da nova geração.",
    new BigDecimal("99.90"),
    300,
    pop,
    "assets/img/fotos-produtos/produto14.jpeg"
);

Produto p15 = new Produto(
    null,
    "An Evening with Silk Sonic",
    "Bruno Mars & Anderson .Paak",
    "Álbum de estreia da dupla Silk Sonic, lançado em 2021. Combinando R&B, soul e funk, o disco traz uma produção retrô sofisticada e vocais marcantes. Inclui sucessos como “Leave The Door Open”, “Skate” e “Smokin Out The Window”, oferecendo uma experiência musical elegante e envolvente, perfeita para fãs de grooves clássicos e modernos.",
    new BigDecimal("110.00"),
    230,
    pop,
    "assets/img/fotos-produtos/produto15.jpeg"
);

Produto p16 = new Produto(
    null,
    "Happier Than Ever",
    "Billie Eilish",
    "Álbum lançado em 2021, mostrando uma evolução madura do estilo único de Billie Eilish. Misturando pop, electropop e baladas introspectivas, o disco aborda temas como fama, relacionamentos e autodescoberta. Destaques incluem as faixas “Happier Than Ever”, “Your Power” e “NDA”, oferecendo uma experiência sonora envolvente e emocional para fãs e colecionadores.",
    new BigDecimal("105.00"),
    700,
    pop,
    "assets/img/fotos-produtos/produto16.jpeg"
);

Produto p17 = new Produto(
    null,
    "100%",
    "Charlie Brown Jr.",
    "Lançado em 2003, 100% é um álbum emblemático da banda Charlie Brown Jr., trazendo uma mistura de rock, rap e skate punk. Com letras que abordam juventude, desafios e reflexões sobre a vida, o disco inclui faixas marcantes como “Tudo Que Ela Gosta de Escutar” e “Me Encontra”, consolidando a banda como referência do rock brasileiro.",
    new BigDecimal("95.00"),
    200,
    rock,
    "assets/img/fotos-produtos/produto17.jpeg"
);

Produto p18 = new Produto(
    null,
    "Rubber Soul",
    "The Beatles",
    "Lançado em 1965, Rubber Soul é um dos álbuns mais influentes dos Beatles, marcando a transição da banda para um estilo mais maduro e experimental. Misturando rock, folk e pop, o disco inclui faixas clássicas como “Norwegian Wood”, “In My Life” e “Michelle”. Esta edição em CD oferece som remasterizado e é essencial para fãs e colecionadores da história da música.",
    new BigDecimal("85.00"),
    120,
    rock,
    "assets/img/fotos-produtos/produto18.jpeg"
);

Produto p19 = new Produto(
    null,
    "Born to Die",
    "Lana Del Rey",
    "Álbum de estreia lançado em 2012, Born to Die apresenta Lana Del Rey com seu estilo cinematográfico e nostálgico, combinando pop alternativo, baroque pop e elementos de trip hop. Com hits como “Video Games”, “Born to Die” e “Blue Jeans”, o disco explora temas de amor, fama e melancolia, consolidando a artista como referência da música contemporânea.",
    new BigDecimal("99.90"),
    400,
    pop,
    "assets/img/fotos-produtos/produto19.jpeg"
);

Produto p20 = new Produto(
    null,
    "Fearless (Taylor's Version)",
    "Taylor Swift",
    "Lançado em 2021, Fearless (Taylor's Version) é a regravação do segundo álbum de Taylor Swift, trazendo todas as faixas originais e versões bônus inéditas. O disco combina country, pop e storytelling lírico, incluindo sucessos como “Love Story”, “You Belong With Me” e “Fifteen”. Esta edição celebra a reinvenção do álbum e é essencial para fãs e colecionadores.",
    new BigDecimal("89.90"),
    300,
    pop,
    "assets/img/fotos-produtos/produto20.jpeg"
);

Produto p21 = new Produto(
    null,
    "The Troy Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Primeiro capítulo de EPIC: The Musical, com duração aproximada de 16 minutos e 5 faixas. Narra a vitória de Odysseus na guerra de Troia, incluindo a invasão da cidade com o cavalo de Troia, misturando elementos dramáticos, introspectivos e épicos. Ideal para fãs de musicais conceituais e mitologia.",
    new BigDecimal("125.90"),
    150,
    musical,
    "assets/img/fotos-produtos/produto21.jpg"
);

Produto p22 = new Produto(
    null,
    "The Cyclops Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Segundo capítulo da série, inspirado no encontro de Odysseus com o ciclope Polyphemus. Retrata tensão, medo e estratégia da fuga, com batidas dramáticas e melodias sombrias, perfeito para quem gosta de emoção e narrativa mitológica.",
    new BigDecimal("110.90"),
    100,
    musical,
    "assets/img/fotos-produtos/produto22.jpg"
);

Produto p23 = new Produto(
    null,
    "The Ocean Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Terceira saga, retratando a travessia marítima de Odysseus e sua tripulação enfrentando tempestades e desafios divinos. Clima de aventura e superação com músicas épicas e dramáticas, ideal para fãs de histórias mitológicas.",
    new BigDecimal("98.90"),
    115,
    musical,
    "assets/img/fotos-produtos/produto23.jpg"
);

Produto p24 = new Produto(
    null,
    "The Circe Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Quarta saga da série, narrando o encontro de Odysseus com a feiticeira Circe. Música cheia de fantasia e mistério, com arranjos dramáticos e envolventes, perfeita para quem gosta de magia e narrativa intensa.",
    new BigDecimal("89.90"),
    125,
    musical,
    "assets/img/fotos-produtos/produto24.jpg"
);

Produto p25 = new Produto(
    null,
    "The Underworld Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Quinta saga, com tom sombrio e introspectivo. Odysseus adentra o submundo em busca de verdades e destino. Ideal para fãs de narrativa intensa, conflitos existenciais e ambientações dramáticas.",
    new BigDecimal("94.90"),
    111,
    musical,
    "assets/img/fotos-produtos/produto25.jpg"
);

Produto p26 = new Produto(
    null,
    "The Thunder Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Sexta saga, marcada por confrontos, tempestades e tensão dramática. Música potente com arranjos épicos, perfeita para momentos de ação e batalhas míticas na narrativa musical.",
    new BigDecimal("92.90"),
    100,
    musical,
    "assets/img/fotos-produtos/produto26.jpg"
);

Produto p27 = new Produto(
    null,
    "The Wisdom Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Sétima parte da série, com foco em sabedoria, decisões difíceis e conflitos internos. Tons reflexivos e simbólicos tornam a música perfeita para quem gosta de profundidade emocional e significado nas letras.",
    new BigDecimal("98.90"),
    105,
    musical,
    "assets/img/fotos-produtos/produto27.jpg"
);

Produto p28 = new Produto(
    null,
    "The Vengeance Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Oitava saga, com clima intenso de justiça, vingança e confrontos finais. Sonoridade dramática e urgente, atraindo fãs de histórias fortes e musicais emocionantes.",
    new BigDecimal("91.90"),
    115,
    musical,
    "assets/img/fotos-produtos/produto28.jpg"
);

Produto p29 = new Produto(
    null,
    "The Ithaca Saga",
    "Epic: The Musical / Jorge Rivera-Herrans",
    "Nona e última saga da série, marcando o retorno de Odysseus e a conclusão da odisseia. Cerca de 22 minutos de música épica e dramática, perfeita para fãs de finais emocionantes e narrativas completas.",
    new BigDecimal("99.90"),
    115,
    musical,
    "assets/img/fotos-produtos/produto29.jpg"
);

Produto p30 = new Produto(
    null,
    "Greatest Hits",
    "Queen",
    "Coletânea lançada em 1981 reunindo os maiores sucessos do Queen, incluindo faixas icônicas como “Bohemian Rhapsody”, “We Will Rock You” e “Another One Bites The Dust”. Um álbum essencial para fãs do rock clássico e colecionadores.",
    new BigDecimal("111.90"),
    100,
    rock,
    "assets/img/fotos-produtos/produto30.jpeg"
);

Produto p31 = new Produto(
    null,
    "Nevermind",
    "Nirvana",
    "Lançado em 1991, Nevermind é o segundo álbum de estúdio do Nirvana, marcando a explosão do grunge. Inclui clássicos como “Smells Like Teen Spirit”, “Come As You Are” e “Lithium”, consolidando a banda como ícone do rock alternativo.",
    new BigDecimal("90.90"),
    105,
    rock,
    "assets/img/fotos-produtos/produto31.jpeg"
);

Produto p32 = new Produto(
    null,
    "Back in Black",
    "AC/DC",
    "Lançado em 1980, Back in Black é o álbum mais famoso do AC/DC, homenageando o ex-vocalista Bon Scott. Com sucessos como “Hells Bells”, “Shoot to Thrill” e “Back in Black”, o disco é um marco do hard rock mundial.",
    new BigDecimal("94.90"),
    500,
    rock,
    "assets/img/fotos-produtos/produto32.jpeg"
);

Produto p33 = new Produto(
    null,
    "AM",
    "Arctic Monkeys",
    "Lançado em 2013, AM é o quinto álbum do Arctic Monkeys, misturando rock alternativo, indie e R&B. Inclui faixas de sucesso como “Do I Wanna Know?”, “R U Mine?” e “Arabella”, consolidando a banda como referência do rock moderno.",
    new BigDecimal("199.90"),
    195,
    rock,
    "assets/img/fotos-produtos/produto33.jpeg"
);

Produto p34 = new Produto(
    null,
    "Please Please Me (1963)",
    "The Beatles",
    "Álbum de estreia dos Beatles, lançado em 1963. Com faixas como “I Saw Her Standing There” e “Love Me Do”, este disco introduziu o som único da banda e marcou o início da Beatlemania.",
    new BigDecimal("89.90"),
    125,
    rock,
    "assets/img/fotos-produtos/produto34.jpeg"
);

Produto p35 = new Produto(
    null,
    "Yellow Submarine",
    "The Beatles",
    "Lançado em 1969, Yellow Submarine acompanha a trilha sonora do filme homônimo. Inclui clássicos como “Yellow Submarine” e “All You Need Is Love”, misturando rock psicodélico e pop leve.",
    new BigDecimal("199.90"),
    119,
    rock,
    "assets/img/fotos-produtos/produto35.jpeg"
);

Produto p36 = new Produto(
    null,
    "Abbey Road",
    "The Beatles",
    "Lançado em 1969, Abbey Road é um dos álbuns mais icônicos dos Beatles, destacando faixas como “Come Together”, “Something” e “Here Comes The Sun”. Reconhecido pelo famoso cover da faixa de pedestres, é essencial para fãs de rock clássico e história da música.",
    new BigDecimal("100.90"),
    59,
    rock,
    "assets/img/fotos-produtos/produto36.jpeg"
);

Produto p37 = new Produto(
    null,
    "Falso Brilhante",
    "Elis Regina",
    "Lançado em 1976, Falso Brilhante é um dos álbuns mais icônicos de Elis Regina, destacando sua interpretação intensa e personalidade marcante. Inclui sucessos como “Como Nossos Pais” e “Fascinação”, consolidando-a como referência da música brasileira.",
    new BigDecimal("90.90"),
    67,
    mpb,
    "assets/img/fotos-produtos/produto37.jpeg"
);

Produto p38 = new Produto(
    null,
    "Acabou Chorare",
    "Novos Baianos",
    "Lançado em 1972, Acabou Chorare é um marco do rock e da música popular brasileira, mesclando samba, baião e rock. Com faixas como “Preta Pretinha” e “Mistério do Planeta”, o álbum é referência de criatividade e inovação musical no Brasil.",
    new BigDecimal("80.90"),
    50,
    mpb,
    "assets/img/fotos-produtos/produto38.jpeg"
);

Produto p39 = new Produto(
    null,
    "Cores, Nomes",
    "Caetano Veloso",
    "Lançado em 1982, Cores, Nomes traz Caetano Veloso explorando MPB com arranjos sofisticados e letras poéticas. Destacam-se faixas como “Você É Linda” e “Um Canto de Afoxé para o Bloco do Ilê”, mostrando a versatilidade e genialidade do artista.",
    new BigDecimal("87.90"),
    95,
    mpb,
    "assets/img/fotos-produtos/produto39.jpeg"
);

Produto p40 = new Produto(
    null,
    "Construção",
    "Chico Buarque",
    "Álbum lançado em 1971, Construção é considerado um dos melhores trabalhos de Chico Buarque. Com arranjos complexos e letras críticas sobre a sociedade brasileira, inclui faixas emblemáticas como “Construção” e “Deus Lhe Pague”.",
    new BigDecimal("89.90"),
    95,
    mpb,
    "assets/img/fotos-produtos/produto40.jpeg"
);

Produto p41 = new Produto(
    null,
    "Elis & Tom",
    "Elis Regina & Tom Jobim",
    "Lançado em 1974, Elis & Tom é uma colaboração histórica entre Elis Regina e Tom Jobim. O álbum apresenta clássicos da bossa nova como “Águas de Março” e “Wave”, destacando a harmonia perfeita entre voz e arranjos.",
    new BigDecimal("79.90"),
    170,
    mpb,
    "assets/img/fotos-produtos/produto41.jpeg"
);

Produto p42 = new Produto(
    null,
    "Clube da Esquina",
    "Milton Nascimento & Lô Borges",
    "Lançado em 1972, Clube da Esquina é um marco da música brasileira, misturando MPB, jazz e rock. Com faixas icônicas como “Cravo e Canela” e “Paisagem da Janela”, o álbum influenciou gerações de músicos brasileiros.",
    new BigDecimal("69.90"),
    150,
    mpb,
    "assets/img/fotos-produtos/produto42.jpeg"
);

Produto p43 = new Produto(
    null,
    "Expresso 2222",
    "Gilberto Gil",
    "Lançado em 1972, Expresso 2222 é um álbum emblemático de Gilberto Gil, combinando samba, rock e música popular brasileira. Destacam-se faixas como “Expresso 2222” e “Back in Bahia”, mostrando a versatilidade do artista.",
    new BigDecimal("79.90"),
    157,
    mpb,
    "assets/img/fotos-produtos/produto43.jpeg"
);

Produto p44 = new Produto(
    null,
    "Mais",
    "Marisa Monte",
    "Lançado em 1991, Mais é o segundo álbum de Marisa Monte, consolidando sua carreira com MPB moderna. Inclui sucessos como “Beija Eu” e “Depois”, mesclando arranjos sofisticados e melodias envolventes.",
    new BigDecimal("59.90"),
    151,
    mpb,
    "assets/img/fotos-produtos/produto44.jpeg"
);

Produto p45 = new Produto(
    null,
    "Oceano (Coisa de Acender)",
    "Djavan",
    "Lançado em 1982, Oceano (Coisa de Acender) é um dos álbuns mais memoráveis de Djavan, misturando MPB, jazz e elementos tropicais. Com faixas como “Oceano” e “Coisa de Acender”, o disco mostra sua habilidade em criar melodias sofisticadas e poéticas.",
    new BigDecimal("69.90"),
    167,
    mpb,
    "assets/img/fotos-produtos/produto45.jpeg"
);

Produto p46 = new Produto(
    null,
    "Evidências",
    "Chitãozinho & Xororó",
    "Lançado em 1990, Evidências é um dos álbuns mais icônicos da dupla Chitãozinho & Xororó, trazendo clássicos que marcaram a música sertaneja. Inclui faixas como “Evidências” e “Se Deus Me Ouvisse”, essenciais para fãs do gênero.",
    new BigDecimal("89.90"),
    209,
    sertanejo,
    "assets/img/fotos-produtos/produto46.jpeg"
);

Produto p47 = new Produto(
    null,
    "É o Amor",
    "Zezé Di Camargo & Luciano",
    "Álbum lançado em 1991, É o Amor é um marco da carreira da dupla Zezé Di Camargo & Luciano. Com sucessos como a faixa-título “É o Amor”, o disco consolidou a dupla no cenário sertanejo nacional.",
    new BigDecimal("79.90"),
    256,
    sertanejo,
    "assets/img/fotos-produtos/produto47.jpeg"
);

Produto p48 = new Produto(
    null,
    "Borboletas",
    "Victor & Leo",
    "Lançado em 2007, Borboletas apresenta o melhor da dupla Victor & Leo, com faixas românticas e hits como “Borboletas” e “Fada”. O álbum destaca a força do sertanejo moderno e da interpretação vocal da dupla.",
    new BigDecimal("85.50"),
    183,
    sertanejo,
    "assets/img/fotos-produtos/produto48.jpeg"
);

Produto p49 = new Produto(
    null,
    "Ao Vivo no Rio",
    "Luan Santana",
    "Registro ao vivo da turnê de Luan Santana, lançando seus maiores sucessos como “Meteoro” e “Te Esperando”. O álbum captura a energia do show e a paixão do público, consolidando Luan como um dos principais nomes do sertanejo contemporâneo.",
    new BigDecimal("92.00"),
    223,
    sertanejo,
    "assets/img/fotos-produtos/produto49.jpeg"
);

Produto p50 = new Produto(
    null,
    "O Embaixador",
    "Gusttavo Lima",
    "Lançado em 2011, O Embaixador é o álbum que marcou o sucesso de Gusttavo Lima no sertanejo universitário, com hits como “Balada Boa” e “Refém”. Um álbum essencial para fãs do gênero e colecionadores.",
    new BigDecimal("99.90"),
    162,
    sertanejo,
    "assets/img/fotos-produtos/produto50.jpeg"
);

Produto p51 = new Produto(
    null,
    "Acústico Ao Vivo",
    "Bruno & Marrone",
    "Álbum acústico lançado ao vivo, mostrando a força da dupla Bruno & Marrone. Com sucessos como “Choram as Rosas” e “Dormi na Praça”, o disco é um registro da emoção e interpretação do sertanejo romântico.",
    new BigDecimal("88.00"),
    140,
    sertanejo,
    "assets/img/fotos-produtos/produto51.jpeg"
);

Produto p52 = new Produto(
    null,
    "Cintilante (Ao Vivo)",
    "Simone Mendes",
    "Lançado em 2018, Cintilante (Ao Vivo) captura a essência da voz de Simone Mendes, trazendo arranjos ao vivo de sucessos como “Tá Tudo Bem” e “Cintilante”. Um álbum moderno que reafirma seu talento no sertanejo feminino.",
    new BigDecimal("82.50"),
    120,
    sertanejo,
    "assets/img/fotos-produtos/produto52.jpeg"
);

Produto p53 = new Produto(
    null,
    "Tudo na Paz",
    "Jorge & Mateus",
    "Lançado em 2012, Tudo na Paz reúne hits da dupla Jorge & Mateus, incluindo “Amo Noite e Dia” e “Pode Chorar”. O álbum destaca a versatilidade e a força do sertanejo contemporâneo.",
    new BigDecimal("90.00"),
    121,
    sertanejo,
    "assets/img/fotos-produtos/produto53.jpg"
);

Produto p54 = new Produto(
    null,
    "Hora Certa",
    "Paula Fernandes",
    "Álbum de Paula Fernandes lançado em 2009, Hora Certa traz faixas que consolidaram a cantora no cenário sertanejo romântico, incluindo sucessos como “Pássaro de Fogo” e “Hora Certa”.",
    new BigDecimal("87.90"),
    150,
    sertanejo,
    "assets/img/fotos-produtos/produto54.jpg"
);

Produto p55 = new Produto(
    null,
    "Alma Sertaneja | Discografia",
    "Chitãozinho & Xororó",
    "Coletânea especial da dupla Chitãozinho & Xororó, reunindo seus maiores sucessos ao longo da carreira, incluindo “Evidências”, “Fio de Cabelo” e “Se Deus Me Ouvisse”. Um álbum essencial para fãs do sertanejo clássico.",
    new BigDecimal("95.00"),
    180,
    sertanejo,
    "assets/img/fotos-produtos/produto55.jpg"
);
Produto p56 = new Produto(
    null,
    "Let There Be Light",
    "Hillsong Worship",
    "Álbum ao vivo do Hillsong Worship, gravado durante a Hillsong Conference em Sydney e lançado em 14 de outubro de 2016. O projeto captura a adoração congregacional com músicas que se tornaram grandes hinos modernos, como “Behold (Then Sings My Soul)”, “What a Beautiful Name” e “Grace to Grace”. É considerado um dos álbuns mais influentes do ministério global de louvor da Hillsong, reunindo líderes e compositores como Brooke Ligertwood, Ben Fielding, Joel Houston e Reuben Morgan. O álbum aborda temas de luz, esperança e a presença de Deus na vida do crente. ",
    new BigDecimal("99.90"),
    200,
    worship,
    "assets/img/fotos-produtos/produto56.jpeg"
);

Produto p57 = new Produto(
    null,
    "Child of God II",
    "Forrest Frank",
    "Segundo álbum de estúdio cristão do artista americano Forrest Frank, lançado em maio de 2025. O projeto mistura elementos de pop cristão e hip‑hop e tem sido bem recebido nas paradas de música cristã contemporânea, alcançando destaque com faixas como “Your Way’s Better” e colaborando com nomes como Thomas Rhett. O álbum celebra a identidade e a fé cristã por meio de composições modernas e acessíveis.",
    new BigDecimal("85.00"),
    150,
    worship,
    "assets/img/fotos-produtos/produto57.jpeg"
);

Produto p58 = new Produto(
    null,
    "Essência (Ao Vivo)",
    "Dunamis Music",
    "Projeto ao vivo do ministério Dunamis Music, lançado em 2024, que apresenta uma coletânea de músicas de adoração contemporânea com ênfase em presença, louvor e intimidade com Deus. O repertório inclui composições como “Essência” e outras que têm sido usadas em momentos de adoração e celebração em igrejas por todo o Brasil e no exterior.",
    new BigDecimal("92.50"),
    180,
    worship,
    "assets/img/fotos-produtos/produto58.jpeg"
);


Produto p59 = new Produto(
    null,
    "Live in Miami",
    "Hillsong United",
    "Álbum ao vivo do Hillsong United gravado em 2011 e lançado em 14 de fevereiro de 2012. Registrado na American Airlines Arena em Miami, o projeto traz performances de sucessos da banda e captura a energia de uma grande noite de adoração, com músicas como “Hosanna”, “Your Name High” e “From the Inside Out”.",
    new BigDecimal("88.00"),
    120,
    worship,
    "assets/img/fotos-produtos/produto59.jpeg"
);


Produto p60 = new Produto(
    null,
    "Essência",
    "Dunamis Music",
    "Projeto que reúne músicas significativas do ministério Dunamis Music, focadas em louvor, intimidade e devoção a Deus. O repertório (e o título) enfatizam a essência da adoração e a busca por um relacionamento mais profundo com Cristo.",
    new BigDecimal("90.00"),
    140,
    worship,
    "assets/img/fotos-produtos/produto60.jpeg"
);


Produto p61 = new Produto(
    null,
    "Live in Miami",
    "Hillsong United",
    "Registro ao vivo da banda Hillsong United capturado em Miami (2011), lançado em 2012. Ele apresenta performances de várias músicas que marcaram os primeiros anos da banda, destacando o estilo rock‑worship moderno em um ambiente de culto dinâmico e poderoso.",
    new BigDecimal("99.90"),
    200,
    worship,
    "assets/img/fotos-produtos/produto61.jpeg"
);


Produto p62 = new Produto(
    null,
    "Peregrino",
    "Alessandro Vilas Boas",
    "Álbum de adoração lançado por Alessandro Vilas Boas, com músicas em português que exploram temas de fé, caminhada espiritual e devoção. Com composições que convidam o ouvinte à reflexão e à entrega, o projeto é usado em cultos e momentos devocionais.",
    new BigDecimal("87.50"),
    100,
    worship,
    "assets/img/fotos-produtos/produto62.jpeg"
);


Produto p63 = new Produto(
    null,
    "Até Que Ele Venha / Chova Justiça",
    "Thamires Garcia",
    "Projeto musical da cantora Thamires Garcia, reunindo canções de adoração contemporânea que falam de esperança, justiça espiritual e expectativa pela manifestação de Deus. O álbum combina temas de fé com letras que buscam fortalecer a comunidade cristã através da música.",
    new BigDecimal("92.00"),
    120,
    worship,
    "assets/img/fotos-produtos/produto63.jpeg"
);


Produto p64 = new Produto(
    null,
    "Cultura do Céu",
    "Cultura do Céu",
    "Álbum do grupo brasileiro Cultura do Céu, liderado por Davi Fernandes com seus filhos Kaleb & Josh. O projeto traz músicas que misturam louvor contemporâneo com influências pop e eletrônicas e enfatizam temas de esperança, adoração e presença de Deus.",
    new BigDecimal("95.00"),
    150,
    worship,
    "assets/img/fotos-produtos/produto64.jpeg"
);


Produto p65 = new Produto(
    null,
    "Morada Para Onde Eu Irei",
    "Live Church",
    "Álbum congregacional da igreja Live Church, com canções de louvor que inspiram comunhão e adoração coletiva. O projeto é ideal para momentos de culto comunitário e celebração da fé cristã, reunindo músicas que enfatizam a presença de Deus como morada eterna do crente.",
    new BigDecimal("90.00"),
    180,
    worship,
    "assets/img/fotos-produtos/produto65.jpeg"
);

Produto p66 = new Produto(
    null,
    "Map of the Soul: 7",
    "BTS",
    "Lançado em 21 de fevereiro de 2020, “Map of the Soul: 7” é o quarto álbum em coreano (sétimo no geral) do BTS, marcando uma celebração dos sete anos de carreira do grupo. Com 20 faixas, o álbum mistura pop, R&B, hip hop e EDM, explorando temas de introspecção, crescimento pessoal e identidade. Inclui grandes sucessos como “ON” e “Black Swan”, além de colaborações notáveis (Halsey em “Boy With Luv” e Sia em “ON – Remix”). O álbum foi um dos mais vendidos de 2020 e ajudou a consolidar o BTS como fenômeno global.",
    new BigDecimal("120.00"),
    150,
    kpop,
    "assets/img/fotos-produtos/produto66.jpeg"
);

Produto p67 = new Produto(
    null,
    "BE",
    "BTS",
    "Lançado em 20 de novembro de 2020, “BE” é o quinto álbum em coreano (nono no geral) do BTS, criado em resposta à pandemia de COVID‑19 e concebido com forte participação dos próprios membros na composição e produção. O álbum transmite mensagens de esperança e conexão durante tempos difíceis, com faixas como “Life Goes On” e o single global “Dynamite”. Musicalmente, mescla pop, hip hop, disco e synth‑pop, refletindo emoções variadas como solidariedade, saudade e otimismo.",
    new BigDecimal("115.00"),
    120,
    kpop,
    "assets/img/fotos-produtos/produto67.jpeg"
);

Produto p68 = new Produto(
    null,
    "The Album",
    "BLACKPINK",
    "Lançado em 2 de outubro de 2020, “The Album” é o primeiro álbum de estúdio coreano do BLACKPINK, marcando um importante marco na carreira do grupo feminino. Com oito faixas, o trabalho mistura pop, hip hop, EDM e R&B, trazendo hits como “How You Like That”, “Ice Cream” (com Selena Gomez) e “Lovesick Girls”. O álbum explora temas de amor, crescimento e confiança, além de mostrar a versatilidade vocal e o forte apelo internacional do BLACKPINK.",
    new BigDecimal("125.00"),
    100,
    kpop,
    "assets/img/fotos-produtos/produto68.jpeg"
);

Produto p69 = new Produto(
    null,
    "Formula of Love: O+T=<3",
    "TWICE",
    "Lançado em 12 de novembro de 2021, “Formula of Love: O+T=<3” é o terceiro álbum de estúdio coreano (sexto no geral) do grupo TWICE. O álbum apresenta uma mistura de disco‑pop, synth‑pop, R&B e outros estilos, com faixas populares como “Scientist”, “The Feels” (primeiro single em inglês do grupo) e “Talk That Talk”. O projeto foi um dos mais vendidos do grupo até então e solidificou TWICE como um dos principais atos femininos no K‑pop global.",
    new BigDecimal("110.00"),
    140,
    kpop,
    "assets/img/fotos-produtos/produto69.jpeg"
);

Produto p70 = new Produto(
    null,
    "New Jeans",
    "NewJeans",
    "Lançado digitalmente em 1º de agosto de 2022 (físico em 8 de agosto de 2022), “New Jeans” é o EP de estreia do grupo NewJeans, introduzindo o quinteto ao cenário do K‑pop com um som fresco que mistura synth‑pop, R&B e hip‑hop. O EP contém grandes sucessos como “Attention”, “Hype Boy” e “Cookie”, que foram amplamente elogiados por sua produção inovadora e atraíram atenção internacional imediatamente após o debut do grupo.",
    new BigDecimal("105.00"),
    160,
    kpop,
    "assets/img/fotos-produtos/produto70.jpeg"
);

Produto p71 = new Produto(
    null,
    "Super Shy (Single)",
    "NewJeans",
    "Lançado como single e incorporado nas versões físicas/álbuns do NewJeans, “Super Shy” se tornou um dos maiores sucessos do grupo, com melodias cativantes e estética sonora que combina pop moderno com elementos de R&B e electro. A faixa ajudou o grupo a consolidar sua popularidade global e viralizou nas plataformas de streaming e redes sociais.",
    new BigDecimal("98.00"),
    200,
    kpop,
    "assets/img/fotos-produtos/produto71.jpeg"
);

Produto p72 = new Produto(
    null,
    "Lilac",
    "IU",
    "Lançado em 25 de março de 2021, “Lilac” é o quinto álbum de estúdio da cantora sul‑coreana IU, celebrando seus 13 anos de carreira com um projeto que mistura city pop, retro‑funk, pop e R&B. O álbum traz singles marcantes como “Celebrity”, “Lilac” e “Coin”, e foi certificado múltiplas vezes nas paradas coreanas por suas vendas e popularidade.",
    new BigDecimal("102.00"),
    120,
    kpop,
    "assets/img/fotos-produtos/produto72.jpeg"
);

Produto p73 = new Produto(
    null,
    "Love Poem",
    "IU",
    "Lançado em 18 de novembro de 2019, “Love Poem” é o quinto EP coreano de IU, que apresenta letras introspectivas e emotivas, com destaque para as faixas “Love Poem”, “Blueming” e “Above the Time”. O projeto foi aclamado tanto por fãs quanto pela crítica por sua profundidade emocional e pela performance vocal da artista.",
    new BigDecimal("100.00"),
    150,
    kpop,
    "assets/img/fotos-produtos/produto73.jpeg"
);

Produto p74 = new Produto(
    null,
    "Vale dos Reis: As Sete Portas da Energia",
    "Olodum",
    "Álbum do Olodum lançado em 2012, apresentando 8 faixas que celebram a energia vibrante e os ritmos afro‑brasileiros que caracterizam o samba‑reggae baiano. O projeto combina percussão intensa, letras que exaltam a cultura afro‑descendente e a tradição dos tambores do Olodum, refletindo sua importância na música e no carnaval da Bahia.",
    new BigDecimal("95.00"),
    120,
    olodum,
    "assets/img/fotos-produtos/produto80.jpeg"
);

Produto p75 = new Produto(
    null,
    "Samba de Raiz Ao Vivo",
    "Diversos Artistas",
    "Coletânea ao vivo que reúne clássicos do samba de raiz interpretados por diversos artistas consagrados. O álbum apresenta performances autênticas e espontâneas que capturam a essência do samba tradicional, com sonoridade que enfatiza cavaquinho, pandeiro e voz, celebrando a história e a cultura do gênero.",
    new BigDecimal("89.90"),
    150,
    samba,
    "assets/img/fotos-produtos/produto74.jpg"
);

Produto p76 = new Produto(
    null,
    "Deixa a Vida Me Levar",
    "Zeca Pagodinho",
    "Clássico álbum do sambista Zeca Pagodinho com destaque para o hit “Deixa a Vida Me Levar”, que se tornou um dos maiores símbolos do samba e pagode brasileiros. O projeto mistura composições que celebram alegria, cotidiano e malandragem com a interpretação descontraída e carismática que marcou a carreira do artista.",
    new BigDecimal("92.50"),
    100,
    samba,
    "assets/img/fotos-produtos/produto75.jpg"
);


Produto p77 = new Produto(
    null,
    "Nosso Samba",
    "Fundo de Quintal",
    "Álbum representativo do Fundo de Quintal, grupo lendário do samba carioca, reunindo faixas que se tornaram referência do samba de roda e pagode. Com arranjos marcantes de cavaco, banjo e percussão e vozes harmonizadas, o projeto celebra a tradição do samba com repertório que influenciou gerações de músicos.",
    new BigDecimal("94.00"),
    140,
    samba,
    "assets/img/fotos-produtos/produto76.jpeg"
);


Produto p78 = new Produto(
    null,
    "Samba Quente",
    "Fundo de Quintal",
    "Coletânea com os maiores sucessos do Fundo de Quintal, trazendo o melhor do samba e do pagode carioca. O repertório inclui interpretações emblemáticas que destacam a musicalidade e a contribuição do grupo para a história do samba popular brasileiro.",
    new BigDecimal("90.00"),
    120,
    samba,
    "assets/img/fotos-produtos/produto77.jpeg"
);

Produto p79 = new Produto(
    null,
    "Edição Especial Para Alguém Muito Especial",
    "Olodum",
    "Coletânea especial do Olodum com faixas que celebram a cultura afro‑brasileira e o ritmo contagiante do samba‑reggae. O álbum reúne sucessos do grupo percussivo, destacando sua contribuição histórica ao carnaval de Salvador e à música brasileira.",
    new BigDecimal("96.50"),
    100,
    olodum,
    "assets/img/fotos-produtos/produto78.jpeg"
);

Produto p80 = new Produto(
    null,
    "Canta Canta, Minha Gente",
    "Martinho da Vila",
    "Lançado em 1974, “Canta Canta, Minha Gente” é um dos álbuns mais emblemáticos de Martinho da Vila, com letras poéticas e melodias que celebram as tradições do samba. O disco é considerado um clássico da música brasileira e inclui faixas que se tornaram parte do repertório essencial do gênero.",
    new BigDecimal("97.00"),
    80,
    samba,
    "assets/img/fotos-produtos/produto79.jpeg"
);

Produto p81 = new Produto(
    null,
    "Olodum Pela Vida",
    "Olodum",
    "Coletânea do Olodum que destaca sua trajetória musical e a força dos ritmos afro‑brasileiros, misturando percussão contagiante e músicas que celebram a vida, a cultura e a tradição do samba‑reggae. O álbum inclui temas consagrados e referências à presença do Olodum no cenário musical brasileiro.",
    new BigDecimal("95.50"),
    100,
    olodum,
    "assets/img/fotos-produtos/produto82.jpg"
);


Produto p82 = new Produto(
    null,
    "Timbalada",
    "Timbalada",
    "Lançado em 1993, este álbum da Timbalada apresenta o percussivo e inovador estilo samba‑reggae baiano criado por Carlinhos Brown. Com batidas intensas, ritmo contagiante e instrumentos marcantes, o trabalho consolidou o grupo como um dos principais representantes da música baiana no Brasil e no exterior.",
    new BigDecimal("98.00"),
    120,
    samba,
    "assets/img/fotos-produtos/produto81.jpeg"
);

Produto p83 = new Produto(
    null,
    "Legend: The Best of Bob Marley and the Wailers (Deluxe Edition)",
    "Bob Marley & The Wailers",
    "Coletânea lançada originalmente em 1984 e posteriormente em edições deluxe com duas faixas extras e material remasterizado. “Legend” é a coletânea de maior sucesso da história do reggae, reunindo hits que moldaram o gênero, incluindo “No Woman, No Cry”, “One Love/People Get Ready”, “Buffalo Soldier”, “Jamming” e “Could You Be Loved”. É considerado o álbum mais vendido de reggae de todos os tempos e um marco na popularização global da música de Bob Marley e sua banda.",
    new BigDecimal("120.00"),
    150,
    reggae,
    "assets/img/fotos-produtos/produto83.jpg"
);

Produto p84 = new Produto(
    null,
    "Exodus",
    "Bob Marley & The Wailers",
    "Lançado em 3 de junho de 1977, ‘Exodus’ é o nono álbum de estúdio de Bob Marley & The Wailers e um dos mais influentes do reggae. O álbum combina temas sociais, políticos e espirituais com grooves inconfundíveis, incluindo faixas marcantes como “Jamming”, “Three Little Birds”, “Exodus” e “Waiting in Vain”. O trabalho foi gravado após um período turbulento na vida de Marley e ajudou a consolidar sua fama mundial.",
    new BigDecimal("110.00"),
    120,
    reggae,
    "assets/img/fotos-produtos/produto84.jpg"
);

Produto p85 = new Produto(
    null,
    "The Harder They Come (Soundtrack)",
    "Jimmy Cliff & Various Artists",
    "Trilha sonora do filme jamaicano ‘The Harder They Come’, lançada em 1972, que se tornou um dos principais pontos de referência do reggae internacional. A obra apresenta Jimmy Cliff interpretando a faixa‑título “The Harder They Come”, além de músicas de outros artistas que ajudaram a introduzir o reggae e o ska ao público global, com influências que vão do rocksteady ao reggae roots.",
    new BigDecimal("95.00"),
    100,
    reggae,
    "assets/img/fotos-produtos/produto85.jpg"
);

Produto p86 = new Produto(
    null,
    "Equal Rights",
    "Peter Tosh",
    "Lançado em 1977, ‘Equal Rights’ é o segundo álbum solo do ex‑Wailer Peter Tosh e uma obra fundamental do reggae politizado, com temas de justiça social e resistência. O álbum traz faixas poderosas como a faixa‑título “Equal Rights” e “Get Up, Stand Up” (co‑escrita com Bob Marley), expressando mensagens diretas de igualdade, liberdade e luta contra a opressão.",
    new BigDecimal("98.50"),
    80,
    reggae,
    "assets/img/fotos-produtos/produto86.jpg"
);

Produto p87 = new Produto(
    null,
    "Marcus Garvey",
    "Burning Spear",
    "Lançado em 12 de dezembro de 1975, ‘Marcus Garvey’ é o terceiro álbum do jamaicano Burning Spear (Winston Rodney), um marco do roots reggae. Nomeado em homenagem ao líder pan‑africanista Marcus Garvey, o álbum combina ritmos tradicionais com letras conscientes sobre identidade, história e luta pela liberdade, incluindo faixas como “Marcus Garvey”, “Slavery Days” e “Old Marcus Garvey”.",
    new BigDecimal("97.00"),
    100,
    reggae,
    "assets/img/fotos-produtos/produto87.jpg"
);

Produto p88 = new Produto(
    null,
    "Funky Kingston",
    "Toots & The Maytals",
    "Lançado originalmente no início dos anos 1970 e ampliado internacionalmente em 1975, ‘Funky Kingston’ é um dos álbuns mais celebrados do grupo Toots & The Maytals, combinando reggae, ska e soul com groove contagiante. Destaque para faixas como “Funky Kingston”, “Time Tough” e interpretações cheias de energia que ajudaram a definir a evolução do reggae para públicos além da Jamaica.",
    new BigDecimal("96.50"),
    90,
    reggae,
    "assets/img/fotos-produtos/produto88.jpg"
);

Produto p89 = new Produto(
    null,
    "Night Nurse",
    "Gregory Isaacs",
    "Lançado em 1982, ‘Night Nurse’ é um dos álbuns mais emblemáticos de Gregory Isaacs, consolidando seu estilo suave e sensual no reggae, muitas vezes associado ao subgênero known as lovers rock. A faixa‑título “Night Nurse” tornou‑se um hit global, destacando a voz única e a capacidade de Isaacs em misturar temas românticos com arranjos reggae sofisticados.",
    new BigDecimal("99.00"),
    110,
    reggae,
    "assets/img/fotos-produtos/produto89.jpg"
);

Produto p90 = new Produto(
    null,
    "Cool Ruler",
    "Gregory Isaacs",
    "Lançado em 1978, ‘Cool Ruler’ é um dos primeiros álbuns que consolidaram Gregory Isaacs como um dos maiores nomes do reggae, mostrando seu estilo suave e elegante que mais tarde influenciaria o lovers rock. O álbum traz uma fusão de grooves reggae clássicos com a voz característica de Isaacs, marcada por sensibilidade e sentimento.",
    new BigDecimal("95.50"),
    100,
    reggae,
    "assets/img/fotos-produtos/produto90.jpg"
);

Produto p91 = new Produto(
    null,
    "KPop Demon Hunters (Original Motion Picture Soundtrack)",
    "Various Artists",
    "Trilha sonora oficial do filme de animação musical \"KPop Demon Hunters\", lançada em 20 de junho de 2025. O álbum reúne músicas originais interpretadas por vários artistas (incluindo os grupos fictícios HUNTR/X e Saja Boys, além de participações de TWICE e MeloMance), misturando K‑Pop e electropop com temas cinematográficos. Hits como “Takedown”, “Golden” e “Soda Pop” ajudaram o álbum a alcançar destaque global nas paradas musicais, consolidando‑o como um fenômeno pop e cultural.",
    new BigDecimal("209.90"),
    200,
    kpop,
    "assets/img/fotos-produtos/produto91.jpeg"
);

Produto p92 = new Produto(
    null,
    "1989 (Taylor's Version)",
    "Taylor Swift",
    "Regravação do icônico álbum de 2014, lançado em 2023, 1989 (Taylor's Version) traz todos os hits originais como “Shake It Off”, “Blank Space” e “Style”, além de faixas inéditas e versões repaginadas. O álbum celebra o pop de Taylor Swift e reafirma sua trajetória artística.",
    new BigDecimal("209.90"),
    280,
    pop,
    "assets/img/fotos-produtos/produto92.jpeg"
);

Produto p93 = new Produto(
    null,
    "Thank U, Next (Exclusive Limited Edition)",
    "Ariana Grande",
    "Edição limitada do álbum icônico \"Thank U, Next\" (2019), que inclui hits como “7 Rings”, “Break Up with Your Girlfriend, I’m Bored” e a faixa-título “Thank U, Next”. Esta edição exclusiva traz conteúdo bônus, arte diferenciada e faixas inéditas, celebrando o pop contemporâneo e a carreira da artista.",
    new BigDecimal("319.90"),
    220,
    pop,
    "assets/img/fotos-produtos/produto93.jpg"
);

Produto p94 = new Produto(
    null,
    "SUPER REAL ME (Debut Mini Album)",
    "ILLIT",
    "Álbum de estreia do artista ILLIT, lançado em 2025, trazendo faixas de hip-hop e pop contemporâneo. O mini álbum apresenta músicas cativantes e experimentais, consolidando ILLIT como uma nova referência na cena musical internacional.",
    new BigDecimal("199.90"),
    150,
    kpop,
    "assets/img/fotos-produtos/produto94.jpeg"
);

Produto p95 = new Produto(
    null,
    "4 ONLY",
    "Lee Hi",
    "Álbum lançado em 2021 pela cantora sul-coreana Lee Hi, trazendo uma mistura de R&B, soul e pop. \"4 ONLY\" apresenta faixas como “Red Lipstick” e “Intentions”, destacando a versatilidade vocal e o estilo único da artista.",
    new BigDecimal("155.00"),
    120,
    kpop,
    "assets/img/fotos-produtos/produto95.jpeg"
);

Produto p96 = new Produto(
    null,
    "Young Forever",
    "BTS",
    "Álbum lançado em 2016 pelo BTS, reunindo músicas do conceito ‘The Most Beautiful Moment in Life’ e incluindo hits como “Fire”, “Save Me” e “Epilogue: Young Forever”. Uma coletânea que celebra a juventude e a trajetória do grupo no K-Pop.",
    new BigDecimal("245.00"),
    14,
    kpop,
    "assets/img/fotos-produtos/produto96.jpeg"
);

Produto p97 = new Produto(
    null,
    "Visceral (EP)",
    "José Jr",
    "EP lançado em 2023 pelo cantor José Jr, no gênero gospel. Visceral apresenta faixas com letras profundas e emotivas, explorando temas de fé, dependência espiritual e devoção, reforçando a sensibilidade artística e a conexão da música com a espiritualidade.",
    new BigDecimal("89.90"),
    180,
    worship,
    "assets/img/fotos-produtos/produto97.jpeg"
);

Produto p98 = new Produto(
    null,
    "My World 2.0",
    "Justin Bieber",
    "Álbum de estúdio lançado em 2010 por Justin Bieber, servindo como a segunda parte do projeto iniciado com o EP “My World”. Combina pop adolescente, R&B e dance‑pop, incluindo faixas de grande sucesso como “Baby” (com Ludacris), “Never Let You Go”, “Somebody to Love” e “U Smile”. O álbum estreou no topo da Billboard 200 e consolidou Bieber como uma das principais vozes do pop juvenil.",
    new BigDecimal("209.90"),
    200,
    pop,
    "assets/img/fotos-produtos/produto98.jpeg"
);

Produto p99 = new Produto(
    null,
    "Dangerous Woman",
    "Ariana Grande",
    "Álbum lançado em 2016 por Ariana Grande, apresentando um estilo pop maduro e R&B contemporâneo. Inclui hits como “Into You”, “Side to Side” (feat. Nicki Minaj) e a faixa-título “Dangerous Woman”, consolidando Ariana como uma das principais artistas pop da década.",
    new BigDecimal("209.90"),
    150,
    pop,
    "assets/img/fotos-produtos/produto99.jpeg"
);

Produto p100 = new Produto(
    null,
    "Amado Timóteo",
    "Marco Telles",
    "Álbum lançado em 2021 pelo cantor e compositor Marco Telles, com 9 faixas que combinam adoração cristã e música inspiradora. O projeto musical é baseado em temáticas espirituais e mensagens de fé, tendo sido produzido em formato de sermão musical e disponível nas principais plataformas de streaming.",
    new BigDecimal("89.90"),
    18,
    worship,
    "assets/img/fotos-produtos/produto100.jpeg"
);

               produtoRepo.saveAll(Arrays.asList( p1, p2, p3, p4, p5,p6, p7, p8, p9, p10,p11, p12, p13, p14, p15,p16, p17, p18, p19, p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30, p31, p32, p33, p34,p35, p36,p37,p38,p39,p40,p41,p42,p43,p44,p45,p46, p47, p48, p49, p50, p51, p52, p53, p54, p55,p56, p57, p58, p59, p60,p61, p62, p63, p64, p65,p66, p67, p68, p69, p70, p71, p72, p73,p74,p75, p76, p77, p78,p79, p80, p81, p82,p83, p84, p85, p86, p87,p88, p89, p90,p91,p92,p93,p94,p95,p96,p97,p98,p99,p100));
            }
        }
            // 3. Usuários e Carrinhos
            if (usuarioRepo.count() == 0) {
                // Admin    
                Usuario admin = new Usuario(); // Construtor vazio (NoArgsConstructor)
                admin.setNome("Rafael Admin");
                admin.setEmail("admin@loja.com");
                admin.setSenha("senha1234");
                admin.setTipo(TipoUsuario.ADMIN);
                // Endereço fica null automaticamente, não precisa passar

                // Cliente
                Usuario cliente = new Usuario();
                cliente.setNome("Vagner Cliente");
                cliente.setEmail("cliente@loja.com");
                cliente.setSenha("senha1234");
                cliente.setTipo(TipoUsuario.CLIENTE);

                // Salva no banco
                usuarioRepo.saveAll(Arrays.asList(admin, cliente)); // Salva Usuários para gerar ID

                // CRIA CARRINHOS AUTOMATICAMENTE
                Carrinho carrinhoAdmin = new Carrinho();
                carrinhoAdmin.setUsuario(admin);
                
                Carrinho carrinhoCliente = new Carrinho();
                carrinhoCliente.setUsuario(cliente);

                carrinhoRepository.saveAll(Arrays.asList(carrinhoAdmin, carrinhoCliente));
                System.out.println("--- DADOS INICIAIS: Usuários e Carrinhos criados com sucesso ---");
            }
            
        };
    }
}
