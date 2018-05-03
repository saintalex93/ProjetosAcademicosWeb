//Função anônima que inicia assim que abre a página 
(function(){
	var images = [];

	var score = 0;

	var flippedCards = [];

	var modalGameOver = document.querySelector("#modalGameOver");

	var matches = 0;

	var imgMatchSign = document.querySelector("#imgMatchSign");

	var dScore = document.getElementById('score');

	for(var i = 0; i < 16; i++){
		var img = {
			src: "../imagens/" + i + ".jpg",
			id: i%8
		};
		images.push(img);
	}
	

	startGame();

function startGame(){

	matches = 0;

	flippedCards= [];

	images = randomSort(images);

	var frontFaces = document.getElementsByClassName("front");
	var backFaces = document.getElementsByClassName("back");


	for(var i = 0; i < 16; i++){
		frontFaces[i].classList.remove("flipped", "match");
		backFaces[i].classList.remove("flipped", "match");


		var card = document.querySelector("#card" + i);
		card.style.left = i % 8 === 0 ? 5 + "px" : i % 8 * 150 + 5 + "px";
		card.style.top = i < 8 ? 5 + "px" : 240 + "px";

		card.addEventListener("click", flipcard, false);

		frontFaces[i].style.background = "url('"+images[i].src+"')";
		frontFaces[i].setAttribute("id", images[i].id);
		
	}	

	modalGameOver.style.zIndex = -2;
	modalGameOver.removeEventListener("click", startGame, false);
}

function randomSort(oldArray){
	
	var newArray = [];
	while(newArray.length != oldArray.length){
		var i = Math.floor(Math.random()*oldArray.length);

		if(newArray.indexOf(oldArray[i]) < 0){
			newArray.push(oldArray[i]);
		}

	}

	return newArray;

}

function flipcard(){
	if(flippedCards.length < 2)
	{
		var faces = this.getElementsByClassName("face");

		if(faces[0].classList.length > 2)
			return
		
		faces[0].classList.toggle("flipped");
		faces[1].classList.toggle("flipped");

		flippedCards.push(this);

		if (flippedCards.length === 2){
			if(flippedCards[0].childNodes[3].id === flippedCards[1].childNodes[3].id )
			{
				flippedCards[0].childNodes[1].classList.toggle("match");
				flippedCards[0].childNodes[3].classList.toggle("match");
				flippedCards[1].childNodes[1].classList.toggle("match");
				flippedCards[1].childNodes[3].classList.toggle("match");

				matchCardSign();

				matches++;


				flippedCards = [];
				score = score +1;

				dScore.innerHTML = score;

				score > 8 ? dScore.style.color = 'red' : dScore.style.color = 'green';

				if (matches === 8) {
					gameOver();
					score = 0;
				}

			}
		}

	}
	else{
		flippedCards[0].childNodes[1].classList.toggle("flipped");
		flippedCards[0].childNodes[3].classList.toggle("flipped");
		flippedCards[1].childNodes[1].classList.toggle("flipped");
		flippedCards[1].childNodes[3].classList.toggle("flipped");

		flippedCards = [];

		score = score +1;

		dScore.innerHTML = score;

		score > 8 ? dScore.style.color = 'red' : dScore.style.color = 'green';
	}

}

function gameOver(){

	modalGameOver.style.zIndex = 10;
	modalGameOver.addEventListener("click", startGame, false);

}

function matchCardSign(){

	imgMatchSign.style.zIndex = 1;
	imgMatchSign.style.top = 100 + "px";
	imgMatchSign.style.opacity = 0;

	setTimeout(function(){
		imgMatchSign.style.zIndex = -1;
		imgMatchSign.style.top = 150 + "px";
		imgMatchSign.style.opacity = 1;

	}, 1500);

}

}());