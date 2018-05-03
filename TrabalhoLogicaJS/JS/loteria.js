
var twentyNumbers = [],
	action = 0,
	tableLottery = document.querySelector('#tableLottery tr'),
	tableShuffleUser = document.querySelector('#tableShuffleUser tr'),
	twentySortedNumbers = [],
	twentyUserSortedNumbers = [],
	tenSortedNumbers = [],
	tenUserSortedNumbers = [];


for (var i = 0; i< 21 ; i++){
 twentyNumbers.push(i);
}

function ShuffleNumbers() {
    return (Math.round(Math.random())-0.5);
}	

function PlayAndModify(){
	
	action ++;
	var successfulNumbers = 0; 

	if(action === 1){
		document.getElementById('Hidde').style.display = 'block';
		twentySortedNumbers = twentyNumbers.sort(ShuffleNumbers);
		for (var i = 0; i < 10; i++)
		{
			tenSortedNumbers.push(twentySortedNumbers[i]);
			tableLottery.innerHTML += "<td>" +twentySortedNumbers[i] +"</td>";
		}
		
		document.getElementById('btnLottery').value = "Jogar e conferir!";
	}

	else if(action === 2){
		document.getElementById('Hidde1').style.display = 'block';

		 twentyUserSortedNumbers = twentyNumbers.sort(ShuffleNumbers);

		for (var i = 0; i < 10; i++)
		{
			tenUserSortedNumbers.push(twentyUserSortedNumbers[i]);	
			tableShuffleUser.innerHTML += "<td>" +twentyUserSortedNumbers[i] +"</td>";

			if(tenSortedNumbers.indexOf(parseInt(tenUserSortedNumbers[i])) != -1){
				successfulNumbers ++;
			}

		}
		document.getElementById('successfulNumbers').innerHTML = "Acertou "+successfulNumbers + " Números!";
		document.getElementById('btnLottery').value = "Jogar Novamente!";
		
	}

	else if (action == 3){

		Reload();
		action = 0;
	}

}


function Reload(){
	ClearTable();

	document.getElementById('successfulNumbers').value = "";
	document.getElementById('btnLottery').value = "Rodar Sorteio!";
	twentySortedNumbers = [];
	twentyUserSortedNumbers = [];
	tenUserSortedNumbers = [];
	tenSortedNumbers = [];
	document.getElementById('Hidde').style.display = 'none';
	document.getElementById('Hidde1').style.display = 'none';
}

function ClearTable (){

	while( tableLottery.hasChildNodes() )
	{
	  tableLottery.removeChild( tableLottery.firstChild ); 
	}

	while( tableShuffleUser.hasChildNodes() )
	{
	  tableShuffleUser.removeChild( tableShuffleUser.firstChild ); 
	}

}

