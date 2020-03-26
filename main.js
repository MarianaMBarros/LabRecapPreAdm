function enterGame(){
    

 const userName = document.getElementById("name").value;
 
 const publicarName = document.getElementById("user");
         publicarName.innerHTML = "Bem-Vindo(a), " + userName.toUpperCase();


 document.getElementById("initial").className="hide";  
 document.getElementById("choiceGame").className="show";  
 
}

let questions = [];

function option(a, tema){
    document.getElementById("tema").innerHTML = tema

// fiz um array (armazenamento varios objetos ao mesmo tempo) pra pergunta e um pra resposta 
// pra ficar dinamico (facilitar  a crianção de varias perguntas e respostas)
// se tiver mais temas colocar "if else (a == "numero")"

   if (a == 1){
      questions=[{pergunta:"1-Leandro tem 40 balas chupou 12 e deu 10 para sua irmã. Com quantas balas ele ficou?", options: [ { letra: "A",valor :"18"}, { letra: "B",valor :"15"},{ letra: "C",valor :"16"}], respostaCorreta:"A", respostaUsuario:null},
                 {pergunta:"2-Se uma casa tem quatro lados e em cada canto tem um gato e cada gato vê três gatos, quantos gatos há na casa?" , options: [ { letra: "A",valor :"5"}, { letra: "B",valor :"4"},{ letra: "C",valor :"6"}], respostaCorreta:"B", respostaUsuario:null},
                 {pergunta:"3-Quantos números 1 eu tenho de 1 até 191?", options: [ { letra: "A",valor :"150"}, { letra: "B",valor :"140"},{ letra: "C",valor :"132"}], respostaCorreta:"C", respostaUsuario:null}];             
   } else {
      questions=[{pergunta:"1- De onde é a invenção do chuveiro elétrico?", options: [ { letra: "A",valor :"Brasil"}, { letra: "B",valor :"Austrália"},{ letra: "C",valor :"Inglaterra"}] ,respostaCorreta:"A", respostaUsuario:null},
                 {pergunta:"2-Quais o menor e o maior país do mundo?", options: [ { letra: "A",valor :"Nauru e China"}, { letra: "B",valor :"Vaticano e Rússia"},{ letra: "C",valor :"Malta e Estados Unidos"}] ,respostaCorreta:"B", respostaUsuario:null},
                 {pergunta:"3- De quem é a famosa frase “Penso, logo existo”?", options: [ { letra: "A",valor :"Platão "}, { letra: "B",valor :"Sócrates"},{ letra: "C",valor :"Descartes"}] ,respostaCorreta:"C", respostaUsuario:null},];
   }

   game(questions)

}

// pego cada pergunta e crio o html dela
function game(questions){
    
    var questionsHtml = ""
    for(let i = 0; i< questions.length; i++){
        var question = questions[i];

        questionsHtml= `${questionsHtml}  <h3>${question.pergunta}</h3>`

        for (let j = 0; j < question.options.length; j++) {
            const option = question.options[j];

            //criando as opçoes de respostas 
            //name="respFilme${i}" - selecionar apenas uma resposta das possiveis 
            //$ conseguir usar variaveis dentro de uma string - ele concatena 
            questionsHtml= questionsHtml + `<span id="respFilme${i+option.letra}"><input type="radio" name="respFilme${i}" value="${option.letra}"> ${option.letra}) ${option.valor}</span><br>`
        }
    }

    document.getElementById("questionsHtml").innerHTML = questionsHtml


    document.getElementById("choiceGame").className="hide";
    document.getElementById("game").className="show";
}

//exibe as respostas 
function finish(){
  
    for(let i = 0; i< questions.length; i++){
        var question = questions[i];

        //querySelector - serve para pegar o elemento de acordo com expressao 
        // ele retorna uma lista mais neste caso ele pega apenas a resposta que o usuario selecionou
        // ele pega todas os elementos input com a tag name respFilme${i} que esta selecionada
        const res =  document.querySelector(`input[name="respFilme${i}"]:checked`)
        const correta = document.getElementById(`respFilme${i+res.value}`);

        if(res.value == question.respostaCorreta)
        {
            correta.className="correta";
        }
        else
        {
            correta.className="incorreta";
        }
        
    }   
    enableDisableRadios(true)

    document.getElementById("finish").className="hide";
    document.getElementById("backGame").className="show";
    
}

function enableDisableRadios(disabled){
    var radios = document.querySelectorAll("input[type='radio']");
    for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
    }
}

function backGame(){
    document.getElementById("game").className="hide";
    document.getElementById("choiceGame").className="show";
    document.getElementById("finish").className="show";
    document.getElementById("backGame").className="hide";
 }
 
 function exit(){   
    window.location.reload()
 }