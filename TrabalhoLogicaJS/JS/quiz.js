var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var FiveAnswers = [0,1,2,3,4];

var ShuffleNumbers = numbers.sort(randOrd);
var randomAnswer = FiveAnswers.sort(randOrd);

var div = document.getElementById('Answers');
var div2 = document.getElementById('Question');
var sup = 0;
var SupAnswer = 0;
var x, y, radio;
var totalCorrect= 0;

var iterator = 1;

var NumberCorrectAnswers = 0;
var OutputCorrect = document.getElementById('score');

function Next(){


  clear();

  document.getElementById('Start').style.display = 'none';

  sup == 10 ? (sup = 1) : sup ++;
  SupAnswer == 5 ? SupAnswer = 0 : SupAnswer ++;
  var text = Questions[ShuffleNumbers[sup]].text;
  div.innerHTML = sup +" - " + text;


  for (var i = 0 ; i < 5; i++){


    var DivZona = document.createElement("DIV");

    radio = document.createElement("input");
    radio.setAttribute('type', 'radio');
    radio.name = 'name';
    radio.dataset.value = randomAnswer[i]+1;
    DivZona.appendChild(radio);

    x = document.createElement("LABEL");
    t = document.createTextNode(Questions[ShuffleNumbers[sup]].answers[randomAnswer[i]].text);
    x.setAttribute("for", "Radio");
    x.appendChild(t);
    DivZona.insertBefore(x,document.getElementById("Radio"));
    

    div2.appendChild(DivZona);

    radio.addEventListener('change', function(){
      var ValueSelected = this.dataset.value;
      Responde(ValueSelected);

    });

  }

}


function Responde(Valor){


      var CorrectAnswer;
      
      var shuffleIndex = ShuffleNumbers[iterator];

      
      for( var i = 0; i < Questions[shuffleIndex].answers.length;i++ ){
          
          if(Questions[shuffleIndex].answers[i].correct)
          {
              
              CorrectAnswer = Questions[shuffleIndex].answers[i].value;
              
              break;
              
          }
      }

       CorrectAnswer == Valor ? (NumberCorrectAnswers++, OutputCorrect.innerHTML = NumberCorrectAnswers) :
        console.log("Mistake");

       Next();
       Finish();

}

function clear(){

    var question = document.querySelector('#Question');

    while( question.hasChildNodes() )
    {
      question.removeChild( question.firstChild ); 
    }

}

function randOrd() {
    return (Math.round(Math.random())-0.5);
}


function Finish(){
        totalCorrect = NumberCorrectAnswers;
        console.log(totalCorrect);
        
        
        iterator == 10 ? (iterator=1, restart(totalCorrect)) : iterator++;
}


function restart(correct){

        
        console.log(correct);

alert("Acabou!\nPontuação: "+correct+"/10\nAo pressionar 'OK' o Quiz recomeçará com perguntas sortidas.");
window.location.reload(true);

}

