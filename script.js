function fatorial(numero) {
    if(numero == 0) {
        return 1;
    }
    if(numero < 0 || numero%1 != 0) {
        return "Insira um número inteiro positivo"
    }
    return numero * fatorial(numero - 1);
}

alert(fatorial(10));


/*
const opcao = "Vermelho";
switch(opcao) {
    case "Vermelho": case "Roxo":
        alert("Botão Vermelho selecionado");
        break;
    case "Azul":
        alert("Botão Azul selecionado");
        break;
    default:
       alert("Opção inválida"); 
       break;
}

if(opcao === "Vermelho") {
    alert("Botão Vermelho selecionado");
}else if(opcao === "Azul") {
    alert("Botão Azul selecionado");
}else {
    alert("Opção Invalida");
}*/