function inserir(){
	
	var nome = document.getElementById('nome').value;
	var telefone = document.getElementById('telefone').value;
	var tabela = document.querySelector('#tableCont tbody'); //Alterado
		var numero_de_registros = document.querySelector('.count-register span');
	var concat = "";

	if (validar(nome, telefone) == true)
	{
		if(concat == undefined){
			concat = "<tr> <td> "+nome+" </td> <td> "+telefone+" </td> </tr>" ;
		}else{
			concat = concat + "<tr> <td> "+nome+" </td> <td> "+telefone+" </td> </tr>" ;
		}
  var linhas = tabela.querySelectorAll('tr');
  var contagem = 1;
  
  for( var i = 0, len = linhas.length; i < len; i++ )
  {
    contagem++;
  }
  
  numero_de_registros.innerHTML = contagem;
  tabela.innerHTML += concat;
	}

}

function validar (nome, telefone){
	
	if (nome == "")
		alert("Preencha o nome");
	else if(telefone == "")
		alert("Preencha o telefone");
	else
		return true;
}