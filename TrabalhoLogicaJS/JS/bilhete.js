var	SaldoBilhete = 0.00,
	Recarga,
	Selecao,
	tarifaOnibus = 3.80,
	tarifaMetro = 3.80,
	tarifaIntegracao = 6.80,
	total;

function carregar(valor){

	Recarga = eval(valor);
	SaldoBilhete = SaldoBilhete + Recarga;
	atualizarSaldo();
}

function atualizarSaldo(){
	document.getElementById('saldo').innerHTML = SaldoBilhete.toFixed(2);
}

function Clica(elemento){

	if(elemento == 'onibus'){
		document.getElementById('QdtOni').style.display = "block";
		Selecao = 'vOnibus';
	}
    
    else{
    	document.getElementById('QdtOni').style.display = "none";	
    }

	if(elemento == 'metro'){
		document.getElementById('QdtMetr').style.display = "block";
		Selecao = 'vMetro';	
	}
    
    else{
    	document.getElementById('QdtMetr').style.display = "none";
    }     

	if(elemento == 'integracao'){
		document.getElementById('QdtInt').style.display = "block";
		Selecao = 'vIntegra';
	}
    
    else{
    	document.getElementById('QdtInt').style.display = "none";
    	
    }   
}

function Calcular(){
	
	var Quantidade;

	if (Selecao == "vOnibus")
	{

		Quantidade = document.getElementById('QdtOni').value;

		if(Quantidade.length<1){
			alert("Preencha a Quantidade");
		}

		else{
			total = Quantidade * tarifaOnibus;
			PegarTransporte(total, SaldoBilhete);
			document.getElementById('totalTarifa').innerHTML = "R$ "+ total.toFixed(2).replace('.',',');
			}		
	}
	else if (Selecao == "vMetro")
	{
		Quantidade = document.getElementById('QdtMetr').value;

		if(Quantidade.length<1)
			alert("Preencha a Quantidade");

		else{
			total = Quantidade * tarifaMetro;
			PegarTransporte(total, SaldoBilhete);
			document.getElementById('totalTarifa').innerHTML = "R$ "+ total.toFixed(2).replace('.',',');
			}	
	}
	else if (Selecao == "vIntegra")
	{
		Quantidade = document.getElementById('QdtInt').value;
		if(Quantidade.length<1)
			alert("Preencha a Quantidade");

		else{
			total = Quantidade * tarifaIntegracao;
			PegarTransporte(total, SaldoBilhete);
			document.getElementById('totalTarifa').innerHTML = "R$ "+ total.toFixed(2).replace('.',',');
			}	
	}

	else
		alert("Selecione uma Opção");

}

function PegarTransporte(saldo, valor){

	if(saldo > valor)
	{

		alert('Você não tem créditos disponíveis para essa quantidade \n É necessário carregar o valor de R$ '
			+ (saldo-valor).toFixed(2).replace('.',','));
	}

	else
	{
		SaldoBilhete = valor - saldo;
		atualizarSaldo();

	}

}




