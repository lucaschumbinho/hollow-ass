const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Zé era um mendigo que vagava pelas ruas de uma cidade grande, conhecido por seu senso de humor peculiar e sua habilidade em encontrar soluções inusitadas para seus problemas. Sua vida mudou drasticamente quando encontrou um par de óculos estranhos em uma lata de lixo. Ao colocá-los, Zé descobriu que podia ver as fantasias secretas das pessoas ao seu redor.",
        alternativas: [
            {
                texto: "Explorar",
                afirmacao: "Zé não resistiu à tentação e começou a explorar as fantasias secretas das pessoas. Ele se viu envolvido em situações hilárias e embaraçosas, encontrando-se no meio de confusões e mal-entendidos enquanto tentava aproveitar ao máximo sua nova habilidade. "
            },
            {
                texto: " Ignorar",
                afirmacao: "Zé decidiu não se envolver nas fantasias das pessoas e tentou viver uma vida normal. No entanto, os óculos continuaram a tentá-lo com vislumbres ocasionais das fantasias mais estranhas, testando sua determinação em resistir à tentação.."
            }
        ]
    },
    {
        enunciado: "Com suas habilidades peculiares, Zé poderia usar os óculos para se divertir às custas dos outros, criando situações absurdas e engraçadas. Ou poderia decidir usar seus poderes para ajudar as pessoas de maneiras inesperadas e inusitadas.",
        alternativas: [
            {
                texto: "Divertir"
                afirmacao: "Zé escolheu o caminho da diversão, criando situações cômicas e constrangedoras para os outros ao usar suas habilidades de maneira travessa. Ele se viu no centro de mal-entendidos hilariantes e situações constrangedoras, mantendo seu humor irreverente."
            },
            {
                texto: "Ajudar.",
                afirmacao: "Zé decidiu usar seus poderes para ajudar as pessoas, revelando segredos íntimos que promoviam o entendimento e a aceitação mútua. Ele se tornou uma figura curiosa e bem-intencionada, ajudando a resolver conflitos e melhorar relacionamentos com seu estilo único."
            }
        ]
    },
    {
        enunciado: "Finalmente, Zé enfrentou a decisão de manter os óculos para sempre, aproveitando suas habilidades incomuns para continuar sua vida de maneira única. Ou poderia decidir devolvê-los, escolhendo viver sem as tentações e as complicações que os óculos trouxeram.",
        alternativas: [
            {
                texto: "Manter.",
                afirmacao: "Zé decidiu manter os óculos, abraçando sua vida extraordinária e as oportunidades únicas que eles ofereciam. Ele continuou a explorar as excentricidades da vida urbana, deixando um rastro de risos e surpresas por onde passava."
            },
            {
                texto: "Devolver.",
                afirmacao: "Zé escolheu devolver os óculos, optando por uma vida mais simples e livre de tentações estranhas. Ele encontrou contentamento em sua vida cotidiana, sem os desafios e as reviravoltas que os óculos tinham trazido."
            }
        ]
    },
        ]
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();