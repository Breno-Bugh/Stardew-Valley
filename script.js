const header = document.getElementById("header");
header.innerHTML = `
        <header class="top-main-nav">
            <a href="Estacoes.html">Estações</a>
            <a href="centro.html">Centro Comunitário</a>
            <a href="minas.html">Minas</a>
            <a href="construcoes.html">Construções</a>
        </header>
`;

const Npc = {
    Kent: {
        nomeNpc: "Kent",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/8/86/Kent_Icon.png",
        diaAniversario: "04",
        estacaoAniversario: 1,
        presentesAmados: "Avelãs Torradas, Risoto de Samambaia",
        presentesGostados: "Narciso",
    },

    Lewis: {
        nomeNpc: "Lewis",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Lewis_Icon.png",
        diaAniversario: "07",
        estacaoAniversario: 1,
        presentesAmados: "Pimenta, Inhames com Cobertura",
        presentesGostados: "Coco, Mirtilo",
    },

    Vincent: {
        nomeNpc: "Vincent",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Vincent_Icon.png",
        diaAniversario: "10",
        estacaoAniversario: 1,
        presentesAmados: "Uva, Lesma",
        presentesGostados: "Narciso, Coco",
    },

    Haley: {
        nomeNpc: "Haley",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/f/f7/Haley_Icon.png",
        diaAniversario: "14",
        estacaoAniversario: 1,
        presentesAmados: "Coco, Girassol",
        presentesGostados: "Narciso",
    },

    Pam: {
        nomeNpc: "Pam",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/b/b6/Pam_Icon.png",
        diaAniversario: "18",
        estacaoAniversario: 1,
        presentesAmados: "Chirívia, Cerveja",
        presentesGostados: "Narciso",
    },

    Shane: {
        nomeNpc: "Shane",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/b/b4/Shane_Icon.png",
        diaAniversario: "20",
        estacaoAniversario: 1,
        presentesAmados: "Pimenta, Cerveja",
        presentesGostados: "Ovo",
    },

    Pierre: {
        nomeNpc: "Pierre",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/c/cf/Pierre_Icon.png",
        diaAniversario: "26",
        estacaoAniversario: 1,
        presentesAmados: "Lula frita",
        presentesGostados: "Dente-de-leão",
    },

    Emily: {
        nomeNpc: "Emily",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/c/c3/Emily_Icon.png",
        diaAniversario: "27",
        estacaoAniversario: 1,
        presentesAmados: "Gemas raras",
        presentesGostados: "Quartzo",
    },

    Jas: {
        nomeNpc: "Jas",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/6/68/Jas_Icon.png",
        diaAniversario: "04",
        estacaoAniversario: 2,
        presentesAmados: "Bolo rosa",
        presentesGostados: "Narciso, Coco",
    },

    Gus: {
        nomeNpc: "Gus",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Gus_Icon.png",
        diaAniversario: "08",
        estacaoAniversario: 2,
        presentesAmados: "Laranja, Diamante",
        presentesGostados: "Narciso",
    },

    Maru: {
        nomeNpc: "Maru",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/2/23/Maru_Icon.png",
        diaAniversario: "10",
        estacaoAniversario: 2,
        presentesAmados: "Couve-flor, Morango",
        presentesGostados: "Quartzo",
    },

    Alex: {
        nomeNpc: "Alex",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/7/73/Alex_Icon.png",
        diaAniversario: "13",
        estacaoAniversario: 2,
        presentesAmados: "Café da manhã completo, Jantar de salmão",
        presentesGostados: "Lanchinho",
    },

    Sam: {
        nomeNpc: "Sam",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/5/52/Sam_Icon.png",
        diaAniversario: "17",
        estacaoAniversario: 2,
        presentesAmados: "Pizza, Olho de Tigre",
        presentesGostados: "Joja-cola",
    },

    Demetrius: {
        nomeNpc: "Demetrius",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/0/0b/Demetrius_Icon.png",
        diaAniversario: "19",
        estacaoAniversario: 2,
        presentesAmados: "Morango, Sorvete",
        presentesGostados: "Cogumelo roxo",
    },

    Anao: {
        nomeNpc: "Anão",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/0/08/Dwarf_Icon.png",
        diaAniversario: "22",
        estacaoAniversario: 2,
        presentesAmados: "Gemas raras",
        presentesGostados: "Quartzo",
    },

    Willy: {
        nomeNpc: "Willy",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/7/73/Willy_Icon.png",
        diaAniversario: "24",
        estacaoAniversario: 2,
        presentesAmados: "Abóbora, Bagre, Diamante",
        presentesGostados: "Quartzo",
    },

    Leo: {
        nomeNpc: "Leo",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/3/3d/Leo_Icon.png",
        diaAniversario: "26",
        estacaoAniversario: 2,
        presentesAmados: "Manga, Pena de pato",
        presentesGostados: "Quartzo",
    },

    Penny: {
        nomeNpc: "Penny",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/b/bc/Penny_Icon.png",
        diaAniversario: "02",
        estacaoAniversario: 3,
        presentesAmados: "Diamante, Esmeralda, Melão, Papoula",
        presentesGostados: "Alho-poró",
    },

    Elliott: {
        nomeNpc: "Elliott",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/6/6f/Elliott_Icon.png",
        diaAniversario: "05",
        estacaoAniversario: 3,
        presentesAmados: "Lagosta, Romã",
        presentesGostados: "Lula, Polvo",
    },

    Jodi: {
        nomeNpc: "Jodi",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/f/f7/Jodi_Icon.png",
        diaAniversario: "11",
        estacaoAniversario: 3,
        presentesAmados: "Diamante, Bolo de chocolate",
        presentesGostados: "Ovo",
    },

    Abigail: {
        nomeNpc: "Abigail",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/6/63/Abigail_Icon.png",
        diaAniversario: "13",
        estacaoAniversario: 3,
        presentesAmados: "Ametista, Abóbora",
        presentesGostados: "Quartzo",
    },

    Sandy: {
        nomeNpc: "Sandy",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/7/7d/Sandy_Icon.png",
        diaAniversario: "15",
        estacaoAniversario: 3,
        presentesAmados: "Narciso, Ervilha-de-cheiro",
        presentesGostados: "Quartzo",
    },

    Marnie: {
        nomeNpc: "Marnie",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Marnie_Icon.png",
        diaAniversario: "18",
        estacaoAniversario: 3,
        presentesAmados: "Diamante, Bolo rosa",
        presentesGostados: "Quartzo",
    },

    Robin: {
        nomeNpc: "Robin",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/d/d1/Robin_Icon.png",
        diaAniversario: "21",
        estacaoAniversario: 3,
        presentesAmados: "Espaguete, Pêssego",
        presentesGostados: "Madeira de lei, Quartzo",
    },

    George: {
        nomeNpc: "George",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/a/ad/George_Icon.png",
        diaAniversario: "24",
        estacaoAniversario: 3,
        presentesAmados: "Alho-poró",
        presentesGostados: "Narciso",
    },

    Krobus: {
        nomeNpc: "Krobus",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/1/10/Krobus_Icon.png",
        diaAniversario: "01",
        estacaoAniversario: 4,
        presentesAmados: "Abóbora, Ovo nulo",
        presentesGostados: "Quartzo",
    },

    Linus: {
        nomeNpc: "Linus",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/d/db/Linus_Icon.png",
        diaAniversario: "03",
        estacaoAniversario: 4,
        presentesAmados: "Inhame, Coco",
        presentesGostados: "Coletas",
    },

    Caroline: {
        nomeNpc: "Caroline",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/d/d4/Caroline_Icon.png",
        diaAniversario: "07",
        estacaoAniversario: 4,
        presentesAmados: "Flor-Miçanga, Chá verde",
        presentesGostados: "Narciso, Raiz-forte",
    },

    Sebastian: {
        nomeNpc: "Sebastian",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/6/6a/Sebastian_Icon.png",
        diaAniversario: "10",
        estacaoAniversario: 4,
        presentesAmados: "Lágrima Congelada",
        presentesGostados: "Quartzo",
    },

    Harvey: {
        nomeNpc: "Harvey",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/7/7a/Harvey_Icon.png",
        diaAniversario: "14",
        estacaoAniversario: 4,
        presentesAmados: "Café, Picles",
        presentesGostados: "Quartzo, Coletas",
    },

    Feiticeiro: {
        nomeNpc: "Feiticeiro",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/e/e9/Wizard_Icon.png",
        diaAniversario: "17",
        estacaoAniversario: 4,
        presentesAmados: "Essência solar, Essência do Vazio",
        presentesGostados: "Quartzo",
    },

    Evelyn: {
        nomeNpc: "Evelyn",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/5/54/Evelyn_Icon.png",
        diaAniversario: "20",
        estacaoAniversario: 4,
        presentesAmados: "Beterraba, Diamante",
        presentesGostados: "Lixo, Concha",
    },

    Leah: {
        nomeNpc: "Leah",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/6/6e/Leah_Icon.png",
        diaAniversario: "23",
        estacaoAniversario: 4,
        presentesAmados: "Refogado, Trufa",
        presentesGostados: "Lixo, Coletas",
    },

    Clint: {
        nomeNpc: "Clint",
        iconeNpc: "https://stardewvalleywiki.com/mediawiki/images/7/74/Clint_Icon.png",
        diaAniversario: "26",
        estacaoAniversario: 4,
        presentesAmados: "Gemas raras, Barra de Ouro",
        presentesGostados: "Barra de Cobre, Barra de Ferro",
    },
};

