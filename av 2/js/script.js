function calcularResultado() {
    let nome = document.querySelector('#nome').value;
    let numInscricao = parseInt(document.querySelector('#numInscricao').value);
    let anoNascimento = parseInt(document.querySelector('#anoNascimento').value);
    let natureza = parseFloat(document.querySelector('#natureza').value);
    let humanas = parseFloat(document.querySelector('#humanas').value);
    let linguagens = parseFloat(document.querySelector('#linguagens').value);
    let matematica = parseFloat(document.querySelector('#matematica').value);
    let redacao = parseFloat(document.querySelector('#redacao').value);

    let resultadoNatureza, resultadoHumanas, resultadoLinguagens, resultadoMatematica, resultadoRedacao;

    if (natureza >= 550) {
        resultadoNatureza = "<span class='aprovado'>Aprovado</span>";
    } else if (natureza >= 401) {
        resultadoNatureza = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultadoNatureza = "<span class='reprovado'>Reprovado</span>";
    }

    if (humanas >= 550) {
        resultadoHumanas = "<span class='aprovado'>Aprovado</span>";
    } else if (humanas >= 401) {
        resultadoHumanas = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultadoHumanas = "<span class='reprovado'>Reprovado</span>";
    }

    if (linguagens >= 550) {
        resultadoLinguagens = "<span class='aprovado'>Aprovado</span>";
    } else if (linguagens >= 401) {
        resultadoLinguagens = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultadoLinguagens = "<span class='reprovado'>Reprovado</span>";
    }

    if (matematica >= 550) {
        resultadoMatematica = "<span class='aprovado'>Aprovado</span>";
    } else if (matematica >= 401) {
        resultadoMatematica = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultadoMatematica = "<span class='reprovado'>Reprovado</span>";
    }

    if (redacao >= 550) {
        resultadoRedacao = "<span class='aprovado'>Aprovado</span>";
    } else if (redacao >= 401) {
        resultadoRedacao = "<span class='recuperacao'>Recuperação</span>";
    } else {
        resultadoRedacao = "<span class='reprovado'>Reprovado</span>";
    }

    let mensagemIdade;
    if (anoNascimento < 1900 || anoNascimento > 2008) {
        mensagemIdade = "Aluno não pode prestar o vestibular ";
    } 
    else {
        mensagemIdade = "Candidato ";
    }

    document.querySelector('.resultado').innerHTML =
        `${nome}, nascido em ${anoNascimento}, ${mensagemIdade} : <br>
        Natureza - Média ${natureza}, ${resultadoNatureza}. <br>
        Humanas - Média ${humanas}, ${resultadoHumanas}. <br>
        Linguagens - Média ${linguagens}, ${resultadoLinguagens}. <br>
        Matemática - Média ${matematica}, ${resultadoMatematica}. <br> 
        Redação - Média ${redacao}, ${resultadoRedacao}.`;
}

document
    .querySelector('#calcular')
    .addEventListener('click', calcularResultado);
