'use strict';


console.log(document); //tym sposobem w konsoli wyrzuci nam caly dokument html

console.log(typeof document); //sprawdzamy typ dokumentu - akurat ten jest obiektem

console.log(document.documentElement); //tutaj mamy dostęp do węzła HTML i wszystko w dol

console.log(document.body) //dostep do wezla body
console.log(document.head) //dostep do wezla head

console.log(window); //obiekt wyższego rzędu, obiekt okna naszej przeglądarki - wyrzuca wszystkie metody, jakie możemy wykonywać na tym obiekcie

console.log(window.innerHeight); //wysokość wnętrza okna przeglądarki
console.log(window.outerHeight); //wysokość całego okna przeglądarki razem z graficznym interfejsem