var carta1 = {
    nome: "Mulher Maravilha",
    atributos: {
     ataque: 10,
     defesa: 9,
     magia: 4
    }
};

var carta2 = {
    nome: "Wanda",
    atributos: {
     ataque: 9,
     defesa: 7,
     magia: 10
    }
};

var carta3 = {
    nome: "Thor",
    atributos: {
     ataque: 8,
     defesa: 8,
     magia: 8
    }
}

var cartas = [carta1, carta2, carta3];
var cartaMaquina;
var cartaJogador;

function sortearCarta() {
   var numeroCartaMaquina = parseInt(Math.random() * 3);
   cartaMaquina = cartas[numeroCartaMaquina];
   

   var numeroCartaJogador = parseInt(Math.random() * 3);
   while(numeroCartaMaquina == numeroCartaJogador){
    var numeroCartaJogador = parseInt(Math.random() * 3);

   }
   
   cartaJogador = cartas[numeroCartaJogador];
   console.log(cartaJogador);

   document.getElementById("btnSortear").disabled = true;
   document.getElementById("btnJogar").disabled = false;

   exibirOpcoes();

}

function exibirOpcoes () {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto ="";
  
  
    for (var atributo in cartaJogador.atributos ){ 
        opcoesTexto +=
         "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }

    opcoes.innerHTML = opcoesTexto;

}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++ ) {
        if (radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado;
    var elememtoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    if (valorCartaJogador > valorCartaMaquina) {
        elememtoResultado.innerHTML = "Você venceu";

    }else if (valorCartaMaquina > valorCartaJogador ) {
        elememtoResultado.innerHTML = "Você perdeu, a carta da maquina é maior";

    }else {
        elememtoResultado.innerHTML = "Empatou";
    }
    console.log(cartaMaquina)
    
}

