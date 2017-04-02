'use strict';


//jak zwrocic rodzica danego elementu:

var parFirst = document.getElementById('parFirst');
var firstParId = parFirst.getAttributeNode('id');

console.log(firstParId);
console.log(parFirst.parentNode);


//jak pobrac dzieci danego elementu:

console.log(parFirst.childNodes);

console.log(parFirst.childNodes[1]); //odwolujemy sie do konkretnego dziecka (akurat tutaj indeks 1 ma paragraf)

console.log(parFirst.children); //jezeli chcemy dostac tylko dzieci, ktore sa elementami html

// odwolujemy sie do pierwszego i ostatniego dziecka, zwroci wszystko nawet tekst:
console.log(parFirst.firstChild);
console.log(parFirst.lastChild);

//odwolujemy sie do dzieci, zwroci tylko elementy html:
console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);



//wywolujemy rodzenstwo elementu, najpierw wyszukujemy dziecko elementu parFirst i potem rodzenstwo dziecka elementu parFirst:

var link = parFirst.children[1];
console.log(link);

//zwroci rodzenstwo (wszystko, nie tylko elementy html)
console.log(link.nextSibling);
console.log(link.previousSibling);

//zwroci rodzenstwo, ktore sa elementami html

console.log(link.nextElementSibling); //zwroci rodzenstwo po linku, ktore jest elementem html
console.log(link.previousElementSibling); //zwroci rodzenstwo przed linkiem, ktore jest elementem html




//robimy iteracje, sprawdzamy czym sa poszczegolne wezly danego elementu oraz warunek na komentarz dajemy, zeby nam wyswietlilo czy jest komentarz:

var parFirstNodes = parFirst.childNodes;
for (var i=0; i<parFirstNodes.length; i++) {
	console.log(parFirstNodes[i].nodeType);
	
	if(parFirstNodes[i].nodeType == 8) {
		console.log('W tym dokumencie jest komentarz ' + parFirstNodes[i]); 
	}
}


//mozemy tworzyc nowe wezly poprzez wykorzystanie metody create; tutaj tworzymy przycisk tj. taka abstrakcyjna referencje do naszego elementu, dla ktorego tworzymy referencje do tekstu i atrybut klasy:

var btn = document.createElement('button');
var btnText = document.createTextNode('Click me');
var btnClass = document.createAttribute('class');

//przypisujemy wartosc do klasy naszego elementu button:

btnClass.value = 'button-class';
btn.appendChild(btnText); //dodajemy tekst do naszego przycisku
btn.setAttributeNode(btnClass);//ustawiamy atrybut klasy dla naszego elementu

//teraz szukamy wezla, do ktorego chcemy wstrzyknac nasz nowy element tj. przycisk button:

parFirst.appendChild(btn); //dla naszego paragrafu dodaj dziecko - przycisk


//dodajemy nasz przycisk miedzy linkami w div parFirst:

var btn = document.createElement('button');
var btnText = document.createTextNode('Click me');
var btnClass = document.createAttribute('class');


btnClass.value = 'button-class';
btn.appendChild(btnText); 
btn.setAttributeNode(btnClass);

//musimy wiedziec, co jest tym istniejacym wezlem, wiec najlepiej wylogowac sobie dzieci i sprawdzic, ktory indeks ma ten wezel, ktorego poszukujemy:

console.log(parFirst.children[2]); //wychodzi, ze to br i br ma indeks 2
parFirst.insertBefore(btn, parFirst.children[2]);


//usuwanie wezlow:
//usuwamy atrybut klas ze wszystkich linkow:

var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

for ( var i = 0; i<allLinks.length; i++) {
	allLinks[i].removeAttribute('class');
}






















