var carta1 = {
    nome: "Cartão America",
    imagem:
    "https://i.pinimg.com/originals/e2/f6/39/e2f639bd51cbf95915aa13cff57a8c3b.jpg",
    atributos: {
     Ataque: 8,
     Defesa: 9,
     Magia: 2
    }
};

var carta2 = {
    nome: "Wanda",
    imagem: 
    "https://audienciadatv.net/wp-content/uploads/2022/05/Wanda-Maximoff-13.jpg",
    atributos: {
     Ataque: 9,
     Defesa: 7,
     Magia: 10
    }
};

var carta3 = {
    nome: "Viúva Negra",
    imagem: 
    "https://pipocamoderna.com.br/wp-content/uploads/2019/07/BlackWidow-Endgame-Avengers.jpg",
    atributos: {
     Ataque: 8,
     Defesa: 8,
     Magia: 8
    }
}
var carta4 = {
    nome: "Homem Aranha",
    imagem: 
    "https://i.pinimg.com/550x/a4/59/85/a45985411b88d1353587540854140bde.jpg",
    atributos: {
     Ataque: 9,
     Defesa: 8,
     Magia: 0
    }
}

var cartaMaquina;
var cartaJogador;
var cartas = [carta1, carta2, carta3, carta4];

function sortearCarta() {
   var numeroCartaMaquina = parseInt(Math.random() * 3);
   cartaMaquina = cartas[numeroCartaMaquina];

   var numeroCartaJogador = parseInt(Math.random() * 3);
   while(numeroCartaJogador == numeroCartaMaquina){
    var numeroCartaJogador = parseInt(Math.random() * 3);

   }
   
   cartaJogador = cartas[numeroCartaJogador];
   console.log(cartaJogador);

   document.getElementById("btnSortear").disabled = true;
   document.getElementById("btnJogar").disabled = false;

   exibirCartaJogador();

}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++ ) {
        if (radioAtributos[i].checked == true ){
            return radioAtributos[i].value;
        }
    }
    console.log(radioAtributos)
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
        
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = "<p class='resultado-final'>Venceu</p>";
        
    }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
              htmlResultado = "<p class='resultado-final'>Perdeu</p>";

    }else {
        htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    
    divResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
    console.log(atributoSelecionado)
    
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador"); 
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = 
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id ='opcoes' class='carta-status'>"
   
    var opcoesTexto =""; 
    for (var atributo in cartaJogador.atributos ){ 
        opcoesTexto +=
         "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

function exibirCartaMaquina () {
    var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
 
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}




