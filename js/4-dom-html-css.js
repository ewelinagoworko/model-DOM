'use strict';

//manipulacja DOM - html i css - umozliwia m.in. dodawanie tekstu

var naglowek = document.getElementById('main-header');
console.log(naglowek.innerText); //pobieramy tekst umieszczony w naglowku

//przypisujemy nowa wartosc (w tym przypadku tekst) do naglowka:
naglowek.innerText = 'Tekst po zmianie naglowka';

//dodajemy znacznik span do naglowka - jezeli chcemy dodac jakiekolwiek znaczniki HTML, to dajemy innerHTML :
//naglowek.innerHTML = "Tekst ze znacznikiem <span>span</span>";

//jezeli chcemy podmienic nasz naglowek z h1 na h2 - jezeli chcemy cos usunac i wstawic nowy znacznik html, to uzywamy outerHTML:
//naglowek.outerHTML = "<h2>Tekst ze znacznikiem <span>span</span></h2>"

//jezeli chcemy zmienic tylko rodzaj znacznika z h1 na h2 i chcemy zostawic stary tekst, to:
naglowek.outerHTML = "<h2>" + naglowek.innerText + "</h2>";

//jezeli chemy ustawic nowe id do naszego naglowka - do naglowka h2 na pozycji 1 [indeks 0]:
document.getElementsByTagName('h2')[0].id = "main-header-after-change";

//dodawanie klasy
//dodajemy klase do naszego naglowka:

document.getElementsByTagName('h2')[0].className = 'header header-default';

//jezeli chcemy sprawdzic jakie klasy mamy przypisane do danego elementu np. naglowka h2:

console.log(document.getElementsByTagName('h2')[0].classList);


//nadpisujemy style CSS:
//ustawiamy border dla naglowka:

document.getElementsByTagName('h2')[0].style.border = "2px red solid";