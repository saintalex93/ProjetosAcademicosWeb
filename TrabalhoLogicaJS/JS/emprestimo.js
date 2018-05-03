function emprestimo(){

	var parcelas = eval(document.getElementById('parcelas').selectedIndex);
	var totalParcelas;

	var salario = document.getElementById('salario').value;
		salario = salario.replace('R$ ','').replace('.','').replace(',','.');
		salario = eval(salario);

		
	var emprestimo = document.getElementById('emprestimo').value;
		emprestimo = emprestimo.replace('R$ ','').replace('.','').replace(',','.');
		emprestimo = eval(emprestimo);

	var total;
	var juros;


	if(document.getElementById('salario').value.length==0)

		alert('Preencha o valor do salário');

	else if(document.getElementById('emprestimo').value.length==0)

		alert('Preencha o valor do Empréstimo');

	else if(document.getElementById('parcelas').selectedIndex==0)
		alert('Selecione a quantidade de parcelas');

	else{

		if ((salario*3) < emprestimo) {

			alert('Valor Superior ao permitido');

		}

		else{	

			if (parcelas <= 2){
			
				juros = eval(0.05);
			}

			else if(parcelas <= 6)
			{
				juros = 0.15;
			}

			else
			{
				juros = 0.25;
			}

			total = (emprestimo*juros)+emprestimo;

			totalParcelas = (total/parcelas);
			
			document.getElementById('Dresultado').style.display = 'block';

			document.getElementById("ResEmp").innerHTML =document.getElementById('emprestimo').value;
			document.getElementById("ResTotal").innerHTML = "R$ "+ total.toFixed(2);
			document.getElementById("ResPar").innerHTML = document.getElementById('parcelas').selectedIndex;
			document.getElementById("ResTParc").innerHTML = "R$ "+ totalParcelas.toFixed(2);

			}

		}
}