const peixes = [
    // ==================== PRIMAVERA ====================

    {
        peixe: "Anchova",
        estacao: [1],
        horario: "-",
        clima: "-",
        lugar: "Oceano",
        gold: "45~90"
    },
    {
        peixe: "Achigã-pequeno",
        estacao: [1],
        horario: "-",
        clima: "-",
        lugar: "Rio (Cidade), Lago(Floresta)",
        gold: "75~150"
    },
    {
        peixe: "Bagre",
        estacao: [1, 2, 3],
        horario: "6h-00h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta), Lago (Bosque Secreto)",
        gold: "300~600"
    },
    {
        peixe: "Peixe-sol",
        estacao: [1, 2],
        horario: "6h-19h",
        clima: "Sol, Vento",
        lugar: "Rio (Cidade, Floresta)",
        gold: "45~90"
    },
    {
        peixe: "Arenque",
        estacao: [1, 4],
        horario: "-",
        clima: "-",
        lugar: "Oceano",
        gold: "45~90"
    },
    {
        peixe: "Enguia",
        estacao: [1, 3],
        horario: "16h-2h",
        clima: "Chuva",
        lugar: "Oceano",
        gold: "127~255"
    },
    {
        peixe: "Sardinha",
        estacao: [1, 3, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "60~120"
    },
    {
        peixe: "Alocine",
        estacao: [1, 3],
        horario: "9h-2h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta)",
        gold: "90~180"
    },
    {
        peixe: "Linguado",
        estacao: [1, 2],
        horario: "6h-20h",
        clima: "-",
        lugar: "Oceano",
        gold: "150~300"
    },
    {
        peixe: "Halibute",
        estacao: [1, 2, 4],
        horario: "6h-11h / 19h-2h",
        clima: "-",
        lugar: "Oceano, Lago (Montanha)",
        gold: "120~240"
    },
    {
        peixe: "Brema",
        estacao: [1, 2, 3, 4],
        horario: "18h-2h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "67~135"
    },
    {
        peixe: "Achigã",
        estacao: [1, 2, 3, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "150~300"
    },
    {
        peixe: "Peixe-gato-cabeçudo",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "112~225"
    },
    {
        peixe: "Esquálio",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta), Lago (Montanha)",
        gold: "75~125"
    },
    {
        peixe: "Madeirão",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Bosque Secreto)",
        gold: "112~225"
    },
    {
        peixe: "Salmão nulo",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Pântano da Bruxa",
        gold: "225~450"
    },
    {
        peixe: "Salmão Mutante",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Covil dos Insetos Mutantes",
        gold: "150~300"
    },
    {
        peixe: "Carpa",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha, Bosque Secreto), Esgoto",
        gold: "45~90"
    },
    {
        peixe: "Gobi",
        estacao: [1, 2, 3, 4],
        horario: "-",
        clima: "-",
        lugar: "Cachoeira (Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Lenda",
        estacao: [1],
        horario: "-",
        clima: "Chuva",
        lugar: "Lago (Montanha)",
        gold: "7,5k~15k"
    },


    // ==================== VERÃO ====================

    {
        peixe: "Baiacu",
        estacao: [2],
        horario: "12h-16h",
        clima: "Sol",
        lugar: "Oceano",
        gold: "300~600"
    },
    {
        peixe: "Atum",
        estacao: [2, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "150~300"
    },
    {
        peixe: "Truta Arco-íris",
        estacao: [2],
        horario: "6h-19h",
        clima: "Sol",
        lugar: "Rio (Cidade, Floresta), Lago(Montanha)",
        gold: "97~195"
    },
    {
        peixe: "Bagre",
        estacao: [2],
        horario: "6h-00h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta), Lago (Bosque Secreto)",
        gold: "300~600"
    },
    {
        peixe: "Lúcio",
        estacao: [2, 4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta)",
        gold: "150~300"
    },
    {
        peixe: "Peixe-sol",
        estacao: [2],
        horario: "6h-19h",
        clima: "Sol, Vento",
        lugar: "Rio (Cidade, Floresta)",
        gold: "45~90"
    },
    {
        peixe: "Salmonete",
        estacao: [2, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Polvo",
        estacao: [2],
        horario: "6h-13h",
        clima: "-",
        lugar: "Oceano",
        gold: "225~450"
    },
    {
        peixe: "Cioba",
        estacao: [2, 3, 4],
        horario: "6h-19h",
        clima: "Chuva",
        lugar: "Oceano",
        gold: "75~150"
    },
    {
        peixe: "Super-Pepino",
        estacao: [2, 3],
        horario: "18h-2h",
        clima: "-",
        lugar: "Oceano",
        gold: "375~750"
    },
    {
        peixe: "Esturjão",
        estacao: [2, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "300~600"
    },
    {
        peixe: "Tilápia",
        estacao: [2, 3],
        horario: "6h-14h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Dourado",
        estacao: [2],
        horario: "6h-19h",
        clima: "-",
        lugar: "Rio (Floresta)",
        gold: "150~300"
    },
    {
        peixe: "Linguado",
        estacao: [2],
        horario: "6h-20h",
        clima: "-",
        lugar: "Oceano",
        gold: "150~300"
    },
    {
        peixe: "Alocine",
        estacao: [2, 3],
        horario: "9h-2h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta)",
        gold: "90~180"
    },
    {
        peixe: "Halibute",
        estacao: [2],
        horario: "6h-11h / 19h-2h",
        clima: "-",
        lugar: "Oceano, Lago (Montanha)",
        gold: "120~240"
    },
    {
        peixe: "Carpa",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha, Bosque Secreto), Esgoto",
        gold: "45~90"
    },
    {
        peixe: "Gobi",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Cachoeira (Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Brema",
        estacao: [2],
        horario: "18h-2h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "67~135"
    },
    {
        peixe: "Achigã",
        estacao: [2],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "150~300"
    },
    {
        peixe: "Peixe-gato-cabeçudo",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "112~225"
    },
    {
        peixe: "Esquálio",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta), Lago (Montanha)",
        gold: "75~125"
    },
    {
        peixe: "Madeirão",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Floresta Secreta",
        gold: "112~225"
    },
    {
        peixe: "Salmão nulo",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Pântano da Bruxa",
        gold: "225~450"
    },
    {
        peixe: "Salmão Mutante",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Covil dos Insetos Mutantes",
        gold: "150~300"
    },
    {
        peixe: "Peixe-Carmin",
        estacao: [2],
        horario: "-",
        clima: "-",
        lugar: "Oceano",
        gold: "2,2k~4,5k"
    },


    // ==================== OUTONO ====================

    {
        peixe: "Anchova",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Oceano",
        gold: "45~90"
    },
    {
        peixe: "Sardinha",
        estacao: [3],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "60~120"
    },
    {
        peixe: "Achigã-pequeno",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Rio (Cidade), Lago(Floresta)",
        gold: "75~150"
    },
    {
        peixe: "Salmão",
        estacao: [3],
        horario: "6h-19h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "112~225"
    },
    {
        peixe: "Picão-verde",
        estacao: [3],
        horario: "12h-2h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta), Lago (Floresta)",
        gold: "157~315"
    },
    {
        peixe: "Bagre",
        estacao: [3],
        horario: "6h-00h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta), Lago (Bosque Secreto)",
        gold: "300~600"
    },
    {
        peixe: "Enguia",
        estacao: [3],
        horario: "16h-2h",
        clima: "Chuva",
        lugar: "Oceano",
        gold: "127~255"
    },
    {
        peixe: "Cioba",
        estacao: [3],
        horario: "6h-19h",
        clima: "Chuva",
        lugar: "Oceano",
        gold: "75~150"
    },
    {
        peixe: "Pepino-do-mar",
        estacao: [3, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Super-Pepino",
        estacao: [3],
        horario: "18h-2h",
        clima: "-",
        lugar: "Oceano",
        gold: "375~750"
    },
    {
        peixe: "Salmão Híbrido",
        estacao: [3, 4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Tilápia",
        estacao: [3],
        horario: "6h-14h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Albacora",
        estacao: [3, 4],
        horario: "6h-11h / 18h-2h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Carpa da Meia-Noite",
        estacao: [3, 4],
        horario: "22h-2h",
        clima: "-",
        lugar: "Lago (Montanha, Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Alocine",
        estacao: [3],
        horario: "9h-2h",
        clima: "Chuva",
        lugar: "Rio (Cidade, Floresta)",
        gold: "90~180"
    },
    {
        peixe: "Brema",
        estacao: [3],
        horario: "18h-2h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "67~135"
    },
    {
        peixe: "Achigã",
        estacao: [3],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "150~300"
    },
    {
        peixe: "Peixe-gato-cabeçudo",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "112~225"
    },
    {
        peixe: "Esquálio",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta), Lago (Montanha)",
        gold: "75~125"
    },
    {
        peixe: "Madeirão",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Floresta Secreta",
        gold: "112~225"
    },
    {
        peixe: "Salmão nulo",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Pântano da Bruxa",
        gold: "225~450"
    },
    {
        peixe: "Salmão Mutante",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Covil dos Insetos Mutantes",
        gold: "150~300"
    },
    {
        peixe: "Carpa",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha, Bosque Secreto), Esgoto",
        gold: "45~90"
    },
    {
        peixe: "Gobi",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Cachoeira (Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Tamboril",
        estacao: [3],
        horario: "-",
        clima: "-",
        lugar: "Rio (Acima do Mercado Joja)",
        gold: "1,3k~2,7k"
    },


    // ==================== INVERNO ====================

    {
        peixe: "Atum",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "150~300"
    },
    {
        peixe: "Perca",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Cidade, Floresta), Lago (Floresta, Montanha)",
        gold: "82~165"
    },
    {
        peixe: "Sardinha",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "60~120"
    },
    {
        peixe: "Lúcio",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta)",
        gold: "150~300"
    },
    {
        peixe: "Salmonete",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Arenque",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Oceano",
        gold: "45~90"
    },
    {
        peixe: "Lula",
        estacao: [4],
        horario: "18h-2h",
        clima: "-",
        lugar: "Oceano",
        gold: "120~240"
    },
    {
        peixe: "Pepino-do-mar",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Esturjão",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "300~600"
    },
    {
        peixe: "Salmão Híbrido",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Albacora",
        estacao: [4],
        horario: "6h-11h / 18h-2h",
        clima: "-",
        lugar: "Oceano",
        gold: "112~225"
    },
    {
        peixe: "Ófis",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Cidade, Floresta), Lago (Montanha)",
        gold: "180~360"
    },
    {
        peixe: "Cioba",
        estacao: [4],
        horario: "6h-19h",
        clima: "Chuva",
        lugar: "Oceano",
        gold: "75~150"
    },
    {
        peixe: "Halibute",
        estacao: [4],
        horario: "6h-11h / 19h-2h",
        clima: "-",
        lugar: "Oceano, Lago (Montanha)",
        gold: "120~240"
    },
    {
        peixe: "Carpa da Meia-Noite",
        estacao: [4],
        horario: "22h-2h",
        clima: "-",
        lugar: "Lago (Montanha, Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Brema",
        estacao: [4],
        horario: "18h-2h",
        clima: "-",
        lugar: "Rio (Cidade, Floresta)",
        gold: "67~135"
    },
    {
        peixe: "Achigã",
        estacao: [4],
        horario: "6h-19h",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "150~300"
    },
    {
        peixe: "Peixe-gato-cabeçudo",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha)",
        gold: "112~225"
    },
    {
        peixe: "Esquálio",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Floresta), Lago (Montanha)",
        gold: "75~125"
    },
    {
        peixe: "Madeirão",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Bosque Secreto)",
        gold: "112~225"
    },
    {
        peixe: "Salmão nulo",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Pântano da Bruxa",
        gold: "225~450"
    },
    {
        peixe: "Salmão Mutante",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Covil dos Insetos Mutantes",
        gold: "150~300"
    },
    {
        peixe: "Carpa",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Lago (Montanha, Bosque Secreto), Esgoto",
        gold: "45~90"
    },
    {
        peixe: "Gobi",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Cachoeira (Floresta)",
        gold: "225~450"
    },
    {
        peixe: "Peixe-gelo",
        estacao: [4],
        horario: "-",
        clima: "-",
        lugar: "Rio (Sul da Floresta)",
        gold: "1,5k~3k"
    }
];


