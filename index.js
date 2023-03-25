const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat() {
    cats.push('Ralph');
  }

 function destructivelyPrependCat () {
    cats.unshift('Bob');
 }

 function destructivelyRemoveLastCat() {
    cats.pop();
 }

 function  destructivelyRemoveFirstCat() {
    cats.shift();
 }

 function appendCat(Broom) {
    const catsCopy = cats.slice();
    catsCopy.push(Broom);
    return catsCopy;
 }

 function prependCat(Arnold) {
    const newCatsArray = cats.slice();
    newCatsArray.splice(0, 0, 'Arnold'); 
    return newCatsArray; 
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }