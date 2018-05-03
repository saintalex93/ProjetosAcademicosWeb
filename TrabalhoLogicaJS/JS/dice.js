	
function rollTheDice(iterator){


	var DiceFace;
	var MinNumber;
	var MaxNumber;
	var i = 0;
	var concat;
	var div = document.getElementById('result');


	do{
		DiceFace = Math.floor((Math.random() * 6) + 1);

		i == 0 ? (MinNumber = DiceFace, MaxNumber = DiceFace) : ( MaxNumber > DiceFace ? MaxNumber  = MaxNumber : MaxNumber = DiceFace), (MinNumber < DiceFace ? MinNumber = MinNumber : MinNumber = DiceFace);
		
		

		i++;

		concat == undefined ?
			(concat = "<tr> <td>"+DiceFace+" </td>  <td>" + MaxNumber+" </td> <td> "+MinNumber+" </td> </tr>"):
		
			(concat = concat + "<tr> <td>"+DiceFace+" </td>  <td>" + MaxNumber+" </td> <td> "+MinNumber+" </td> </tr>");
	}
	while(i < iterator);

	div.innerHTML = "<table id = 'TableDice'><tr><th>Face</th> <th>Maior</th><th>Menor</th></tr>"+concat+"</table>";
	
}