const niverPrima = document.getElementById("niverPrima");
const niverVerao = document.getElementById("niverVerao");
const niverOutono = document.getElementById("niverOutono");
const niverInverno = document.getElementById("niverInverno");

const peixePrima = document.getElementById("peixePrima");
const peixeVerao = document.getElementById("peixeVerao");
const peixeOutono = document.getElementById("peixeOutono");
const peixeInverno = document.getElementById("peixeInverno");

const imgsNpcs = document.getElementById("imgs-npcs");

Aniversarios();
TodosNpcs();

function TodosNpcs() {
    const npcs = Object.values(Npc);

    // Ordena os NPCs pelo nome
    npcs.sort((a, b) =>
        a.nomeNpc.localeCompare(b.nomeNpc, "pt-BR")
    );

    let html = "";

    npcs.forEach((element) => {

        const presentesAmados = formatarPresentes(
            element.presentesAmados
        );

        const presentesGostados = formatarPresentes(
            element.presentesGostados
        );

        html += `
            <tr>
                <td>
                    <span>
                        <img
                            src="${element.iconeNpc}"
                            alt="${element.nomeNpc}"
                            class="npc"
                        >
                        ${element.nomeNpc}
                    </span>
                </td>

                <td>
                    <span>${presentesAmados}</span>
                </td>

                <td>
                    <span>${presentesGostados}</span>
                </td>
            </tr>
        `;
    });

    document.getElementById("todosNpcs").innerHTML = html;
}


