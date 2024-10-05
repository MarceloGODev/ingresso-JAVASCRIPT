function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    // verificar se a quantidade é um número positivo
    if(isNaN(qtd) || qtd<= 0) {
        alert("Por favor, insira uma quantidade válida.");
        return;
    }
    
    if (tipo == "pista") {
        comprarPista(qtd);
    } else if (tipo == "superior") {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtd > qtdPista) {
        alert("Quantidade indisponível para tipo de pista");
    } else {
        qtdPista -= qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível para tipo superior");
    } else {
        qtdSuperior -= qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtd > qtdInferior) {
        alert("Quantidade indisponível para tipo inferior");
    } else {
        qtdInferior -= qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso!");
    }
}
