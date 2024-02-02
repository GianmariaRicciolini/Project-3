/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;

console.log("Somma tra 10 e 20 =", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);

console.log("Un numero casuale tra 0 e 20 =", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Giovanni Maria",
  cognome: "Ricciolini",
  age: 29,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "HTML", "CSS"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Python");

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);
const diceResult = dice();

console.log(diceResult);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = () => {
  // uso le mie variabili già create in precedenza che mi forniscono numeri casuali, in modo da avere sempre numeri diversi senza crearne ulteriori.
  if (random > diceResult) {
    return random;
  } else if (random === diceResult) {
    return "PAREGGIO!";
  } else {
    return diceResult;
  }
};

console.log(whoIsBigger());

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (string) => {
  return string.split(" ");
};

const exampleString = "I need to study!";
const stringInArray = splitMe(exampleString);

console.log(stringInArray);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (string, boolean) => {
  if (boolean === true) {
    return string.substring(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne(exampleString, true));
console.log(deleteOne(exampleString, false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const newString = "I have been here for 3 weeks!";

const onlyLetters = (string) => {
  return string.replace(/[0-9]/g, "");
};

console.log(onlyLetters(newString));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const validEmail = "validemail@validemail.com";

const isThisAnEmail = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "@") {
      return true;
    }
  }
  return false;
};

console.log(isThisAnEmail(validEmail));
console.log(isThisAnEmail(newString)); //verifico che funzioni

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = () => {
  const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const today = new Date().getDay();

  return daysOfWeek[today];
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (numberOfRolls) => {
  let sum = 0;
  let values = [];

  for (let i = 0; i < numberOfRolls; i++) {
    // Anche se avevo già creato una variabile che contenesse la funzione dice() devo creare un'altra per avere diversi risultati ad ogni tiro.
    const result = dice();
    sum += result;
    values.push(result);
  }

  return {
    sum: sum,
    values: values,
  };
};

console.log(rollTheDices(7));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (date) => {
  const today = new Date();
  const daysDifference = Math.floor((today - date) / (24 * 60 * 60 * 1000));
  return daysDifference;
};

const inputDate = new Date("1994-03-11");

console.log("Giorni dalla mia nascita:", howManyDays(inputDate));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = () => {
  const birthDay = new Date("1994-03-11");
  const today = new Date();

  return (
    birthDay.getDate() === today.getDate() &&
    birthDay.getMonth() === today.getMonth() &&
    birthDay.getFullYear() === today.getFullYear()
  );
  // Devo confrontare tutti i componenti separatamente in quanto gli oggetti Date sono complessi.
  // Se usassimo ad esempio "if (today === birthDay")" l'operatore di uguaglianza verificherebbe solo l'uguaglianza degli oggetti e non della stessa data.
};

console.log(isTodayMyBirthday());

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// Stampo gli array di movies per avere un diretto riscontro in console.
console.log(movies);

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};

const exampleObject = {
  name: "Giovanni Maria",
  surname: "Ricciolini",
  age: 29,
};
console.log(exampleObject);
const newObj = deleteProp(exampleObject, "surname");
console.log(newObj);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (moviesArray) => {
  let newest = moviesArray[0];

  moviesArray.forEach((movie) => {
    // essendo gli anni scritti in stringhe devo trasformarli in numeri con parseInt()
    if (parseInt(movie.Year) > parseInt(newest.Year)) {
      newest = movie;
    }
  });

  return newest;
};

const newestMovieResult = newestMovie(movies);

console.log("The newest movie is:", newestMovieResult.Title, "released in", newestMovieResult.Year);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (moviesArray) => {
  return moviesArray.length;
};

const numberOfMovies = countMovies(movies);

console.log("Number of movies:", numberOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

// creo un nuovo array contenente solo gli anni di uscita dei film usando .map()
const onlyTheYears = (moviesArray) => {
  const yearsArray = moviesArray.map((movie) => parseInt(movie.Year));
  return yearsArray;
};

const yearsOfMovies = onlyTheYears(movies);

console.log("Years of movies:", yearsOfMovies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = () => {
  const lastMillennium = 2000;
  const moviesMillennium = [];

  for (let i = 0; i < movies.length; i++) {
    if (parseInt(movies[i].Year) >= lastMillennium) {
      moviesMillennium.push(movies[i]);
    }
  }
  return moviesMillennium;
};

console.log("Movies from the new Millennium:", onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = () => {
  let totalYears = 0;

  for (let i = 0; i < movies.length; i++) {
    totalYears += parseInt(movies[i].Year);
  }

  return totalYears;
};

console.log("Sum of all the years:", sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (title) => {
  const matchingMovies = [];

  for (let i = 0; i < movies.length; i++) {
    // uso .toLowerCase() su entrambe le stringhe in modo che siano lette entrambe in minuscolo e che non ci siano incongruenze tra i caratteri.
    if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
      matchingMovies.push(movies[i]);
    }
  }

  return matchingMovies;
};

const searchTerm = "Ring";
console.log(`Movies with "${searchTerm}" in the title:`, searchByTitle(searchTerm));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (title) => {
  const result = {
    match: [],
    unmatch: [],
  };

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(title.toLowerCase())) {
      result.match.push(movies[i]);
    } else {
      result.unmatch.push(movies[i]);
    }
  }

  return result;
};

const searchResult = searchAndDivide(searchTerm);

console.log(`Movies with "${searchTerm}" in the title:`, searchResult.match);
console.log(`Movies without "${searchTerm}" in the title:`, searchResult.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (index) => {
  if (index >= 0 && index < movies.length) {
    const updatedMovies = movies
      // uso .map() per creare un nuovo array e gli dico di mettere tutti i film che non combaciano con l'index che ho scelto e di sostituire con "null" quelli che combaciano
      .map((movie, i) => (i !== index ? movie : null))
      // con filter rimuovo "null" che avevo messo in precedenza
      .filter((movie) => movie !== null);

    return updatedMovies;
  } else {
    return movies;
  }
};

const indexToRemove = 10;
const moviesWithoutIndex = removeIndex(indexToRemove);

console.log("Movies without the specified index:", moviesWithoutIndex);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.querySelectorAll("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const tdInConsole = (tdList) => {
  tdList.forEach((td) => {
    console.log(td.innerText);
  });
};

tdInConsole(td);

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.style.backgroundColor = "red";
});

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const ul = document.getElementById("myList");
const newListElement = document.createElement("li");

newListElement.innerText = "Stringa qualsiasi che entrerà nella lista";

ul.appendChild(newListElement);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const clearList = () => {
  ul.innerText = "";
};

clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const trs = document.querySelectorAll("tr");

trs.forEach((tr) => {
  tr.classList.add("test");
});

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
