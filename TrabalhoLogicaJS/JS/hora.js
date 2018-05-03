var hour = new Date().getHours();

function setHour(new_hour) {
	hour = new_hour;
	
	changeBackground();
}

function changeBackground() {
	if (hour >= 0 && hour < 5)
	{
		document.body.style.backgroundImage= 'url("imagens/madrugada.jpg")';
		parent.periodo = "Madrugada";

	}else if (hour >= 5 && hour < 12){

		document.body.style.backgroundImage= 'url("imagens/manha.jpg")';
		parent.periodo = "Manhã";

	}else if(hour >= 12 && hour < 18){

		document.body.style.backgroundImage= 'url("imagens/tarde.jpg")';
		parent.periodo = "Tarde";
	
	}
	else{
		document.body.style.backgroundImage= 'url("imagens/noite.jpg")';
		parent.periodo = "Noite";

	}
        alert("O período do horário inserido é: "+parent.periodo);
}
