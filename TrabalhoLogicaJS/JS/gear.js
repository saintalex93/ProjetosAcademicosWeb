	var gear = 0,
	 	speed =0,
	 	interval,
		outputSpeed = document.getElementById('outputSpeed'),
	 	outputGear = document.getElementById('outputGear'),
	 	binaryStart = false;
	
	function start(){
		
		interval = setInterval(timeIt, 30);
		console.log(interval);
		document.getElementById("btnStart").value = "Mudar Marcha";
	}

	function stop(){
		clearInterval(interval);
		console.log(interval);
		interval =0;
		speed = 0;
		outputSpeed.innerHTML = speed;
		gear = 0;
		outputGear.innerHTML = gear;
		document.getElementById("btnStart").value = "Start";

	}

	function timeIt(){

		outputSpeed.innerHTML = speed;
		speed++;
		changeColor();

	}


	function changeGear(){
		
		gear < 5? gear ++ : (gear = 5);
		outputGear.innerHTML = gear;
		
		if(gear === 1){
			start();
		}

	}


	function changeColor(){
		if(gear == 1){

			if (speed < 40){
			outputSpeed.style.color = 'green';
			}

			else if (speed == 40){
				outputSpeed.style.color = 'yellow';
			}
			
			else if(speed == 60)
				outputSpeed.style.color = 'red';

			else if(speed == 70){
				stop();
				alert('Fundiu o motor');
			}
		}

		else if (gear ==2){

			if (speed == 70)
				outputSpeed.style.color = 'green';

			else if(speed == 90)
				outputSpeed.style.color = 'yellow';

			else if(speed == 100)
				outputSpeed.style.color = 'red';

			else if(speed == 120){
				stop();
				alert('Fundiu o motor');
			}

		}

		else if (gear ==3){

			if (speed == 120)
				outputSpeed.style.color = 'green';

			else if(speed == 140)
				outputSpeed.style.color = 'yellow';

			else if(speed == 150)
				outputSpeed.style.color = 'red';

			else if(speed == 160){
				stop();
				alert('Fundiu o motor');
			}
		}

		else if (gear ==4){

			if (speed == 160)
				outputSpeed.style.color = 'green';

			else if(speed == 190)
				outputSpeed.style.color = 'yellow';

			else if(speed == 200)
				outputSpeed.style.color = 'red';

			else if(speed == 220){
				stop();
				alert('Fundiu o motor');
			}
		}

		else if (gear ==5){

			if (speed == 220)
				outputSpeed.style.color = 'green';

			else if(speed == 250)
				outputSpeed.style.color = 'yellow';

			else if(speed == 280)
				outputSpeed.style.color = 'red';

			else if(speed == 300){
				alert('Ganhou, mas estourou o motor!');
				stop();

			}

		}
	}

