function calcularResultado() {
    let nome = document.querySelector('#nome').value;
    let pisPasep = document.querySelector('#pisPasep').value;
    let valorHora = parseFloat(document.querySelector('#valorHora').value);
    let quantHora = parseFloat(document.querySelector('#quantHora').value);

    let salario = valorHora * quantHora;

    // Descontos
    let iss = 0.05; // 5%
    let inss;

    // Cálculo do INSS
    if (salario <= 1500.99) {
        inss = salario * 0.075; 
    } else if (salario <= 3000.99) {
        inss = salario * 0.09; 
    } else if (salario <= 5000.99) {
        inss = salario * 0.12; 
    } else {
        inss = salario * 0.14; 
    }

    // Cálculo do IR
    let ir = 0;
    if (salario <= 1500.99) {
        ir = 0; 
    } else if (salario <= 2000.99) {
        ir = salario * 0.075; 
    } else if (salario <= 3000.99) {
        ir = salario * 0.15; 
    } else if (salario <= 4000.99) {
        ir = salario * 0.225; 
    } else {
        ir = salario * 0.275; 
    }

    // Cálculo do salário líquido
    let salarioLiquido = salario - inss - iss - ir;
    

    document.querySelector('.resultado').innerText = 
        `Nome: ${nome}\nSalário Bruto: R$${salario.toFixed(2)}\nDesconto INSS: R$${inss.toFixed(2)}\nDesconto ISS: R$${(salario * iss).toFixed(2)}\nDesconto IR: R$${ir.toFixed(2)}\nSalário Líquido: R$${salarioLiquido.toFixed(2)}`;
}

document.querySelector('button').addEventListener('click', calcularResultado);
