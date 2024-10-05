function calcularResultado() {
    let nome = document.querySelector('#nome').value;
    let numInscricao = parseInt(document.querySelector('#numInscricao').value);
    let anoNascimento = parseInt(document.querySelector('#anoNascimento').value);
    let natureza = parseFloat(document.querySelector('#natureza').value);
    let humanas = parseFloat(document.querySelector('#humanas').value);
    let linguagens = parseFloat(document.querySelector('#linguagens').value);
    let matematica = parseFloat(document.querySelector('#matematica').value);
    let redacao = parseFloat(document.querySelector('#redacao').value);

   
    let nota = (natureza + humanas + linguagens + matematica + redacao) / 5;
    let mensagem;

    
    if (nota >= 550) {
        mensagem = "Aprovado";
        
        
    } else if (nota >= 401) {
        mensagem = "Recuperação";
        
    } else {
        mensagem = "Reprovado";
        
    } 

   if (anoNascimento<=1900) {
    mensagem = "Idade inválida";
   }
   else if (anoNascimento >=2008) {
    mensagem = "Idade inválida";
   }

   else {
    anoNascimento ;
   }


    document.querySelector('.resultado').innerText = `${nome}, nascido em ${anoNascimento}, sua nota final é: ${nota.toFixed(2)} - ${mensagem}`;
}


document
    .querySelector('#calcular')
    .addEventListener('click', calcularResultado);
