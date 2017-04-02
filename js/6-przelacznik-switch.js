'use strict';


// kolor naglowka ma sie zmieniac w zaleznosci od tego, ktora strzalke naciskamy na klawiaturze:


var mainHeader = document.getElementById('main-header');

document.onkeydown = checkKeyDown; //wywolujemy funkcje onkeydown na calym dokumencie i nazywamy ja checkKeyDown

function checkKeyDown(e) { //definiujemy funkcje checkKeyDown
	
	console.log(e.keyCode);
	switch (e.keyCode) {
		case 37:
			mainHeader.style.color = 'green';
			break;
		case 38:
			mainHeader.style.color = 'red';
			break;
		case 39:
			mainHeader.style.color = 'blue';
			break;
		case 40:
			mainHeader.style.color = 'yellow';
			break;
	}
}