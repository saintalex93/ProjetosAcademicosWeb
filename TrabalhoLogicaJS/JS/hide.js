function hide(e)
{
	var id = e.getAttribute("id");
	

	if(id == "tabela")
	{
		
		document.getElementById('DTabela').style.display = 'block';
		document.getElementById('DEmpreste').style.display = 'none';
		document.getElementById('Dresultado').style.display = 'none';
	}

	else{
		document.getElementById('DTabela').style.display = 'none';
		document.getElementById('DEmpreste').style.display = 'block';

	}

}


function hideBilhete(e){

	var id = e.getAttribute("id");


	if(id == "carregar"){

		document.getElementById('dCarregar').style.display = 'block';
		document.getElementById('dConducao').style.display = 'none';
		document.getElementById('dTarifas').style.display = 'none';

	}

	else if(id == "conducao"){

		document.getElementById('dCarregar').style.display = 'none';
		document.getElementById('dConducao').style.display = 'block';
		document.getElementById('dTarifas').style.display = 'none';

	}

	else{

		document.getElementById('dCarregar').style.display = 'none';
		document.getElementById('dConducao').style.display = 'none';
		document.getElementById('dTarifas').style.display = 'block';


	}

}