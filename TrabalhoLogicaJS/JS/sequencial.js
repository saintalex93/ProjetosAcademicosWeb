
function lista(){

		var lista = document.getElementById('lista').selectedIndex;
		return lista;
}


function calcula(a,b){
	var total;
	a = parseInt(a);
	b = parseInt(b);

	if(!isNaN(document.getElementById('num1').value) && !isNaN(document.getElementById('num2').value) &&
		 document.getElementById('num2').value != '' && document.getElementById('num2').value != '' ){

		switch (lista()){
		
			case 0:{
				
				return ("Selecione um Operador");
				break;
			}

			case 1: {

				total = a+b;
				document.getElementById('num1').value = "";
				document.getElementById('num2').value = "";
				document.getElementById('lista').selectedIndex = 0;
				return total;
				break;	
			}

			case 2: {

				total = a-b;
				document.getElementById('num1').value = "";
				document.getElementById('num2').value = "";
				document.getElementById('lista').selectedIndex = 0;
				return total;
				break;	
			}

			case 3: {

				total = a*b;
				document.getElementById('num1').value = "";
				document.getElementById('num2').value = "";
				document.getElementById('lista').selectedIndex = 0;
				return total;
				break;	
			}

			case 4: {

				total = a/b;
				document.getElementById('num1').value = "";
				document.getElementById('num2').value = "";
				document.getElementById('lista').selectedIndex = 0;

				return total;
				break;	
			}
		}
	}
	else
	{
		alert("Digite apenas números...");
	}	
}	
