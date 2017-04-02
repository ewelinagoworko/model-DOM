'use strict';

// pierwszy sposob wywolywania zdarzen na stronie:

function nowaFunkcja() {
	alert('kliknąłeś w paragraf');
}

//onmouseover - najezdzamy myszka na paragraf i pojawia sie alert
//onclick - po kliknieciu myszka na paragraf pojawia sie alert


// drugi sposob wywolywania zdarzen bez zmieniania struktury html, lepiej robic to poprzez manipulacje DOM: zmienaimy tutaj kolor tła paragrafu:

var parSecond = document.getElementById('parSecond');

function changeBackground() {
	parSecond.style.backgroundColor = '#00ff00';
}
parSecond.onclick = changeBackground;


//teraz zmieniamy, aby na podwojne klikniecie zmienialo sie tlo paragrafu na niebieskie:


function changeBackgroundDB() {
	parSecond.style.backgroundColor = '#0000ff';
}
parSecond.ondblclick = changeBackgroundDB;


// trzeci sposob dodawania eventow przy pomocy addEventListener - i uzywamy to wtedy, kiedy bedzie tez potrzeba usuniecia potem tego eventu
// przepisujemy event double click przy pomocy addEventListener:

parSecond.addEventListener('dblclick', changeBackgroundDB);


//przekazywanie pseudo parametrow do funkcji, definiujemy anonimowa funkcje z parametrem e: i to pozwala zobaczyc nawet, gdzie myszka kliknela

parSecond.addEventListener('click', function(e){
	console.log(e);
});


//po kliknieciu w link nie przeniesie nas na strone internetowa zawarta w linku, tylko zaladuje w konsoli to wydarzenie:

document.getElementById('parFirst').children[3].addEventListener('click', function(e){
	
	e.preventDefault();
	
	console.log(typeof e); //mozemy sprawdzic typ
	
});








