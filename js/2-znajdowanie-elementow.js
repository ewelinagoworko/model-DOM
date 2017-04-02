'use strict';

//jak znalezc element w dokumencie po ID, metodą document.getElementById('nazwa ID'):

var parFirst = document.getElementById('parFirst');
console.log(parFirst);


//znajdowanie elementow po klasie:

var linki = document.getElementsByClassName('superlink');
console.log(linki[1]);

//znajdowanie elementow po znaczniku:
var linkPoZnaczniku = document.getElementsByTagName('a');
console.log(linkPoZnaczniku.length); //zeby sprawdzic ilosc linkow na stronie, to length
console.log(linkPoZnaczniku);


//do odwołania mozna tez uzyc selektora CSS np. poprzez atrybuty CSS: ta metoda zwroci pierwszy (tylko jeden) element o atrybucie href z ciągiem znakow http:// :

var pierwszyLink = document.querySelector('[href*="http://"]');
console.log(pierwszyLink);

//zeby zwrocilo nam wszystkie elementy o atrybucie href:

var wszystkieLinki = document.querySelectorAll('[href]');
console.log(wszystkieLinki);

//zeby znalazlo wszystkie elementy z href w parFirst:
var wszystkieLinki = document.querySelectorAll('#parFirst [href]');
console.log(wszystkieLinki);

//zwroci elementy wewnętrznego html - zwraca stringi same

wszystkieLinki.forEach(function(element, index){
	console.log(element.innerHTML);
});

//zwroci elementy zewnetrzne link + opis
wszystkieLinki.forEach(function(element, index){
	console.log(element.outerHTML);
});