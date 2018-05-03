var NumLoterias = [];
	var Sorteio = [];
	var tabela = document.querySelector('#tableCont tbody'); //Alterado

for (var i = 0, c = 1; i < 100; i++, c++) {
	
	NumLoterias.push(c);
	console.log(NumLoterias[i]);
}

function randOrd() {
    return (Math.round(Math.random())-0.5);
}

function sortear(){
	var concat = "";
	Sorteio = NumLoterias.sort(randOrd);
	console.log(Sorteio);
	document.getElementById('divT').style.display = 'block';

	for (var i = 0; i <10; i++)
	{

		concat = concat + "<td>" +Sorteio[i]+ "</td>";
		tabela.innerHTML = concat;

	}

}
