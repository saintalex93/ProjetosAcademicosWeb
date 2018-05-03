var i = 1,	
	Chutes = [],
	Aleatorios = [],
	ORandom = document.getElementById('ORandom'),
	OKick = document.getElementById('OKick'),
	Hide = document.getElementById('Hide'),
	BtnRestart = document.getElementById('Restart');

function tryit(number){
	var etiqueta = document.all("result");
	var Random = Math.floor((Math.random() * 10) + 1);
	console.log(Random);

	i == 11 ? (ORandom.innerHTML = Chutes, OKick.innerHTML = Aleatorios, document.all('Botao').disabled = true, Hide.style.display = 'block', BtnRestart.style.display = 'block') :
	(number == Random ? (i=0, etiqueta.innerHTML = "Você acertou!",document.all('Botao').disabled = true, Numbers(number, Random), ORandom.innerHTML = Chutes, OKick.innerHTML = Aleatorios, Hide.style.display = 'block'): 
		(etiqueta.innerHTML = "Você errou pela "+i+"º vez", i++, Numbers(number, Random)));
}

function Numbers(a,b){

	Chutes.push(a);
	Aleatorios.push(b);
	console.log(Chutes);
	console.log(Aleatorios);
}

function Restart() {

	i = 1;
	document.all('Botao').disabled = false;
	ORandom.value ="";
	OKick.value = "";
	Hide.style.display = 'None';
	BtnRestart.style.display = 'None';
	document.getElementById('numb').value = "";
	document.getElementById('result').innerHTML = "";
	Chutes = [];
	Aleatorios = [];

}