function Aniversarios() {
    let numEstacao = 0;

    for (let i = 1; i <= 4; i++) {

        let estacao;

        switch (i) {
            case 1:
                numEstacao = 1;
                estacao = "niverPrima";
                break;

            case 2:
                numEstacao = 2;
                estacao = "niverVerao";
                break;

            case 3:
                numEstacao = 3;
                estacao = "niverOutono";
                break;

            case 4:
                numEstacao = 4;
                estacao = "niverInverno";
                break;
        }

        Object.values(Npc).forEach((element) => {

            if (element.estacaoAniversario == numEstacao) {

                const presentesAmados = formatarPresentes(
                    element.presentesAmados
                );

                const presentesGostados = formatarPresentes(
                    element.presentesGostados
                );

                const tr = `
                    <tr>
                        <td>${element.diaAniversario}</td>

                        <td>
                            <span>
                                <img
                                    src="${element.iconeNpc}"
                                    alt=""
                                    class="npc"
                                >
                                ${element.nomeNpc}
                            </span>
                        </td>

                        <td>
                            <span>${presentesAmados}</span>
                        </td>

                        <td>
                            <span>${presentesGostados}</span>
                        </td>
                    </tr>
                `;

                document.getElementById(estacao).innerHTML += tr;
            }
        });
    }
}


