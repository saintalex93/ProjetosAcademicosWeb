function mascara(moeda){ 
	if(moeda.value.length==0)
		moeda.value=moeda.value+'R$ ';

   if(moeda.value.length == 4)
      moeda.value = moeda.value + '.'; 
 
 if(moeda.value.length == 8)
     moeda.value = moeda.value + ','; 
  
}


function validar(dom,tipo){
    switch(tipo){
        case'num':var regex=/[A-Za-z]/g;break;
        case'text':var regex=/\d/g;break;
    }
    dom.value=dom.value.replace(regex,'');
}


function mascaraCentena(moeda){ 
 
	 if(moeda.value.length == 2)
	 	moeda.value = moeda.value + ',';

 	 if(moeda.value.length == 5){
	 	moeda.value = moeda.value.replace(',','');
	 	var centena = moeda.value.substring(0, 3);
	 	var dezena = moeda.value.substring(4,6);
	 	moeda.value = centena + ',' + dezena;
 	}

}


function MascaraNova(moeda){

	var modular =  parseFloat(moeda.value) - parseInt(moeda.value);
	moeda.value = parseInt(moeda.value) + ',' + modular.toPrecision(3).substrx(-2);



}


function formatNumber(s) {
  var parts = s.split(/,/)
    , spaced = parts[0]
         .split('').reverse().join('') // Reverse the string.
         .match(/\d{1,3}/g).join(' ') // Join groups of 3 digits with spaces.
         .split('').reverse().join(''); // Reverse it back.
  document.getElementById("ValorCarregar").value = spaced + (parts[1] ? ','+parts[1] : ''); // Add the fractional part.
}







