const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("nome").value; //.value para pegar o valor
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado"); //pegar o elemento html

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(1); //apenas uma casa decimal

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso.";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. Parabéns!!!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II";
    } else {
      classificacao = "com obesidade grau III. Cuidado!!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; //.textContent para inserir algo dentro do campo resultado
  } else {
    resultado.textContent = "Preencha todos os campos!!!";
  }
}

calcular.addEventListener("click", imc);
