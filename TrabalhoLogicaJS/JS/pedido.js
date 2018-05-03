var refri = 0,
 	coxinha = 0,
 	pastel = 0,
 	beirute = 0,
 	bolovo = 0,
 	cachaca = 0,

 	Vrefri = 4.50,
 	Vcoxinha = 2.50,
 	Vpastel = 5.00,
 	Vbeirute = 4.00,
 	Vbolovo = 3.00,
 	Vcachaca = 1.00,
 	Total = 0.00;

	
function ConfereCheck(){

	var caixas = document.getElementsByName('Check');

	for(var i = 0; i < caixas.length; i++){

		if(caixas[i].checked == true){

			var Item = caixas[i].value;

			if (Item == 'Pastel') {
				pastel = 1;
			}

			else if (Item == 'Beirute') {
				beirute = 1;
			}

			else if (Item == 'Coxinha') {
				coxinha = 1;
			}

			else if (Item == 'Bolovo') {
				bolovo = 1;
			}

			else if (Item == 'Cachaca') {
				cachaca = 1;
			}

			else if (Item == 'Refrigerante') {
				refri = 1;
			}

		}
		
			
	}

	if (Soma()==0){

		alert('Selecione um item para pedir.');
	}

	else{
		document.getElementById('Total').innerHTML = 'Total dos Itens: R$ '+Total.toFixed(2);
	}

}



function Soma(){

	Total = (refri * Vrefri) + (coxinha * Vcoxinha) + (pastel * Vpastel) +
	(beirute * Vbeirute) + (bolovo * Vbolovo) + (cachaca * cachaca);

	return Total;
}








			