// Object.values(Npc).forEach((element) => {
//     if (element.estacaoAniversario != 10) {

//         const presentesAmados = formatarPresentes(
//             element.presentesAmados
//         );

//         const presentesGostados = formatarPresentes(
//             element.presentesGostados
//         );

//         const tr = `
//             <tr>
//                 <td>${element.diaAniversario}</td>

//                 <td>
//                     <span>
//                         <img
//                             src="${element.iconeNpc}"
//                             alt=""
//                             id="npc"
//                         >
//                         ${element.nomeNpc}
//                     </span>
//                 </td>

//                 <td>
//                     <span>
//                         ${presentesAmados}
//                     </span>
//                 </td>

//                 <td>
//                     <span>
//                         ${presentesGostados}
//                     </span>
//                 </td>
//             </tr>
//         `;

//         niverVerao.innerHTML += tr;
//     }
// });



function formatarPresentes(presentes) {
    return presentes
        .split(", ")
        .map((presente) => {

            switch (presente) {

                // =========================
                // ITENS
                // =========================

                case "Abóbora":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/6/64/Pumpkin.png/24px-Pumpkin.png" alt="">
                        Abóbora
                    `;

                case "Ovo nulo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/5/58/Void_Egg.png/24px-Void_Egg.png" alt="">
                        Ovo nulo
                    `;

                case "Quartzo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/c/cf/Quartz.png" alt="">
                        Quartzo
                    `;

                case "Coletas":
                    return `
                        Coletas(
                        <img src="https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png" alt="">
                        )
                    `;

                case "Inhame":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/5/52/Yam.png/24px-Yam.png" alt="">
                        Inhame
                    `;

                case "Coco":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png" alt="">
                        Coco
                    `;

                case "Flor-Miçanga":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/9/9f/Summer_Spangle.png/24px-Summer_Spangle.png" alt="">
                        Flor-Miçanga
                    `;

                case "Chá verde":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/8/8f/Green_Tea.png/24px-Green_Tea.png" alt="">
                        Chá verde
                    `;

                case "Narciso":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/4/4b/Daffodil.png" alt="">
                        Narciso
                    `;

                case "Raiz-forte":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/9/90/Wild_Horseradish.png" alt="">
                        Raiz-forte
                    `;

                case "Lágrima Congelada":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/ec/Frozen_Tear.png/24px-Frozen_Tear.png" alt="">
                        Lágrima Congelada
                    `;

                case "Café":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/e9/Coffee.png/24px-Coffee.png" alt="">
                        Café
                    `;

                case "Picles":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/c/c7/Pickles.png/24px-Pickles.png" alt="">
                        Picles
                    `;

                case "Essência solar":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Solar_Essence.png/24px-Solar_Essence.png" alt="">
                        Essência solar
                    `;

                case "Essência do Vazio":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/1f/Void_Essence.png/24px-Void_Essence.png" alt="">
                        Essência do Vazio
                    `;

                case "Beterraba":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/a4/Beet.png/24px-Beet.png" alt="">
                        Beterraba
                    `;

                case "Diamante":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/ea/Diamond.png/24px-Diamond.png" alt="">
                        Diamante
                    `;

                case "Lixo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/b/b5/Broken_Glasses.png" alt="">
                        Lixo
                    `;

                case "Concha":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png" alt="">
                        Concha
                    `;

                case "Refogado":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/ed/Stir_Fry.png/24px-Stir_Fry.png" alt="">
                        Refogado
                    `;

                case "Trufa":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/f/f2/Truffle.png/24px-Truffle.png" alt="">
                        Trufa
                    `;

                case "Barra de Ouro":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/4/4e/Gold_Bar.png/24px-Gold_Bar.png" alt="">
                        Barra de Ouro
                    `;

                case "Barra de Cobre":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/f/f1/Copper_Bar.png" alt="">
                        Barra de Cobre
                    `;

                case "Barra de Ferro":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/6/6c/Iron_Bar.png" alt="">
                        Barra de Ferro
                    `;

                // =========================
                // PRIMAVERA
                // =========================

                case "Avelãs Torradas":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/18/Roasted_Hazelnuts.png/24px-Roasted_Hazelnuts.png" alt="">
                        Avelãs Torradas
                    `;

                case "Risoto de Samambaia":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/2/2d/Fiddlehead_Risotto.png/24px-Fiddlehead_Risotto.png" alt="">
                        Risoto de Samambaia
                    `;

                case "Pimenta":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Hot_Pepper.png/24px-Hot_Pepper.png" alt="">
                        Pimenta
                    `;

                case "Inhames com Cobertura":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/3/30/Glazed_Yams.png/24px-Glazed_Yams.png" alt="">
                        Inhames com Cobertura
                    `;

                case "Uva":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/c/c2/Grape.png/24px-Grape.png" alt="">
                        Uva
                    `;

                case "Lesma":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/d/d2/Snail.png/24px-Snail.png" alt="">
                        Lesma
                    `;

                case "Girassol":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/8/81/Sunflower.png/24px-Sunflower.png" alt="">
                        Girassol
                    `;

                case "Chirívia":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/d/db/Parsnip.png/24px-Parsnip.png" alt="">
                        Chirívia
                    `;

                case "Cerveja":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/b/b3/Beer.png/24px-Beer.png" alt="">
                        Cerveja
                    `;

                case "Ovo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Large_Egg.png/24px-Large_Egg.png" alt="">
                        Ovo
                    `;

                case "Lula frita":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/2/25/Fried_Calamari.png/24px-Fried_Calamari.png" alt="">
                        Lula frita
                    `;

                case "Dente-de-leão":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/b/b1/Dandelion.png" alt="">
                        Dente-de-leão
                    `;

                case "Gemas raras":
                    return `
                        Gemas raras(
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/a2/Aquamarine.png/24px-Aquamarine.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/2/2e/Amethyst.png/24px-Amethyst.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Emerald.png/24px-Emerald.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/7/7e/Jade.png/24px-Jade.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/a9/Ruby.png/24px-Ruby.png" alt="">
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/a5/Topaz.png/24px-Topaz.png" alt="">
                        )
                    `;

                // =========================
                // VERÃO
                // =========================

                case "Bolo rosa":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/3/32/Pink_Cake.png/24px-Pink_Cake.png" alt="">
                        Bolo rosa
                    `;
                case "Bolo de chocolate":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/8/87/Chocolate_Cake.png/24px-Chocolate_Cake.png" alt="">
                        Bolo de chocolate
                    `;

                case "Laranja":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/4/43/Orange.png/24px-Orange.png" alt="">
                        Laranja
                    `;

                case "Couve-flor":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/a/aa/Cauliflower.png/24px-Cauliflower.png" alt="">
                        Couve-flor
                    `;

                case "Morango":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/6/6d/Strawberry.png/24px-Strawberry.png" alt="">
                        Morango
                    `;

                case "Café da manhã completo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/3/3d/Complete_Breakfast.png/24px-Complete_Breakfast.png" alt="">
                        Café da manhã completo
                    `;

                case "Jantar de salmão":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/8/8b/Salmon_Dinner.png" alt="">
                        Jantar de salmão
                    `;

                case "Lanchinho":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/1/1b/Field_Snack.png" alt="">
                        Lanchinho
                    `;

                case "Pizza":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/f/f4/Pizza.png/24px-Pizza.png" alt="">
                        Pizza
                    `;

                case "Olho de Tigre":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/6/6e/Tigerseye.png/24px-Tigerseye.png" alt="">
                        Olho de Tigre
                    `;

                case "Joja-cola":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/d/d5/Joja_Cola.png" alt="">
                        Joja-cola
                    `;

                case "Sorvete":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/5/5d/Ice_Cream.png/24px-Ice_Cream.png" alt="">
                        Sorvete
                    `;

                case "Cogumelo roxo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/4/4b/Purple_Mushroom.png" alt="">
                        Cogumelo roxo
                    `;

                case "Cogumelo marrom":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png" alt="">
                        Cogumelo marrom
                    `;

                case "Bagre":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/9/99/Catfish.png/24px-Catfish.png" alt="">
                        Bagre
                    `;

                case "Manga":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/3/38/Mango.png/24px-Mango.png" alt="">
                        Manga
                    `;

                case "Pena de pato":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/f/f9/Duck_Feather.png/24px-Duck_Feather.png" alt="">
                        Pena de pato
                    `;

                case "Alho-poró":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/5/57/Leek.png" alt="">
                        Alho-poró
                    `;

                case "Diamante":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/ea/Diamond.png/24px-Diamond.png" alt="">
                        Diamante
                    `;

                case "Esmeralda":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/6/6a/Emerald.png/24px-Emerald.png" alt="">
                        Esmeralda
                    `;

                case "Melão":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/19/Melon.png/24px-Melon.png" alt="">
                        Melão
                    `;

                case "Papoula":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/3/37/Poppy.png/24px-Poppy.png" alt="">
                        Papoula
                    `;

                case "Lagosta":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/9/9f/Lobster.png/24px-Lobster.png" alt="">
                        Lagosta
                    `;

                case "Romã":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/1/1b/Pomegranate.png/24px-Pomegranate.png" alt="">
                        Romã
                    `;

                case "Lula":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/8/81/Squid.png" alt="">
                        Lula
                    `;

                case "Polvo":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/5/5a/Octopus.png" alt="">
                        Polvo
                    `;

                case "Ametista":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/2/2e/Amethyst.png/24px-Amethyst.png" alt="">
                        Ametista
                    `;

                case "Ervilha-de-cheiro":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/d/d9/Sweet_Pea.png/24px-Sweet_Pea.png" alt="">
                        Ervilha-de-cheiro
                    `;

                case "Espaguete":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/0/08/Spaghetti.png/24px-Spaghetti.png" alt="">
                        Espaguete
                    `;

                case "Pêssego":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/thumb/e/e2/Peach.png/24px-Peach.png" alt="">
                        Pêssego
                    `;

                case "Madeira de lei":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/e/ed/Hardwood.png" alt="">
                        Madeira de lei
                    `;

                // =========================
                // OUTROS
                // =========================

                case "Coco":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/2/2f/Coconut.png" alt="">
                        Coco
                    `;
                case "Raiz do inverno":
                    return `
                        <img src="https://stardewvalleywiki.com/mediawiki/images/1/11/Winter_Root.png" alt="">
                        Coco
                    `;

                default:
                    return presente;
            }
        })
        .join(", ");
}


function mudarIconeNpc(tempo = 2000) {
    const npcs = Object.values(Npc);
    let indice = 0;

    function trocar() {
        imgsNpcs.src = npcs[indice].iconeNpc;
        indice = (indice + 1) % npcs.length;

        setTimeout(trocar, tempo);
    }

    trocar();
}

mudarIconeNpc(500);
